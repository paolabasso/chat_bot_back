const contactStep = require('./contactStep');
const helpStep = require('./helpStep');

const typeStep = {
  question: 'Você está sofrendo algum tipo de violência?',
  options: [
    {
      id: 1,
      message: '1 - Sim. Física.',
      nextStep: helpStep
    },
    {
      id: 2,
      message: '2 - Sim. Psicológica',
      nextStep: contactStep
    },
    {
      id: 3,
      message: '3 - Não, mas tenho um caso para denunciar.',
      nextStep: contactStep
    }
  ],
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('typeStep', message);
  }
};

module.exports = typeStep;
