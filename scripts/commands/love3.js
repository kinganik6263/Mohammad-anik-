/**
* @author Mohammad Nayan
* @warn Do not edit code or edit credits
*/

module.exports.config = {
  name: "love3",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "example",
  prefix: true,
  category: "Love",
  usages: "love3 @",
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
    resolve: _0x2ed70d
  } = global.nodemodule.path;
  const {
    existsSync: _0x5cd07b,
    mkdirSync: _0x25bb8e
  } = global.nodemodule['fs-extra'];
  const {
    downloadFile: _0x3c0221
  } = global.utils;
  const _0xcaafa9 = __dirname + "/cache/";
  const _0x4a98f2 = _0x2ed70d(__dirname, "cache", 'lpwft.png');
  if (!_0x5cd07b(_0xcaafa9 + '')) {
    _0x25bb8e(_0xcaafa9, {
      'recursive': true
    });
  }
  if (!_0x5cd07b(_0x4a98f2)) {
    await _0x3c0221("https://drive.google.com/uc?id=1NLsQSbh1D2igiaAdiRcKBiu2-hNU8bQI", _0x4a98f2);
  }
};
async function makeImage({
  one: _0x3dbc61,
  two: _0x538f2b
}) {
  const _0x31e488 = global.nodemodule['fs-extra'];
  const _0x33f0f2 = global.nodemodule.path;
  const _0x5c9b72 = global.nodemodule.axios;
  const _0x1596b8 = global.nodemodule.jimp;
  const _0x1d54ac = _0x33f0f2.resolve(__dirname, "cache");
  let _0x124bcd = await _0x1596b8.read(_0x1d54ac + '/lpwft.png');
  let _0x5de97d = _0x1d54ac + ("/lpwft_" + _0x3dbc61 + '_' + _0x538f2b + '.png');
  let _0x56366c = _0x1d54ac + ("/avt_" + _0x3dbc61 + '.png');
  let _0x8063ee = _0x1d54ac + ("/avt_" + _0x538f2b + ".png");
  let _0x573ab6 = (await _0x5c9b72.get("https://graph.facebook.com/" + _0x3dbc61 + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
    'responseType': 'arraybuffer'
  })).data;
  _0x31e488.writeFileSync(_0x56366c, Buffer.from(_0x573ab6, "utf-8"));
  let _0x4f6d3c = (await _0x5c9b72.get("https://graph.facebook.com/" + _0x538f2b + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
    'responseType': "arraybuffer"
  })).data;
  _0x31e488.writeFileSync(_0x8063ee, Buffer.from(_0x4f6d3c, "utf-8"));
  let _0x19724c = await _0x1596b8.read(await circle(_0x56366c));
  let _0x30f7da = await _0x1596b8.read(await circle(_0x8063ee));
  _0x124bcd.resize(0x4fe, 0x2d0).composite(_0x19724c.resize(0x118, 0x118), 0xaf, 0xdc).composite(_0x30f7da.resize(0x118, 0x118), 0x341, 0xdc);
  let _0x3687cd = await _0x124bcd.getBufferAsync("image/png");
  _0x31e488.writeFileSync(_0x5de97d, _0x3687cd);
  _0x31e488.unlinkSync(_0x56366c);
  _0x31e488.unlinkSync(_0x8063ee);
  return _0x5de97d;
}
async function circle(_0x4391b6) {
  const _0x240579 = require("jimp");
  _0x4391b6 = await _0x240579.read(_0x4391b6);
  _0x4391b6.circle();
  return await _0x4391b6.getBufferAsync('image/png');
}
module.exports.run = async function ({
  event: _0x8461c2,
  api: _0x386f89,
  args: _0x56132b
}) {
  const _0x324c05 = global.nodemodule["fs-extra"];
  const {
    threadID: _0x34ae8f,
    messageID: _0x4f1d63,
    senderID: _0x19935e
  } = _0x8461c2;
  var _0x1acfb9 = Object.keys(_0x8461c2.mentions)[0x0];
  let _0x28e161 = _0x8461c2.mentions[_0x1acfb9].replace('@', '');
  if (!_0x1acfb9) {
    return _0x386f89.sendMessage("Please tag 1 person", _0x34ae8f, _0x4f1d63);
  } else {
    return makeImage({
      'one': _0x19935e,
      'two': _0x1acfb9
    }).then(_0x4e3ab8 => _0x386f89.sendMessage({
      'body': '👉' + _0x28e161 + " love you so much🥰’”",
      'mentions': [{
        'tag': _0x28e161,
        'id': _0x1acfb9
      }],
      'attachment': _0x324c05.createReadStream(_0x4e3ab8)
    }, _0x34ae8f, () => _0x324c05.unlinkSync(_0x4e3ab8), _0x4f1d63));
  }
};
