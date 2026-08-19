# InnovateHerApp

A small, installable InnovateHer club app for sharing the community, upcoming events, and hackathon details.

## Run locally

Because this is a static PWA, serve the folder over HTTP so the service worker can run:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` in a browser. The app can be installed from the browser's install control when served over HTTPS (or localhost).

## Share by QR code

Deploy the repository to any static host such as GitHub Pages, Netlify, or Vercel. Create a QR code for the deployed URL and place it on event flyers. Scanning it opens the app; visitors can then use the browser's install prompt to save it to their phone.

Replace the placeholder social links and event details in `index.html` before publishing.