# skeescore

This is a web app you can run and access to get an automatic skee-ball scorer, so you don't have to use paper. It runs on 10 frames with a configurable number of players per team.

# setup

if you have docker installed, you can do `docker compose up` and you'll get a running skeescore at localhost:8000
if not, you'll have to do: `npm install && npm run dev`
to build a distribution suitable for a static page, use `npm run build` and the webpage will be compiled to your `./dist` directory