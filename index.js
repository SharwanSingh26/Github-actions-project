const figlet = require('figlet');

figlet('Hello, Node!', function (err, data) {
    if (err) return;
    console.log(data);
});