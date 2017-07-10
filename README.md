# FlixSearch

Initial Problems

## WATCHMAN

I had to completely uninstall watchman and reinstall in order to prevent the loader from hanging.

Problems along the way:

After building the basic version of `SearchResults.js` I got this error:

![Unhandled JS Exception:TypeError](https://github.com/rumblysam/FlixSearch/Error-Screeshot.png)

** working on a fix:
    * `watchman watch-del-all`
    * `[packager command] --reset-cache` < this took a really long time
Still errors
    * `sudo npm unistall -g react-native-cli`
    * `brew update && brew upgrade`
    *  `sudo npm install -g react-native-cli`


### SON OF A B*...

`Duplicate module name: core-js`

`npm cache clean`

Somewhere in this time I deleted node_modules a few times
    `npm install`
    `react-native run-ios`
    `Bundling index.ios.js  100.0% (638/638), done.`


# WHY CAN'T YOU JUST LET ME LIVE???!!
OpeningFlixSearch/node_modules/react-native/Libraries/Renderer/ReactNativeStack-dev.js with code
spawn code ENOENT```

 How to fix:
  When you see Red Box with stack trace, you can click any
  stack frame to jump to the source file. The packager will launch your
  editor of choice. It will first look at REACT_EDITOR environment
  variable, then at EDITOR. To set it up, you can add something like
  export REACT_EDITOR=atom to your ~/.bashrc or ~/.zshrc depending on
  which shell you use.```







    

