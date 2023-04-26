import express, {} from "express";
const routing = express.Router()

routing.get("/new",(req,res) => {
    res.json({
        msg: "new practice"
    })
})


routing.post("/create",(req,res) =>{

    const newPractice = {
        name: req.body.practiceName,
        age: req.body.practiceAge,
        address: req.body.practiceAddress,
        email: req.body.practiceEmail
    }

    res.json({
        msg: "create practice",
        result: newPractice
    })
})

routing.put("/",(req, res)=>{
    res.json({
        msg:"update practice"
    })
})

routing.delete("/", (req, res) =>{
    res.json({
        msg:"delete practice"
    })
})

export default routing
