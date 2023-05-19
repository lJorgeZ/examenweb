const http = require('http');
const port = 8080;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ImageGallery = require('react-image-gallery').default;

const App = () => {
  const images = [
    {
      original: 'https://drive.google.com/file/d/1bt_6yCq2Yc6i33Hf4USplgwHOKEN_pXw/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1bt_6yCq2Yc6i33Hf4USplgwHOKEN_pXw/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1bup1tREG8GkrU33nzxBIaG2Dv8gI-1-e/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1bup1tREG8GkrU33nzxBIaG2Dv8gI-1-e/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1bxrBomPy74Ub_jAvpmmM8E2d0dtmEmOK/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1bxrBomPy74Ub_jAvpmmM8E2d0dtmEmOK/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1cABSS0UkWJYhbUjWwQZKXYn1t9ngLzsh/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1cABSS0UkWJYhbUjWwQZKXYn1t9ngLzsh/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1cFrBW-TJB35jPuBnhkYpREvRrIOLFLH_/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1cFrBW-TJB35jPuBnhkYpREvRrIOLFLH_/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1cHG6CPxCEoocsKpbOY9yAZdvq1OQhxl8/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1cHG6CPxCEoocsKpbOY9yAZdvq1OQhxl8/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1cHnSJMfL-SP0Epnksj01icdniw8-D5Yj/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1cHnSJMfL-SP0Epnksj01icdniw8-D5Yj/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1cP7C_2H22sFAAQUn1VHcP3DQf8o2TtEZ/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1cP7C_2H22sFAAQUn1VHcP3DQf8o2TtEZ/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1cXoMW60rnrPR8cI_FzVLAompcvdKRofP/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1cXoMW60rnrPR8cI_FzVLAompcvdKRofP/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1ccNdtMn_3OyULyjAe4PahQEv6HQQY6le/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1ccNdtMn_3OyULyjAe4PahQEv6HQQY6le/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1cc_GQbgBqPmFnU5BF04W9dxPzx6xuwEn/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1cc_GQbgBqPmFnU5BF04W9dxPzx6xuwEn/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1cd8pC90hlIBR5lDaUQLRhdbYzVQHmdFr/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1cd8pC90hlIBR5lDaUQLRhdbYzVQHmdFr/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1cfeyezlizhf3WSaIjGk2J30ArHKUFOYU/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1cfeyezlizhf3WSaIjGk2J30ArHKUFOYU/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1ckJ_q6bCOmD6JvNRerq1V02Nw5fhowBU/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1ckJ_q6bCOmD6JvNRerq1V02Nw5fhowBU/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1coDZXE5s2Uc4N7usjH6tpmaV9-f7VAgX/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1coDZXE5s2Uc4N7usjH6tpmaV9-f7VAgX/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1cr80AijYJBOqep9Jbxxdwp1amvs6JNnr/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1cr80AijYJBOqep9Jbxxdwp1amvs6JNnr/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1d2JdOfwfYpecdNBu2zNLXptlxYpF4Tn-/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1d2JdOfwfYpecdNBu2zNLXptlxYpF4Tn-/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1d4ZQ_jKwqOfXcQLxdGCePUxZxs4LQmus/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1d4ZQ_jKwqOfXcQLxdGCePUxZxs4LQmus/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1d7iXOaM7omfomMhmGNxoAdKmpqPdx7Fn/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1d7iXOaM7omfomMhmGNxoAdKmpqPdx7Fn/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1dCCbgsidlAHnQNMRLVIoBFQ233wr3kVk/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1dCCbgsidlAHnQNMRLVIoBFQ233wr3kVk/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1dFRH5OS-u-xPFLfGPK-Mk9h8WGnWIDCC/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1dFRH5OS-u-xPFLfGPK-Mk9h8WGnWIDCC/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1dGJtgBvK8tmt1o2FTIb_ParCpXkvcOAV/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1dGJtgBvK8tmt1o2FTIb_ParCpXkvcOAV/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1dKEppEyQ3iksWgO2h_MnQcsER4pc9PI1/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1dKEppEyQ3iksWgO2h_MnQcsER4pc9PI1/view?usp=sharing',
    },
    {
      original: 'https://drive.google.com/file/d/1jm-hic6k-ig7X-3NHUmkLu2KaF1eOZN8/view?usp=sharing',
      thumbnail: 'https://drive.google.com/file/d/1jm-hic6k-ig7X-3NHUmkLu2KaF1eOZN8/view?usp=sharing',
    },
  ];

  return (
    React.createElement('div', { style: { textAlign: 'center', marginTop: '200px' } },
      React.createElement('h1', null, 'Te amo, Vivi ', React.createElement('span', { role: 'img', 'aria-label': 'heart' }, '❤️')),
      React.createElement(ImageGallery, { items: images })
    )
  );
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const html = ReactDOMServer.renderToString(React.createElement(App));
  res.end(html);
});

server.listen(port, () => {
  console.log('Server running :)');
});
