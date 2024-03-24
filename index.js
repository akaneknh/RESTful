const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get('/tacos', (req, res) => {
  res.send("GET /tacos response")
})


const comments = [
  {

      username: 'Todd',
      comment: 'lol that is so funny!'
  },
  {

      username: 'Skyler',
      comment: 'I like to go birdwatching with my dog'
  },
  {

      username: 'Sk8erBoi',
      comment: 'Plz delete your account, Todd'
  },
  {

      username: 'onlysayswoof',
      comment: 'woof woof woof'
  }
];

app.get('/comments', (req, res) => {
  res.render('comments/index', {comments})
});

app.post('/tacos', (req, res) => {
  const { meat, qty } = req.body;
  console.log(req.body)
  res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
  console.log("ON PORT 3000")
})


