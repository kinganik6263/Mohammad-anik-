const fs = require("fs");
module.exports.config = {
  name: "kemon acho",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Kemon acho")==0 || (event.body.indexOf("Kemon acen")==0 || (event.body.indexOf("কেমন আছো")==0 || (event.body.indexOf("কেমন আছেন")==0)))) {
		var msg = {
				body: "আলহামদুলিল্লাহ আমি ভালো আছি আপনি কেমন আছেন 🥀🌺"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
