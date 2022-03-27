const channelStep = require('./channelStep');
const contactStep = require('./contactStep');

const helpStep = {
  question:
    'Não se preocupe, vamos dar um jeito de te ajudar: Você consegue pedir ajuda dizendo onde está e passando suas informações:',
  options: [
    {
      id: 1,
      message: '1 - Sim, consigo pedir ajuda.',
      nextStep: channelStep
    },
    {
      id: 2,
      message: '2 - Não, ainda estou em situação crítica.',
      nextStep: contactStep
    }
  ],
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('helpStep', message);
  }
};

module.exports = helpStep;
