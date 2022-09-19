var key = function(){
    
}
var searchByData = function () {
    // 先注入内容框架盒子
    var $contentBox = $(
        '        <div class="container">\n' +
        '            <div class="col-md-12" id="articleLocation" style="border: 1px solid black;">\n' +
        '                <div class="ctHead">\n' +
        '                    <div class="headLeft">\n' +
        '                        <i class="glyphicon glyphicon-list"></i>搜索结果\n' +
        '                    </div>\n' +
        '                    <div class="headRight">\n' +
        '                        共<span id="articleNumber"> '+0+' </span>篇\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n'
        );
    $("#content").html($contentBox);
    console.log($("#content"))

    // 注入搜索内容
    var articleLocation = $("#articleLocation");
    console.log(articleLocation)
    var resultNumber = 0;
    var searchValue = $("#onSearch").val();
    if (searchValue) {
        var articleId = searchValue;
        var rule = eval("/"+searchValue+"+/i");
        for (var i = 0; i < article.length; i++) {
            if (rule.test(article[i].articleTitle) || rule.test(article[i].articleIntor) || rule.test(article[i].autorName)) {
                resultNumber++;
                var articleTitle = article[i].articleTitle;
                var articleIntor = article[i].articleIntor;
                var autorPhotoSrc = article[i].autorPhotoSrc;
                var autorName = article[i].autorName;
                var announceTime = article[i].announceTime;
                var articleViewNumber = article[i].articleViewNumber;
                var articleLable = article[i].articleLable;
                var articleCover = article[i].articleCover;
                var articleId = article[i].articleId;
                console.log(articleId);
                var $articleList = $('<div class="articleList">' +
                    '<div class="articleInfo">' +
                    '<div class="articleTitle" onclick="articleDetails('+articleId+')">' +
                    '<p id="articleTitle">' + articleTitle + '</p>' +
                    '</div>' +
                    '<div class="articleIntor" onclick="articleDetails('+articleId+')">' +
                    '<p id="articleIntor">' +
                    articleIntor
                    +
                    '</p>' +
                    '</div>' +
                    '<div class="attribute">' +
                    '<div class="autor">' +
                    '<img src="' + autorPhotoSrc + '" alt="" id="autorPhoto">' +
                    '<span id="autorName">' + autorName + '</span>' +
                    '</div>' +
                    '<div class="time">' +
                    '<i class="glyphicon glyphicon-calendar"></i>' +
                    '<span id="announceTime">' + announceTime + '</span>' +
                    '</div>' +
                    '<div class="view">' +
                    '<i class="glyphicon glyphicon-eye-open"></i>' +
                    '<span id="articleViewNumber">' + articleViewNumber + '</span>' +
                    '</div>' +
                    '<div class="lable">' +
                    '<a href="" id="lable">' + articleLable + '</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="articleCover">' +
                    '<img src="' + articleCover + '" alt="">' +
                    '</div>' +
                    '</div>');
                articleLocation.append($articleList);
            }
        }
        $("#articleNumber").html(resultNumber);
    } else {
        alert("请输入搜索关键字");
    }
}


