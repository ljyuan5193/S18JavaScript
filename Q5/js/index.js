"use strict";

function createToDo() {


  var todo = document.createElement("div");
  var span = document.createElement("span");
  var input = document.getElementById("input").value;
  var urgent = document.getElementById("urgent").checked;
  var testtext = false;
if (document.getElementById("input").value.length  == 0){
alert("你並沒有輸入任何文字");
return;
}
//增強輸入文字驗證
    for( var i = 0; i < document.getElementById("input").value.length; i++)
    {
     if(document.getElementById("input").value.charCodeAt(i) != 32)
     {
     span.innerHTML = input;
     testtext = true;
     break;
     }
  }

  if (testtext == false){
  alert("你並沒有輸入任何文字");
  return;
  }



  if(urgent == true){
  span.style.color = "red";
  }
else{
  span.style.color = "#006400";

}
  todo.appendChild(span);

  var replaceButton = document.createElement("button");
  replaceButton.onclick = function() {
    var input = document.getElementById("input").value;
    if (document.getElementById("input").value.length  == 0){
    alert("你並沒有輸入任何文字");
    return;
    }
    testtext = false;
    for( var i = 0; i < document.getElementById("input").value.length; i++)
    {
     if(document.getElementById("input").value.charCodeAt(i) != 32)
     {
     this.parentNode.firstChild.innerHTML = input;
     testtext = true;
     break;
     }
  }

  if (testtext == false){
  alert("你並沒有輸入任何文字");
  return;
  }
    document.getElementById("input").value = "";
  }

  replaceButton.textContent = "R";
  todo.appendChild(replaceButton);

  var removeButton = document.createElement("button");
  removeButton.onclick = function() {
    var answer = confirm("確認刪除?");
    if(answer == true){
    this.parentNode.parentNode.removeChild(this.parentNode);

    }

  }

  removeButton.textContent = "V";
  todo.appendChild(removeButton);

  document.getElementById("todolist").appendChild(todo);
  document.getElementById("input").value = "";
}
