const { build } = require('gluegun')
const {ok} = require('gluegun/sniff')
if(ok==1){
    module.exports = async () => {
      // setup the runtime
      build()
        .brand('solidarity')
        .src(__dirname)
        // It might also be worth checking global
        // `npm config get prefix` returns '/usr/local'
        // global npm is stored /usr/local/lib/node_modules
        .plugins('./node_modules', { matching: 'solidarity-*', hidden: true })
        // for testing - force load a plugin
        // .plugin('../solidarity-react-native')
        .create()
        .run()
    }
}else{
    console.log("error dependencys not met, node version 7.6 or higher is required");
}
