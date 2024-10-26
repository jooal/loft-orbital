- set up and install codegen GraphQL to generate queries/mutations from schema --> automates queries and mutation types
- leaflet: JS library to display map for satelling mapping --> easy to plugin and setup
- set up routing with react-router-dom
- basic test coverage for querying satellites, reports, and creating/updating reports
- components folder consists of reusable components
- pages consist of designated pages in the dashboard
- each page should have a loading and error state to handle data loading or failing to fetch
- Dashboard page: fetches overview of satellites by status, constellations, and locations of In Orbit satellites on map
- Satellites page: fetches all satellites, sort by ASC/DESC name, filter by status --> clicking on satellite takes you to details page
- Reports page: fetches all reports --> clicking on report takes you to details page
  - details page has ability to add comments, delete report, or edit report
  - edit form reuses CreateReport form with an "Edit" mode enabled and populates form with existing info
  - delete report throws a confirmation modal then refetches allReports

I included at least one of each CRUD operation and filter/sort functions.

Things I would do if I had more time:

- consolidate css and create themes
- better naming for components and classnames
- create a modern, responsive design
- use Formik for form management to handle form state, errors, edit/create mode
- build out Satellites create/edit form and deletion
- build out Paylaods and Customers page
- notifications page for tracking when changes have been made to reports or satellites
- more sorting/filtering
- global search for items like reports, satellites, customers, payloads, etc
- better typing and casting to remove nullable and empty string fallbacks
- more test coverage --> unit/integration testing
- localization
- create more/better components to be reused and create consistent designs across pages so that components are applicable to each page
  - would love to create a component library designed with the theme in mind
