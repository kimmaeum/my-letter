const allTodo = document.getElementsByClassName("todo");

function finish() {
  // 아래 코드에서 알림창 문구를 수정할 수 있어요!
  alert("잘했어 자 다음 가자!");
}

for (let i = 0; i < allTodo.length; i++) {
  allTodo[i].addEventListener("click", finish);
}
