const contactStep = require('./contactStep');

const complaintStep = {
  question:
    'Não se preocupe, vamos da um jeito de te ajudar: Temos aqui o link do canal de denuncias da Empresa X, ele é um canal totalmente seguro, sua denuncia pode ser feito de forma nominal ou anônima. Mas caso queria conversa você pode procurar:',
  options: [
    {
      id: 1,
      message: 'Canal de psicoemocional da Empresa X'
    },
    {
      id: 2,
      message: 'O canal de apoio da Safe Sisters'
    }
  ],
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('typeStep', message);
  }
};

module.exports = complaintStep;
