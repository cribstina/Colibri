const { Router } = require('express');
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');
const CommentController = require('../controllers/CommentController');
const adminMiddleware = require('../middlewares/admin');
const path = require('path');
const multer = require('multer');
const storage = require("../config/files");
const router = Router();
const passport = require('passport');

const upload = multer({ storage: storage,
	fileFilter: function (req, file, cb) {
	        const ext = path.extname(file.originalname);
	        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
	            return cb(new Error('Erro extensão não suportada!'), false);
	        }
	        cb(null, true);
	    },
	    limits:{
	        fileSize: 2048 * 2048
	    }

 });

router.use("/private", passport.authenticate('jwt', {session: false}));

//UserController
router.post('/users',UserController.createAccount);
router.post('/useremail',UserController.emailSent);
router.put('/updateprofile:id',UserController.updateProfile);
router.get('/favlist/:id',UserController.showListFavUser);
router.post('/private/picprofile', upload.single('picpicture'),UserController.addPictureProfile);
router.delete('/photo/:id',UserController.removePictureProfile);
//
router.get('/users',UserController.index);
router.get('/users/:id',UserController.show);
router.delete('/user/:id',UserController.destroy);
router.put('/user/:id',UserController.update);

//AuthController
router.get('/private/getDetails',AuthController.getDetails);
router.post('/login',AuthController.login);

//CommentController
router.post('/addcomment/:id',CommentController.createComment);
router.delete('/deletcomment/:id',CommentController.deleteComment);
//
router.get('/comments',CommentController.index);
router.get('/comment/:id',CommentController.show);
router.delete('/comment/:id',CommentController.destroy);
router.put('/comment/:id',CommentController.update);

//admin
router.delete('/private/comment/:id', adminMiddleware, CommentController.adminDeleteComment);



module.exports = router;