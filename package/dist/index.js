"use strict";var Cli;Object.defineProperty(exports,"__esModule",{value:!0}),exports.getKeyArgs=exports.getKeyArg=exports.hasKeyArg=exports.getArgs=exports.getArg=exports.wl=exports.rl=void 0,function(r){r.rl=r=>(r&&process.stdout.write(r),new Promise(((r,e)=>{try{const s=t=>{process.stdin.pause().off("data",s);try{r(t.toString().trim())}catch(r){e(r)}};process.stdin.resume().on("data",s)}catch(r){process.stdin.pause(),e(r)}}))),r.wl=r=>{r&&process.stdout.write(r+"\n")},r.getArg=(r=0)=>{const e=process.argv[r+2];if(null!=e)return e},r.getArgs=()=>{const r=[];for(let e=2,s=process.argv.length;e<s;e++)r.push(process.argv[e]);return r},r.hasKeyArg=(r,e)=>process.argv.indexOf(r)>=0||null!=e&&process.argv.indexOf(e)>=0,r.getKeyArg=(r,e)=>{let s=process.argv.lastIndexOf(r);if(null!=e&&(s=Math.max(s,process.argv.lastIndexOf(e))),s<0)return;const t=process.argv[s+1];return null==t||t.startsWith("-")?void 0:t},r.getKeyArgs=(r,e)=>{let s=process.argv.lastIndexOf(r);null!=e&&(s=Math.max(s,process.argv.lastIndexOf(e)));const t=[];if(s<0)return t;for(let r=s+1,e=process.argv.length;r<e;r++){const e=process.argv[r];if(null==e||e.startsWith("-"))break;t.push(e)}return t}}(Cli||(Cli={})),exports.default=Cli,exports.rl=Cli.rl,exports.wl=Cli.wl,exports.getArg=Cli.getArg,exports.getArgs=Cli.getArgs,exports.hasKeyArg=Cli.hasKeyArg,exports.getKeyArg=Cli.getKeyArg,exports.getKeyArgs=Cli.getKeyArgs;