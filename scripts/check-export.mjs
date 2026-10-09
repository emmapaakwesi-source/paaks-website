import {readdirSync,readFileSync,existsSync,statSync} from 'node:fs';
import {join,resolve} from 'node:path';
const root=resolve('out');const walk=p=>readdirSync(p).flatMap(n=>{const f=join(p,n);return statSync(f).isDirectory()?walk(f):[f]});
const pages=walk(root).filter(p=>p.endsWith('.html')&&!p.includes('404'));let failures=[];let count=0;
for(const page of pages){const html=readFileSync(page,'utf8');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);if(new Set(ids).size!==ids.length)failures.push(`${page}: duplicate ID`);
if(!html.includes('rel="canonical"'))failures.push(`${page}: missing canonical`);
for(const m of html.matchAll(/<(a|img)\b[^>]*>/g)){const tag=m[0];const url=tag.match(/(?:href|src)="([^"]+)"/)?.[1];if(!url)continue;count++;
if(tag.includes('target="_blank"')&&!tag.includes('noopener'))failures.push(`${page}: unsafe new tab`);
if(!url.startsWith('/'))continue;const [path,fragment]=url.split('#');const base=join(root,path);const target=[base,base+'.html',join(base,'index.html')].find(f=>existsSync(f)&&statSync(f).isFile());if(!target){failures.push(`${page}: missing ${url}`);continue;}if(fragment&&target.endsWith('.html')&&!readFileSync(target,'utf8').includes(`id="${fragment}"`))failures.push(`${page}: missing anchor ${url}`);
}}
for(const file of ['robots.txt','sitemap.xml'])if(!existsSync(join(root,file)))failures.push(`Missing ${file}`);
if(failures.length){console.error(failures.join('\n'));process.exit(1);}console.log(`Verified ${pages.length} pages and ${count} link/image references.`);
