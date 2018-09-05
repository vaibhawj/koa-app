var App = require('./app');
var unescapeHtml = require('unescape-html');
var React = require('react');

function initApp() {
  console.log("inside initApp")
  var container = document.getElementById('content');
  var list = unescapeHtml(window.__list__);
  list = JSON.parse(list);
  // reuse server side render result
  React.render(
    <App title={list}/>,
    container
  );
}

initApp();