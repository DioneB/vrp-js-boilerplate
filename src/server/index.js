const { VrpProxy, VrpTunnel } = require("@vrpjs/server");

const vRP = VrpProxy.getInterface("vRP");
const vRPClient = VrpTunnel.getInterface("vRP");

let Self = {};
VrpTunnel.bindInterface("vrp-js-boilerplate", Self);
const ClientSide = VrpTunnel.getInterface("vrp-js-boilerplate");

Self.SendValue = (amount) => {
  let src = source;
  let user_id = vRP.getUserId(src);
  let message = "Command OK ->"..user_id
  ClientSide._customNotify(src, message);
  return "received "..amount.." from Client";
};
