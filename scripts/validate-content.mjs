import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const checkedExtensions = new Set([".css", ".html", ".json", ".md", ".ts", ".tsx"]);
const ignoredDirs = new Set([".git", ".tools", "dist", "node_modules"]);
const failures = [];
const mojibakePattern = new RegExp(`[${String.fromCharCode(195)}${String.fromCharCode(194)}]`);

function extensionOf(file) {
  const index = file.lastIndexOf(".");
  return index === -1 ? "" : file.slice(index);
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (ignoredDirs.has(entry)) continue;

    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!checkedExtensions.has(extensionOf(entry))) continue;

    const content = readFileSync(fullPath, "utf8");
    const relativePath = fullPath.slice(root.length + 1);

    if (mojibakePattern.test(content)) {
      failures.push(`${relativePath}: possível texto com encoding quebrado`);
    }

    if (/onKeyPress=/.test(content)) {
      failures.push(`${relativePath}: use onKeyDown em vez de onKeyPress`);
    }

    if (/id="(início|currículos)"/.test(content)) {
      failures.push(`${relativePath}: use IDs sem acento para âncoras`);
    }
  }
}

walk(root);

if (failures.length > 0) {
  console.error("Validação encontrou problemas:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Validação concluída sem problemas.");
