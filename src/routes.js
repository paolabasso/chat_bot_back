const routes = require('express').Router();
const uuid = require('uuid');

const firstStep = require('./models/firstStep');

const sessions = [
  // {
  //   id: 'a0c4d64f-4e3d-4606-aa5c-3e1e84a9b8e5'
  //    step: firstStep
  // }
];

const sessionFind = sessionid => {
  return sessions.find(session => session.id === sessionid);
};

const startSession = response => {
  sessionid = uuid.v4();
  console.log(sessionid);
  sessions.push({ id: sessionid, step: firstStep });

  const func = firstStep.actions;
  func('tudocerto');
  console.log(func);

  response.set('sessionid', sessionid);

  return response.json(firstStep);
};

routes.post('/', async (request, response) => {
  let { sessionid } = request.headers;
  const sessionFinded = sessionFind(sessionid);

  if (sessionFinded) {
    response.set('sessionid', sessionid);

    const { message } = request.body;

    console.log(sessionFinded.step);

    if (!sessionFinded.step) {
      return startSession(response);
    }

    const func = sessionFinded.step.actions;
    func('tudocerto 2');
    console.log(func);

    if (!sessionFinded.step.options) {
      sessionFinded.step = null;
      return response.status(204).send();
    }

    const option = sessionFinded.step.options.find(
      option => option.id === Number(message)
    );

    if (option) {
      sessionFinded.step = option.nextStep;
      return response.json(option.nextStep);
    } else {
      return response.status(400).json(sessionFinded.step);
    }
  } else {
    return startSession(response);
  }
});

module.exports = routes;
