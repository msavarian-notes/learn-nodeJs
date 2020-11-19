// Php is a blocking(Syncronis) language
// Js is a non-blocking(Asyncronus)  language

// به جهت رفع مشکل فوق (مشکلی که در زبان های نانبلاکینگ به وجود میاید) می توان از روش های زیر در جاوا اسکریپت استفاده نمود
// ES5  - Callback
// ES6  - Promise
// ES6+ - Async/Await
// -----------------------------------------------------

// در زبانی جاوااسکریپت که یک زبان نانبلاکینگ محسوب میشود
// هر زمان که یک کاری زمانبر باشد کاپایلر یا مفسر از روی آن کار رد میشود و هر زمان که انجام شد برمیگردد روی آن

// در اینجا یک تابع است که کار زمانبری دارد
function save_data_to_db(name){
    setTimeout(() => {
        console.log('first action - data saved to db');
        return name + ' from db';
    }, 2000);
}

let name='mahmoud';

// کامپایلر بیخیال منتظر ماندن جواب این خط کد میشود و به خط بعد میرود تا زمانی که کار انجام این خط پایان یابد
let result=save_data_to_db(name); 

// اگر در پی اچ پی بودیم یا یک زبان بلاکینگ دیگر، می توانستیم مطمئن باشیم که متغییر ریزالت در کد زیر مقدار دارد.
// اما در اینجا با توجه به اینکه خط بالایی طمان بر است و جاوااسکریپت سریعا خط زیر را اجرا میکند هنوز متغییر ریزالت مقداری ندارد.
console.log('second action - show result : ' + result);
