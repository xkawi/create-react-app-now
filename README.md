# create-react-app-now

Deploy React.js Static Web Apps generated with [facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app) to Zeit's awesome [Now.sh](https://zeit.co/now/) service.

I wrote an article about this project here: [Zero Configuration Deployment for React app with Zeit Now](https://medium.com/@kawixiao/zero-configuration-deployment-for-react-apps-with-zeits-now-4f002be98c#.eyvj3mjdb)

# Important

UPDATE: create-react-app now officially recommend using "serve" to deploy your create-react-app project. The documentation can be found here: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment

I personally and strongly recommend you to check out [Next.js](https://zeit.co/blog/next) by Zeit team.
That will be my personal go to choice as well when creating new React project, and deploy to now seamlessly.

Though create-react-app-now can serves as an example on how you can use create-react-app and zeit's now together.  

Having said that, it is likely that I will not actively maintain this repo anymore (e.g. update the dependencies). I will still accept PR though.

# Why

create-react-app-now is created using [facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app).
Although it supports deployment to github pages and heroku, it does not feel intuitive just yet, as we need to run lots of commands.

This project is specifically to solve just that, with just 1 command: `npm run deploy`

This is achieved by using Zeit's awesome [Now.sh](https://zeit.co/now/) service.
It is fast, easy, and intuitive way of deploying your React app.

# How

Simply follow this step from getting started to deployment:

```
$ npm install -g now
$ git clone https://github.com/xkawi/create-react-app-now
$ npm install
$ npm run deploy
```

First command installs the `now` cli globally as npm package. Another (or suggested) approach is to install [Now Desktop](https://zeit.co/desktop) to ensure automatic updates of `now` cli.

Subsequent commands simply clone this repo, install necessary npm packages and deploy it to Now.

Whenever you want to deploy new changes, just run `npm run deploy` again to get new public link, for free! :smile:

You will enjoy all the benefits that Now offers out-of-the-box: real-time and immutable deployments all within 1 command.

## Note

You might see some red text appears or warnings in the log. You can safely ignore this, because your project will still be deployed successfully.

# Alternatives Deployment

If you prefer something else, please refer to create-react-app documentation [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment).

# More

Read more about create-react-app [here](https://github.com/facebookincubator/create-react-app)

Read more about Zeit's Now.sh [here](https://zeit.co/now)
