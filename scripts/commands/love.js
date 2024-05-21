/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
  name: "love",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "",
  prefix: true,
  category: "Love",
  usages: "love @",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "path": "",
    "jimp": ""
  }
};
module.exports.onLoad = async () => {
  const {
    resolve: _0x28101b
  } = global.nodemodule.path;
  const {
    existsSync: _0xc707ef,
    mkdirSync: _0x56bd2f
  } = global.nodemodule["fs-extra"];
  const {
    downloadFile: _0x29bf1b
  } = global.utils;
  const _0x2a9097 = __dirname + "/cache/";
  const _0x21c7eb = _0x28101b(__dirname, "cache", "ewhd.png");
  if (!_0xc707ef(_0x2a9097 + '')) {
    _0x56bd2f(_0x2a9097, {
      'recursive': true
    });
  }
  if (!_0xc707ef(_0x21c7eb)) {
    await _0x29bf1b('https://drive.google.com/uc?id=1N2tFzXJUJ3p472FqRCI2ZkUYPMZHSsua', _0x21c7eb);
  }
};
async function makeImage({
  one: _0x4619b9,
  two: _0x2b929b
}) {
  const _0xdf5f9f = global.nodemodule["fs-extra"];
  const _0x445bb3 = global.nodemodule.path;
  const _0x3c3e59 = global.nodemodule.axios;
  const _0x124c18 = global.nodemodule.jimp;
  const _0x2f75d6 = _0x445bb3.resolve(__dirname, "cache");
  let _0x31cacb = await _0x124c18.read(_0x2f75d6 + '/ewhd.png');
  let _0x699b7c = _0x2f75d6 + ("/ewhd_" + _0x4619b9 + '_' + _0x2b929b + ".png");
  let _0x1a441d = _0x2f75d6 + ("/avt_" + _0x4619b9 + ".png");
  let _0x4a6458 = _0x2f75d6 + ('/avt_' + _0x2b929b + ".png");
  let _0x3e9393 = (await _0x3c3e59.get("https://graph.facebook.com/" + _0x4619b9 + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
    'responseType': "arraybuffer"
  })).data;
  _0xdf5f9f.writeFileSync(_0x1a441d, Buffer.from(_0x3e9393, 'utf-8'));
  let _0x2c575f = (await _0x3c3e59.get("https://graph.facebook.com/" + _0x2b929b + '/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662', {
    'responseType': "arraybuffer"
  })).data;
  _0xdf5f9f.writeFileSync(_0x4a6458, Buffer.from(_0x2c575f, "utf-8"));
  let _0x5b176a = await _0x124c18.read(await circle(_0x1a441d));
  let _0x36ba92 = await _0x124c18.read(await circle(_0x4a6458));
  _0x31cacb.resize(0x660, 0x395).composite(_0x5b176a.resize(0x190, 0x190), 0xd7, 0x102).composite(_0x36ba92.resize(0x190, 0x190), 0x3f7, 0x104);
  let _0x4e886f = await _0x31cacb.getBufferAsync("image/png");
  _0xdf5f9f.writeFileSync(_0x699b7c, _0x4e886f);
  _0xdf5f9f.unlinkSync(_0x1a441d);
  _0xdf5f9f.unlinkSync(_0x4a6458);
  return _0x699b7c;
}
async function circle(_0x25b904) {
  const _0x40ab74 = require("jimp");
  _0x25b904 = await _0x40ab74.read(_0x25b904);
  _0x25b904.circle();
  return await _0x25b904.getBufferAsync('image/png');
}
module.exports.run = async function ({
  event: _0x11d2ca,
  api: _0x198f21,
  args: _0x38879d
}) {
  const _0x57c9e6 = global.nodemodule["fs-extra"];
  const {
    threadID: _0x53e32e,
    messageID: _0x170dc2,
    senderID: _0x5d142f
  } = _0x11d2ca;
  var _0x4c819c = Object.keys(_0x11d2ca.mentions)[0x0];
  let _0x54830d = _0x11d2ca.mentions[_0x4c819c].replace('@', '');
  if (!_0x4c819c) {
    return _0x198f21.sendMessage("Please tag 1 person", _0x53e32e, _0x170dc2);
  } else {
    return makeImage({
      'one': _0x5d142f,
      'two': _0x4c819c
    }).then(_0x103c69 => _0x198f21.sendMessage({
      'body': '👉' + _0x54830d + " love you so much🥰’”",
      'mentions': [{
        'tag': _0x54830d,
        'id': _0x4c819c
      }],
      'attachment': _0x57c9e6.createReadStream(_0x103c69)
    }, _0x53e32e, () => _0x57c9e6.unlinkSync(_0x103c69), _0x170dc2));
  }
};
