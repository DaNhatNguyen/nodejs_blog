const path = require('path');
const { engine } = require('express-handlebars'); // Import đúng kiểu mới
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');

// Lưu dữ liệu từ form gửi lên với phương thức là POST vào trong body
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json()); // tương tự vơi các file script 


// Static File
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'));

// Template Engine
app.engine('hbs', engine({
  extname: '.hbs'
})); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);

// Start Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
