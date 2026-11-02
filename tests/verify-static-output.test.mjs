import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const script = fileURLToPath(new URL('../scripts/verify-static-output.mjs', import.meta.url));

function withOutput(artifacts, check) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'bdai-release-'));
  try {
    for (const name of artifacts) {
      const target = path.join(root, name);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, 'fixture');
    }
    check(spawnSync(process.execPath, [script, root], { encoding: 'utf8' }));
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

const valid = ['index.html', 'research.html', 'favicon.svg', 'robots.txt', 'sitemap.xml'];

test('passes a complete minimal static artifact', () => {
  withOutput(valid, (r) => assert.equal(r.status, 0, r.stderr));
});
test('accepts trailing-slash research page', () => {
  withOutput(valid.filter((p) => p !== 'research.html').concat('research/index.html'), (r) => assert.equal(r.status, 0, r.stderr));
});
test('rejects Next .next/static without page HTML', () => {
  withOutput(['favicon.svg', 'robots.txt', 'sitemap.xml'], (r) => assert.equal(r.status, 1));
});
test('rejects missing sitemap', () => {
  withOutput(valid.filter((p) => p !== 'sitemap.xml'), (r) => assert.equal(r.status, 1));
});
test('rejects .env.local in deploy artifact', () => {
  withOutput(valid.concat('.env.local'), (r) => assert.equal(r.status, 1));
});
test('rejects a source tree instead of static export', () => {
  withOutput(valid.concat('package.json'), (r) => assert.equal(r.status, 1));
});
