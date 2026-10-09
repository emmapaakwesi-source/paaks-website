import {rmSync} from 'node:fs';
// Keep reference originals in Git; publish only assets used by the current site.
for(const path of ['out/reference','out/design-reference.jpg','out/company/premises.webp','out/imagery/hero-concept.webp','out/imagery/dispenser-concept.webp','out/imagery/sachet-concept.webp','out/imagery/dispenser-label-v2.webp','out/brand/paaks-official-logo.jpeg'])rmSync(path,{recursive:true,force:true});

// Provenance notes are source documentation, not public downloads.
import {readdirSync,statSync} from 'node:fs';
import {join} from 'node:path';
function removeNotes(dir){for(const name of readdirSync(dir)){const path=join(dir,name);if(statSync(path).isDirectory())removeNotes(path);else if(/\.(md|map)$/.test(name))rmSync(path);}}
removeNotes('out');
