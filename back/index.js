const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users")
const postRoute = require("./routes/postes")
const catRoute = require("./routes/categories")
const acquisationsRoute = require("./routes/acquisations")
const artistsRoute = require("./routes/artists")
const bibliographiesRoute = require("./routes/bibliographies")
const expositionsRoute = require("./routes/expositions")
const localisaionConservationsRoute = require("./routes/localisaionConservations")
const pretsRoute = require("./routes/prets")
const redactionNoticeInventaireRoute = require("./routes/redactionNoticeInventaires")
const restaurationsRoute = require("./routes/restaurations")
const signaturesRoute = require("./routes/signatures")

const multer = require("multer");
const path = require("path")

dotenv.config();
app.use(express.json()); // so we can send json req
app.use("/images",express.static(path.join(__dirname,"/images")))

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true
}).then(console.log("connected")).catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null , "images");
    },
    filename:(req, file, cb) =>{
        cb(null , req.body.name);
    },
});
const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded")
});

dotenv.config();
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/postes",postRoute);
app.use("/api/categories",catRoute);
app.use("/api/acquisation",acquisationsRoute);
app.use("/api/artist",artistsRoute);
app.use("/api/bibliographie",bibliographiesRoute);
app.use("/api/exposition",expositionsRoute);
app.use("/api/localisaionConservation",localisaionConservationsRoute);
app.use("/api/pret",pretsRoute);
app.use("/api/redactionNoticeInventaire",redactionNoticeInventaireRoute);
app.use("/api/restauration",restaurationsRoute);
app.use("/api/signature",signaturesRoute);




app.listen("5000",()=>{
    console.log("backend is runing");
});