'use strict';
var conn = require('./../../config/db.config');
var passwordHash = require('password-hash');

var User = function(user){
    this.user_nama     = user.user_nama;
    this.user_email    = user.user_email;
    this.user_password = user.user_password;
};

User.create = function (user, result) {
    var pass = passwordHash.generate(user.user_password);
    conn.query("INSERT INTO tb_user (user_nama,user_email,user_password) VALUES (?,?,?)", [user.user_nama, user.user_email, pass], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};


User.findById = function (id, result) {
    conn.query("Select * from tb_user where user_id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

User.findAll = function (result) {
    conn.query("Select * from tb_user", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('tb_user : ', res);
            result(null, res);
        }
    });
};

User.update = function(id, user, result){
    conn.query("UPDATE tb_user SET user_nama=?,user_email=?,user_password=? WHERE user_id = ?", 
    [user.user_nama, user.user_email, user.user_password, id], 
    function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

User.delete = function(id, result){
    conn.query("DELETE FROM tb_user WHERE user_id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= User;