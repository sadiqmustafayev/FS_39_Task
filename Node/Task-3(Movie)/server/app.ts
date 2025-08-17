import express from "express"
import cors from "cors"
import mongoose from "mongoose"

mongoose.connect(process.env.DB_CONNECT_URL!).then(() => {
  console.log("Db connected!");
}).catch((err) => {console.log(err);
})


const PORT = process.env.PORT
console.log(PORT);


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())


app.listen(PORT, () => {
  console.log(`Server is running : ${PORT}`);
})