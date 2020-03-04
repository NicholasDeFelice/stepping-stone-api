const express = require('express');
const router = express.Router();

const {userControllers} = require('../../controllers');

const addUser = userControllers.addUser;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res) =>{
  addUser(req.body).then((result) => {
    if(result === 'successful'){
      res.send(result);
      return true;
    }
    else{
      res.status(400).send({
        error:{
          message: result.error
        }
      });
    } return;
  })
  .catch((e) => {
    console.log('error:', e, e.message);
    res.status(500).send({
      error: {
        message: 'error, developer error'
      }
    });
  });
})

module.exports = router;
