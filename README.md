# overkill-react-clock

> All your time is not your own - Motörhead

![CI](https://github.com/overkilling/overkill-react-clock/workflows/CI/badge.svg)

![Overkill React Clock](/.github/sample.png?raw=true)

This is an extreme, overengineered, example of a ticking clock webapp.
The starting point is the basic clock [from the React documentation](https://reactjs.org/docs/rendering-elements.html).
From this starting point, each commit will introduce new technologies and techniques.
This codebase _in no way_ represents production-ready code.
Nonetheless, it's a fun way to pickup and learn a few technologies.

The notable technologies used are:

- [React](https://reactjs.org/): a JavaScript library for building user interfaces
- [Redux](https://redux.js.org/): a Predictable State Container for JS Apps
- [Redux-Saga](https://redux-saga.js.org/): an alternative side effect model for Redux apps

## Getting started

Prequisites:

- [Node.JS](https://nodejs.org/) (version tested 16.13.1)
- [Yarn](https://yarnpkg.com/)

Clone the codebase to your local machine

    git@github.com:overkilling/overkill-react-clock.git

Install all dependencies

    yarn install

Run all tests and style checks

    yarn test
    yarn prettier-check

Start the application

    yarn start

And that's it! Have fun playing with it!

## Building and running a Docker image

To build this webapp as a Docker image

    docker build -t overkill-react-clock . -f infrastructure/Dockerfile

And to run it

    docker run -p 80:80 overkill-react-clock

## Notable commits

- [Basic React clock from documentation](768a52967c4a2d30f50bc826a3bb0130d3b75e36)
- [Convert element into a functional component](55b8d8eb22df367bb80fcb2231f3590f272065d4)
- [Convert to ES6 style function](85573c4c02f380011e6a33c34b060b002818b565)
- [Extract top level App component from index.js](320b2323a4756d5a06686317e04399925cbf0101)
- [Move time updating logic to App](e32f2d435b9320e656c1dcf3d4a5b97b8e7a71fe)
- [Add a PartOfDay component, to test multiple components](9ba919f97fbf0e9eb74138f9cd1fa8cb27fdbe2b)
- [Setup Redux action and reducer for updating time](c1b80fae32f1321a5e552acbeb8a4676d2c1534b)
- [Add containers for clock and part of day](02d78ee874159db18cb85143ff63b92e89d500d)
- [Move clock ticking logic to a saga](4241bd358923a46bbdbafc4dca40c86689670050)
- [Convert to typescript](103f76ea5ec7af5c1228f09aae4455e9b7b1317f)
- [Dockerize building and running the app](444bc93469eab1e353ece64327ac6b09d5fb571e)
- [Refactor directory structure into components](432f670d0fa403259ebafe38bae5f4fd28eb33dd)
- [Introduce snapshot testing](0d828f1e0bc497d169857acf0d1e01eae4dcc712)
- [Add storybooks](0f4ad976f6e139c84caf9acf1c8b48e3c69f57a5)
- [Convert project structure to use Atomic Design](e66a534ce8cbfc577bd10950feeb393e44c837a0)
