const express = require('express');
const userRoutes = require('./routers/userRoutes');
const dbConfig = require('./config/dbConfig');


const app = new express();
// Kết nối đến cơ sở dữ liệu MongoDB
dbConfig.connectDB();
// Sử dụng middleware để phân tích nội dung yêu cầu từ JSON
app.use(express.json());

// Sử dụng các route của user
app.use('/api/users', userRoutes);



app.listen(4000, () => {
    console.log('App listening on port 4000')
})

