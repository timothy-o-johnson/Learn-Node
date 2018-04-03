const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const wes = {name: 'Tim', age: 100, cool: true}
  console.log("what up tho?!")
  res.send('Hey! It works!');
  //res.json(wes)
  // res.send(req.query.name)
  //res.send(req.query)
});

router.get('/reverse/:name',(req, res) => {
  const reverse = [...req.params.name].reverse().join('')
  res.send(reverse)
})

module.exports = router;
