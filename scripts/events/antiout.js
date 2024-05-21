module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "Nayan",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator na pasikat";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`এড করতে পারতাছি না কেন  ${name} ওরে 🥹 \n\n${name} হালায় আমারে ব্লক মারছে ব্লক মাইরা দুই নাম্বারি করছে 🥺😭 `, event.threadID)
   } else api.sendMessage(`${name} কিরে কোথায় পলাশ ঠিকই তো ধরে নিয়ে আনছি 🤣🤣 \n\n${name} আমি থাকতে তুই লিভ নিতে পারবি না 🤣🤣`, event.threadID);
  })
 }
}
