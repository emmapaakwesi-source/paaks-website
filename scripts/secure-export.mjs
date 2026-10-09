import {readdirSync,readFileSync,writeFileSync,statSync} from 'node:fs';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
const walk=p=>readdirSync(p).flatMap(n=>{const f=join(p,n);return statSync(f).isDirectory()?walk(f):[f]});
const pages=walk('out').filter(p=>p.endsWith('.html'));
// One union of generated inline script hashes supports navigation between static routes.
const hashes=new Set();
for(const page of pages)for(const m of readFileSync(page,'utf8').matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g))if(!/\bsrc=/.test(m[1])&&m[2])hashes.add(`'sha256-${createHash('sha256').update(m[2]).digest('base64')}'`);
const policy=["default-src 'self'",`script-src 'self' ${[...hashes].join(' ')}`,"script-src-attr 'none'","style-src 'self' 'unsafe-inline'","img-src 'self' data:","font-src 'self'","connect-src 'self'","frame-src https://maps.google.com https://www.google.com","object-src 'none'","base-uri 'none'","form-action 'self'"].join('; ');
for(const page of pages){let html=readFileSync(page,'utf8');html=html.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/g,'');html=html.replace('<head>',`<head><meta http-equiv="Content-Security-Policy" content="${policy}">`);writeFileSync(page,html);}
console.log(`Added hash-based page CSP to ${pages.length} exported HTML files.`);
