const contactStep = {
  question: 'Deixe seu telefone que te ligaremos. Ou ligue para nós 1199857878',
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('contactStep', message);
  }
};

module.exports = contactStep;
