module.exports = (items) => `
  <script src="/lib/react.development.js"></script>
  <script src="/lib/react-dom.development.js"></script>

  ${items.map(item => {
    return `<script type="text/javascript" src="bundle.js"></script>`;
  }).join('\n')}

  <script>
    ${items.map(item => `
      ReactDOM.hydrate(
        React.createElement(${item}),
        document.getElementById('${item}')
      );`).join('\n')}
  </script>
`;