import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'

const app = express()

const port = process.env.PORT || 4000

// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true, // To send Cookies in Response fron Express App
    origin: ['*']
}))

app.get('/',(req, res)=>res.send("API Working"))

// Catch-all route - redirects any unmatched routes to home
app.use((req, res) => {
    res.redirect('/')
})

app.listen(port, ()=>{
    console.log(`Server is running on PORT: ${port}`);
    
})