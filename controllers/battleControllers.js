const constants = require("../constants");

const battleControllers = {
  createBattle: (req, res) => {
    res.json({
      success: true,
      error: null,
      response: "createBattle",
    });
  },
  readBattleList: (req, res) => {
    res.json({
      success: true,
      error: null,
      response: "readBattleList",
    });
  },
};

module.exports = battleControllers;