require("dotenv").config();
const express = require("express");
const db = require("./db/index");

const app = express();
const port = process.env.PORT;

//app.use(express.json());

app.get("/tables", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM tables");
        res.json({
        status: "success",
        results: results.rows.length,
        data: {
            tables: results.rows
        }
    })
    } catch (err) {
        console.log(err);
    }
    
    
})

app.listen(port, () => {
    console.log(`${port}`);
})