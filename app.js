//jqueryで書いていく
//addTodoの要素を指定する、クリックしたら関数を呼ぶ
$("#addTodo").click(function() {
    const inputTodo = $("input").val();    //inputの内容を取得する
    //inputTodoを挿入する（htmlのulタグ）
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");
    //挿入したら空にしたい
    $("input").val("");
});