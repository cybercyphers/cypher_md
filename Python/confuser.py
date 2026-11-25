import sys
import os
import asyncio
import subprocess
import secrets
import json
custom_path = "/home/container/cyphers/pip_modules"
sys.path.insert(0, custom_path)
from pathlib import Path
__dirname = Path(__file__).resolve().parent




#print((__dirname / ".." / "src"))

async def obfuscate_code(raw_code_string):
    token_key = secrets.token_hex(6)
    pre_folder_path = (__dirname / ".." / "tmp_coder" / f"tmp_obf{token_key}").resolve()
    pre_folder_path.mkdir(parents=True, exist_ok=True)
    folderPath = str(pre_folder_path)
    filePath = str((__dirname / ".." / "tmp_coder" / f"tmp_obf{token_key}" / "python_obf.py" ).resolve()) 
    
    with open(filePath, "w") as f:
        f.write(raw_code_string)
        
    custom_env = os.environ.copy();
    
    #print(custom_env);
    
    custom_env["PYTHONPATH"] = custom_path + (os.pathsep + custom_env.get("PYTHONPATH", "") if custom_env.get("PYTHONPATH") else "")
       
    cmd = [
        sys.executable,
        "-m",
        "pyarmor.cli", 
        "gen", 
        "-O", 
        folderPath, 
        filePath
    ]


    spawnReturn = subprocess.run(cmd, check=True, env=custom_env)
    print(json.dumps({ "code" : spawnReturn.returncode, "url" : folderPath }))
    
    
if __name__ == "__main__":
    asyncio.run(obfuscate_code(sys.argv[1]))
