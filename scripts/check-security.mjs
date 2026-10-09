import {readdirSync,readFileSync,statSync} from 'node:fs';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
const walk=p=>readdirSync(p).flatMap(n=>{const f=join(p,n);return statSync(f).isDirectory()?walk(f):[f]});
const errors=[];const files=walk('out');
for(const file of files){if(file.endsWith('.map'))errors.push(`${file}: published source map`);if(file.endsWith('.md'))errors.push(`${file}: internal markdown published`);if(!file.endsWith('.html'))continue;
const html=readFileSync(file,'utf8');const policy=html.match(/<meta http-equiv="Content-Security-Policy" content="([^"]+)"/)?.[1];
if(!policy||!policy.includes("object-src 'none'")||!policy.includes("base-uri 'none'"))errors.push(`${file}: missing page CSP`);
const scriptRule=policy?.split(';').find(x=>x.trim().startsWith('script-src '))||'';if(scriptRule.includes('unsafe-inline')||scriptRule.includes('unsafe-eval'))errors.push(`${file}: unsafe script policy`);
for(const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g))if(!/\bsrc=/.test(m[1])&&m[2]){const hash=`'sha256-${createHash('sha256').update(m[2]).digest('base64')}'`;if(!scriptRule.includes(hash))errors.push(`${file}: inline script hash mismatch`);}
if(!html.includes('name="referrer" content="no-referrer"'))errors.push(`${file}: missing referrer meta`);
if(/<(?:a|img|script|iframe)\b[^>]*(?:src|href)="(?:javascript:|http:\/\/)/i.test(html))errors.push(`${file}: insecure URL`);
}
if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log('Security export checks passed: CSP hashes, referrer policy, URL schemes and artifact hygiene.');
