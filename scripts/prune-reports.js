const fs = require("fs");
const path = require("path");

const dir = "test/report-history";
const KEEP = 3;

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const runs = fs.readdirSync(dir).sort(); // ISO timestamps sort chronologically, oldest first
while (runs.length > KEEP) {
  const oldest = runs.shift();
  fs.rmSync(path.join(dir, oldest), { recursive: true, force: true });
  console.log(`Removed old report: ${oldest}`);
}
