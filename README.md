# BayWa Coding Challenge Frontend

You can use an Editor of your choice, but please make sure you don't use any assistive AI Technologies like Github Copilot.
If you want to use AI, please do it in a way that we can see/follow the way you ask questions so we can see the process behind your thinking.

So for example ChatGPT would be ok, as well as googling, as long as no code is being suggested in your editor.

## SETUP

To run the project:

```
npm run dev
```

## INSTRUCTIONS

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

PAGE STRUCTURE (in Markdown)

## Parts

### Create the HTML Semantic Structure in EITHER html.html or in src/react/App.tsx

### Create a geoLocation Component

When you press the button, please display the Street Address below the button, using the geolocation API

### Backend in src/backend/App.tsx

Should send a POST request to a local Backend
