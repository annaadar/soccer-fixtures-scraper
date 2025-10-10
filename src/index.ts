import { FIXTURES_URL, DATES_SELECTOR } from "./constants.js";
import { writeFile } from "fs/promises";
import { cwd } from "process";
import { join } from "path";
import { startBrowser } from "./utils.js";

const scrape_matches = async (outputFileLocation: string) => {
  const [browser, page] = await startBrowser(); //start a headless browser and open a new page.
  await page.goto(FIXTURES_URL, { waitUntil: "networkidle2" });
  await page.waitForSelector(DATES_SELECTOR);
  const matchesDates = await page.$$eval(DATES_SELECTOR, (dates) =>
    dates.map((element) => element.textContent?.trim())
  );
  browser.close(); //found all required elements, browser can be closed.
  try {
    writeFile(join(cwd(), outputFileLocation), JSON.stringify(matchesDates));
  } catch (err) {
    console.error(
      `an error accured while attempting to write results to ${outputFileLocation}: ${err}`
    );
  }
};

scrape_matches("dates.json");
