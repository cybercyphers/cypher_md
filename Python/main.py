import sys
import asyncio
import subprocess
import os
import inspect

sys.path.insert(0, "/home/container/cyphers/pip_modules")


from curl_cffi.requests import AsyncSession
original_request = AsyncSession.request
async def patched_request(self, *args, **kwargs):
    kwargs['timeout'] = 200  
    return await original_request(self, *args, **kwargs)

AsyncSession.request = patched_request

from xvideos_api import Client, DownloadConfigHLS


async def main():
    client = Client()

    video = await client.get_video(sys.argv[1])

    config = DownloadConfigHLS(
        quality="best",
        path="/home/container/cyphers/tmp_coder"
    )

    file_path = f"/home/container/cyphers/tmp_coder/{video.title}.mp4"
    temp_path = f"/home/container/cyphers/tmp_coder/{video.title}.tmp.mp4"
    
   # print("Valid download arguments:", inspect.signature(video.download).parameters.keys())

    await video.download(config)
    result = subprocess.run([
        "ffmpeg",
        "-y",
        "-i", file_path,
        "-c", "copy",
        "-movflags", "+faststart",
        temp_path
    ], check=True,capture_output=True, text=True)

    
    if result.returncode != 0:
        raise Exception("FFmpeg failed")

    os.replace(temp_path, file_path)

    print("Download complete")
    print(video.title)


if __name__ == "__main__":
    asyncio.run(main())
