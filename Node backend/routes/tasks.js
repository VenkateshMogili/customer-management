const express = require('express');
const router = express.Router();
const db = require('../db_connection');
router.post("/addTask",(req,res)=>{
    console.log(req.body);
    db.query("INSERT INTO tasks SET ?",[req.body],(error,results)=>{
        if(error) throw error;
        res.send(JSON.stringify({"status":200,"data":results}));
    });
});

router.get("/getUser/:email/:password",(req,res)=>{
    db.query("SELECT * FROM users WHERE email='"+req.params.email+"' and password='"+req.params.password+"'",(error,results)=>{
        if(error) throw error;
        res.send({"status":200,"data":results});
    });
});

router.get("/getTasks",(req,res)=>{
    db.query("SELECT * FROM tasks",(error,results)=>{
        if(error) throw error;
        res.send({"status":200,"data":results});
    });
});

router.put("/updateTask/:id",(req,res)=>{
    console.log(req.params.id);
    db.query("UPDATE tasks SET ? WHERE id="+req.params.id,[req.body],(error,results)=>{
        if(error) throw error;
        res.send(JSON.stringify({"status":200,"data":results}));
    });
});

router.delete("/deleteTask/:id",(req,res)=>{
    db.query("DELETE FROM tasks WHERE id="+req.params.id,(error,results)=>{
        if(error) throw error;
        res.send(JSON.stringify({"status":200,"data":results}));
    });
});

module.exports = router;
