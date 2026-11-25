import { configFetchJs } from "./configFunctions.js";


export function log(m){
    var font = configFetchJs()?.system?.font?.trim()?.toLowerCase();
    
 var font_set = font === 'monospace_bold' ? "mono_bold" : font === 'monospace' ? "mono" : font === 'bold' ? "bd" : font === 'italic' ? "it" : font === 'strike_through' ? "skt" : font === 'bold_italic' ? "bdi" : font === 'inline' ? "inl" : font === 'inline_bold' ? "inl-bd" : "normal";
    
   //console.log(font_set);
    
    if(font_set.trim() === 'mono_bold'){
 return `*\`\`\`${m}\`\`\`*`;
    }
else if(font_set.trim() === 'mono'){
 return `\`\`\`${m}\`\`\``;
    }
    else if(font_set.trim() === 'bd'){
 return `*${m}*`;
}
    else if(font_set.trim() === 'it'){
 return `_${m}_`;
    }
else if(font_set.trim() === 'skt'){
 return `~${m}~`;
    }
else if(font_set.trim() === 'bdi'){
 return `_*${m}*_`;
    }
    else if(font_set.trim() === 'inl'){
 return `\`${m}\``;
    }
    else if(font_set.trim() === 'inl-bd'){
 return `*\`${m}\`*`;
    }
    else{
 return m;
    }
 };


export function Prefix(){
   return configFetchJs().prefix
};

function send(message){    
   return log(`${String(message)}`); 
};

export default function helpWhat(type){
  if(!type){
    throw new Error("The type of plugin to give help documentation to was not declared");
  };
    if(type=== "-"){
   return log("Expected a command name but received undefined, please make sure to include the command name after the - symbol");
}
    
    var finalType = type.replace("-","").trim().toLowerCase();
    
  switch(finalType){
    case "ping":
    var ping = `*\`\`\`*The ping command enable you to detect the speed of your bot in milli-seconds the bot might be slow depending on various factors  such as network, vps ping time and many more. To try the command type ${configFetchJs().prefix}ping and you will get a response\`\`\`*`;
    return ping;
    break;
   
      case "menu":
          return `*\`\`\`The menu enables you to see all available commands you can call and also show some meta information about your bot and hosting platform suck as type of operating system and memory and also the version of operating system running\`\`\`*`;
          break;
      case "version":
          return log("The version command fetching the version currently running, and compares with fhe lastest version on the web to bring a response of the version "); 
          break;
          
      case "update":
          return log(`The update command enable users to check for updates available. This feature will enable you to check if your bot us up to date or not. This feature also includes, beta update check. By default you wont get developer beta update, but if you want to override this function, you can change 'allowBetaUpdates' in the configuration file and you will be able to get developer beta updates before anyone try ${configFetchJs().prefix}update to run the command `);
          
      case "developer" :
          return log("This command contains information about my developer and also provides his contact details");
        break;  
      case "setkeys" :
          return log(`The setkeys command is used to set users credentials for the encryption and decryption command, if these keys are not set, encryption and decryption of data connot be done. To run this command, you enter your prefix the bot is listening on + setkeys. ie. ${configFetchJs().prefix}setkeys and all will be done in the background`);
  break;
      
      case "getkeys" :
          return log(`After the setkeys command is called, and the encryption keys are generated, it is a good practice to store these keys in a very safe place to avoid  loosing the path or keys for encryption. For this, the getkeys command will fetch the encryption keys and safely amd store them in a markdown file to be sent to your private chat for security reasons, to run this command, we call the getkeys command statung with the prefix the bot is listeneing on eg . ${configFetchJs().prefix}getkeys`);
          break;
          
      case "encrypt" :
          return log(`Before accessing this command, please make sure to run ${configFetchJs().prefix}getkeys to generate the keys, The encryption command is in two types namely hex and base64, so you can encrypt to hex(hexadecimal) or base64 to use this command, you first call your prefix + encrypt + space + the '-' symbol to indicate its a subcommand and not a normal string  + the type of encryption algorithm then space + the value to be encrypted . example ${configFetchJs().prefix}encrypt -<options(hex or base64)> <value_to_encrypt>`);
          break;
          
      case "decrypt" :
          return log(`please make sure to call ${configFetchJs().prefix}setkeys to generate necessary keys. The decrypt function returns readable data using the same keys for encryption. To use the command call your prefix + decrypt + space + the '-' symbol to indicate its a subcommand and not a normal string  + the type of encryption encoding used(hex ot base64) then space + the value to be decrypted . example ${configFetchJs().prefix}decrypt -<options(hex or base64)> <hex_or_base64_to_decrypt>.If the keys are not the same ones used to encrypt the data , the decryption will fail and end up in mixed or gibberish characters even if one character is changes or misplaced, the whole show will fall. For this reason, your keys are stored safely out of sight and cannot be edited manually only by the system if a breach has occured and only with your permission.`)
      break;   
    
      case "sha256" :
          return log(`The SHA256 function is to convert data into a 64 character hexadecimals, you can use it by calling your prefix and "SHA256" together, a space then your text to be converted. eg. ${configFetchJs().prefix}SHA256 <text_to_be_converted>`);
          break;
        
      case "sha512" :
         return log(`The SHA512 function is to convert data into a 128 character hexadecimals, you can use it by calling your prefix and "SHA512" together, a space then your text to be converted. eg. ${configFetchJs().prefix}SHA512 <text_to_be_converted>. There are difference the SHA256 and SHA512, SHA256 generates a 64 bit hexadecimal and SHA512 generates a 128 bit hexadecimal and can be proofed by dividing 512 by 4 or 256 by 4. Each hexadecimal character stores 4 bit on computer binary system. `);
         break;     
          
      case "hknews":
          return log(
          `The hknews plugin provides hourly Tech news inorder. usage : ${configFetchJs().prefix}hknews and live Tech news will be fetched and restructured.`
          );
          break;
    case "vv":
          return log(
          `vv extracts one time media for message also known as viewOnce, this feature uses destructuring and time to download data from message, NB: when a one-time audio message is opened, you have less that 10mins to extract the message else it becomes useless and fails. usage : ${configFetchJs().prefix}vv then reply to the viewOnce container, its better to extract before opening the viewOnce to avoid exceptions`
          );
          break;
      case "add":
          return log(
              `The add feature usually referred as sudo allows you to add users who can use the bot in private mode. it can becaused with a array of numbers like ${configFetchJs().prefix}add 233123445678 254222383838.etc.Usage: ${configFetchJs().prefix}add [...numbers or number]`
          );
          break;
      case "antidelete":
        return send(`Antidelete is a feature that when toggled on, will enable you to keep track of message you have allowed the bot to keep track of and store them as buffer in the database. Immedietly a message is deleted, the data is retrieved from the database cleanly and sent into your private chat with no format detroyed. This feature has a database clean_up system in configurations/config.js [ Database.cleanUpAtSetTimes ] that when toggled on will cleanUp database at the set_times to avoid high disk_usage, Usage ${configFetchJs().prefix}antidelete [on / off]`);
          break;
     
      case "autotyping":
          return send(`Autotyping: This feature, enables you to update your presence to any one that messages you, it send a presence update of composing or what you might refer to as typing for 15seconds. usage: ${configFetchJs().prefix}autotyping [on/off]`);
          break;
     
      case "autorecording":
          return send(`Autorecording: This feature, enables you to update your presence to any one that messages you, it send a presence update of recording for 15 seconds. usage: ${configFetchJs().prefix}autorecording [on/off]`);
          break;
      
      case "autoviewstatus":
          return send(`~autoviewstatus: This feature, enables you to view the whatsapp update of any user within the range of 5seconds,  usage: ${configFetchJs().prefix}autoviewstatus [on/off]~`);
          break;
          
      case "obfuscate":
          return send(`Obfuscate plugin obfuscates JavaScript code to the extreme for node and not browser. this plugin has levels { high, low and medium }. It obfuscate JavaScript code to the extreme with 0% trace and tamper protection against reverse-engineers (time_consuming). Usage: ${configFetchJs().prefix}obfuscate -low for low preset, ${configFetchJs().prefix}obfuscate -high for high preset and unicode excape sequence, ${configFetchJs().prefix}obfuscate -medium for medium preset but heavy obfuscation then reply to the .js file containing javascript code`);
          break;
          
      case "pyobf":
          return send(`~pyobf is a plugin that obfuscate python codes only. this obfuscation will create three file and all file ~`);
          break;
          
      case "tts":
          return send(`tts also known as Text To Speech is a plugin that convert plain to audio or mp3 playable all manually restructured on the server, no external api calls. we use -l subcommand to determine the language and -a for accent. Usage ${configFetchJs().prefix}tts <text> or ${configFetchJs().prefix}tts -l en -a com.uk. use ${configFetchJs().prefix}tts -entries to list all entries for accent and language`);
        break;
          
          
      case "tobinaryjs":
          return send(`~toBinaryJs is a plugin that converts a simple javascript code into an executable binary for window or linux or both, this feature is very precise with 0 vulnerability and used in production,Usage: ${Prefix()}tobinaryjs -entries to view all entries(required| optional) ${Prefix()}tobinaryjs -sys <recommended_node_environment_from_22_to_24> that is <NODE-OS-ARCH->then reply to the .js file. eg. ${Prefix()}tobinaryjs -sys node23-linux-arm64`);
          break;
          
         
      case "yt":
          return send(`Youtube download plugin, this plugin downloads any media from youtube with three options, { video, audio, json }, the video option fetches the raw mp4 and then encodes it to libx264 and aac audio. usage: ${configFetchJs().prefix}yt -audio [search_parameters] for audio only, ${configFetchJs().prefix}yt -json [search_parameters] for information about the media on youtube and its format data, then ${configFetchJs().prefix}yt -video [search_params] for bot mp4 & mp3 merged. NOTE: ${configFetchJs().prefix}yt [search_params] defaults to the merged media_playable if not option is given. This process work with time depending on the media fetch size.`);
          break;
          
          
          
      case "yturl":
          return send(`Yturl plugin also fetches data from youtube but this time, it fetches the direct youtube url given and note search parameters, usage: ${Prefix()}yturl [url]. It has been made separate from yt plugin to avoid confusion`);
          break;   
          
      case "font":
          return send(`Font: this feature changes the font of your bot immediately when changed. Even though not all text will be changed to your preference, the required ones are changed to function as you prefer. usage: ${Prefix()}font [font_style] also use ${Prefix()}font -entries to list the font_styles available.`);
          break;
          
      case "tojs":
          return send(`To Javascript: this plugin converts TypeScript code to javascript. Its has too input part, you can either reply to the file containing TypeScript code then call the command input the code directly in the command call. eg. ${Prefix()}tojs <ts_code> or ${Prefix()}tojs then reply to the file. both cannot be used at ones`);
          break;
          
      case "nftoken":
          return send(`Netflix token generator, this plugin returns a valid netlix account token including its login url for normal devices and Pcs. Usage: call the command ${Prefix()}nftoken  directly for 4k ultra token accounts. To choose your own format, select with the plan subcommand or to list available plans, call unto the entries subcommand with ${Prefix()}nftoken -entries to list available entries, and ${Prefix()}nftoken -plan <plan_selected_from_entries_call> and wait for some seconds to return the urls, if an error occurs it might be to ratelimits, try again later`);
          break;
          
      default: 
          return send(`request returned : void, might be in the documentation process`);
  }
};
//console.log(helpWhat("-ping"))
