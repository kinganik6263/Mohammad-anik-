module.exports.config = {
  'name': 'dp',
    prefix: true,
  'version': '2.6.0',
  'permssion': 0x0,
  'credits': "Islamick Chat",
  'description': '',
  'category': "Love",
  'usages': "[tag]",
  'cooldowns': 0x5,
  'dependencies': {
    'axios': '',
    'fs-extra': '',
    'path': '',
    'jimp': ''
  }
};
module.exports.onLoad = async () => {
  const {
    resolve: _0x3f2f66
  } = global.nodemodule.path;
  const {
    existsSync: _0x58018c,
    mkdirSync: _0x2dcf81
  } = global.nodemodule['fs-extra'];
  const {
    downloadFile: _0x5a7570
  } = global.utils;
  const _0x35089e = __dirname + '/cache/canvas/';
  const _0x7a9f3a = _0x3f2f66(__dirname, "cache/canvas", "dp.jpeg");
  if (!_0x58018c(_0x35089e + "canvas")) {
    _0x2dcf81(_0x35089e, {
      'recursive': true
    });
  }
  if (!_0x58018c(_0x7a9f3a)) {
    await _0x5a7570("https://i.imgur.com/AgvjN3s.jpg", _0x7a9f3a);
  }
};
async function makeImage({
  one: _0x500df6,
  two: _0x45d540
}) {
  const _0x50cce5 = global.nodemodule["fs-extra"];
  const _0x4d58c8 = global.nodemodule.path;
  const _0x258953 = global.nodemodule.axios;
  const _0x5e3560 = global.nodemodule.jimp;
  const _0x1b6a7b = _0x4d58c8.resolve(__dirname, "cache", "canvas");
  let _0x282aa1 = await _0x5e3560.read(_0x1b6a7b + '/dp.jpeg');
  let _0x5bc072 = _0x1b6a7b + ("/love_" + _0x500df6 + '_' + _0x45d540 + ".png");
  let _0x107084 = _0x1b6a7b + ("/avt_" + _0x500df6 + ".png");
  let _0x59ccb1 = _0x1b6a7b + ("/avt_" + _0x45d540 + ".png");
  let _0x4da869 = (await _0x258953.get("https://graph.facebook.com/" + _0x500df6 + '/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662', {
    'responseType': "arraybuffer"
  })).data;
  _0x50cce5.writeFileSync(_0x107084, Buffer.from(_0x4da869, "utf-8"));
  let _0x1517da = (await _0x258953.get('https://graph.facebook.com/' + _0x45d540 + '/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662', {
    'responseType': 'arraybuffer'
  })).data;
  _0x50cce5.writeFileSync(_0x59ccb1, Buffer.from(_0x1517da, "utf-8"));
  let _0x25c0ea = await _0x5e3560.read(await circle(_0x107084));
  let _0x279174 = await _0x5e3560.read(await circle(_0x59ccb1));
  _0x282aa1.composite(_0x25c0ea.resize(0xf0, 0xe4), 0x1ce, 0x50).composite(_0x279174.resize(0xeb, 0xeb), 0x2c, 0x4d);
  let _0x3a16b1 = await _0x282aa1.getBufferAsync("image/png");
  _0x50cce5.writeFileSync(_0x5bc072, _0x3a16b1);
  _0x50cce5.unlinkSync(_0x107084);
  _0x50cce5.unlinkSync(_0x59ccb1);
  return _0x5bc072;
}
async function circle(_0xa7b975) {
  const _0x418738 = require("jimp");
  _0xa7b975 = await _0x418738.read(_0xa7b975);
  _0xa7b975.circle();
  return await _0xa7b975.getBufferAsync("image/png");
}
module.exports.run = async function ({
  event: _0x1c1a41,
  api: _0x3d6631,
  args: _0x284de7
}) {
  const _0x2b6b14 = global.nodemodule["fs-extra"];
  const {
    threadID: _0x3a70bf,
    messageID: _0x222aac,
    senderID: _0x5b283b
  } = _0x1c1a41;
  var _0x275937 = Object.keys(_0x1c1a41.mentions)[0x0];
  let _0x3c4738 = _0x1c1a41.mentions[_0x275937].replace('@', '');
  if (!_0x275937) {
    return _0x3d6631.sendMessage("Please tag 1 person", _0x3a70bf, _0x222aac);
  } else {
    return makeImage({
      'one': _0x5b283b,
      'two': _0x275937
    }).then(_0x45971c => _0x3d6631.sendMessage({
      'body': "__)🍒_🐼🦋🌈\n\nআপনি আমার উপর আসক্ত হয়ে দেখুন 😊🦋\n" + _0x3c4738 + "\n\n❤︎______আমি আপনার ওপর কখন ও বিরক্ত হবো না ☺️✨❤️",
      'mentions': [{
        'tag': _0x3c4738,
        'id': _0x275937
      }],
      'attachment': _0x2b6b14.createReadStream(_0x45971c)
    }, _0x3a70bf, () => _0x2b6b14.unlinkSync(_0x45971c), _0x222aac));
  }
};
