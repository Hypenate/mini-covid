# mini-covid
A small (and very simple) app to show some information about covid using the API of [disease.sh](https://disease.sh/docs/).
It contains a list which you can use to navigate to a detail of a row.

The app is generated using [Nx](https://nx.dev/), it contains
- The application
- An e2e application which uses [Cypress](https://www.cypress.io/)
- (Shared) Libraries 

And includes the following:
- Two components, a list and a form (+ .cy file)
- Lazy loading
- Facade - a sort of state management that extracts API calls (+ .spec file)
- Facade util - to map the DTO to the entity (+ .spec file)
- Resolver - getting data before entering the page
- FormService - abstraction of the create of the form
- ApiService - Getting the data (had to write it myself, cause I was unable to generate it using the [Open API generator](https://openapi-generator.tech/) or [Orval](https://orval.dev/))
