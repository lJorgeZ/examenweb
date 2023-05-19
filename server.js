const express = require('express');
const port = 8080;
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const app = express();

const App = () => {
    const backgroundImage = 'https://images.hdqwalls.com/wallpapers/space-pink-stars-4k-ld.jpg';

    const appStyle = {
        textAlign: 'center',
        minHeight: '100vh',
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      };
    
      const contentStyle = {
        marginTop: '200px',
      };

    return React.createElement(
        'div',
        { style: appStyle },
        React.createElement(
          'div',
          { style: contentStyle },
          React.createElement(
            'h1',
            null,
            'Te amo, Vivi ',
            React.createElement('span', { role: 'img', 'aria-label': 'heart' }, '❤️')
          ),
          React.createElement('iframe', {
            src: 'https://drive.google.com/file/d/1ftZW93PuuDiqsFoKCkOgcxOi56NL0ea8/preview',
            width: '480',
            height: '360',
            frameBorder: '0',
            allowFullScreen: true,
          })
        )
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