import express from "express"
import cors from "cors"

const PORT = 3002
const app = express()

app.use(cors({
 origin: "*"
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(PORT, ()=> {
    console.log("Server is running")
})
