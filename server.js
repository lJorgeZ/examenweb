const express = require('express');
const port = 8080;
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const app = express();

const App = () => {
    return React.createElement(
      'div',
      { style: { textAlign: 'center', marginTop: '200px' } },
      React.createElement(
        'h1',
        null,
        'Te amo, Vivi ',
        React.createElement('span', { role: 'img', 'aria-label': 'heart' }, '❤️')
      ),
      React.createElement('iframe', {
        src: 'https://drive.google.com/file/d/1ftZW93PuuDiqsFoKCkOgcxOi56NL0ea8/preview',
        width: '640',
        height: '480',
        frameborder: '0',
        allowfullscreen: true,
      })
    );
  };

app.get('/', (req, res) => {
    const html = ReactDOMServer.renderToString(React.createElement(App));
    res.send(html);
});
  
app.use(express.static('public'));
  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});