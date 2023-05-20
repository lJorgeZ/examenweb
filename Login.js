const React = require('react');
const { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBInput } = require('mdb-react-ui-kit');

function Login() {
  return (
    React.createElement(MDBContainer, { className: 'my-5' },
      React.createElement(MDBCard, null,
        React.createElement(MDBRow, { className: 'g-0' },
          React.createElement(MDBCol, { md: '6' },
            React.createElement(MDBCardImage, { src: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp', alt: 'login form', className: 'rounded-start w-100' })
          ),
          React.createElement(MDBCol, { md: '6' },
            React.createElement(MDBCardBody, { className: 'd-flex flex-column' },
              React.createElement('div', { className: 'd-flex flex-row mt-2' },
                React.createElement(MDBIcon, { fas: true, icon: 'cubes fa-3x me-3', style: { color: '#ff6219' } }),
                React.createElement('span', { className: 'h1 fw-bold mb-0' }, 'Logo')
              ),
              React.createElement('h5', { className: 'fw-normal my-4 pb-3', style: { letterSpacing: '1px' } }, 'Sign into your account'),
              React.createElement(MDBInput, { wrapperClass: 'mb-4', label: 'Email address', id: 'formControlLg', type: 'email', size: 'lg' }),
              React.createElement(MDBInput, { wrapperClass: 'mb-4', label: 'Password', id: 'formControlLg', type: 'password', size: 'lg' }),
              React.createElement(MDBBtn, { className: 'mb-4 px-5', color: 'dark', size: 'lg' }, 'Login'),
              React.createElement('a', { className: 'small text-muted', href: '#!' }, 'Forgot password?'),
              React.createElement('p', { className: 'mb-5 pb-lg-2', style: { color: '#393f81' } }, "Don't have an account? ", React.createElement('a', { href: '#!', style: { color: '#393f81' } }, 'Register here')),
              React.createElement('div', { className: 'd-flex flex-row justify-content-start' },
                React.createElement('a', { href: '#!', className: 'small text-muted me-1' }, 'Terms of use.'),
                React.createElement('a', { href: '#!', className: 'small text-muted' }, 'Privacy policy')
              )
            )
          )
        )
      )
    )
  );
}

module.exports = Login;