### My reply to the Airwallex Front End Developer Code Challenge

Thank you for the chance to test my skills. To try my solution, please clone this repository into any web server folder and checkout the master branch. I've included the latest stylesheet version, so no need to run Grunt, but you totally can if something doesn't look quite right.

Sorry if no unit tests were set, but it's a relatively new topic for me. I started testing some alternatives that would involve having Grunt running the tests as well, but I definitely need to learn more about Jasmine and PhantomJS before feeling comfortable with presenting a unit test solution.

Cheers, and hope you find this one a good solution overall.


Julio Gutierrez

Original readme:

### Airwallex Front End Developer Code Challenge

##### Overview

In this code challenge you will complete the provided Angular 1.5 app to render some data loaded from JSON data and allow filtering of the list.


##### Full Description

Complete an Angular app that loads the provided JSON file `iphones.json` and outputs it to a table.

Hook up the `<input name="search"/>` tag to allow filtering of the loaded list of iphones.

The search when blank should return all rows of the list.

The search much allow the user to search in `name`, `color`, `type` and `capacity` fields of the rows in the list.

##### Requirements

* Fill in some custom CSS styling in the provided `styles.css` file to make the interface visually pleasing
* Do not use a CSS framework such as Bootstrap of Foundation to style the app
* If required add a build step using your build tool of choice (Grunt/Gulp/Webpack)
* Do not use any Javascript libraries except for the provided Angular.js library
* Code written should as if for production, i.e. with proper separation of concerns, readability, etc
* Add some unit tests in your chosen test runner (Jasmine, Mocha, etc)
* Provide instructions for building, testing and running the Angular app
* Any manipulation of the loaded list should be done using Javascript Array functions such as (map, filter, forEach)

