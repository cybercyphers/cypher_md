import os from "node:os";
import { other_decifer_func as deciferFuncs,fingerprint_report } from "./loadDecifer.js";
import path,{ dirname } from "node:path";
import { fileURLToPath } from "node:url";
var __dirname = dirname(fileURLToPath(import.meta.url));

export default function _system(){
    var global_cert = fingerprint_report();
   // console.log(global_cert);
    
   return {
       arch: os.arch(),
       cpus : os.cpus().length,
       version: os.version(),
       machine: os.machine(),
       cpu_model : String(os.cpus()[0]?.model),
       total_memory_mb: Math.floor(parseInt(os.totalmem())/(1024*1024)),
       free_mem_mb: Math.floor(parseInt(os.freemem())/(1024*1024)),
       release : os.release(),
       type: os.type(),
       uptime: os.uptime(),
       hostname : os.hostname(),
       net_interfaces : os.networkInterfaces() || "none",
       fingerprint: {
           fingerprinted_system: (global_cert?.sha512) ? true : false,
          fingerprint_cert: global_cert?.sha512 || null
                    }
          };
};



//fingerprint_report();

//console.dir(_system(),{ depth:null});
