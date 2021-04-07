let obj = {}; // =new Object();
       obj.color = 'white';
       obj.price = 1000000;
       obj.info = function() {
           return obj.color + ' ' + obj.price;
       }
       console.log(obj.color);
       console.log(obj.price);
       console.log(obj.info());
    
    function getTime() {
       let show = document.getElementById('show');
       let time = new Date();
       let year = time.getFullYear();
       let month = time.getMonth();
       let date = time.getDate();
       let hh = time.getHours();
       let mm = time.getMinutes();
       let ss = time.getSeconds();
       show.innerHTML = year + '년 ' + (month+1) + '월 ' + date + '일 ' //
       + hh + ':' + mm + ':' + ss;
    }
    setInterval (function() {
        getTime();
    }, 1000); // 1초단위로 function() 실행

    let today = new Date();
    let nowYear = today.getFullYear();

    let theDate = new Date(nowYear, 11, 31);
    let diffDate = theDate.getTime() - today.getTime();

    let result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
    document.write("연말 D-day: " + result + "일 남았습니다.");

    Math.abs(-100);
    for (let i = 0; i<10; i++)
        console.log(Math.floor(Math.random()*100)+ 100); 
    console.log(Math.max(2,4,6,1,-1));