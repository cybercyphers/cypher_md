import decifer from "decifer";



const { 
        loadEntries,
        ...otherESMFuncs
    } = decifer;
    
const other_decifer_func = otherESMFuncs;



function fingerprint_report(){
  var fingerprint_process = other_decifer_func.fingerprintSystem();
    return fingerprint_process;
}



async function deciferClass(){
   var loadedDeciferEntryClass= await decifer.loadEntries();
    return loadedDeciferEntryClass;
};








export { 
    fingerprint_report,
    deciferClass,
    other_decifer_func
};
