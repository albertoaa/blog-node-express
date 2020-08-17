const express = require('express');
const articlesRouter = require('./routes/articles');
const app = express();

app.set('view engine', 'ejs');

app.use('/articles', articlesRouter);

app.get('/', (req, res) => {
  const articles = [
    {
      title: 'Test Article',
      createdAt: new Date(),
      description: 'Test description',
    },
    {
      title: 'Test Article 2',
      createdAt: new Date(),
      description: 'Test description 2',
    },
  ];
  res.render('index', { articles });
});

app.listen(5000);
