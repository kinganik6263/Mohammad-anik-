module.exports.config = {
  'name': "info",
  prefix: true,
  'version': '1.0.1',
  'permssion': 0x0,
  'credits': "Joshua Sy",
  'description': "Admin and Bot info.",
  'category': "...",
  'cooldowns': 0x1,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async function ({
  api: _0x5eaa83,
  event: _0xc38e6f,
  args: _0x28c2ba,
  client: _0x22ba54,
  Users: _0x213d6c,
  Threads: _0x4e5b90,
  __GLOBAL: _0x3d56dc,
  Currencies: _0x2fe6d3
}) {
  const _0x15c050 = global.nodemodule.request;
  const _0x16deeb = global.nodemodule["fs-extra"];
  const _0x20dfee = process.uptime();
  const _0x3bfa00 = Math.floor(_0x20dfee / 3600);
  const _0x4eacc7 = Math.floor(_0x20dfee % 3600 / 0x3c);
  const _0x393774 = Math.floor(_0x20dfee % 0x3c);
  const _0x3943bb = require('moment-timezone');
  var _0x34f3cd = _0x3943bb.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
  var _0x4458ad = ["https://i.postimg.cc/jjvqrQgP/Screenshot-2023-12-11-20-16-46-177-com-facebook-lite.jpg", "https://i.postimg.cc/3w2pj6w7/Screenshot-2023-12-11-20-16-57-211-com-facebook-lite.jpg", "https://i.postimg.cc/FR849Pjd/Screenshot-2023-12-11-20-17-09-430-com-facebook-lite.jpg"];
  var _0x6624b1 = () => _0x5eaa83.sendMessage({
    'body': "➢🄾🅆🄽🄴🅁   🄰🄽🄳   🄱🄾🅃  🄸🄽🄵🄾\n\n⁂𝘽𝙤𝙩 𝙉𝙖𝙢𝙚: " + global.config.BOTNAME + "\n\n✡𝘽𝙤𝙩 𝙋𝙧𝙚𝙛𝙞𝙭: " + global.config.PREFIX + "\n\n✫𝘽𝙤𝙩 𝙊𝙬𝙣𝙚𝙧🌼 :♦️𝑨𝑵𝑰𝑲 𝑪𝑯𝑶𝑾𝑫𝑼𝑹𝒀 𝑨𝑵𝑫 𝑺𝑨𝑫𝑰𝑲𝑼𝑹𝑹𝑨𝑯𝑴𝑨𝑵-𝑺𝑨𝑯𝑰𝑫♦️,\n\n✬𝐅𝐛 𝐋𝐢𝐧𝐤: ♣️\nhttps://www.facebook.com/leo.khaciaxchiax\n✬𝐅𝐛 𝐋𝐢𝐧𝐤: https://www.facebook.com/leo.khaciaxchiax,\n\n➳✴️𝙈𝘼𝙎𝙏𝙀𝙍 𝙊𝙁 𝘽𝙊𝙏'𝙎 𝙄𝙉𝙎𝙄𝘿𝙀✴️\n\n🔰𝘽𝙤𝙩 𝘼𝙙𝙢𝙞𝙣𝙨🔰: [𝑨𝑵𝑰𝑲 𝑪𝑯𝑶𝑾𝑫𝑼𝑹𝒀 𝑨𝑵𝑫 𝑺𝑨𝑫𝑰𝑲𝑼𝑹𝑹𝑨𝑯𝑴𝑨𝑵-𝑺𝑨𝑯𝑰𝑫]\n\n\n➳𝙐𝙥𝙩𝙞𝙢𝙚 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 ✨: 30.0.1\n\n✬𝐌𝐨𝐝𝐢𝐟𝐢𝐞𝐝 𝐁𝐲 : 𝑨𝑵𝑰𝑲 𝑪𝑯𝑶𝑾𝑫𝑼𝑹𝒀 𝑨𝑵𝑫 𝑺𝑨𝑫𝑰𝑲𝑼𝑹𝑹𝑨𝑯𝑴𝑨𝑵-𝑺𝑨𝑯𝑰𝑫 🔰\n\n✬𝙏𝙤𝙙𝙖𝙮 𝙞𝙨📜: " + _0x34f3cd + " \n\n➳𝘽𝙤𝙩 𝙞𝙨 𝙍𝙪𝙣𝙣𝙞𝙣𝙜⌚ " + _0x3bfa00 + ':' + _0x4eacc7 + ':' + _0x393774 + ".\n\n🔻𝐁𝐎𝐓 𝐔𝐍𝐃𝐄𝐑 𝐏𝐑𝐎𝐓𝐄𝐂𝐓𝐄𝐃 𝐁𝐘 𝐀𝐃𝐌𝐈𝐍𝐒🔺 \n\n✫𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝙐𝙨𝙞𝙣𝙜 " + global.config.BOTNAME + " Bot!",
    'attachment': _0x16deeb.createReadStream(__dirname + '/cache/juswa.jpg')
  }, _0xc38e6f.threadID, () => _0x16deeb.unlinkSync(__dirname + "/cache/juswa.jpg"));
  return _0x15c050(encodeURI(_0x4458ad[Math.floor(Math.random() * _0x4458ad.length)])).pipe(_0x16deeb.createWriteStream(__dirname + '/cache/juswa.jpg')).on("close", () => _0x6624b1());
};
