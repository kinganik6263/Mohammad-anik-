const axios = require('axios');
const fs = require('fs-extra');
const jimp = require('jimp');
module.exports.config = {
	name: "fbcover",
  version: "1.0.0",
  permission: 0,
  credits: "Dipto",
  description: "Facebook cover",
  prefix: false, 
  category: "Cover", 
  usages: "name - title - address - email - phone - color (default = white)",
  cooldowns: 5
};
module.exports.run = async function({ api, event, args, Users}) { 
const info = args.join(" "); 
  let id;
  if (event.type === 'message_reply') {
      id = event.messageReply.senderID;
  } else {
      id = Object.keys(event.mentions)[0] ||  event.senderID;
  }
var nam = await Users.getNameUser(id); 
if (!info) { return api.sendMessage(`Please enter in the format:\n${global.config.PREFIX}fbcover2 v6 name - title - address - email - phone - color (default = white)`, event.threadID); 
} 
else { 
  const msg = info.split("-"); 
  const v = msg[0].trim();
  const name = msg[1].trim() || " "; 
  const subname = msg[2].trim() || " "; 
  const address = msg[3].trim() || ""; 
  const email = msg[4].trim() || " "; 
  const phone = msg[5].trim() || " "; 
  const color = msg[6].trim() || "white";
  //const uid = msg[7].trim();
api.sendMessage(`Processing your cover 🫰`, event.threadID,
  (err, info) => 
  setTimeout(() => { api.unsendMessage(info.messageID) 
        }, 5000));
  const img = `https://noobs-apihouse.onrender.com/dipto/cover/${v}?name=${encodeURIComponent(name)}&subname=${encodeURIComponent(subname)}&number=${encodeURIComponent(phone)}&address=${encodeURIComponent(address)}&email=${encodeURIComponent(email)}&colour=${encodeURIComponent(color)}&uid=${id}`; 
  
  try { 
const response = await axios.get(img, { responseType: 'arraybuffer' }); 
const image = await jimp.read(response.data); 
const outputPath = `./fbcover_${id}.png`; 
  await image.writeAsync(outputPath); 
const attachment = fs.createReadStream(outputPath);
       api.sendMessage({ body: `◆━━━━━━━━━━━━━━━━━━━━━━━━━━━◆\n🔵𝗙𝗜𝗥𝗦𝗧 𝗡𝗔𝗠𝗘: ${name}\n⚫𝗦𝗨𝗕 𝗡𝗔𝗠𝗘:${subname}\n⚪𝗔𝗗𝗗𝗥𝗘𝗦𝗦: ${address}\n📫𝗘𝗠𝗔𝗜𝗟: ${email}\n☎️𝗣𝗛𝗢𝗡𝗘 𝗡𝗢.: ${phone}\n☢️𝗖𝗢𝗟𝗢𝗥: ${color}\n💁𝗨𝗦𝗘𝗥 𝗡𝗔𝗠𝗘: ${nam}\n◆━━━━━━━━━━━━━━━━━━━━━━━━━━━◆`,attachment
}, event.threadID, () => fs.unlinkSync(outputPath), event.messageID); 
      } catch (error) { 
    console.error(error); 
    api.sendMessage("An error occurred while generating the FB cover.", event.threadID); 
  }
}
}
