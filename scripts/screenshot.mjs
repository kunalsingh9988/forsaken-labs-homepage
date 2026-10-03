import puppeteer from "puppeteer-core";

const base = process.env.SHOT_URL || "http://localhost:5173";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const page = await browser.newPage();

const args = process.argv.slice(2);
const mode = args[0] || "mobile";
const vw = mode === "mobile" ? 390 : 1440;
const vh = mode === "mobile" ? 844 : 900;
await page.setViewport({ width: vw, height: vh, deviceScaleFactor: 1 });

// arg[1] is an optional route path like "/product" (anything starting with /)
const path = args[1]?.startsWith("/") ? args[1] : "/";
const startIdx = args[1]?.startsWith("/") ? 2 : 1;
await page.goto(base + path, { waitUntil: "networkidle0", timeout: 30000 });
await new Promise((r) => setTimeout(r, 1400));

const total = await page.evaluate(() => document.documentElement.scrollHeight);
console.log(mode, path, "total height:", total);

const offsets = args.slice(startIdx).map(Number).filter((n) => !isNaN(n));
if (offsets.length === 0) {
  const n = Math.ceil(total / vh);
  for (let i = 0; i < n; i++) offsets.push(i * vh);
}
const tag = path === "/" ? "home" : path.slice(1);
for (const y of offsets) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: `/tmp/crop-${mode}-${tag}-${String(y).padStart(5, "0")}.png` });
}
await browser.close();
console.log("done", offsets.length, "crops");
