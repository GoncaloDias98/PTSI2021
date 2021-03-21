module.exports = function(app){


global.app.get('/', function(req, res){
    console.log('GET /');
    var html = global.fs.readFileSync('./public/index.html');
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(html);
});}