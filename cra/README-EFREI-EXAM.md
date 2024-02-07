# Requirements:

Node.js Installed on your computer see : https://nodejs.org/en/download

Install pnpm : npm install -g pnpm


# Microfrontend Example :  Create React App Example / Rsbuild

This example demos a basic host application loading remote component.

- `host` is the host application (cra-based).
- `remote` standalone application (cra-based) which exposes `Button` component.

# Installing the application

Run `pnpm install` to install all required files and node module. This will take a while.
Run `pnpm install --save-dev jest` we will need it later to run tests on the app. (Jest will be our test container)
Run `pnpm install cypress --save-dev` we will need it later to run tests on the app. ( Cypress will run End to End Tests)



# Building and Running Demo 
Run `pnpm run start`. This will build and serve both `host` and `remote` on ports 3001 and 3002 respectively.
Also it will build all apps which respects the global package.json start scripts   "start": "pnpm --filter cra_* start" , basically all app which starts by 'cra_'


- [localhost:3001](http://localhost:3000/) (HOST DASHBOARD ADMIN)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE -  DASHBOARD CLIENT)

# Running Cypress E2E Tests

To run tests in interactive mode, run `npm run cypress:debug` from the root directory of the project. It will open Cypress Test Runner and allow to run tests in interactive mode. [More info about "How to run tests"](../../cypress/README.md#how-to-run-tests)

To build app and run test in headless mode, run `yarn e2e:ci`. It will build app and run tests for this workspace in headless mode. If tets failed cypress will create `cypress` directory in sample root folder with screenshots and videos.

["Best Practices, Rules amd more interesting information here](../../cypress/README.md)

# Please always use pnpm and not yarn or npm

## You will have to send me the code as a .zip file or a link to your github repository + the notion export as a .pdf

# Next steps :
0) Create a Notion (or Confluence or Obsidian) page where you will write documentation just like a true feature teams. Ideally one (short) page with screenshots for each steps there:
* if you can add me as a contributor : idodgedit@gmail.com

1) Create a Shared Component App

* Develop a shared library of React components.
* Ensure these components are reusable and modular.
* Create a Footer and a header in the shared component app. Use it in both host and remote Landing page (app.js)
2) Remote App Development (Client's View)

* Develop a landing page for Remote and Host. Using the footer and header  from the SharedComponent App.
* Create a unique component for remote and a unique one for Host. Ideally, one that is built with parameters (you can pass a title as a string)

* Integrate Vitest for testing. Write basic tests for the component you created in remote and host.

3) Host App Development (Client View)

* Implement a fake API call to fetch and display data (use tools like JSONPlaceholder or create your own mock data).
Use mockapi for a quick available api : https://mockapi.io/  or the pokemon api https://pokeapi.co/


4) Add file upload (Admin View)
* Use AWS S3 Api to upload files ( any kind of files, pdf, images etc) to OVH public cloud.
* Create your account and use the offer with 200€ free credits:
https://www.ovhcloud.com/fr/lp/cloud-storage-trial-offer/ 
* and then create a standard object storage https://www.ovhcloud.com/fr/public-cloud/object-storage/

5) Read files from AWS S3 bucket (Client view)
* See all uploaded files in a dashboard (or an array) fetched from OVH Public cloud

# BONUS:
6) Deploy the app on a free Platform as a Service
* You can use Vercel, fly.io, dokku, Qovery

7) Make a dockerfile and run the app through docker.
* Deploy the app with a more complex paas which will use the dockerfile. (Dokku, Qovery etc.)
