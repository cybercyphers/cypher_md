import subprocess
import sys
import asyncio
import json
custom_path = "/home/container/cyphers/pip_modules"
sys.path.insert(0, custom_path)
from io import BytesIO
from pathlib import Path
from gtts import gTTS
__dirname = Path(__file__).resolve().parent

#print(json.loads(sys.argv[1])['speechData'])

async def textToSpeech() -> str:
    try:
        toObj = json.loads(sys.argv[1]);
        text = toObj['speechData']
        lang = toObj['language']
        accent = toObj['accent']
        if not text:
            text = "sorry but you did not give me a raw text to process"
        if not lang:
            lang = "en"
        if not accent:
            accent = "dj"
        speechBuffer = gTTS(text=text,lang=lang, tld=accent);
        audioByte = BytesIO()
        speechBuffer.write_to_fp(audioByte)
        audioByte.seek(0)
        ffmpeg_command = [
            'ffmpeg',
            '-i', 'pipe:0',          
            '-c:a', 'libopus',
            '-ac', '1',                 
            '-avoid_negative_ts',
            'make_zero',
            '-f', 'ogg',      
            'pipe:1'                 
        ]
        
        process = subprocess.Popen(
            ffmpeg_command,
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        
        ogg_output, stderr_log = process.communicate(input=audioByte.read())
        
        if process.returncode != 0:
            raise Exception(f"FFmpeg failed: {stderr_log.decode('utf-8', errors='ignore')}")
        
        sys.stdout.buffer.write(ogg_output)
        sys.stdout.buffer.flush()
    except Exception as e:
        raise e
    
if __name__ == "__main__": 
    asyncio.run(textToSpeech())
