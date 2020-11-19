const http=require('http');


const server=http.createServer((req,res)=>{
    console.log(req)
    res.end();
});
// در کد فوق متد کریت سرور یک کالبک دریافت میکند 
// که در زمان خاص مثلا بعد از فراخوانی متد لیسن در کد زیر، کالبک فوق را اجرا میکند.

server.listen(3000, '127.0.0.1',()=>{
console.log('server is running on localhost:3000');
});
