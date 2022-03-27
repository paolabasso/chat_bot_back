const finalStep = {
  question:
    'Estamos realizando melhorias, essa sessão será encerrada. Deixe seu telefone e te avisaremos quando estivermos prontas.',
  error: 'Opção inválida.',
  actions: function (message) {
    console.log('finalStep', message);
  }
};

module.exports = finalStep;
