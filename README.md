# cv (wip)

Computer visualization.

<!---
[![Build Status](https://travis-ci.org/{{author}}/cv.svg)](https://travis-ci.org/{{author}}/cv)
[![Coverage Status](https://coveralls.io/repos/{{author}}/cv/badge.svg?branch=master&service=github)](https://coveralls.io/github/{{author}}/cv?branch=master)
[![Inline docs](http://inch-ci.org/github/{{author}}/cv.svg?branch=master)](http://inch-ci.org/github/{{author}}/cv)
[![Codacy Badge](https://api.codacy.com/project/badge/f3e64501763645b9aa483bf83a4dd1d5)](https://www.codacy.com/app/sam_1700/cv)
[![Code Climate](https://codeclimate.com/github/{{author}}/cv/badges/gpa.svg)](https://codeclimate.com/github/{{author}}/cv)
[![Dependency Status](https://david-dm.org/{{author}}/cv.svg)](https://david-dm.org/{{author}}/cv)
[![devDependency Status](https://david-dm.org/{{author}}/cv/dev-status.svg)](https://david-dm.org/{{author}}/cv#info=devDependencies)
-->


---


## Install

1. `git clone https://github.com/opensoars/cv`
2. `cd cv`
3. `npm install`


## Use

INC.


## Development

### Tests and coverage

1. `npm run local_test`
2. Browse to `./coverage/index.html`

### Documentation 

1. `npm run doc`
2. Browse to `./doc/jsdoc/index.html`

### Nodemon

Using this project its `nodemon` workflow requires `nodemon` to be install globally (at the moment). This can be done by running the following command: `npm install -g nodemon`.

The following tasks are automated:

* Root script execution
* Running tests
* Collection coverage information
* Documentation generation

#### Execute root script

`npm run nodemon_exec`

#### Run tests and generate documentation

`npm run nodemon_test_doc`
