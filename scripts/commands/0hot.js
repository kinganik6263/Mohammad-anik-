module.exports.config = {
  'name': "hot",
  prefix: true,
  'version': "1.0.0",
  'permssion': 0x0,
  'credits': "ABDULLA",
  'description': "HOT VEDIO",
  'category': "Hình ảnh",
  'usages': "sad vedio",
  'cooldowns': 0x5,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async ({
  api: _0x3c6a0b,
  event: _0x2db5e5,
  args: _0x3bbf0f,
  client: _0x231f30,
  Users: _0xc40c70,
  Threads: _0x5ac3af,
  __GLOBAL: _0x5dc72f,
  Currencies: _0xfea9a7
}) => {
  const _0x5b2200 = global.nodemodule.request;
  const _0x1865d6 = global.nodemodule["fs-extra"];
  var _0x1dec3e = ["--Hot Video ByAnik💦--"];
  var _0x4399a8 = _0x1dec3e[Math.floor(Math.random() * _0x1dec3e.length)];
  var _0x9763e7 = ["https://drive.google.com/uc?id=1a7XsNXizFTTlSD_gRQwK4bDA3HPam56W", "https://drive.google.com/uc?id=1aF6H24ILE6wIFGW3M3BGXg8l63ktP8B3", "https://drive.google.com/uc?id=1_ysGMbGZQexheta6tuSBhJQDeAMioXr_", "https://drive.google.com/uc?id=1bTwYfovA2YKCs_kskWyp2GHh7K9XHQN0", "https://drive.google.com/uc?id=1bPdkmq6lKm8BGwxkWaADHe0kutTtEujR", "https://drive.google.com/uc?id=1b_evUu8zmfiPs-CeaZp1DkkArB5zl5x-", "https://drive.google.com/uc?id=1brkBa03NdRCx6lfrjopbWJUCoJupCRYg", "https://drive.google.com/uc?id=1c6SCqToTZamfuiiz5LrckOxDYT9gnJGu", "https://drive.google.com/uc?id=1bv8GL0XDReocf1NfZBMCNoMAsBBwDE1i", "https://drive.google.com/uc?id=1c01XFZFNYRi_harhEbPvf-i25QIo9c0V", "https://drive.google.com/uc?id=1bs5sI8NDRVK_omefR59how1UjZ6TEu91", "https://drive.google.com/uc?id=1bcIoyM9T_wQlaXxar4nVjCXsKHavRmnb", "https://drive.google.com/uc?id=1boVaYpbxIH3RItPY6k0Ld2F98YasHVq9", "https://drive.google.com/uc?id=1c5YXcgK3kOx6bTfVjxNGGMdDYbGmVInC", "https://drive.google.com/uc?id=1c1OHfuq-YBOO-UwO5uybPqO7gOqTwInp", "https://drive.google.com/uc?id=1jsoQ4wuRdN6EP6jOE3C0L6trLZmoPI0L", "https://drive.google.com/uc?id=1jr4YzPNCTOj_lfdOSnauXfTPJkbuqS3f"];
  var _0xe1dd71 = () => _0x3c6a0b.sendMessage({
    'body': "「 " + _0x4399a8 + " 」",
    'attachment': _0x1865d6.createReadStream(__dirname + "/cache/15.mp4")
  }, _0x2db5e5.threadID, () => _0x1865d6.unlinkSync(__dirname + "/cache/15.mp4"));
  return _0x5b2200(encodeURI(_0x9763e7[Math.floor(Math.random() * _0x9763e7.length)])).pipe(_0x1865d6.createWriteStream(__dirname + "/cache/15.mp4")).on("close", () => _0xe1dd71());
};
