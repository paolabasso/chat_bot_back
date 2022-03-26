const contactStep = require('./contactStep');
const helpStep = require('./helpStep');

const insecurityStep = {
  question: 'Você está sofrendo algum tipo de violência?',
  options: [
    {
      id: 1,
      message: 'Sim. Física.',
      nextStep: helpStep
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
    console.log('helpStep', message);
  }
};

module.exports = insecurityStep;
