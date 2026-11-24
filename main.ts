import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Friday, 4:59pm. The agent is certain, the tests are green, and the rollback plan is hope.
// The clock says 4:59 and the weekend is already leaning on the door, asking if we're done yet.
// Hope is not a strategy, but it is the only one that fits in the commit message before five.
const commit =
  "feat: Friday 4:59pm deploy, tests green, confidence 100%, rollback plan is hope, have a great weekend!";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
for (const name of readdirSync(dir)) {
  rmSync(join(dir, name), { recursive: true, force: true });
}
writeFileSync(join(dir, "entry.txt"), commit + "\n", "utf8");
