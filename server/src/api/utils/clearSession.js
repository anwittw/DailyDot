const { __sessionName__ } = require("../../constants");

const clearSession = async (req, res) => {
  await req.session.destroy();
  await res.clearCookie(__sessionName__);
  return true;
};

module.exports = clearSession;
