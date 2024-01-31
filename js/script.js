$(function () {
    //메뉴
    $(".main>li").hover(function () {
        $(this).find(".sub").stop().show();
    }, function () {
        $(".sub").stop().hide();
    })

    //슬라이드 방법1
    // setInterval(function(){
    //     $(".move").animate({left:"-800px"}, 500, function(){
    //         $(".move").css({left:"0"});
    //         $(".move").append($(".move li").eq(0));
    //     })
    // },2000)


    //슬라이드 방법2
    // var n = 0;
    // setInterval(function () {
    //     if (n == 2) {
    //         n = 0;
    //     } else {
    //         n++;
    //     }
    //     pos = n * -800 + "px";
    //     console.log(pos)
    //     $(".move").animate({
    //         left: pos
    //     }, 500);
    // }, 2000)

    //슬라이드 방법3
var n = 0;
setInterval(function(){
    n = (n + 1) % 3;
    console.log(n);
    pos = n * -800 + "px";
    $(".move").animate({left:pos},500);
},2000)//

//pop
$(".p_click").click(function(){
    $(".pop").fadeIn()
})
$(".close").click(function(){
    $(".pop").fadeOut()
})



}) //jquery