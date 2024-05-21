/**
* @author Mohammad Nayan
* @warn Do not edit code or edit credits
*/

module.exports.config = {
  name: "love2",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "",
  prefix: true,
  category: "Love",
  usages: "love2 @",
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
    resolve: _0x187c97
  } = global.nodemodule.path;
  const {
    existsSync: _0x1f9d7e,
    mkdirSync: _0x26149b
  } = global.nodemodule["fs-extra"];
  const {
    downloadFile: _0x1e9328
  } = global.utils;
  const _0x3039a8 = __dirname + '/cache/';
  const _0x243cb0 = _0x187c97(__dirname, "cache", "frtwb.png");
  if (!_0x1f9d7e(_0x3039a8 + '')) {
    _0x26149b(_0x3039a8, {
      'recursive': true
    });
  }
  if (!_0x1f9d7e(_0x243cb0)) {
    await _0x1e9328("https://drive.google.com/uc?id=1NAiHkKKy1ZxI_4M57GS-wUy0v2bB8Xtu", _0x243cb0);
  }
};
async function makeImage({
  one: _0x5465eb,
  two: _0x3913b9
}) {
  const _0x2624e6 = global.nodemodule['fs-extra'];
  const _0x582fb7 = global.nodemodule.path;
  const _0x2fc17f = global.nodemodule.axios;
  const _0x205e77 = global.nodemodule.jimp;
  const _0x9c2476 = _0x582fb7.resolve(__dirname, 'cache');
  let _0x161fc1 = await _0x205e77.read(_0x9c2476 + "/frtwb.png");
  let _0x320469 = _0x9c2476 + ("/frtwb_" + _0x5465eb + '_' + _0x3913b9 + '.png');
  let _0x20a11a = _0x9c2476 + ("/avt_" + _0x5465eb + ".png");
  let _0xb252a8 = _0x9c2476 + ('/avt_' + _0x3913b9 + '.png');
  let _0x54e4c7 = (await _0x2fc17f.get("https://graph.facebook.com/" + _0x5465eb + '/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662', {
    'responseType': 'arraybuffer'
  })).data;
  _0x2624e6.writeFileSync(_0x20a11a, Buffer.from(_0x54e4c7, "utf-8"));
  let _0x380311 = (await _0x2fc17f.get("https://graph.facebook.com/" + _0x3913b9 + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
    'responseType': 'arraybuffer'
  })).data;
  _0x2624e6.writeFileSync(_0xb252a8, Buffer.from(_0x380311, "utf-8"));
  let _0x46f580 = await _0x205e77.read(await circle(_0x20a11a));
  let _0x55edb5 = await _0x205e77.read(await circle(_0xb252a8));
  _0x161fc1.resize(0x500, 0x500).composite(_0x46f580.resize(0xc8, 0xc8), 0x2f9, 0x280).composite(_0x55edb5.resize(0xc8, 0xc8), 0x14c, 0x27f);
  let _0x37e692 = await _0x161fc1.getBufferAsync("image/png");
  _0x2624e6.writeFileSync(_0x320469, _0x37e692);
  _0x2624e6.unlinkSync(_0x20a11a);
  _0x2624e6.unlinkSync(_0xb252a8);
  return _0x320469;
}
async function circle(_0xcd2399) {
  const _0x273851 = require("jimp");
  _0xcd2399 = await _0x273851.read(_0xcd2399);
  _0xcd2399.circle();
  return await _0xcd2399.getBufferAsync('image/png');
}
module.exports.run = async function ({
  event: _0x3e735d,
  api: _0x1256c2,
  args: _0xee59d9
}) {
  const _0x2236c2 = global.nodemodule["fs-extra"];
  const {
    threadID: _0x55795f,
    messageID: _0x3872c8,
    senderID: _0x1f9780
  } = _0x3e735d;
  var _0x69c6af = Object.keys(_0x3e735d.mentions)[0x0];
  let _0x623dda = _0x3e735d.mentions[_0x69c6af].replace('@', '');
  if (!_0x69c6af) {
    return _0x1256c2.sendMessage("Please tag 1 person", _0x55795f, _0x3872c8);
  } else {
    return makeImage({
      'one': _0x1f9780,
      'two': _0x69c6af
    }).then(_0x4c6cd8 => _0x1256c2.sendMessage({
      'body': "ðŸ«£" + _0x623dda + " love you so muchðŸ¤—ðŸ¥€",
      'mentions': [{
        'tag': _0x623dda,
        'id': _0x69c6af
      }],
      'attachment': _0x2236c2.createReadStream(_0x4c6cd8)
    }, _0x55795f, () => _0x2236c2.unlinkSync(_0x4c6cd8), _0x3872c8));
  }
};
