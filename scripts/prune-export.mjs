import {rmSync} from 'node:fs';
// Keep reference originals in Git; publish only assets used by the current site.
for(const path of ['out/company/factory-layout.webp','out/reference','out/design-reference.jpg','out/company/premises.webp','out/imagery/hero-concept.webp','out/imagery/dispenser-concept.webp','out/imagery/sachet-concept.webp','out/imagery/dispenser-label-v2.webp','out/brand/paaks-official-logo.jpeg'])rmSync(path,{recursive:true,force:true});

// Internal notes, source maps and unused RSC text payloads are not public downloads.
// All internal links use full HTML document navigation; robots.txt remains public.
import {readdirSync,statSync} from 'node:fs';
import {join} from 'node:path';
function removeNotes(dir){for(const name of readdirSync(dir)){const path=join(dir,name);if(statSync(path).isDirectory())removeNotes(path);else if(/\.(md|map)$/.test(name)||(name.endsWith('.txt')&&name!=='robots.txt'))rmSync(path);}}
removeNotes('out');
