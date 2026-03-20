# Soccer Fixtures Scraper

A lightweight TypeScript project that uses [Puppeteer](https://pptr.dev/) to scrape upcoming soccer fixture dates from any soccer scores/fixtures website. Ideal for sports enthusiasts, smaller projects, or for integrating into larger football analytics tools.

## * Features

- Scrapes fixtures dates using any URL and selector
- Headless browser with Puppeteer
- Written in TypeScript for type safety and maintainability
- Outputs data to a JSON file

### Installation

```bash
git clone https://github.com/annaadar/soccer-fixtures-scraper.git
cd soccer-fixtures-scraper
pnpm install #npm or yarn can also be used.
```

### compiling 
To compile the project, run either "pnpm run build" or "pnpm run build-watch". "build" will compile your project once, "build watch" will compile the files every time a change is detected.

```bash
pnpm run build #compile once
pnpm run build-watch #compile once + on every change
```

### Running the project

In the src directory, add a constants.ts file. In the file, export two constants - FIXTURES_URL and DATES_SELECTOR.
For example - 

```typescript
export const FIXTURES_URL = 'https://some-soccer-website/hapoel-beer-sheva/fixtures'
export const DATES_SELECTOR = "div.fixtures-class"
```

```bash
pnpm run scrape
