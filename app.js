const express = require('express');
const userRoutes = require('./routers/userRoutes');
const phieuRoutes = require('./routers/phieuRoutes')
const dbConfig = require('./config/dbConfig');
const cors = require('cors');


const app = new express();

app.use(cors());
// Kết nối đến cơ sở dữ liệu MongoDB
dbConfig.connectDB();
// Sử dụng middleware để phân tích nội dung yêu cầu từ JSON
app.use(express.json());

// Sử dụng các route của user
app.use('/api/users', userRoutes);
app.use('/api/phieu', phieuRoutes);


app.listen(4000, () => {
    console.log('App listening on port 4000')
})

