//jqueryで書いていく
//addTodoの要素を指定する、クリックしたら関数を呼ぶ
$("#addTodo").click(function() {
    const inputTodo = $("input").val();    //inputの内容を取得する
    //inputTodoを挿入する（htmlのulタグ）
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");
    //挿入したら空にしたい
    $("input").val("");
});

//checkが入ったときに斜線を入れたい
$(document).on("change", "input[type=checkbox]", function() {
    //この(this)がチェックだったら
    if($(this).is(":checked")) {
        $(this).parent().css("text-decoration", "line-through");
    } else {
        //cssを取り除けばよい
        $(this).parent().css("text-decoration", "none");
    }
})