# Projektor

## Install Angular Tools

***********************************************************************
ng new Projector --style=style.scss --routing
***********************************************************************
npm install --save @angular/material @angular/cdk @angular/animations
***********************************************************************
ng add @angular/material
***********************************************************************
add module: MatButtonModule (import,export)

## Install Materialize CSS
***********************************************************************
npm install materialize-css@next --save
[MAterialize CSS](https://materializecss.com)

manualy add to angular.json

 "styles": [
              {
                "input": "node_modules/materialize-css/dist/css/materialize.min.css"
              },
              "src/styles.style.scss"
            ],
            "scripts": [
              {
                "input": "node_modules/materialize-css/dist/js/materialize.min.js"
              }
            ]
          },

***********************************************************************

## Install HammerJS
***********************************************************************
npm install --save hammerjs
***********************************************************************

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.
