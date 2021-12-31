const ethers = require("ethers");
const http = require('http');
const port = 5050

http.createServer(async function (req, res) {
    try {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        let params = [];
        await req.on('data', param => {
            params = JSON.parse(param);
        });
        const nodeUrl = params.nodeUrl;
        const rawTNX = params.rawTNX;
        const provider = new ethers.providers.JsonRpcProvider(nodeUrl);
        const response = await provider.sendTransaction(rawTNX);
        console.log(response);
        res.write(JSON.stringify(response));
        res.end();
    } catch (error) {
        console.log(error);
    }
    
}).listen(port);
console.log(`listening port: ${port}`)