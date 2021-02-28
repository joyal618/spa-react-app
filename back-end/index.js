const express = require('express');
const app = express();

const cors = require('cors');

app.use(express.json())
app.use(cors())
app.use(express.static(__dirname + '/public'));

const port = 8080;

const blogRoute= require("./routes/blogRoute")
const bannerRoute= require("./routes/bannerRoute")
const luxuryPackageRoute = require("./routes/luxuryPackageRoute.js")


app.use("/blogs",blogRoute)
app.use("/banners",bannerRoute)
app.use("/luxury-packages",luxuryPackageRoute)


app.listen(port, function () {
    console.log(`App running on port ${port}`);
})