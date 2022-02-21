const express = require('express');

const app = express();


const server = app.listen(9527, '127.0.0.1', function () {
    const address = server.address();
    const host = address.address;
    const port = address.port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);

});

// 配置静态资源的访问路径images，对应到res/images这个目录下，如果还有其他目录，按照该规则添加即可
app.use('/images', express.static('res/images'), express.static('res/open'));
