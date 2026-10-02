# Scroll Hero Video

The current hero uses `public/Assets/HeroVideo2.mp4`. To replace it, place the source video at `public/Assets/INPUT.mp4`, then run this command from the project root:

```bash
ffmpeg -i INPUT.mp4 -vf scale=1920:-2 -c:v libx264 -g 1 -crf 24 -an -movflags +faststart hero.mp4
```

Move the resulting `hero.mp4` to `public/Assets/hero.mp4`, or pass another asset path through the component's `src` prop. Optionally add a poster image at `public/Assets/hero-poster.jpg`.

The hero defaults to `/Assets/HeroVideo2.mp4` and `/Assets/hero-poster.jpg`.
