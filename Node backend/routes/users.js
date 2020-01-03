const express = require('express');
const router = express.Router();
const db = require('../db_connection');
router.post("/addUser",(req,res)=>{
    db.query("INSERT INTO users SET ?",[req.body],(error,results)=>{
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

router.get("/getUsers",(req,res)=>{
    db.query("SELECT * FROM users",(error,results)=>{
        if(error) throw error;
        res.send({"status":200,"data":results});
    });
});
router.put("/updateUser/:id",(req,res)=>{
    db.query("UPDATE users SET ? WHERE id="+req.params.id,[req.body],(error,results)=>{
        if(error) throw error;
        res.send(JSON.stringify({"status":200,"data":results}));
    });
});

router.delete("/removeUser/:id",(req,res)=>{
    db.query("DELETE FROM users WHERE id="+req.params.id,(error,results)=>{
        if(error) throw error;
        res.send(JSON.stringify({"status":200,"data":results}));
    });
});

module.exports = router;
