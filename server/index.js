import express from "express"
import cors from "cors"
import coursesRoutes from "./routes/courses.js"

const app = express()
const port = 8800

app.use(cors())

app.use(express.json())
app.use("/courses", coursesRoutes)

app.listen(port, () =>{
    console.log("On")
})