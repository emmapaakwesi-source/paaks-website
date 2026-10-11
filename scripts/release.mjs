import {spawnSync} from 'node:child_process';
const npm=process.platform==='win32'?'npm.cmd':'npm';
const commands=[...(!process.argv.includes('--verify-only')?[[npm,'run','build']]:[]),[process.execPath,'scripts/prune-export.mjs'],[process.execPath,'scripts/secure-export.mjs'],[process.execPath,'scripts/check-export.mjs'],[process.execPath,'scripts/check-security.mjs'],[npm,'audit','--audit-level=moderate']];
for(const [command,...args] of commands){const result=spawnSync(command,args,{stdio:'inherit'});if(result.error){console.error(result.error.message);process.exit(1);}if(result.status!==0)process.exit(result.status??1);}
console.log('Release checks passed. Deploy only this hardened out/ directory.');
