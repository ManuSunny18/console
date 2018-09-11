import express from 'express';
import api from './api';
const path = require('path');
const app = express();
let assetsFileVersionMap = {};
if(process.env.NODE_ENV !=="dev"){
  assetsFileVersionMap = require("../public/fileManifest.json");
}
app.set('view engine', 'pug');
app.use(express.static('public'))
app.set("views", path.join(__dirname, "../views"));
app.use('/api', api({
  "version":"1"
}));
app.get('/', (req, res) => {
    let cssFile =  (assetsFileVersionMap['index.css'])?assetsFileVersionMap['index.css']:"/css/style.css";
    let jsFile = (assetsFileVersionMap['index.js'])?assetsFileVersionMap['index.js']:"/js/index.js";
    res.render("home",{
      user:"",
      cssFile:cssFile,
      jsFile:jsFile
    });
  //res.status(200).json({ message: "Welcome!" });
});
app.listen(process.env.PORT || 4000, () => {console.log("Listening to port 4000")});