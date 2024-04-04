# Instructions

Install Node.js with [Volta (this is what I use)](https://volta.sh) or directly from the [Node.js site](https://nodejs.org/).

Once you've cloned or downloaded this repository, `cd` into it and run `npm install`. This will create a `node_modules` folder.

You can run the JS files in this repo with the `node` command. For example:

```
node 0-fetch.js
```

However, if you make changes to the file, the `node` command won't pick them up. You have to press Control + C to stop the process and run the command again to restart the process.

This isn't a very fun developer experience. Thankfully, there is a tool called [nodemon](https://nodemon.io/) so that we don't have to restart the Node process every time we change a file. Let's install it:

```
npm install -D nodemon
```

For each of the JS files in this repo, run them using the `nodemon` command instead of the `node` command:

```
npx nodemon 0-fetch.js
```
