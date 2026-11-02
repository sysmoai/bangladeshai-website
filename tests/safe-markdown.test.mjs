import assert from 'node:assert/strict';
import { test } from 'node:test';
import { renderSafeMarkdown } from '../lib/safe-markdown.mjs';

test('renders headings, strong text and internal links', () => {
  const h=renderSafeMarkdown('# Title\n**Important**\n[Research](/research/)');
  assert.match(h, /<h1/);
  assert.match(h, /<strong>Important<\/strong>/);
  assert.match(h, /href="\/research\/"/);
});
test('escapes raw markup and inline event handlers', () => {
  const h=renderSafeMarkdown('<img src=x onerror="alert(1)">');
  assert.doesNotMatch(h, /<img/i);
  assert.match(h, /&lt;img/);
});
test('rejects javascript, data and protocol-relative markdown link targets', () => {
  for (const value of ['javascript:alert(1)', 'data:text/html,evil', '//untrusted.example']) {
    const h=renderSafeMarkdown('[click]('+value+')');
    assert.doesNotMatch(h, /href="(?:javascript|data|\/\/)/i);
  }
});
test('preserves safe https links and escapes quotes in attributes', () => {
  const h=renderSafeMarkdown('[docs](https://example.com/?q=a&lang="bn")');
  assert.match(h, /href="https:\/\/example.com/);
  assert.match(h, /&amp;/);
  assert.match(h, /&quot;/);
});
