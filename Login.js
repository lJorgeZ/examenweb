const React = require('react');

function Login() {
  const styles = `
    body {
      font-family: Arial, sans-serif;
      background-color: #1a1a1a;
      color: #fff;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 40px;
      background-color: #333;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .logo {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }

    .logo img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    .logo h1 {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
    }

    .form-group input {
      width: 100%;
      padding: 10px;
      background-color: #444;
      border: none;
      border-radius: 4px;
      font-size: 14px;
      color: #fff;
    }

    .form-group button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
    }

    .form-group button:hover {
      background-color: #0056b3;
    }

    .form-group .forgot-password {
      text-align: right;
      margin-top: 10px;
      font-size: 12px;
      color: #ccc;
    }

    .form-group .register {
      text-align: center;
      margin-top: 20px;
      font-size: 14px;
      color: #fff;
    }

    .form-group .register a {
      color: #007bff;
    }

    .form-group .register a:hover {
      text-decoration: underline;
    }
  `;

  return (
    React.createElement(React.Fragment, null,
      React.createElement('style', null, styles),
      React.createElement('div', { className: 'container' },
        React.createElement('h3', null, 'Iniciar sesión'),
        React.createElement('form', { method: 'POST', action: '/login', className: 'form-group' },
          React.createElement('label', null, 'Nombre de usuario'),
          React.createElement('br'),
          React.createElement('input', { type: 'text', name: 'username' } ),
          React.createElement('br'),
          React.createElement('br'),
          React.createElement('label', null, 'Contraseña'),
          React.createElement('br'),
          React.createElement('input', { type: 'password', name: 'password' }),
          React.createElement('br'),
          React.createElement('br'),
          React.createElement('input', { type: 'submit', value: 'Iniciar sesión' }),
        )
      )
    )
  );
}

module.exports = Login;