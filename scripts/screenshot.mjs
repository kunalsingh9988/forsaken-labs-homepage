import puppeteer from "puppeteer-core";

const url = "http://127.0.0.1:5174/";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const page = await browser.newPage();

const mode = process.argv[2] || "mobile";
const vw = mode === "mobile" ? 390 : 1440;
const vh = mode === "mobile" ? 844 : 900;
await page.setViewport({ width: vw, height: vh, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
await new Promise((r) => setTimeout(r, 1200));

const total = await page.evaluate(() => document.documentElement.scrollHeight);
console.log(mode, "total height:", total);

const offsets = process.argv.slice(3).map(Number);
if (offsets.length === 0) {
  // evenly spaced crops
  const n = Math.ceil(total / vh);
  for (let i = 0; i < n; i++) offsets.push(i * vh);
}
for (let i = 0; i < offsets.length; i++) {
  const y = offsets[i];
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: `/tmp/crop-${mode}-${String(y).padStart(5, "0")}.png` });
}
await browser.close();
console.log("done", offsets.length, "crops");
