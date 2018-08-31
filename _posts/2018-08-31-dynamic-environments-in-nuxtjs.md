---
layout: post
title:  "Configuring Dynamic Environments in Nuxtjs Project"
date:   2018-08-31 11:34:56 +0530
---

Nuxtjs is amazing when it comes to generating serverside rendered Vuejs code and it has fantastic features when it comes to configuring and improving code workflow. But while working with Google App Engine or automated deployments I noticed that there isn't a simple and easy way to do this for such environments. 


For such environments, here is a hacky but stable way to add environment configurations to the workflow. 

At first we move the `nuxt.config.js` to a file named `nuxt.config.tpl` which is basically a template and we would replace the `'env'` fields with the environment configuration variables and render our final `nuxt.config.js` before running our code. 

```
module.exports = {
  env: 'env',
  ...
  plugins: [{
      src: '~plugins/ga.js',
      ssr: false
    },
    {
      src: '~plugins/analytics.js',
      ssr: false
    },
    {
      src: '~plugins/vee-validate.js',
      ssr: true
    },
    { src: '~/plugins/localStorage.js', ssr: false }
  ],
  ...
}
```

to render our `nuxt.config.js` we create a small script called `build.js` which can render our final config. For deploying to cloud services like Google App Engine we can use the code below where we read the config from the `app.yaml` and create a variable which we then write into our `nuxt.config.js` file.

```
const fs = require('fs');
const yaml = require('js-yaml');
require('dotenv').config();

let envConfig = fs.readFileSync('./nuxt.config.tpl', 'utf8');

if(process.env.NODE_ENV == 'development') {
  var env = JSON.stringify({
    API_URL: "http://localhost:9090",
    API_TOKEN: "123456789"
  });
} else {
  const config = yaml.safeLoad(fs.readFileSync('app.yaml', 'utf8'));
  console.log(config);
  var env = JSON.stringify({
    API_URL: "https://api.googleapis.com",
    API_TOKEN: "12312312123"
  });
}

envConfig = envConfig.replace(/'env'/g, env);
fs.writeFileSync('./nuxt.config.js', envConfig, 'utf8')

```

This can be even more simple if we are deploying to environments like digital ocean through our `.env` configuration files 

```
const fs = require('fs');
require('dotenv').config();

let envConfig = fs.readFileSync('./nuxt.config.tpl', 'utf8');

var env = JSON.stringify({
API_URL: process.env.API_URL,
API_TOKEN: process.env.API_TOKEN
});

envConfig = envConfig.replace(/'env'/g, env);
fs.writeFileSync('./nuxt.config.js', envConfig, 'utf8')
```

#### Adding to the workflow

If deploying the configuration to google app engine, we can set the following configuration where we run the `build.js` file from above and then start the nuxt process. Adding a **production** field which basically build the project and deploys to google app engine 

```
...
"scripts": {
    "start": "node server.js",
    "live": "nuxt start",
    "build": "nuxt build",
    "dev": "npm run config && npm start",
    "config": "node build.js",
    "generate": "nuxt generate",
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
    "precommit": "npm run lint",
    "production": "npm run config && npm run build && gcloud config set project project-name && gcloud app deploy",
    "test": "jest"
  },
...
```

It's even more simpler if deploying to another process. 

```
...
"scripts": {
    "start": "node server.js",
    "live": "nuxt start",
    "build": "nuxt build",
    "dev": "npm run config && npm start",
    "config": "node build.js",
    "generate": "nuxt generate",
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
    "precommit": "npm run lint",
    "production": "npm run config && npm run build",
    "test": "jest"
  },
...
```

