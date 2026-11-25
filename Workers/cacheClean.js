import { parentPort, workerData } from "node:worker_threads";
import fs, { existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
var __dirname = dirname(fileURLToPath(import.meta.url));
import { configFetchJs } from "../libraries/configFunctions.js";
import { 
    redB,
    yellowB,
    chocolate,
    blueB,
    cyan,
    reset
} from "../libraries/color.m.js";





function tmpCleanUp() {
    try {
        console.log(
        `${cyan}System maintenance: searching for node_cache_compiled_trash..${cyan}`
    );

        var readTmp = null;
        var manualTmp = path.join(__dirname, "../tmp_coder");

        if (fs.existsSync(manualTmp)){

            readTmp = fs.readdirSync(manualTmp,{ encoding:"utf8" });
           // console.log(readTmp);
            
            if(readTmp?.length > 0){
                console.log(`${chocolate}compiled_trash found, cleaning_up..`);
   readTmp.forEach(cachePath =>{
       
       var rubbishPath = path.join(__dirname,"../tmp_coder",cachePath);     
       var isDir = fs.statSync(rubbishPath).isDirectory();
       if(isDir){
    fs.rmSync(rubbishPath, { recursive:true, force:true });          
}else{
   fs.unlinkSync(rubbishPath, { recursive:true })
}
       if(fs.existsSync(path.join(__dirname,"..","core"))){
  fs.unlinkSync(path.join(__dirname,"..","core"))
}
           
});
                console.log(`${chocolate}compiled_trash cleaned_up...`);
               
            }else{
            console.log(
        `${cyan}System maintenance: node_cache_ is clean..${cyan}`
    );
}
           
        } else {
            fs.mkdirSync(manualTmp);
   
        }
    } catch (e) {
        console.error(e);
    }
}

tmpCleanUp()

//parentPort.postMessage({ cleanUp: "hello" })
