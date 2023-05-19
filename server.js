const http = require('http');
const port = 8080;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ImageGallery = require('react-image-gallery').default;

const App = () => {
  const images = [
    {
      original: 'https://drive.google.com/uc?export=view&id=bt_6yCq2Yc6i33Hf4USplgwHOKEN_pXw',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1bt_6yCq2Yc6i33Hf4USplgwHOKEN_pXw',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1bup1tREG8GkrU33nzxBIaG2Dv8gI-1-e',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1bup1tREG8GkrU33nzxBIaG2Dv8gI-1-e',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1bxrBomPy74Ub_jAvpmmM8E2d0dtmEmOK',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1bxrBomPy74Ub_jAvpmmM8E2d0dtmEmOK',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1cABSS0UkWJYhbUjWwQZKXYn1t9ngLzsh',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1cABSS0UkWJYhbUjWwQZKXYn1t9ngLzsh',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1cFrBW-TJB35jPuBnhkYpREvRrIOLFLH_',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1cFrBW-TJB35jPuBnhkYpREvRrIOLFLH_',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1cHG6CPxCEoocsKpbOY9yAZdvq1OQhxl8',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1cHG6CPxCEoocsKpbOY9yAZdvq1OQhxl8',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1cHnSJMfL-SP0Epnksj01icdniw8-D5Yj',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1cHnSJMfL-SP0Epnksj01icdniw8-D5Yj',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1cP7C_2H22sFAAQUn1VHcP3DQf8o2TtEZ',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1cP7C_2H22sFAAQUn1VHcP3DQf8o2TtEZ',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1cXoMW60rnrPR8cI_FzVLAompcvdKRofP',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1cXoMW60rnrPR8cI_FzVLAompcvdKRofP',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1ccNdtMn_3OyULyjAe4PahQEv6HQQY6le',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1ccNdtMn_3OyULyjAe4PahQEv6HQQY6le',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1cc_GQbgBqPmFnU5BF04W9dxPzx6xuwEn',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1cc_GQbgBqPmFnU5BF04W9dxPzx6xuwEn',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1cd8pC90hlIBR5lDaUQLRhdbYzVQHmdFr',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1cd8pC90hlIBR5lDaUQLRhdbYzVQHmdFr',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1cfeyezlizhf3WSaIjGk2J30ArHKUFOYU',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1cfeyezlizhf3WSaIjGk2J30ArHKUFOYU',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1ckJ_q6bCOmD6JvNRerq1V02Nw5fhowBU',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1ckJ_q6bCOmD6JvNRerq1V02Nw5fhowBU',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1coDZXE5s2Uc4N7usjH6tpmaV9-f7VAgX',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1coDZXE5s2Uc4N7usjH6tpmaV9-f7VAgX',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1cr80AijYJBOqep9Jbxxdwp1amvs6JNnr',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1cr80AijYJBOqep9Jbxxdwp1amvs6JNnr',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1d2JdOfwfYpecdNBu2zNLXptlxYpF4Tn-',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1d2JdOfwfYpecdNBu2zNLXptlxYpF4Tn-',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1d4ZQ_jKwqOfXcQLxdGCePUxZxs4LQmus',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1d4ZQ_jKwqOfXcQLxdGCePUxZxs4LQmus',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1d7iXOaM7omfomMhmGNxoAdKmpqPdx7Fn',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1d7iXOaM7omfomMhmGNxoAdKmpqPdx7Fn',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1dCCbgsidlAHnQNMRLVIoBFQ233wr3kVk',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1dCCbgsidlAHnQNMRLVIoBFQ233wr3kVk',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1dFRH5OS-u-xPFLfGPK-Mk9h8WGnWIDCC',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1dFRH5OS-u-xPFLfGPK-Mk9h8WGnWIDCC',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1dGJtgBvK8tmt1o2FTIb_ParCpXkvcOAV',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1dGJtgBvK8tmt1o2FTIb_ParCpXkvcOAV',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1dKEppEyQ3iksWgO2h_MnQcsER4pc9PI1',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1dKEppEyQ3iksWgO2h_MnQcsER4pc9PI1',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1jm-hic6k-ig7X-3NHUmkLu2KaF1eOZN8',
      thumbnail: 'https://drive.google.com/uc?export=view&id=1jm-hic6k-ig7X-3NHUmkLu2KaF1eOZN8',
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
