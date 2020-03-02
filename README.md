# Run the UI

```
npm install
npm run dev
```

# Run the UI in Docker

Bash

```
docker run --rm -v $(pwd):/web --name mbtiles-custom-style --entrypoint /web/start.sh -p 9090:9090 -w="/web" node:13.8.0
```

Cmd

```
docker run --rm -v %CD%:/web --name mbtiles-custom-style --entrypoint /web/start.sh -p 9090:9090 -w="/web" node:13.8.0
```

# Configure the styles

Add the json style under ./build/styles
Update sources url to
`"url": "http://localhost:8080/data/v.json"`

Add the path to the new file in ./src/index.js under styles

```
styles: [
      { name: "OSM Liberty", url: "./styles/osm_liberty.json" },
      { name: "Positron", url: "./styles/positron.json" }
    ],
```
