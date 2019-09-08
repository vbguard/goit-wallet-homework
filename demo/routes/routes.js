const passport = require('../auth');
const config = require('../config');
const router = require("express").Router();
const authMiddleware = require('../middleware/authorization');

const UserController = require('../controllers/user');
const AuthController = require('../controllers/auth');
const TransactionController = require('../controllers/transaction');

router.post('/login', async (req, res) => {
  const tokens = await AuthController.login(req.body);

  if (!tokens) {
    res.status(404).json({code: 'USER_NOT_FOUND', message: 'User not found'});
  }

  res.json(tokens);
});

router.post('/refresh', async (req, res) => {
  const tokens = await AuthController.exchangeRefreshToken(req.headers['authorization']);

  res.json(tokens);
});

router.post('/users', async (req, res) => {
  const user = await UserController.createUser(req.body);
  res.json(user.render());
});

// TODO add here google, facebook (twitter optional) authentications

router.get('/auth/google', (req, res) => res.json({message: 'stub for google auth'}));
router.get('/auth/google/callback', (req, res) => res.json({message: 'stub for google auth callback'}));

router.get('/auth/facebook', (req, res) => res.json({message: 'stub for facebook auth'}));
router.get('/auth/facebook/callback', (req, res) => res.json({message: 'stub for facebook auth callback'}));

router.get('/auth/linkedin', passport.authenticate('linkedin', {scope: config.linkedIn.scopes}));

router.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  failureRedirect: '/api/login'
}), async (req, res) => {
  const user = await UserController.getLinkedInUser(req.user);
  const tokens = await AuthController.generateTokens(user);
  
  res.json(tokens);
});

router.get('/users', async (req, res) => {
  const users = (await UserController.searchUsers(req.query)).map(user => user.render());
  
  res.json(users);
});

router.get('/users/:id', async (req, res) => {
  const user = await UserController.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({code: 'NOT_FOUND', message: 'User not Found'})
  }

  res.json(user.render());
});

/**
 * @description should return transactions for current user
 * */
router.get('/transactions', authMiddleware, async (req, res) => {
  const transactions = await TransactionController.getUserTransactions(req.user, req.query);

  res.json(transactions);
});

/**
 * @description should change current user password and return status code 200 if succeeded 
 * */
router.patch('/change-password', (req, res) => {
  // TODO implement set password logic here
  res.sendStatus(200);
});

/**
 * @description should return user balance in json format in base currency
 * */
router.get('/balance', (req, res) => {
  // TODO implement fetching balance here
  res.sendStatus(200);
});

/**
 * @description should add expense transaction for current user
 * */
router.post("/costs", authMiddleware, (req, res) => {
  // TODO implement saving costs
  res.json({transaction: 'costs'});
});

/**
 * @description should add income transaction for current user
 * */
router.post("/income", authMiddleware, (req, res) => {
  // TODO implement saving income
  res.json({transaction: 'income'});
});

module.exports = router;