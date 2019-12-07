import {Router} from 'express';
import CommentsController from '../controllers/comments.controller';
import UserController from '../controllers/users.controller';
import ProductController from '../controllers/products.controller';
import OrderController from '../controllers/orders.controller';
import UserTypeController from '../controllers/user_type.controller';
import ProductTypeController from '../controllers/product_type.controller';

const router = Router();

router.get("/hello", (req, res) =>{
    res.send("Hello, la forme?");
});


//User
router.get('/users', UserController.list);
router.post('/users', UserController.create);
router.get('/users/:id', UserController.details);
router.delete('/users/:id', UserController.delete);
router.put('/users/:id', UserController.update);
router.post('/users', UserController.connexion);        //login de connexion

//User type
router.get('/user_type', UserTypeController.list);
router.post('/user_type', UserTypeController.create);
router.get('/user_type/:id', UserTypeController.details);
//router.delete('/user_type/:id', UserTypeController.delete);
//router.put('/user_type/:id', UserTypeController.update);


//Product type
router.get('/product_type', ProductTypeController.list);
//router.post('/product_type', ProductTypeController.create);
router.get('/product_type/:id', ProductTypeController.details);
//router.delete('/user_type/:id', ProductTypeController.delete);
//router.put('/user_type/:id', ProductTypeController.update);

//Product
router.get('/products', ProductController.list);
router.post('/products', ProductController.create);
router.get('/products/:id', ProductController.details);
router.delete('/products/:id', ProductController.delete);
router.put('/products/:id', ProductController.update);

//Order 
router.get('/users/:id/orders', OrderController.list);
//router.post('/orders', OrderController.create);
router.get('/users/:id/orders/:id', OrderController.details);
//router.delete('/orders/:id', OrderController.delete);
//router.put('/orders/:id', OrderController.update);


//Comment
router.post('/users/:id/comments', CommentsController.create);                       //creer un commentaire             
//router.delete('/users/:id/comments/:id', CommentsController.delete);
//router.put('/users/:id/comments/:id', CommentsController.update);


export default router;