from PIL import Image
from pathlib import Path

root = Path(__file__).resolve().parent
media_dir = root / 'Media'
out_dir = media_dir / 'gallery-optimized'
out_dir.mkdir(exist_ok=True)

allowed = {'.jpeg', '.jpg', '.png'}
max_width = 1800
max_height = 1800
jpeg_quality = 72

for path in sorted(media_dir.iterdir()):
    if not path.is_file() or path.suffix.lower() not in allowed:
        continue
    if 'gallery-optimized' in str(path):
        continue

    try:
        with Image.open(path) as img:
            img = img.convert('RGB') if img.mode in ('RGBA', 'LA', 'P', 'CMYK') else img
            img.thumbnail((max_width, max_height), Image.Resampling.LANCZOS)
            out_path = out_dir / path.name
            img.save(out_path, quality=jpeg_quality, optimize=True)
    except Exception as exc:
        print(f'Failed: {path.name} -> {exc}')

print(f'Optimized images saved to: {out_dir}')
