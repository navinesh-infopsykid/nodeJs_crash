import http from 'http';
const PORT = 8000;
const server = http.createServer((req, res)=>{
    if(req.url ==='/' && req.method==='GET'){
        res.writeHead(200,{"Content-type" : "text-plain"});
        res.end("WELCOMEEE");
    }else if(req.url ==='/health' && req.method==='GET'){
        res.writeHead(200,{"Content-type" : "application-json"});
        res.end(JSON.stringify({status : "OKAY"}));
    }else {
        res.writeHead(200,{"Content-type" : "text-plain"});
        res.end("404 Not found");
    }
});

server.listen(8000, ()=>{
    console.log(`Server running on port ${PORT}`);
});