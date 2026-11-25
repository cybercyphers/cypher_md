import os
import sys
import subprocess
import json
import asyncio
sys.path.insert(0,"/home/container/cyphers/pip_modules")
from pathlib import Path

__dirname = Path(__file__).resolve().parent

async def playable_video():
    try:
        if len(sys.argv) < 2:
            raise RuntimeError("worker data not provided, please contact administration (cyphers) for more details about this error log")
        video_path = (Path(str(sys.argv[1]))).resolve()
        if not video_path.exists():
            raise RuntimeError("media path does not exist.")
        output_media_path = video_path.with_name(f"{video_path.stem.replace("\n","").strip()}.mp4")
        #print(output_media_path)
        #return
        if not video_path:
            raise RuntimeError(f"The media path given returned ${video_path}")
        #print(output_media_path)
        #return
        print("working on it...")
        
    except Exception as e:
        raise RuntimeError(f"internal error log => {e}")
        
        
        
        
if __name__ == "__main__":
    asyncio.run(playable_video())

        
       # subprocess.run([
       # "ffmpeg",
       # "-y",
        #"-i", file_path,
       # "-c", "copy",
       # "-movflags", "+faststart",
       # temp_path
    #], check=True,capture_output=True, text=True)
