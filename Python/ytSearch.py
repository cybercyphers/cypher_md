import sys
import subprocess
import asyncio
import json
import os

sys.path.insert(0, "/home/container/cyphers/pip_modules")

from ytscrape import YouTube
from pathlib import Path

from curl_cffi.requests import AsyncSession
original_request = AsyncSession.request
async def patched_request(self, *args, **kwargs):
    kwargs['timeout'] = 150 
    return await original_request(self, *args, **kwargs)
AsyncSession.request = patched_request

__dirname = Path(__file__).resolve().parent

#print(YouTube)

async def _sync_extract() -> str: 
    try:
        if len(sys.argv) < 2:
            raise RuntimeError(f"too few parameters given in {sys.argv}")
            return;
        search_params = str(sys.argv[1])
        with YouTube() as yts:
            for url_param in yts.search(search_params, max_results=1):
                print(url_param.url)
                return url_param.url;
                
    except Exception as e: 
        raise RuntimeError(f"youtube search returned status 500, trace {e}")
    
    

if __name__ == "__main__":
    asyncio.run(_sync_extract())
