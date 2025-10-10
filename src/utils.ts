import puppeteer, { Browser, Page } from "puppeteer";
/**a function that starts a headless chromium browser.
 * @returns newly created browser and page instances.
 */
export const startBrowser = async (): Promise<[Browser, Page]> => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  return [browser, page] as const;
};
