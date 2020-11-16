const localforage = require('localforage')

localforage.config({
  driver: localforage.INDEXEDDB, // Force WebSQL; same as using setDriver()
  name: 'instabot',
  version: 1.0,
})

const siga = localforage.createInstance({
  name        : 'instabot',
  storeName   : 'siga',
})

const dizu = localforage.createInstance({
  name        : 'instabot',
  storeName   : 'dizu',
})

const tasksDizu = localforage.createInstance({
  name        : 'instabot',
  storeName   : 'tasksDizu',
})

const tasksSiga = localforage.createInstance({
  name        : 'instabot',
  storeName   : 'tasksSiga',
})

exports.siga = siga
exports.dizu = dizu
exports.tasksDizu = tasksDizu
exports.tasksSiga = tasksSiga
