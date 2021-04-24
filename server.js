var util = require('util');
var exec = util.promisify(require('child_process').exec);
var express = require('express');
var app = express();
var http = require('http').Server(app);
const cors = require('cors')
const uri = 'http://localhost:3000/dateInfo';

app.use(cors())

app.get('/dateInfo', async function(req, res){
      var ret = await dateInfo();

      res.send(ret);
});

//dateInfo
async function dateInfo(req, res) {
  await exec('sudo ./backendScripts/printDateInfo.sh');
        var out = await exec('cat ./infoJson.json');
  var outF = out.stdout;
        return outF;
}
setTimeout(dateInfo, 1000);

http.listen(3000,function(){
  console.log('Server is live on server ' + 3000);
});
