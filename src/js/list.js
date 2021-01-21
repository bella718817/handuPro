$(function() {
    $(".wrap>ul>li").mouseenter(function() {
        $(this).children("ul").stop().slideDown(100);
        // $(this).children("ul").css("transition",.1);

    }).mouseleave(function() {
        $(this).children("ul").stop().slideUp(100);
    })

});

//生成Pager，当前页码, 总页数, 回调function
$.fn.pager = function(page, total, callback) {
    var html = '';
    html += '<a class="first" href="javascript:;"> < </a>';
    var start = page - 5 < 0 ? 0 : page - 5;
    var end = page + 5 < total ? page + 5 : total;
    for (var i = start; i < end; i++) {
        html += i == page - 1 ? '<span>' + (i + 1) + '</span>' : '<a href="javascript:;">' + (i + 1) + '</a>';
    }
    html += '<a class="first" href="javascript:;"> > </a>';
    $(this).html(html).find('a').click(function() {
        var p = $(this).text();
        if (p == ' < ') p = page == 1 ? 1 : page - 1;
        if (p == ' > ') p = page == total ? total : page + 1;

        if (p != page) callback(parseInt(p));
    });
}

onload = function() {
    //用用回调
    function go(p) {
        $('.pager').pager(p, 3, go);
    }

    $('.pager').pager(1, 3, go);
}