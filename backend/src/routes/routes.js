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
router.put('/updateprofile/:id',UserController.updateProfile);
router.get('/favlist/:id',UserController.showListFavUser);
router.post('/private/picprofile/:id', upload.single('picpicture'),UserController.addPictureProfile);
//
router.get('/users',UserController.index);
router.get('/user/:id',UserController.show);
router.delete('/user/:id',UserController.deleteProfile);
router.put('/user/:id',UserController.update);

//AuthController
router.get('/private/getDetails',AuthController.getDetails);
router.post('/login',AuthController.login);

//CommentController
// Usuário
router.post('/addcomment/:id',CommentController.createComment);
router.delete('/deletecomment/:id',CommentController.deleteComment);
//
router.get('/comments',CommentController.index);
router.get('/comment/:id',CommentController.show);
router.put('/comment/:id',CommentController.update);

//ADMIN
router.delete('/comment/:id', adminMiddleware, CommentController.adminCommentDestroy);



module.exports = router;