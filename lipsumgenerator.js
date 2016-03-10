var jsonfile = require('jsonfile')
var util = require('util')
 var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var quantity = [];
var file = 'data.json'
var toprintout = [
    {
    result: ""              
            
                 }
];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(express.static("./public"));
app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.get("/chevronlocked", function(req, res) {
 res.json(toprintout);
        });
app.post("/chevronlocked", function(req, res) {
    
    var quan = req.body;
    var amount = quan.quantity;
    remaining = amount;
    toprint = "";
    linesoutput = 0;
  	jsonfile.readFile(file, function(err, obj) {

    for (i = 0; i < amount; i++) {
    if (linesoutput == 10)
    {
     linesoutput = 0;   
        toprint = toprint + "<br><br>";
    }
    
        
        
    totalquotes = obj.length;
    selectedquote = Math.floor(Math.random() * totalquotes);
    toprint = toprint + obj[selectedquote].quote;    
    linesoutput ++;    
}      
   console.log(toprint);     
      
        
 toprintout = [
     {
      result: toprint   
         
     }
     ]
         res.json(toprintout);
        console.log(toprintout);
})
      
});



app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;