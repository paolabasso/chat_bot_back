const contactStep = require('./contactStep');

const hurtStep = {
  question: 'Mana,\nvocê está machucada fisicamente ?',
  options: [
    {
      id: 1,
      message: 'Sim.',
      nextStep: contactStep
    },
    {
      id: 2,
      message: 'Não, mas não me sinto segura.',
      nextStep: contactStep
    }
  ],
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('hurtStep', message);
  }
};

module.exports = hurtStep;
