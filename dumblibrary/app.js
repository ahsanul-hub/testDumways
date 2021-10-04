const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dumblibrary'
});
// try{
//     await db.authenticate();
//         console.log('Database connect');
// } catch(error){
//     console.log('database gagal connect',error);
// }
connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('success');
  });

app.get('/', (req, res) => {
    res.render('index.ejs');
  });

app.get('/index', (req, res) => {
    connection.query('select * from book;', (error,results) => {
      res.render('index.ejs',{book:results});
  });
  
  });








app.listen(3000, () => {
    console.log("aplikasi berjalan");
});