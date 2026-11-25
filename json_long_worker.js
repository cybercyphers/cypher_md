import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import path,{ dirname } from "node:path";
import { 
    parentPort,
    workerData
} from "node:worker_threads";
import Decifer from "decifer";
var __dirname = dirname(fileURLToPath(import.meta.url));
var matrix = await Decifer.loadEntries();
var Matrix = new matrix();


//start your work big man

async function json_start_work(){
try{
    var successArray = [];
    var errorDataArray = [];
    
    /*
    parentPort.postMessage({
        success:true,
        promiseData : Matrix
                           });
*/
 
    var ytSearchWorker = await spawn(path.join(__dirname,"../../.local/bin","python3.12"),
    [       path.join(__dirname,"../Python","ytsearch.py"), String(workerData)
    ],
                                     { stdio: ["pipe","pipe","pipe"]}
         );
    
    var promiseData = await new Promise((resolve,reject)=>{

      ytSearchWorker.stdout.on("data",(data)=>{
          successArray.push(data);
        });

      ytSearchWorker.stderr.on("data",(data)=>{
          errorDataArray.push(data);
        });


      ytSearchWorker.on("error",(data)=>{
          reject(data.toString());
        });


      ytSearchWorker.on("close",(code)=>{

          if(code !== 0){
              
            parentPort.postMessage({ success:false, promiseData: Buffer.concat(errorDataArray).toString("utf8") });

            // reject(`ytsearch returned an error: ${Buffer.concat(errorDataArray).toString("utf8")}`);

          }else{
            resolve(Buffer.concat(successArray).toString("utf8"))
          }

        })
    });
    
    
var data_url = String(promiseData);
    
    var json_initialized = await Matrix.ytvid(data_url,{ 
        asBuffer:false,
        json:true
    });
  
    //console.log(audi_initialized);
    
    parentPort.postMessage({
        success:true,
        promiseData : json_initialized
                           });
   
    
   }catch(e){
    var structured_err = (e.stack || e.message || e.trace || e);
    console.log(structured_err);
    
   return parentPort.postMessage({
       success:false,
       reason : (typeof structured_err === 'object' ? JSON.stringify(structured_err) : String(structured_err))
                          })
}

};







json_start_work();
