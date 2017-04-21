'use strict';

process.env.DEBUG = 'actions-on-google:*';
const Assistant = require('actions-on-google').ApiAiAssistant;
const ASK_TIME_INTENT = 'ask-for-the-time';  
const CITY = 'geo-city';
const ASK_TIME_INTENT = 'ask-for-the-time';  

function whatTimeIsIt(assistant) {
  var city = assistant.getArgument(CITY);
  if (city === 'Paris') 
    assistant.ask("It's noon in Paris.");
  else if (city === 'London') 
    assistant.ask("It's 11 a.m. in London.");
  else 
    assistant.ask("It’s way to early or way too late in " + city);
}
exports.agent = function(request, response) {
    var assistant = new Assistant({request: request, response: response});
    var actionMap = new Map();
    actionMap.set(ASK_TIME_INTENT, whatTimeIsIt);
    assistant.handleRequest(actionMap);
};
