const hurtStep = require('./hurtStep');
const orientationStep = require('./orientationStep');

const firstStep = {
  question: 'Olá Mana, Tudo bem? Eu sou a Guardiã, me diz se você está segura.',
  options: [
    {
      id: 1,
      message: '1 - Não, preciso de ajuda.',
      nextStep: hurtStep
    },
    {
      id: 2,
      message: '2 - Ainda estou mas preciso de ajuda.',
      nextStep: hurtStep
    },
    {
      id: 3,
      message: '3 - Estou segura, mas preciso de orientação.',
      nextStep: orientationStep
    }
  ],
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('firstStep', message);
  }
};

module.exports = firstStep;
