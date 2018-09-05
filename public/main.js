var App = require('./app');
var unescapeHtml = require('unescape-html');
var React = 'react';
var ReactDOM = 'react-dom';

function initApp() {
  console.log("initApp")
  var container = document.getElementById('content');
  var list = unescapeHtml(window.__list__);
  list = JSON.parse(list);
  // reuse server side render result
  ReactDOM.render(
    <App title={list}/>,
    container
  );
}

initApp();