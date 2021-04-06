function createCal() {
    let today = new Date();
    let thisYear = today.getFullYear(); // 2021
    let thisMonth = today.getMonth(); // 3 : 0부터 1월
    let thisDate = today.getDate(); // 6일
    let thisDay = today.getDay(); // 0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토
    console.log(thisYear);
    console.log(thisMonth);
    console.log(thisDate);
    console.log(thisDay);

    console.log('----');

    let lastDate = new Date(thisYear, thisMonth+1, 0).getDate(); // 이번달의 마지막 날
    let firstDate = new Date(thisYear, thisMonth, 1); 
    let firstDay = firstDate.getDay(); // 이번달 첫째날의 요일
    let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    console.log(lastDate);
    console.log(firstDate);
    console.log(firstDay);
    console.log(days);


    document.write('<table border="1">');
    document.write('<tr>');
    for (let i = 0; i < 7; i++) {
        document.write('<th>' + days[i] + '</th>');
    }
    document.write('</tr>');
    // 요일

    document.write('<tr>');
    for(let i = 0; i < firstDay; i++) {
        document.write('<td></td>');
        }
    // 1일이 시작 되는 요일까지의 공간

    for (let i = 1; i <= lastDate; i++) {
        if( i % 7 == (7-firstDay)) { 
            document.write('<td>' + i + '</td></tr><tr>');
        } // 줄바꿈
        else if (i == thisDate) {
            document.write('<td style="background-color: yellow;">' + i + '</td>');
        } else {
            document.write('<td>' + i + '</td>');
        }
    }
    document.write('</tr></table>');
    // 일 표시
}