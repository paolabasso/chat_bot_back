const contactStep = require('./contactStep');
const helpStep = require('./insecurityStep');

const hurtStep = {
  question: 'Mana,\nvocê está machucada fisicamente ?',
  options: [
    {
      id: 1,
      message: 'Sim.',
      nextStep: helpStep
    },
    {
      id: 2,
      message: 'Não, mas não me sinto segura.',
      nextStep: helpStep
    }
  ],
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('hurtStep', message);
  }
};

module.exports = hurtStep;
