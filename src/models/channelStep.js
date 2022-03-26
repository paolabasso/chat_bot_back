const contactStep = require('./contactStep');

//esse é um passo final

const channelStep = {
  question: 'Temos alguns canais que podem te ajudar:',
  options: [
    {
      id: 1,
      message: 'Disque 180 (denuncia violência)'
    },
    {
      id: 2,
      message: 'Disque 192 (SAMU)'
    },
    {
      id: 3,
      message: 'Você pode ser acolhida também no site {ONG parceira "link"}'
    }
  ],
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('typeStep', message);
  }
};

module.exports = channelStep;
