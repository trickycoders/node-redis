var redis = require("redis"),
    client = redis.createClient('redis://10.1.6.30:6379'); // you have to give the redis server details

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("string-key", "string val", redis.print);

client.get("string-key", function(err, reply) {
    console.log(reply);
});
