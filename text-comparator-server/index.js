const express = require('express')
const bodyParser = require('body-parser')
const {compareTexts} = require ('./textComparator')

const app = express();
const cors = require('cors');
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/compare', (req, res) => {
    const {text1, text2} = req.body;
    const differences = compareTexts(text1, text2);
    res.json({differences});
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });