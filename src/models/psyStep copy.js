const contactStep = require('./contactStep');

const psyStep = {
  question:
    'Não se preocupe, vamos da um jeito de te ajudar: Você pode encontrar apoio gratuito no site da Justiceira: https://docs.google.com/forms/d/e/1FAIpQLSft--ccomNpgfVaU0O9Xjpmg_vLmhHsKZ8SG5YiphdMRshpgg/viewform . Ou Deixe seu telefone que alguém entrará em contato com você.',
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('typeStep', message);
  }
};

module.exports = psyStep;
