const xs = require("xstream").default;
// const onionify = require('cycle-onionify').default;
// const evolve = require("./stateHandler.js");
const {run} = require("@cycle/run");
const remoteDriver = require("../lib/webRemoteDriver.js")
const {div, label, input, hr, h1, makeDOMDriver} = require('@cycle/dom')

const drivers = {
  K: remoteDriver("159.89.12.113:8080"),
  // Settings: () => xs.of(config),
  DOM: makeDOMDriver('#root')
};

const main = ({DOM}) => {
  return {
    DOM: xs.of(h1("Hello")),
    K: xs.of({
      type: "sync",
      id: ""
    })
  }
}

run(main, drivers)
