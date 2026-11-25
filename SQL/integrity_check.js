import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url"
import { 
    blueB,
        red,
    yellow,
    greenB,
    reset
} from "../libraries/color.m.js";
var __dirname = dirname(fileURLToPath(import.meta.url));
import { 
    writeFileSync,
        unlinkSync,
    copyFileSync,
    mkdir,
    existsSync
} from "node:fs";
import { configFetchJs } from "../libraries/configFunctions.js";
import { compileSqlite } from "./cypher_130.js";


//func begins...
async function integrity(
db,
 image_db,
 cypherAiDb,
 e_db
 ){
   var databases = [db,image_db,cypherAiDb,e_db];
    let counter=0;
  if(configFetchJs()?.Database?.integrity_check === true){
      
    for(const store of databases){
        try{
            //console.log(store)
  var integrity_ok  = store.pragma("integrity_check(1000)",{ simple:true });
            
    if(integrity_ok === 'ok'){
counter++
  console.log(`${greenB}Database ${counter}: operational.\x1b[0m`); 
}
    
        else{
counter++
   console.log(`\x1b[1;31mDatabase ${counter} has been corrupted, self-healing process...\x1b[0m`);
            unlinkSync(String(store?.name),{ recursive :true
                                       });
            //writeFileSync(String(store?.name),"");
            
        await new Promise(resolve=>{setTimeout(resolve,500)});
        
        await compileSqlite();
            if(existsSync(String(store.name))){
    console.log(`${greenB}self_maintenance${reset}:\x1b[1;34m corrupted Database succesfully fixed, preparing...\x1b[0m`);
}
}
            
    }catch(e){
    console.log(`${greenB}self_maintenance${reset}:\x1b[1;31mA readonly database has been corrupted.The database is not meant to be edited, it is a read-only system. running self_heal_scripts\x1b[0m`);
        unlinkSync(String(store?.name),{ recursive :true
                                       });
        
         //better_sqlite error, been painfull here      
       //writeFileSync(String(store?.name),"");
        
        await new Promise(resolve=>{ setTimeout(resolve,500)});
        
        await compileSqlite();
    if(existsSync(String(store.name))){
console.log(`${greenB}self_maintenance${reset}:\x1b[1;34mcorrupted_database succesfully fixed, preparing...\x1b[0m`);
}
  }   
 }
    }else{
     if(configFetchJs().production === true){console.log(`${red}warn${reset}:${yellow}disabling database integrity check can crash your database on startup if database is corrupted${reset}`);
         }
  }
};




export default integrity;
