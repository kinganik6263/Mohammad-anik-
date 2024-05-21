const fs = require("fs");
module.exports.config = {
	name: "reply1",
  prefix: true,
    version: "1.0.1",
	permssion: 0,
	credits: "nai", 
	description: "salam",
	category: "no prefix",
	usages: "salam",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("assalamu alaikum")==0 || event.body.indexOf("assalamualaikum")==
|| event.body.indexOf("asalamualaikum")==0 || event.body.indexOf("আসসালামুয়ালাইকুম")==0) {
		var msg = {
				body: "ওয়ালাইকুমুস সালাম 😇",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }￼Not

