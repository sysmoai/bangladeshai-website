#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const origin = 'https://bangladeshai.org';
const out = path.resolve(process.argv[2] || 'out');
const expected = ['index.html','research/index.html','blog/index.html','about/index.html','mission/index.html','contact/index.html','robots.txt','sitemap.xml','favicon.svg'];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const name = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(name) : [name];
  });
}
function routeForFile(file) {
  const rel = path.relative(out, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'index.html'.length);
  return '/' + rel;
}
function fileCandidates(pathname) {
  let decoded = pathname;
  try { decoded = decodeURIComponent(pathname); } catch { return []; }
  const rel = decoded.replace(/^\/+/, '');
  if (rel.includes('\0') || rel.split('/').includes('..')) return [];
  if (rel === '') return ['index.html'];
  const p = rel.replace(/\/+$/, '');
  return [p, p + '.html', p + '/index.html'];
}
function existsPage(pathname, redirectSources) {
  if (redirectSources.has(pathname) || redirectSources.has(pathname.replace(/\/$/, ''))) return true;
  return fileCandidates(pathname).some(p => fs.existsSync(path.join(out,p)));
}
function getRedirectPaths() {
  const file = path.join(out,'_redirects');
  if (!fs.existsSync(file)) return new Set();
  return new Set(fs.readFileSync(file,'utf8').split(/\r?\n/).map(x=>x.trim()).filter(x=>x && !x.startsWith('#')).map(x=>x.split(/\s+/)[0]));
}
function audit() {
  const errors=[], warnings=[], redirectSources=getRedirectPaths();
  for (const relative of expected) if (!fs.existsSync(path.join(out,relative))) {
    errors.push('Missing critical site file: ' + relative);
  }
  const files = walk(out).filter(f=>f.endsWith('.html'));
  if (files.length < 20) errors.push('Suspiciously small static export: '+files.length+' HTML files');
  let links = 0;
  for (const file of files) {
    const rel = routeForFile(file);
    const html=fs.readFileSync(file,'utf8');
    if (file.endsWith('/index.html')) {
      if (!/<title>[^<]+<\/title>/i.test(html)) warnings.push(rel+': no HTML title');
      if (!/<meta\s+name="description"/i.test(html)) warnings.push(rel+': no description meta');
      if (!/<meta\s+name="viewport"/i.test(html)) warnings.push(rel+': no viewport');
    }
    const matchLinks = html.matchAll(/<a\b[^>]*?\s(?:href)\s*=\s*(["'])(.*?)\1/gi);
    for (const [, , rawHref] of matchLinks) {
      links++;
      const val = rawHref.replace(/&amp;/g,'&');
      if (!val || val.startsWith('#')) continue;
      if (/^javascript:|^data:/i.test(val)) { errors.push(rel+': unsafe href '+val.slice(0,80)); continue; }
      let url;
      try { url=new URL(val, origin+rel); } catch { errors.push(rel+': invalid href '+val.slice(0,80)); continue; }
      if (url.origin !== origin) continue;
      if (!existsPage(url.pathname, redirectSources)) {
        errors.push(rel+': missing internal target '+url.pathname);
      }
    }
  }
  console.log('Static QA: '+files.length+' HTML files, '+links+' anchor links, '+errors.length+' errors, '+warnings.length+' metadata warnings.');
  for (const e of errors.slice(0,100)) console.error('ERROR '+e);
  for (const w of warnings.slice(0,60)) console.warn('WARN '+w);
  if (errors.length) process.exitCode=1;
}
audit();
