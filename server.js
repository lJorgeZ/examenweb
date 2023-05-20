const express = require('express');
const session = require('express-session');
const port = 8080;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const Login = require('./Login.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de la sesión
app.use(
  session({
    secret: 'mi_secreto',
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware de autenticación básica
const requireLogin = (req, res, next) => {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.redirect('/login');
  }
};


const Content = () => {
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
      width: '480',
      height: '360',
      frameBorder: '0',
      allowFullScreen: true,
    })
  );
};

app.get('/', requireLogin, (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(Content));
  res.send(html);
});

app.get('/login', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(Login));
  res.send(html);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body || {};

  const connection = mysql.createConnection({
    host: 'bscc4e1hsl7mtyubfoku-mysql.services.clever-cloud.com',
    user: 'un8qvd8n5ihtfoba',
    password: 'zmAt3xz9yp8Wi0jYByJK',
    database: 'bscc4e1hsl7mtyubfoku'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
      res.redirect('/login');
    } else {
      const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
      connection.query(query, [username, password], (error, results) => {
        if (error) {
          console.error('Error al ejecutar la consulta:', error);
          res.redirect('/login');
        } else {
          if (results.length > 0) {
            req.session.isAuthenticated = true;
            res.redirect('/');
          } else {
            alert('Credenciales invalidas !');
            res.redirect('/login');
          }
        }
      });

      connection.end((err) => {
        if (err) {
          console.error('Error al cerrar la conexión:', err);
        }
      });
    }
  });
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
