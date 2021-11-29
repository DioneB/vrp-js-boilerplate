const { VrpProxy, VrpTunnel } = require("@vrpjs/server");

const vRP = VrpProxy.getInterface("vRP");
const vRPClient = VrpTunnel.getInterface("vRP");

let Self = {};
VrpTunnel.bindInterface("vrp-js-boilerplate", Self);
const ClientSide = VrpTunnel.getInterface("vrp-js-boilerplate");

Self.AddMoney = (money) => {
  let src = source;
  let user_id = vRP.getUserId(src);
  vRP.giveBankMoney(user_id, money);
  ClientSide._customNotify(src, "Command OK");
  return "money added";
};
