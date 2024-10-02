const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 5000;

app.use(bodyParser.json());

//lists 테이블 생성
db.pool.query(`CREATE TABLE lists(
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
    )`, (err, results, fields) => {
        console.log('CREATE results: ', results);
    })


app.get('/api/hi', function (req, res) {
   res.status(200).send('SSG says hi!!@@@@@')
})


//테이블에 있는 데이터 프론트로 보내기
app.get('/api/values', (req, res) => {
    db.pool.query('SELECT * FROM lists;',
        (err, results, fields) => {
            if(err)
                return res.status(500).send(err)
            else
                return res.json(results)
        }
    )
})

//프론트에서 받은 데이터 DB에 insert
app.post('/api/value', (req, res) =>{
    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}");`,
        (err, results, fields) => {
            if(err)
                return res.status(500).send(err)
            else
                return res.json({ success: true, value: req.body.value })
        }
    )
})

app.listen(port, () => {
    console.log(`server running on ${port}`)
})