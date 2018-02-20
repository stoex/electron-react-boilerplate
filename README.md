# electron-react-boilerplate

A basic Electron.js / React.js boilerplate for rapid development and easy app deployment.

## Why?

There are tons and tons of blog posts and other repositories out there that already solve the problem of enabling the developer to create an electron app with a react as the front-end. However, for me personally most boilerplates were simply too complicated and / or had too many features I would have to rip out first before being productive. Soooo... I created my own according to personal preferences :)

## What about redux, react router, x and y?

They can easily be implemented into this project and should be if you need if for your application. However, there are other boilerplates out there that already have everything you might need for your app.

This boilerplate is meant to be simple and will stay that way.

## What's included?

* [Babel](https://babeljs.io/) for transpiling the electron code.

   Now you can use the same language features in both the react app and the electron code!

* [electron-builder](https://www.electron.build/)

  The best solution for packaging and deploying Electron apps (in my humble opinion). Very vast feature set and easily extendable.

* [electron-devtools-installer](https://github.com/MarshallOfSound/electron-devtools-installer)

  You will probably want to have the React dev tools in your electron client (in development only of course) - this package takes care of that.

* [create-react-app](https://github.com/facebook/create-react-app)

  The React client setup is a 1:1 copy from a freshly generated CRA project. This keeps it extremely simple to use. 

## Prerequisites

Currently, this boilerplate has only been tested with node.js v8.9.3 - this is the recommended version.

## Getting Started

* Clone the repository: `git clone https://github.com/stoex/electron-react-boilerplate %PROJECTNAME%`

* Install dependencies: `cd %PROJECTNAME% && yarn` or  `cd %PROJECTNAME% && npm i`

* Run development environment: `yarn dev` or ` npm run dev`

* Run tests: `yarn test` or `npm run test`

* Build React client app only: `yarn build-client` or `npm run build-client`

* Build the whole app: `yarn electron-pack` or `npm run electron-pack`

## Things you should know:

* Leave `homepage` in the package.json as is. Create-react-app assumes that the client will be hosted at the server root. However, since our client could run from any directory we will need to tell CRA to use a relative asset path in the index.html file. 
See [CRA README](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#building-for-relative-paths).

* `dev` script: `BROWSER=none` suppresses your default browser from opening a new tab for rendering the client. We will use Electron for that. Note that you might need to change that to `set BROWSER=none` if you're developing on Windows. 

## Contributing

Feel free to submit a pull request!

## Versioning

This project uses [semver](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Christian Nicola** - *Initial work* - [Github account](https://github.com/stoex)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Great post with a lot of information from @kitze:

   https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3
