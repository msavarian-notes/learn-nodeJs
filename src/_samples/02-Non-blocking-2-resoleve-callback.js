// Php is a blocking(Syncronis) language
// Js is a non-blocking(Asyncronus)  language

// به جهت رفع مشکل فوق (مشکلی که در زبان های نانبلاکینگ به وجود میاید) می توان از روش های زیر در جاوا اسکریپت استفاده نمود
// ES5  - Callback
// ES6  - Promise
// ES6+ - Async/Await
// -----------------------------------------------------

function save_data_to_db(name, callback){
    setTimeout(() => {
        console.log('first action - data saved to db');
        callback(name + ' from db');
    }, 2000);
}

let name='mahmoud';
let result=save_data_to_db(name, (result)=>{
    console.log('second action - show result : ' + result)
});

// برای حل چالشی که در نانبلاکینگ وجود دارد میتوانیم از کالبک استفاده کنیمم