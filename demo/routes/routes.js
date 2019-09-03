const router = require("express").Router();

const UserController = require('../controllers/user');

router.post('/users', async (req, res) => {
  const user = await UserController.createUser(req.body);
  res.json(user.render());
});

router.get('/users/:id', async (req, res) => {
  const user = await UserController.getUserById(req.params.id);
  
  if (!user) {
    return res.status(404).json({code: 'NOT_FOUND', message: 'User not Found'})
  }
  
  
  res.json(user.render());
});

router.get("/costs", (req, res) => {
  
  setTimeout(() => {
    throw new Error('bla bla bla')
  }, 0);
  
  // res.status(200).json({
  //   costs: [
  //     {
  //       id: "nokfw23io112",
  //       number: 12
  //     }
  //   ]
  // });
});

module.exports = router;
