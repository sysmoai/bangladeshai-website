#!/usr/bin/env node
// Refuse to publish a source tree or incomplete Next.js build as a Pages site.
// Usage: node scripts/verify-static-output.mjs [output-directory]
import fs from 'node:fs';
import path from 'node:path';

const outputDir = path.resolve(process.argv[2] || 'out');
const errors = [];
const exists = (relative) => fs.existsSync(path.join(outputDir, relative));
if (!fs.existsSync(outputDir) || !fs.statSync(outputDir).isDirectory()) {
  errors.push(`Missing deployable static output directory: ${outputDir}`);
} else {
  for (const required of ['index.html', 'favicon.svg', 'robots.txt', 'sitemap.xml']) {
    if (!exists(required)) errors.push(`Missing required publish artifact: ${required}`);
  }
  if (!exists('research.html') && !exists('research/index.html')) {
    errors.push('Missing research page HTML; .next/static is not a deployable site.');
  }
  for (const forbidden of ['.git', '.env', '.env.local', 'node_modules', 'package.json', 'pnpm-lock.yaml']) {
    if (exists(forbidden)) errors.push(`Refusing to publish source/secrets: ${forbidden}`);
  }
}
if (errors.length) {
  console.error('BangladeshAI.org release gate FAILED:\n' + errors.map((e) => '- ' + e).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`BangladeshAI.org release gate PASSED: static HTML, critical metadata, and no source tree in ${outputDir}`);
}
