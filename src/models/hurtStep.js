const contactStep = require('./contactStep');
const helpStep = require('./helpStep');

const hurtStep = {
  question: 'Mana, você está machucada fisicamente ?',
  options: [
    {
      id: 1,
      message: '1 - Sim.',
      nextStep: helpStep
    },
    {
      id: 2,
      message: '2 - Não, mas não me sinto segura.',
      nextStep: helpStep
    }
  ],
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('hurtStep', message);
  }
};

module.exports = hurtStep;
