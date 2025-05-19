import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

chromium.setGraphicsMode = false;

export async function POST() {
  await chromium.font(
    "https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf"
  );

  const isLocal = !!process.env.CHROME_EXECUTABLE_PATH;

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: process.env.CHROME_EXECUTABLE_PATH || await chromium.executablePath("https://github.com/Sparticuz/chromium/releases/download/v133.0.0/chromium-v133.0.0-pack.tar"),
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.goto("https://spacejelly.dev");
  const pageTitle = await page.title();
  await browser.close();

  return Response.json({
    // hello: "world",
    pageTitle
  });
}
