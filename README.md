# Ahmed Abbas — Portfolio

Premium single-page portfolio with a built-in Node.js backend contact form.

## Run locally
1. Install Node.js 18+.
2. Open a terminal in this folder.
3. Run `npm start`.
4. Open `http://localhost:3000`.

No npm packages are required.

## Backend
- `POST /api/contact` validates and stores contact submissions in `data/messages.json`.
- `GET /api/health` provides a health check.
- Basic security headers and simple rate limiting are included.

## Main files
- `public/index.html` — complete single-page portfolio
- `public/styles.css` — responsive premium design
- `public/script.js` — reveal animations + working contact form
- `server.js` — Node.js frontend server + backend API
- `public/assets/Ahmed-Abbas-CV.pdf` — downloadable CV
- `public/assets/ahmed-abbas.jpg` — profile image extracted from the supplied CV

## Deployment
Any Node.js hosting that can run `node server.js` works. Set the startup file to `server.js`. The app reads the hosting port from the `PORT` environment variable automatically.
