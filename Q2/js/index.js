"use strict";
function validate() {

  var nric = document.getElementById("nric");
  var code = nric.value;

  if(code == ""){
    alert("身分證欄位不能空白！");
    return;
  }
  else if( !isNaN(code)){
    alert("身分證欄位不是全都數字吧！");
    return;
  }
  else if( code.length != 10 ) {
    alert("你輸入的身分證字號長度不正確！");
    return;
  }
  else {
  var verification = document.getElementById("result");
  var div = document.createElement("div");
  var diva = document.createElement("div");
  var county = "";
//驗證第一碼後面 全數為數字
  if(isNaN(code.slice(1,10))){
    alert("驗證失敗");
    document.getElementById("result").innerHTML = "";
    div.innerHTML ="";
    return;
  }

  if( code.slice(1,2) == 1){
    div.innerHTML ="男";

  }

  else if(code.slice(1,2) == 2){
    div.innerHTML ="女";
  }
//驗證第二碼 數字大於0 數字小於2
  else {
    alert("驗證失敗");
    document.getElementById("result").innerHTML = "";
    div.innerHTML ="";
    return;
  }

//驗證第一碼 為英文 非英文失敗
  switch( code.slice(0,1).toLowerCase()) {
    case "a": county=" 臺北市";break;
    case "b": county=" 臺中市";break;
    case "c": county=" 基隆市";break;
    case "d": county=" 臺南市";break;
    case "e": county=" 高雄市";break;
    case "f": county=" 新北市";break;
    case "g": county=" 宜蘭縣";break;
    case "h": county=" 桃園縣";break;
    case "i": county=" 嘉義市";break;
    case "j": county=" 新竹縣";break;
    case "k": county=" 苗栗縣";break;
    case "l": county=" 臺中縣";break;
    case "m": county=" 南投縣";break;
    case "n": county=" 彰化縣";break;
    case "o": county=" 新竹市";break;
    case "p": county=" 雲林縣";break;
    case "q": county=" 嘉義縣";break;
    case "r": county=" 臺南縣";break;
    case "s": county=" 高雄縣";break;
    case "t": county=" 屏東縣";break;
    case "u": county=" 花蓮縣";break;
    case "v": county=" 臺東縣";break;
    case "w": county=" 金門縣";break;
    case "x": county=" 澎湖縣";break;
    case "y": county=" 陽明山";break;
    case "z": county=" 連江縣";break;
    default: alert("驗證失敗");return;
  }

document.getElementById("result").innerHTML = "通過驗證";
verification.appendChild(div);
diva.innerHTML =county;
div.appendChild(diva);
}
}
// 額外查詢縣市的功能
