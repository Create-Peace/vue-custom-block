module.exports = function (source, map) {
  console.log('source::', source)
  this.callback(null, 'module.exports = function(Component) {Component.options.__docs = ' +
    JSON.stringify(source) +
    '}', map)
}