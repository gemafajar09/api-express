const express = require('express')
const router = express.Router()
// panggil file controller
const userController =   require('../controller/user.controller');

router.get('/user', userController.findAll);
router.post('/user-simpan', userController.create);
router.get('/user-edit/:id', userController.findById);
router.put('/user-update/:id', userController.update);
router.delete('/user-hapus/:id', userController.delete);
module.exports = router