## Static docs site generator

Static site that bundles together the technical documentation of [Decentraland](https://github.com/decentraland) various repositories.

Created with typescript, create-react-app and react-router.

This repo uses other decentraland repositories as git submodules and generates a static site from the data in each docs/ folder

## Running locally

`npm install`
`npm run generate-local-data` ← this script will fetch all submodules and cleanup every folder except for docs/
`npm start` runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Adding a new submodule

If you want to add a new repository to generate the docs:

`cd src/dependencies`
`git submodule add “repository_url”` (ex: git submodule add [](https://github.com/decentraland/decentraland-rpc)[https://github.com/decentraland/decentraland-rpc](https://github.com/decentraland/decentraland-rpc) )

Don’t forget to commit the repository reference inside the dependencies folder and .gitmodules file, otherwise it won’t work on the remote

## Deploy

`npm run generate-deploy-data` will generate the local data file from the updated repositories, generate a production build, rename index.html to 200.html (see [](https://surge.sh/help/adding-a-200-page-for-client-side-routing)[https://surge.sh/help/adding-a-200-page-for-client-side-routing](https://surge.sh/help/adding-a-200-page-for-client-side-routing)) and deploy to surge

## Live version

Live version deploys a new version on each deploy to main branch. It also updates everyday at 5am UTC.

[](https://sdk-challenge-doom.surge.sh/)[https://sdk-challenge-doom.surge.sh/](https://sdk-challenge-doom.surge.sh/)
