/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: `${global.config.PREFIX}`,
  version: "1.0.0", 
  permission: 0,
  credits: "nayan",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
	}
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬  𝑨𝑵𝑰𝑲 𝑪𝑯𝑶𝑾𝑫𝑼𝑹𝒀  (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🐰🍒শী্ঁত্ঁ শী্ঁত্ঁ ভা্ঁব্ঁ কি্ঁসে্ঁর্ঁ জা্ঁনি্ঁ এ্ঁক্ঁটা্ঁ অ্ঁভা্ঁব্ঁ_🙊🙈\n\n✢━━━━━━━━━━━━━━━✢\nbot owner : Anik fb:- https://www.facebook.com/leo.khaciaxchiax (✷‿✷) ",
	     " === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===\n  --❖-- 𝐈𝐭'𝐬  𝑨𝑵𝑰𝑲 𝑪𝑯𝑶𝑾𝑫𝑼𝑹𝒀 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n--ღღ🦋🖤✨-\n\n--𝐋𝐨𝐯𝐞 𝐢'𝐬 𝐁𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 __☺️🦋✨\n\n--𝐥𝐟 𝐭𝐡𝐞 𝐥𝐨𝐯𝐞𝐝 𝐨𝐧𝐞 𝐢𝐬 𝐫𝐢𝐠𝐡𝐭..!🦋🍁💫\n\n-ভালোবাসা সুন্দর ___,🖤🦋\n\n- যদি প্রিয় মানুষটি সঠিক হয়....!☺️🖤🙂✨🌼\n\n✢━━━━━━━━━━━━━━━✢\n\nbot owner : Anik fb:- https://www.facebook.com/leo.khaciaxchiax(✷‿✷) ",
	     "___=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬  𝑨𝑵𝑰𝑲 𝑪𝑯𝑶𝑾𝑫𝑼𝑹𝒀 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n❥◎⃝! শূন্যতায় ভাসি🙃 \n\n❥কখনো হাসি -😁💚_আবার কাঁদি!-😅\n\n❥বেলা শেষে 🌌শূন্যতায় জড়িয়ে ও পূর্ণতা খুঁজি😊❤\n\n✢━━━━━━━━━━━━━━━✢\n\nbot owner contact fb:- https://www.facebook.com/leo.khaciaxchiax (✷‿✷)", 
	     "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--𝐈𝐭'𝐬  𝑨𝑵𝑰𝑲 𝑪𝑯𝑶𝑾𝑫𝑼𝑹𝒀 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n ❥»̶̶͓͓͓̽̽̽⑅⃝✺❥᭄❥\n\n___💚__পৃথিবীটা আজ...\n\nমিথ্যে মায়াতে ভরা...!💚🌺\n\n____🥀_তাই তো পৃথীবীর মানুষ আজ....!\n\nঅভিনয়ের সেরা...👎🥀\n\n✢━━━━━━━━━━━━━━━✢\n\nbot owner : Anik fb:- https://www.facebook.com/leo.khaciaxchiax (✷‿✷)",
	     "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n💜🔐🌈 ___\n\n- 𝗧𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲-!! 😽🧡✨\n\n🍁_সবাই তো খুশি চায়_আর আমি প্রতিটা খুশিতে তোমাকে চাই⚜️— -!!-) 😊🖤\n\n___💜🔐🌈\n\n✢━━━━━━━━━━━━━━━✢\n\nbot owner : Anik (✷‿✷)", 
	     "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬  𝑨𝑵𝑰𝑲 𝑪𝑯𝑶𝑾𝑫𝑼𝑹𝒀 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n>🐰✨𝑻𝒉𝒊𝒔 𝒍𝒊𝒏𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖🖤🌸\n\n___চোখের দেখায় নয়,মনের দেখায় ভালবাসি!!😇✨\n\n- কাছে থাকো কিংবা দূরে,তোমাকে ভেবেই হাসি!!🖤🐰\n\n💖🦋\n\n✢━━━━━━━━━━━━━━━✢\n\nbot owner : Anik fb:- https://www.facebook.com/leo.khaciaxchiax (✷‿✷)", 
	     "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--  𝑨𝑵𝑰𝑲 𝑪𝑯𝑶𝑾𝑫𝑼𝑹𝒀 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n:༅༎💙🦋\n༆𝐓𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞_⚠︎🙅🏻‍♂️✨\n\n😽︵۵মানুষ! হচ্ছে!বৃষ্টির!মতো!Life a ! অনেক মানুষ !আসবে!অনেক মানুষ !যাবে!💔🥰\n\n:༅༎💙🦋 সঠিক!মানুষটা!ঠিকই!ছায়া!হয়ে!পাশে!থাকবে -/ ఌ︵💚🌻\n\n✢━━━━━━━━━━━━━━━✢\n\nbot owner : Anik fb:- https://www.facebook.com/leo.khaciaxchiax (✷‿✷)", 
	     "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--  𝑨𝑵𝑰𝑲 𝑪𝑯𝑶𝑾𝑫𝑼𝑹𝒀 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n:(-𝙄 𝙖𝙢 𝘼𝙙𝙙𝙞𝙘𝙩𝙚𝙙 𝙏𝙤👀🙈\n\n_')𝙈𝙮 𝙁𝙖𝙫𝙤𝙧𝙞𝙩𝙚 𝙋𝙚𝙧𝙨𝙤𝙣..!\n\n🐰🦋 -(^আমি আমার প্রিয় মানুষটার প্রতি আসক্ত >!💖🔐🍭)😇\n\n✢━━━━━━━━━━━━━━━✢\n\nbot owner : Anik fb:- https://www.facebook.com/leo.khaciaxchiax (✷‿✷)",
	     "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝑨𝑵𝑰𝑲 𝑪𝑯𝑶𝑾𝑫𝑼𝑹𝒀 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙩𝙝𝙞𝙨 𝙡𝙞𝙣𝙚-!!🦋🐭\n\n🐰' —'পারফেক্ট' কাউকে পাবার থেকে'কাউকে' পারফেক্ট' বানিয়ে নিতে পারাটা' বড় অর্জন'--)🌼💜\n\n___🍒🖇️✨___\n\n✢━━━━━━━━━━━━━━━✢\n\nbot owner : Anik fb:- https://www.facebook.com/leo.khaciaxchiax (✷‿✷)",
	     "=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬  𝑨𝑵𝑰𝑲 𝑪𝑯𝑶𝑾𝑫𝑼𝑹𝒀 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n°🐹💙🍒\n\n_𝗧𝗿𝘂𝘀𝘁 𝗺e 🔐💚\n°\n\n__!!☁️✨🌺আপনাকে পাওয়ার দাবি!আমি মৃত্যুর পরও ছাড়বো না,,🔐💚 🙂\n\n✢━━━━━━━━━━━━━━━✢\n\nbot owner : Anik fb:- https://www.facebook.com/ANIK.TERA.REAL.ABBU (✷‿✷)"
             ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = ["https://i.postimg.cc/SxxvsxV6/received-317238701215667.jpg",
	      "https://i.postimg.cc/mrwkSV7f/received-367763132328600.jpg", 
	      "https://i.postimg.cc/Vs3tvGRD/received-3207389162886889.jpg", 
	      "https://i.postimg.cc/g0Cp8ZTF/received-2647486782086201.jpg", 
	      'https://i.postimg.cc/wMWbcKjy/received-284757637900463.jpg', 
	      "https://i.postimg.cc/bJmR4xc4/received-1391710821460123.jpg", 
	      "https://i.postimg.cc/QNp7BgyD/received-6652678368177609.jpg", 
	      'https://i.postimg.cc/j5hsTjZp/received-732750088714045.jpg',
	      "https://i.postimg.cc/GhF6Sfgf/received-860474685728923.jpg",
	      "https://i.postimg.cc/bN5SW6GQ/received-1004453970637904.jpg", 
	      'https://i.postimg.cc/sxds5h1G/IMG-20231206-113213.jpg',
	      "https://i.postimg.cc/MTs1TzGL/1701833338449.jpg",
	      "https://i.postimg.cc/mrwkSV7f/received-367763132328600.jpg",
	      "https://i.postimg.cc/mrwkSV7f/received-367763132328600.jpg",
	      "https://i.postimg.cc/SxxvsxV6/received-317238701215667.jpg", 
	      "https://i.postimg.cc/mrwkSV7f/received-367763132328600.jpg", 
	      "https://i.postimg.cc/Vs3tvGRD/received-3207389162886889.jpg", 
	      "https://i.postimg.cc/g0Cp8ZTF/received-2647486782086201.jpg", 
	      'https://i.postimg.cc/wMWbcKjy/received-284757637900463.jpg', 
	      "https://i.postimg.cc/bJmR4xc4/received-1391710821460123.jpg",
	      "https://i.postimg.cc/QNp7BgyD/received-6652678368177609.jpg", 
	      'https://i.postimg.cc/j5hsTjZp/received-732750088714045.jpg',
	      "https://i.postimg.cc/GhF6Sfgf/received-860474685728923.jpg", 
	      "https://i.postimg.cc/bN5SW6GQ/received-1004453970637904.jpg",
	      'https://i.postimg.cc/sxds5h1G/IMG-20231206-113213.jpg',
	      "https://i.postimg.cc/MTs1TzGL/1701833338449.jpg", 
	      "https://i.postimg.cc/mrwkSV7f/received-367763132328600.jpg", 
	      "https://i.postimg.cc/mrwkSV7f/received-367763132328600.jpg",


  
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
