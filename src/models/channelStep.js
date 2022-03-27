const contactStep = require('./contactStep');

//esse é um passo final

const channelStep = {
  question:
    'Temos alguns canais que podem te ajudar:<br/>Disque 180 (denuncia violência)<br/> Disque 192 (SAMU) <br/> Você pode ser acolhida também no site {ONG parceira "link"}',
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('channelStep', message);
  }
};

module.exports = channelStep;
