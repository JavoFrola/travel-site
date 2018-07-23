var fs = require("fs");
var https = require("https");
fs.writeFile(__dirname + "/index.html","<h1>HTML is great</h1>", function(error){
  if(error){
    console,log(error);
  }else{
    console.log("Congrats!");
  }
});

var photoLocation = "https://media-cdn.tripadvisor.com/media/photo-s/0d/f4/ea/7c/montreal-city-hop-on.jpg"

https.get(photoLocation, function(response){
  response.pipe(fs.createWriteStream(__dirname + "/montreal.jpg"))
});
