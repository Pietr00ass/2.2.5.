# Gladiatus Helper API

This folder contains a minimal Express server that can be deployed on a VPS.

## Setup

1. Install Node.js 18 or newer on your VPS.
2. Copy the contents of the `server` directory to your VPS.
3. Run `npm install` inside the directory to install dependencies.
4. Create a `.env` file based on `.env.example` and set the desired port.
5. Start the server with `npm start`.

The server exposes two endpoints:

* `/api/hello` – example test endpoint.
* `/api/license/:key` – checks the provided license key against `license.json`.

Edit `license.json` to manage valid keys locally. Changes to the file are picked up automatically without restarting the server.
