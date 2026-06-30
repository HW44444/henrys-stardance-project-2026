# Stardance — Space Data Explorer

A multi-section website that pulls live space data from public APIs. My project for the Stardance challenge.

## What it does
One page, three sections:
1. **Launches** — upcoming rocket launches with live countdowns + a chart by provider (Launch Library 2 API, no key needed).
2. **Asteroids** — near-Earth asteroids today: size, speed, miss distance, hazardous flag + a size chart (NASA NeoWs API).
3. **Image of the Day** — NASA's Astronomy Picture of the Day (NASA APOD API).

## How to run
Open `index.html` in a web browser. Everything loads automatically using a shared NASA demo key — no setup needed. On the Home page you can optionally save your own free key (from https://api.nasa.gov) for higher request limits; it's remembered across all pages.

## Pages / files
- `index.html` — Home (overview + optional API key entry)
- `launches.html` — rocket launch tracker + chart
- `asteroids.html` — near-Earth asteroid dashboard + date picker + chart
- `image.html` — Astronomy Picture of the Day + date picker
- `style.css` — shared styling for all pages
- `app.js` — shared helpers (API key handling, date/countdown formatting)

## Built with
HTML, CSS, JavaScript, Chart.js. Multi-page site with a shared stylesheet and a shared script.

## Ideas to expand
- Add a date picker to browse asteroids / images from other days
- More charts (launches per year, hazardous vs safe asteroids)
- A search/filter bar
- A "favorites" list
- Mars Rover photo gallery as a 4th section

## Links
- Challenge: https://stardance.hackclub.com/
- NASA APIs: https://api.nasa.gov
- Launch data: https://thespacedevs.com/

## Notes / progress
- v1: all three sections wired up; launches live without a key.
