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

## Native mobile app

The repository also includes a real iOS/Android Expo app in `mobile/`.

To test it on a phone:

```bash
cd mobile
npm start
```

Install **Expo Go** on the phone, scan the QR code shown by Expo, and keep the phone and development computer on the same network. This opens the native app in Expo Go; it is not a website shortcut.

For installable Android and iOS builds, create an Expo account, install EAS CLI, and run:

```bash
npm install --global eas-cli
eas login
eas build:configure
eas build --platform android
eas build --platform ios
```

Android builds can be installed directly as an APK. iOS builds require Apple signing and are distributed through TestFlight or the App Store.