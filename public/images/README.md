# NURE Assets Guide

## Logo

| File | Size | Format | Notes |
|---|---|---|---|
| `logo.svg` | any | SVG | Blue (#0037A6) version for light bg |
| `logo-yellow.svg` | any | SVG | Yellow (#FFD500) version for dark bg |
| `mon.svg` | height 40px | SVG | MON Ukraine — keep as-is with text, just optimize |

## Hero & Campus

| File | Dimensions | Format | Quality | Where used |
|---|---|---|---|---|
| `hero.webp` | 1920×1080 | WebP | 80% | Homepage hero section |
| `campus/lab.webp` | 800×600 | WebP | 75% | Specialty pages |
| `campus/students.webp` | 800×600 | WebP | 75% | About page |
| `campus/hackathon.webp` | 800×400 | WebP | 75% | News articles - |

Convert: in any editor, export as WebP. Or use CLI:
```bash
cwebp -q 80 hero.jpg -o hero.webp
cwebp -q 75 -resize 800 600 lab.jpg -o campus/lab.webp
```

## Partners

All partner logos: SVG preferred, gray `#9CA3AF`, height normalized to 32px.

| File | Source |
|---|---|
| `partners/microsoft.svg` | https://microsoft.com/brand |
| `partners/epam.svg` | https://epam.com/brand |
| `partners/globallogic.svg` | https://globallogic.com/brand |
| `partners/cisco.svg` | https://cisco.com/brand |
| `partners/softserve.svg` | https://softserve.com/brand |
| `partners/sigma.svg` | https://sigma.software/brand |
| `partners/nix.svg` | https://nix.ua |
| `partners/gameloft.svg` | https://gameloft.com/brand |
| `partners/dataart.svg` | https://dataart.com/brand ++++++|

## News

| File | Dimensions | Format | Where used |
|---|---|---|---|
| `news/qs-ranking.webp` | 800×400 | WebP | QS article hero |
| `news/the-ranking.webp` | 800×400 | WebP | THE article hero |
| `news/scopus.webp` | 800×400 | WebP | Scopus article hero - |
