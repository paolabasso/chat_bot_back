const hurtStep = require('./hurtStep');

const firstStep = {
  question: 'Olá Mana, Tudo bem?\nEu sou a Guardiã, me diz se você está segura',
  options: [
    {
      id: 1,
      message: 'Não, preciso de ajuda.',
      nextStep: hurtStep
    },
    {
      id: 2,
      message: 'Ainda estou mas preciso de ajuda.',
      nextStep: hurtStep
    },
    {
      id: 3,
      message: 'Estou segura, mas preciso de orientação.',
      nextStep: hurtStep
    }
  ],
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('firstStep', message);
  }
};

module.exports = firstStep;
