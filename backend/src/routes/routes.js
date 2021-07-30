
const UserController = require("../controllers/UserController");
const ProductController = require("../controllers/ProductController");
const AuthController = require("../controllers/AuthController");
const { Router } = require('express');
const passport = require("passport");

const router = Router();

router.use("/private", passport.authenticate('jwt', {session: false}));


router.get('/private/getDetails', AuthController.getDetails);
router.post('/login', AuthController.login);


router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
router.post("/users", UserController.create);
router.put("/users", UserController.update);
router.delete("/users", UserController.destroy);
router.get("/users/:id", UserController.getUserListFav);
router.get("/users/:id", UserController.addCommentProduct);
router.get("/users/:id", UserController.commentDelet);


router.get("/products", ProductController.index);
router.get("/products/:id", ProductController.show);
router.get("/products/:id", ProductController.byCategory);
router.post("/products", ProductController.create);
router.put("/products", ProductController.update);
router.delete("/products", ProductController.destroy);
router.put("/products", ProductController.addToCart);
router.delete("/products", ProductController.removeFromCart);
router.put("/products", ProductController.addToList);
router.delete("/products", ProductController.removeFromList);



module.exports = router;