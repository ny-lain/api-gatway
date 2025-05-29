const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/Student', createProxyMiddleware({ target: 'http://localhost:5001', changeOrigin: true }));
app.use('/Teacher', createProxyMiddleware({ target: 'http://localhost:5002', changeOrigin: true }));

app.listen(5000, () => console.log('API Gateway running on port 5000'));
