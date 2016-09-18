# create-react-app-now

Deploy React.js Static Web Apps generated with [facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app) to Zeit's awesome [now.sh](https://zeit.co/now/) service.

I wrote an article about this project here: [Zero Configuration Deployment for React app with Zeit Now](https://medium.com/@kawixiao/zero-configuration-deployment-for-react-apps-with-zeits-now-4f002be98c#.eyvj3mjdb)

# Why

This project is created using [facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app).
Although it supports deployment to github pages and heroku, it does not feel intuitive just yet, as we need to run lots of commands.

This project is specifically to solve just that, with just 1 command: `npm run deploy`

This is achieved by using Zeit's awesome [now.sh](https://zeit.co/now/) service.
It is fast, easy, and intuitive way of deploying your React app.

# How

Simply follow this step from getting started to deployment:

```
$ git clone https://github.com/xkawi/create-react-app-now
$ npm install
$ npm run deploy
```

It may ask you to enter your email to login to now, please do so.

Now, whenever you want to deploy new changes, just run `npm run deploy` to get new public link, for free! (_...unless you pay for it_) :smile:

You will enjoy all the benefits that now offers out-of-the-box: realtime and immutable deployments all with just 1 command.

# Note

You might see some red text appears in the log. You can safely ignore this, as if you read carefully, it just complaints about not able to download fsevent and build node-gyp properly. This happens because now-serve is replaced with micro-list. You can see the changes at this commit [1ec52c63](https://github.com/xkawi/create-react-app-now/commit/1ec52c6308df0776732c40c0fcf1dc1b0a20744f).

# Alternatives

If you prefer something else, please refer to create-react-app documentation [here](https://github.com/facebookincubator/create-react-app/blob/master/template/README.md#deployment).

# More

Read more about create-react-app [here](https://github.com/facebookincubator/create-react-app/blob/master/template/README.md)

Read more about Zeit's Now.sh [here](https://zeit.co/now)
