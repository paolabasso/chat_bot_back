const contactStep = require('./contactStep');

const typeStep = {
  question:
    'Legal! Estamos felizes por estar segura, agora nos digas como você precisa de ajuda?',
  options: [
    {
      id: 1,
      message: 'Quero saber sobre o Canal de denuncias {link canal da empresa};'
    },
    {
      id: 2,
      message: 'Quero saber mais sobre o manifesto Safe Sister.'
    },
    {
      id: 3,
      message: 'Quero saber a agenda do próximo encontro'
    }
  ],
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('typeStep', message);
  }
};

module.exports = typeStep;
