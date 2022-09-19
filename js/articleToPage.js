
var articleLocation = $("#articleLocation");
for(var i=0;i<article.length;i++){
    for(var j=0;j<article.length-i-1;j++){
        if(Number(article[j].articleViewNumber)<Number(article[j+1].articleViewNumber)){
            var temp = article[j];
            article[j] = article[j+1];
            article[j+1] = temp;
        }
    }
}
for (var i = 0; i < article.length; i++) {
    var articleTitle = article[i].articleTitle;
    var articleIntor = article[i].articleIntor;
    var autorPhotoSrc = article[i].autorPhotoSrc;
    var autorName = article[i].autorName;
    var announceTime = article[i].announceTime;
    var articleViewNumber = article[i].articleViewNumber;
    var articleLable = article[i].articleLable;
    var articleCover = article[i].articleCover;
    var articleId = article[i].articleId;

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
$("#articleNumber").html(' '+article.length+' ')