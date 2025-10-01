# BayWa Coding Challenge Frontend

You can use an Editor of your choice, but please make sure you don't use any assistive AI Technologies like Github Copilot.
If you want to use AI, please do it in a way that we can see/follow the way you ask questions so we can see the process behind your thinking.

So for example ChatGPT would be ok, as well as googling, as long as no code is being suggested in your editor.

## SETUP

To run the project:

```
npm run dev
```

## Challenge 1 - Semantic HTML and CSS

### Create the HTML Semantic Structure in EITHER html.html or in src/react/App.tsx

1.  Go to https://baywa.de
2.  Analyze the page and its modules
3.  Create a clean, semantic HTML structure to the best of your abilities.
4.  Please note, that we want to see mobile and desktop functionality/breakpoints.

### EXTERNAL ASSETS:

SVG assets can be skipped for now – you can use the existing vite.svg as a placeholder.
Image URLS:

- Landwirtschaftsportal: /baywa-landwirtschaft.jpg
- Baustoffportal: /baywa-baustoffe.jpg
- Energieportal: /baywa-energie.jpg

### Architecture:

You can choose between React or Plain HTML.

- React
  - All files are in src/react
  - The Source File to work in is src/react/App.tsx
- Plain HTML
  - Please work with the ./html.html file provided in the root path.

### Styling

You can use either Tailwind or regular CSS via either a global stylesheet or a module stylesheet. All files are already created for you.

### Goal

The Goal is to have a semantically good Template with two distinct media queries (mobile and desktop). Please refer to ./public/desktop-view and ./public/mobile-view accordingly.
It is not important that you finish everything perfectly, at the end of the day – to us – it's more important to see how you work and where your strengths and weaknesses lie. Please ask for help if you need it, as you would do that in your day to day too.

## Challenge 2 - Create a geoLocation Component

When you press the button, please display the Street Address below the button, [using the geolocation API from OpenStreetMap](https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json).

## Optional Full Stack Challenge 3 - Backend in src/backend/App.tsx

Should send a POST request to a local Backend: https://github.com/dukhine/baywa-coding-challenge-backend
