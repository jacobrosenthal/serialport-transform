#serialport-transform
Replaces [serialport](https://www.npmjs.com/package/serialport) requires in your files when you browserify with [chrome-serialport](https://www.npmjs.com/package/chrome-serialport) for the browser

##install
```
npm install serialport-transform
```

##use
```
browserify -t serialport-transform index.js -o bundle.js
```