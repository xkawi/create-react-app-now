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

You will enjoy all the benefits that now offers out-of-the-box: realtime, immutable, and unlimited deployments all with just 1 command.

# Alternatives

If you prefer something else, here are other alternatives mentioned in create-react-app's generated project's README:

## GitHub Pages

>Note: this feature is available with `react-scripts@0.2.0` and higher.

First, open your `package.json` and add a `homepage` field.
It could look like this:

```js
{
  "name": "my-app",
  "homepage": "http://myusername.github.io/my-app",
  // ...
}
```

Now, whenever you run `npm run build`, you will see a cheat sheet with a sequence of commands to deploy to GitHub pages:

```sh
git checkout -B gh-pages
git add -f build
git commit -am "Rebuild website"
git push origin :gh-pages
git subtree push --prefix build origin gh-pages
git checkout -
```

You may copy and paste them, or put them into a custom shell script. You may also customize them for another hosting provider.

Note that GitHub Pages doesn't support routers that use the HTML5 `pushState` history API under the hood (for example, React Router using `browserHistory`). This is becasue when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:
* You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to `hashHistory` for this effect, but the URL will be longer and more verbose (for example, `http://user.github.io/todomvc/#/todos/42?_k=yknaj`). [Read more](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#histories) about different history implementations in React Router.
* Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide](https://github.com/rafrex/spa-github-pages).

## Heroku

Use the [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack).

# More

Read more about create-react-app [here](https://github.com/facebookincubator/create-react-app/blob/master/template/README.md)

Read more about Zeit's Now.sh [here](https://zeit.co/now)
