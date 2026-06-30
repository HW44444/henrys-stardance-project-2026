# Henry's Stardance Project — Space Data Explorer

A multi-page website that pulls live space data from public APIs, built for the [Stardance challenge](https://stardance.hackclub.com/).

## What it does
Four pages, each exploring real space data:

- **Home** — overview + optional NASA API key entry (saved in your browser).
- **Launches** — upcoming rocket launches with live countdowns and a chart of launches by provider.
- **Asteroids** — near-Earth asteroids for any date, each shown as a detailed card (size, velocity, miss distance in km / lunar distances / AU, hazard status, and more), plus a size chart.
- **Image of the Day** — NASA's Astronomy Picture of the Day, with a date picker back to 1995.

It also has an animated night-sky background with twinkling and shooting stars.

## How to run
Open `index.html` in a web browser. Everything loads automatically using NASA's shared demo key — no setup needed. On the Home page you can optionally save your own free key (from [api.nasa.gov](https://api.nasa.gov)) for higher request limits; it's remembered across all pages.

## Built with
HTML, CSS, JavaScript, and Chart.js. No build tools — just open it.

## Project structure
- `index.html`, `launches.html`, `asteroids.html`, `image.html` — the four pages
- `style.css` — shared styling
- `app.js` — shared helpers (API key handling, date/countdown formatting)
- `stars.js` — animated starfield + shooting stars

## Data sources
- [Launch Library 2](https://thespacedevs.com/) — rocket launches (no key needed)
- [NASA NeoWs](https://api.nasa.gov) — near-Earth asteroids
- [NASA APOD](https://api.nasa.gov) — astronomy picture of the day

## Ideas for future versions
- A Mars Rover photo gallery (5th page)
- More charts (launches per year, hazardous vs. safe asteroids)
- Search and filtering
- A "favorites" list saved in the browser
