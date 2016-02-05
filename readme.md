# Boilerplate to play with ES6 in the browser

Using babel, browserify and gulp.

Based in [this](https://thesocietea.org/2016/01/building-es6-javascript-for-the-browser-with-gulp-babel-and-more/?utm_source=javascriptweekly&utm_medium=email) useful article

### Getting Started

1. Clone the repo
2. Enter the folder
3. Run `npm install` in the console
4. Run `gulp` in the console.
  - This will compile ES6 to ES5 from `src/` into `dist/`.
  - It will also start watching for changes in your `src/js/*.js` files and compile them after saving
5. Open a server. I use ruby with this command: `ruby -run -e httpd . -p 5000`
6. Open the browser and visit `localhost:5000`
7. Voilà!

### How to play

Any file written in `src/js` with the extension `.js` will be compiled into `dist/js`.
You can play there.

Go and check the `index.html` file. You will notice the next script tag:
```
<script src="/dist/js/app.js" charset="utf-8"></script>
```
This is requiring the compiled javascript. Just like any other javascript file.

I recommend that if you use write more files, rather than requiring them in the html file.
Use the ES6 modules to require them inside your `app.js` file. That's better practice.
There is an example in `app.js`.
