const { VrpProxy, VrpTunnel } = require("@vrpjs/client");

const vRP = VrpProxy.getInterface("vRP");
const vRPServer = VrpTunnel.getInterface("vRP");

let Self = {};
VrpTunnel.bindInterface("vrp-js-boilerplate", Self);
const ServerSide = VrpTunnel.getInterface("vrp-js-boilerplate");

RegisterCommand("teste", async () => {
  console.log("Calling");
  let res = await ServerSide.AddMoney(5000);
  console.log("Finished: ", res);
});

Self.customNotify = (msg) => {
  console.log("Notify OK: ", msg);
};
