#!/usr/bin/env node
/**
 * Merges the SSR-rendered markup (dist-ssr/, built from src/entry-server.tsx
 * via vite.ssr.config.ts) into the client build's dist/index.html, so the
 * shipped page has real HTML content instead of an empty <div id="root">.
 * Run after both builds — see the "build" script in package.json.
 */
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DIST_DIR = path.resolve("dist");
const SSR_DIR = path.resolve("dist-ssr");
const ROOT_DIV = '<div id="root"></div>';

async function findSsrEntry() {
  const files = await readdir(SSR_DIR);
  const entry = files.find((file) => file.startsWith("entry-server") && file.endsWith(".js"));
  if (!entry) {
    throw new Error(`No SSR entry file found in ${SSR_DIR} — did the SSR build run first?`);
  }
  return path.join(SSR_DIR, entry);
}

async function renderMarkup() {
  const entryPath = await findSsrEntry();
  const { render } = await import(pathToFileURL(entryPath).href);
  return render();
}

async function mergeIntoIndexHtml(markup) {
  const indexPath = path.join(DIST_DIR, "index.html");
  const original = await readFile(indexPath, "utf8");
  if (!original.includes(ROOT_DIV)) {
    throw new Error(`Expected to find ${ROOT_DIV} in ${indexPath} — has main.tsx's mount point changed?`);
  }
  const merged = original.replace(ROOT_DIV, `<div id="root">${markup}</div>`);
  await writeFile(indexPath, merged);
  return indexPath;
}

async function main() {
  const markup = await renderMarkup();
  const indexPath = await mergeIntoIndexHtml(markup);
  console.log(`Prerendered content merged into ${indexPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
