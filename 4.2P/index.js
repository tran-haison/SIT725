var express = require("express")
var app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.port || 3000;

const cardList = [
    {
        title: "Kitten 2",
        image: "images/kitten-2.jpeg",
        link: "About Kitten 2",
        desciption: "Demo desciption about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "images/kitten-3.jpg",
        link: "About Kitten 3",
        desciption: "Demo desciption about kitten 3"
    }
]
app.get('/api/projects', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
});


app.listen(port, () => {
    console.log("App listening to: " + port);
    console.log("http://localhost:" + port);

    // Open index.html in the browser

})
