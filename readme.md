# isdir-async

A no-deps async version of isDirectory, to use with or without await.

At its core, it just `util.promisify`ies a function that uses `stat` and some callbacks to operate. Promisify the whole gives the ability to use the `async` and `await` keywords of Node >7.6.0

## usage

```javascript
// import * as isDirectory from 'isdir-async'
var isDirectory = require('isdir-async');


/**
 * SYNC method
 */
if (await isDirectory('path/to/dir')) {
    // ...
}
else {}
```

```javascript
/**
 * ASYNC method
 */
isDirectory('path/to/dir').then(isdir => {
    if (isdir) {
        // ...
    }
    else {}
});
```

## Handle the errors

```javascript
/**
 * SYNC method
 */
let isdir;
try {
    isdir = await isDirectory('path/to/dir');
} catch (err) {}


if (isdir) {
    // ...
}
else {}
```

```javascript
/**
 * ASYNC method
 */
isDirectory('path/to/dir')
    .then(isdir => {
        if (isdir) {
            // ...
        }
        else {}
    })
    .catch (err => {})
```