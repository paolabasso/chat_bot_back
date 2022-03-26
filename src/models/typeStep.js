const contactStep = require('./contactStep');

const typeStep = {
  question: 'Você está sofrendo algum tipo de violência?',
  options: [
    {
      id: 1,
      message: 'Sim. Física.',
      nextStep: channelStep
    },
    {
      id: 2,
      message: 'Sim. Psicológica',
      nextStep: contactStep
    },
    {
      id: 3,
      message: 'Não, mas tenho um caso para denunciar.',
      nextStep: contactStep
    }
  ],
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('typeStep', message);
  }
};

module.exports = typeStep;
