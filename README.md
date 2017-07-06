## Template
  - Default HTML5/CSS3/JavaScript template
  - Use Angular CLI, Angular 4., jQuery

## IDE Configuration
- Open Sublime Text
- Choose Preferences -> Settings - Default
- The number of spaces a tab is considered equal to "tab_size": 2
- Set to true to insert spaces when tab is pressed "translate_tabs_to_spaces": true
- Set to true to removing trailing white space on save "trim_trailing_white_space_on_save": true
- Set to true to ensure the last line of the file ends in a newline character when saving "ensure_newline_at_eof_on_save": true

## Installation
### Install NodeJS
  - Download [NodeJS](http://nodejs.org)
### Install Dependencies
  - Open Command Line and run
    * npm install
### Internationalization
  - Use [Ngx-translate](https://github.com/ngx-translate/core)
  - Install gnx-translate by following command
    * npm install @ngx-translate/core @ngx-translate/http-loader --save
### Angular CLI
  - Tutorial [Angular-cli](https://github.com/angular/angular-cli)
    * npm install -g @angular/cli
## Development
- Create an app
  * ng new myApp
- Run app with localhost
  * ng serve
- Build app
  * ng build
- Create Component/ Directive/ Pipe/ Service/ Class/ Guard/ Interface/ Enum/ Module
  * ng g component my-new-component
## Release
- ng build --prod
## Test
- ng test [unit test]
- ng e2e [end-to-end tests]
