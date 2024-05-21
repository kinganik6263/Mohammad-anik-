const axios = require("axios");

module.exports.config = {
  name: "anik",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "control admin lists",
  prefix: false,
  category: "mini",
  usages: "Mini [ask]",
  cooldowns: 5,
};

module.exports.handleEvent = async function ({ api, event }) {
   const content = event.body ? event.body : '';
    const body = content.toLowerCase();
    if (!(body.indexOf("Anik") === 0 || body.indexOf("anik") === 0 || body.indexOf("বট") === 0 || body.indexOf("jan") === 0 || body.indexOf("Jan") === 0 || body.indexOf("অনিক") === 0)) return;
    const args = event.body.split(/\s+/);
    args.shift();
    

    let { messageID, threadID, senderID } = event;
    let tid = threadID,
        mid = messageID;
    const contents = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage(" হুম জান বলো কি বলবা...😘🥀", tid, mid);
    try {
        const res = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=bn&message=${contents}&filter=true`);
        const respond = res.data.success;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
            api.sendMessage(respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("🤖 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚐𝚎𝚝𝚝𝚒𝚗𝚐 𝙳𝚊𝚝𝚊𝚋𝚊𝚜𝚎, 𝚜𝚘𝚛𝚛𝚢 𝚋𝚊𝚋𝚎 🥺", tid, mid);
    }
};

module.exports.run = async function ({ api, event }) {};
