const express = require('express');
const requestApi = require('./configs');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))


const server = app.listen(9527, '0.0.0.0', function () {
    const address = server.address();
    const host = address.address;
    const port = address.port;
    console.log("应用实例，访问地址为 https://%s:%s", host, port);

});


for (let key in requestApi) {
    request(requestApi[key].api, requestApi[key].path)
}


function request(api, path) {
    app.post(api,  (req, res) =>{
        console.log(`body => ` + JSON.stringify(req.body));

        console.log('request api=  ' + api);
        const param = {"code": 0, "msg": "success"};

        const config = require(path);
        console.log('request path=  ' + path + `  => ` + JSON.stringify(config));

        param['data'] = config;

        res.writeHead(200, {
            "Content-Type": "application/json", 'Content-Length': Buffer.byteLength(JSON.stringify(param))
        });


        res.end(JSON.stringify(param));

    })
}
