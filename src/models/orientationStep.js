const finalStep = require('./FinalStep');

const orientationStep = {
  question:
    'Legal! Estamos felizes por estar segura, agora nos digas como você precisa de ajuda?',
  options: [
    {
      id: 1,
      message:
        '1 - Quero saber sobre o Canal de denuncias {link canal da empresa};',
      nextStep: finalStep
    },
    {
      id: 2,
      message: '2 - Quero saber mais sobre o manifesto Safe Sister.',
      nextStep: finalStep
    },
    {
      id: 3,
      message: '3 - Quero saber a agenda do próximo encontro',
      nextStep: finalStep
    }
  ],
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('orientationStep', message);
  }
};

module.exports = orientationStep;
