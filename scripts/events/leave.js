module.exports.config = {
  'name': "leave",
  'eventType': ["log:unsubscribe"],
  'version': "1.0.0",
  'credits': "Mirai Team",
  'description': "Notify About Members Removed Or That Have Left The Group.",
  'dependencies': {
    'fs-extra': '',
    'path': ''
  }
};
module.exports.run = async function ({
  api: _0x1e9e05,
  event: _0x43fec5,
  Users: _0x5e2e91,
  Threads: _0x31a742
}) {
  if (_0x43fec5.logMessageData.leftParticipantFbId == _0x1e9e05.getCurrentUserID()) {
    return;
  }
  const {
    createReadStream: _0x4ec07b,
    existsSync: _0x15971a,
    mkdirSync: _0x559af2
  } = global.nodemodule["fs-extra"];
  const {
    join: _0x87484e
  } = global.nodemodule.path;
  const {
    threadID: _0x5d0aca
  } = _0x43fec5;
  const _0x595cc3 = global.data.threadData.get(parseInt(_0x5d0aca)) || (await _0x31a742.getData(_0x5d0aca)).data;
  const _0x12f3e7 = global.data.userName.get(_0x43fec5.logMessageData.leftParticipantFbId) || (await _0x5e2e91.getNameUser(_0x43fec5.logMessageData.leftParticipantFbId));
  const _0x344aee = _0x43fec5.author == _0x43fec5.logMessageData.leftParticipantFbId ? "আহারে চলে গেলো 😾 কিন্তু কই পালাইবি 😹ভিডিও দেখে যা🥵🥱" : "বালপাকনামির কারণে কিক খাইলো😿🥵";
  const _0x40dbdb = _0x87484e(__dirname, "cache", "leavemp4");
  const _0x522820 = _0x87484e(_0x40dbdb, "kick.gif");
  var _0x3756db;
  var _0x592ca5;
  if (_0x15971a(_0x40dbdb)) {
    _0x559af2(_0x40dbdb, {
      'recursive': true
    });
  }
  if (typeof _0x595cc3.customLeave == "undefined") {
    _0x3756db = "~ পালাইছে রে পালাইছে🤣. \n{name}\nReason: {type}.";
  } else {
    _0x3756db = _0x595cc3.customLeave;
  }
  _0x3756db = _0x3756db.replace(/\{name}/g, _0x12f3e7).replace(/\{type}/g, _0x344aee);
  if (_0x15971a(_0x522820)) {
    _0x592ca5 = {
      'body': _0x3756db,
      'attachment': _0x4ec07b(_0x522820)
    };
  } else {
    _0x592ca5 = {
      'body': _0x3756db
    };
  }
  return _0x1e9e05.sendMessage(_0x592ca5, _0x5d0aca);
};
