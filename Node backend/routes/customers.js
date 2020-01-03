const express = require('express');
const router = express.Router();
const db = require('../db_connection');
//add customer
router.post("/addCustomer",(req,res)=>{
    console.log(req.body);
    db.query("INSERT INTO customers SET ?",[req.body],(error,results)=>{
        if(error) throw error;
        res.send(JSON.stringify({"status":200,"data":results}));
    });
});
//login
router.get("/getCustomer/:email/:password",(req,res)=>{
    db.query("SELECT * FROM customers WHERE email='"+req.params.email+"' and password='"+req.params.password+"'",(error,results)=>{
        if(error) throw error;
        res.send({"status":200,"data":results});
    });
});
//fetch single customer
router.get("/getCustomer/:id",(req,res)=>{
    db.query("SELECT * FROM customers WHERE id='"+req.params.id+"'",(error,results)=>{
        if(error) throw error;
        res.send({"status":200,"data":results});
    });
});
//fetch all customers
router.get("/getCustomers",(req,res)=>{
    db.query("SELECT * FROM customers",(error,results)=>{
        if(error) throw error;
        res.send({"status":200,"data":results});
    });
});
//update customer
router.put("/updateCustomer/:id",(req,res)=>{
    console.log(req.params.id);
    db.query("UPDATE customers SET ? WHERE id="+req.params.id,[req.body],(error,results)=>{
        if(error) throw error;
        res.send(JSON.stringify({"status":200,"data":results}));
    });
});
//delete customer
router.delete("/deleteCustomer/:id",(req,res)=>{
    db.query("DELETE FROM customers WHERE id="+req.params.id,(error,results)=>{
        if(error) throw error;
        res.send(JSON.stringify({"status":200,"data":results}));
    });
});

module.exports = router;
