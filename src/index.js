const express = require('express');
const ver = "2019.05.10A01";
const app = express();

/*
    * 엄복동 계산기
    * 술 한잔 마셨습니다... API가 잘 안되도 좋습니다. 하지만 UDB 하나만 기억해주세요.
*/

const userCheckSuccess = 0;
const userCheckFail = 0;

function totalLog(data){
    if (data == "success"){
        userCheckSuccess += 1;
    }else{
        userCheckFail += 1;
    }
    console.log(`*** [totalLog] Success : ${userCheckSuccess} / Fail : ${userCheckFail} / Total : ${userCheckSuccess+userCheckFail}`);  
}

function userLog(keyword , type){
    console.log(`*** [userLog] FailKeyword : ${keyword} / type : ${type}`);
    totalLog('fail');
    let errorcode = "UDB 수치가 아닌것 같아요. 상세 명령어는 help를 입력해주세요.";
    return errorcode;
}


app.get('/ubd', function(req, res) {
    let userKeyword = req.query.price;
    let type = req.query.type;

    let botReterun = "";

    if (userKeyword == "help") {
        botReterun = "UDB 계산기는 다음과 같은 명령어로 사용하실 수 있습니다. \n /ubd?price=금액&tpye=타입[ubd(172,212)|ubd2(300억)|ubds(170,000)] \n 예제 : /ubd?price=100000&type=ubds"
    }else if (type == "ubd"){
        if (Number(userKeyword) > 0){
            botReterun = (userKeyword / 172212).toFixed(3);
            totalLog('success');
        }else{
            botReterun = userLog(userKeyword , type);
        }
    }else if(type == "ubd2"){
        if (Number(userKeyword) > 0){
            botReterun = (userKeyword / 30000000000).toFixed(3);
            totalLog('success');
        }else{
            botReterun = userLog(userKeyword , type);
        }
    }else if(type == "ubds"){
        if (Number(userKeyword) > 0){
            botReterun = (userKeyword / 170000).toFixed(3);
            totalLog('success');
        }else{
            botReterun = userLog(userKeyword , type);
        }
    }else {
        if (Number(userKeyword) > 0){
            botReterun = (userKeyword / 172212).toFixed(3);
            type = "ubd";
            totalLog('success');
        }else{
            botReterun = userLog(userKeyword , type);
        }
    }

    const jsonObject = {
        "ubd" : botReterun ,
        "tickets" : userKeyword,
        "type" : type
    };

    res.writeHead(200, {
        'Content-Type': 'text/json;charset=utf-8'
    });
    res.end(JSON.stringify(jsonObject));
});


app.listen(3081, function() {

    console.log("*  Uhm Bok-Dong 계산 API");
    console.log("*  버전 : 1.0 ver ( "+ver+" )");

    //3080번 포트 사용해서 오픈
    console.log('3081번 포트가 열렸습니다.');
});