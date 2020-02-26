# Run the UI

```
npm install
npm run dev
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
