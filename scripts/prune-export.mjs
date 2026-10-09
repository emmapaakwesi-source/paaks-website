import {rmSync} from 'node:fs';
// Keep reference originals in Git; publish only assets used by the current site.
for(const path of ['out/reference','out/design-reference.jpg','out/company/premises.webp','out/imagery/hero-concept.webp','out/imagery/dispenser-concept.webp','out/imagery/sachet-concept.webp','out/imagery/dispenser-label-v2.webp','out/brand/paaks-official-logo.jpeg'])rmSync(path,{recursive:true,force:true});
