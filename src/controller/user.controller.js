'use strict';
const User = require('../model/user.model');

exports.findAll = function(req, res) {
    User.findAll(function(err, user) {
    console.log('controller')
        if (err)
        res.send(err);
        console.log('res', user);
        res.send(user);
    });
};

exports.create = function(req, res) {
    const newUser = new User(req.body);
    // res.json({'data':req.body})
    if(req.body.constructor === Object && Object.keys(req.body).length === 0)
    {
        res.status(400).send({ error:true, message: 'Harap lengkapi data User' });
    }
    else
    {
        User.create(newUser, function(err, user) {
            if (err)
            res.send(err);
            res.json({error:false,message:"simpan data berhasil!",data:user});
        });
    }
};

exports.findById = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err)
        res.send(err);
        res.json(user);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Harap lengkapi data' });
    }else{
        User.update(req.params.id, new User(req.body), function(err, user) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Update data berhasil' });
        });
    }
};

exports.delete = function(req, res) {
    User.delete( req.params.id, function(err, user) {
        if (err)
        res.send(err);
        res.json({ error:false, message: 'Hapus data berhasil' });
    });
};