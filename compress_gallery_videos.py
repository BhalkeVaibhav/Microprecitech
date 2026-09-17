from pathlib import Path
import shutil
import subprocess
import sys

root = Path(__file__).resolve().parent
media_dir = root / 'Media'
out_dir = media_dir / 'gallery-video-optimized'
out_dir.mkdir(exist_ok=True)

ffmpeg = shutil.which('ffmpeg')
if not ffmpeg:
    print('FFmpeg is not installed or not available in PATH.')
    print('Install FFmpeg, then run this script again.')
    sys.exit(1)

video_files = sorted(
    p for p in media_dir.iterdir()
    if p.is_file() and p.suffix.lower() in {'.mp4', '.mov', '.m4v', '.webm'}
)

if not video_files:
    print('No videos found in Media folder.')
    sys.exit(0)

for video in video_files:
    out_file = out_dir / f'{video.stem}-compressed.mp4'
    cmd = [
        ffmpeg,
        '-y',
        '-i', str(video),
        '-vf', 'scale=1280:trunc(ow/a/2)*2',
        '-c:v', 'libx264',
        '-preset', 'medium',
        '-crf', '28',
        '-pix_fmt', 'yuv420p',
        '-c:a', 'aac',
        '-movflags', '+faststart',
        '-max_muxing_queue_size', '9999',
        str(out_file),
    ]
    print(f'Compressing: {video.name}')
    subprocess.run(cmd, check=True)

print(f'Compressed videos saved in: {out_dir}')
