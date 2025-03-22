const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<html>
      <head>
        <meta charset="UTF-8">
        <title>Bảng Thông Tin Sinh Viên</title>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
          }
          table, th, td {
            border: 1px solid black;
          }
          th, td {
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
    </head>
    <table>
      <thead>
          <tr>
              <th>MSHV</th>
              <th>Họ tên</th>
              <th>Ngày sinh</th>
              <th>Quê quán</th>
              <th>Email</th>
              <th>SĐT</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>M2524006</td>
              <td>Hoàng Thị Thanh Hà</td>
              <td>25/11/2001</td>
              <td>Kiên Giang</td>
              <td>ham2524006@gstudent.ctu.edu.vn</td>
              <td>0836251101</td>
          </tr>
      </tbody>
    </table>
  </html>
  `);
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
