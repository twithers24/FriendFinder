var path = require("path");
module.exports = function(app){

    app.get("/", function(req, res){
        res.sendfile(path.join(__dirname, "/api/friends"));
    });

app.post(`/api/friends`, function(req, res){
    var userInput = req.body;
    console.log(userInput);
})
};