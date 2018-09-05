var App = require('../public/app');
var escapeHtml = require('escape-html');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

class index extends React.Component {
  render(){
    // pass data to client side js
    // xss!!!
    var dataScript = `window.__list__ = '${escapeHtml(JSON.stringify(this.props.title))}';`;
    // render as a dynamic react component
    var contentString = ReactDOMServer.renderToString(<App title="Counter" />);

    return (
      <div>
        <div id="content" dangerouslySetInnerHTML={{__html: contentString}}>
        </div>
        <script dangerouslySetInnerHTML={{__html: dataScript}}></script>
      </div>
    );
  }
}


module.exports = index;