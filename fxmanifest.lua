--[[Dione B. ~ A.K.A: @Santagain ]]--

name 'vRP Javascript BP'
desc 'VRP Javascript Boilerplate using @vrpjs'
author 'Dione B.'
version '1.0'

fx_version 'cerulean'
games { 'gta5' }

dependency 'webpack'
dependency 'yarn'

webpack_config 'client.config.js'
webpack_config 'server.config.js'

client_scripts {
	"dist/client/*"
}

server_scripts {
	"dist/server/*"
}
