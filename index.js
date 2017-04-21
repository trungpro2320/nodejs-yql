// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

process.env.DEBUG = 'actions-on-google:*';
const Assistant = require('actions-on-google').ApiAiAssistant;
const ASK_TIME_INTENT = 'ask-for-the-time';  
const CITY = 'geo-city';
function whatTimeIsIt(assistant) {
  var city = assistant.getArgument(CITY);
  if (city === 'Paris') 
    assistant.ask("It's noon in Paris.");
  else if (city === 'London') 
    assistant.ask("It's 11 a.m. in London.");
  else 
    assistant.ask("It’s way to early or way too late in " + city);
}
// [START YourAction]
exports.yourAction = (req, res) => {
  var assistant = new Assistant({request: request, response: response});
  var actionMap = new Map();
  actionMap.set(ASK_TIME_INTENT, whatTimeIsIt(assistant));
  assistant.handleRequest(actionMap);
};
// [END YourAction]
