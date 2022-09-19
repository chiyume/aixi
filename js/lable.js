
/**
 * 
 * 
 * 
 * 页面加入标签
 */

var toLablePage = function (self) {
    var loc = $(".active");
        loc.removeClass("active");
        var myself = $(self);
        myself.addClass("active");
        console.log(self)
        
    // 注入标签head盒子
    var $lableHeadBox = $('<div class="container-fluid lables" id="lablePage">\n' +
        '    <div class="col-md-2">\n' +
        '    </div>\n' +
        '    <div class="col-md-8">\n' +
        '<div class="konoHead" >\n' +
        '            <i class="glyphicon glyphicon-tasks"></i><span>全部标签</span>\n' +
        '        </div>' +
        '        <ul class="lablesList" id="lableAll">\n' +
        '        </ul>\n' +
        '    </div>\n' +
        '    <div class="col-md-2">\n' +
        '    </div>\n' +
        '</div>');
    $("#content").html($lableHeadBox);
    // 盒子里面放入标签
    for (var i = 0; i < lables.length; i++) {
        var $lable = $('<a href="#lableLocation' + lables[i].id + '"><li><i></i><span class="lableName">' + lables[i].name + '</span><span class="num" id="thisLableArticleNumber'+lables[i].id+'">'+lables[i].number+'</span></li></a>\n');
        $("#lableAll").append($lable)
    }
    for (var i = 0; i < lables.length; i++) {
        var articleNum = 0;
        var addHead = false;
        for (var j = 0; j < article.length; j++) {
            if (lables[i].name == article[j].articleLable) {
                articleNum++;
                //判断模块盒子是否注入
                if (addHead) {
                    var $lableArticlList = $('<div class="articleList">\n' +
                    '                    <div class="articleInfo">\n' +
                    '                        <div class="articleTitle" onclick="articleDetails(' + article[j].articleId + ')">\n' +
                    '                            <p id="articleTitle">' + article[j].articleTitle + '</p>\n' +
                    '                        </div>\n' +
                    '                        <div class="articleIntor" onclick="articleDetails(' + article[j].articleId + ')">\n' +
                    '                            <p id="articleIntor">\n' + article[j].articleIntor +
                    '                            </p>\n' +
                    '                        </div>\n' +
                    '                        <div class="attribute">\n' +
                    '                            <div class="autor">\n' +
                    '                                <img src="' + article[j].autorPhotoSrc + '" alt="" id="autorPhoto">\n' +
                    '                                <span id="autorName">' + article[j].autorName + '</span>\n' +
                    '                            </div>\n' +
                    '                            <div class="time">\n' +
                    '                                <i class="glyphicon glyphicon-calendar"></i>\n' +
                    '                                <span id="announceTime">' + article[j].announceTime + '</span>\n' +
                    '                            </div>\n' +
                    '                            <div class="view">\n' +
                    '                                <i class="glyphicon glyphicon-eye-open"></i>\n' +
                    '                                <span id="articleViewNumber">' + article[j].articleViewNumber + '</span>\n' +
                    '                            </div>\n' +
                    '                            <div class="lable">\n' +
                    '                                <a href="" id="lable">' + article[j].articleLable + '</a>\n' +
                    '                            </div>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                    <div class="articleCover">\n' +
                    '                        <img src="'+article[j].articleCover+'" alt="">\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '                <!-- 文章结束 -->\n');
                    $("#lableLocation" + lables[i].id +"").append($lableArticlList);
                    lables[i].number = articleNum;
                } else {
                    var $head = '<div class="content labelContent" style="padding: 10px;">\n' +
                        '        <div class="container-fluid">\n' +
                        '            <div class="col-md-2"></div>\n' +
                        '            <div class="col-md-8 labelArticle" id="lableLocation' + lables[i].id + '">\n' +
                        '                <div class="ctHead">\n' +
                        '                    <div class="headLeft">\n' +
                        '                        <i class="glyphicon glyphicon-tags"></i>' + lables[i].name + '\n' +
                        '                    </div>\n' +
                        '                    <div class="headRight">\n' +
                        '                        共<span id="articleNumber'+lables[i].id+'" style="font-size: 20px; color: coral;">  ' + 0 + '  </span>篇\n' +
                        '                    </div>\n' +
                        '                </div>\n' +
                        '            </div>\n' +
                        '            <div class="col-md-2"></div>\n' +
                        '        </div>\n' +
                        '    </div>';
                    $("#lablePage").append($head);
                    addHead = true;
                    var $lableArticlList = $('<div class="articleList">\n' +
                        '                    <div class="articleInfo">\n' +
                        '                        <div class="articleTitle" onclick="articleDetails(' + article[j].articleId + ')">\n' +
                        '                            <p id="articleTitle">' + article[j].articleTitle + '</p>\n' +
                        '                        </div>\n' +
                        '                        <div class="articleIntor" onclick="articleDetails(' + article[j].articleId + ')">\n' +
                        '                            <p id="articleIntor">\n' + article[j].articleIntor +
                        '                            </p>\n' +
                        '                        </div>\n' +
                        '                        <div class="attribute">\n' +
                        '                            <div class="autor">\n' +
                        '                                <img src="' + article[j].autorPhotoSrc + '" alt="" id="autorPhoto">\n' +
                        '                                <span id="autorName">' + article[j].autorName + '</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="time">\n' +
                        '                                <i class="glyphicon glyphicon-calendar"></i>\n' +
                        '                                <span id="announceTime">' + article[j].announceTime + '</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="view">\n' +
                        '                                <i class="glyphicon glyphicon-eye-open"></i>\n' +
                        '                                <span id="articleViewNumber">' + article[j].articleViewNumber + '</span>\n' +
                        '                            </div>\n' +
                        '                            <div class="lable">\n' +
                        '                                <a href="" id="lable">' + article[j].articleLable + '</a>\n' +
                        '                            </div>\n' +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '                    <div class="articleCover">\n' +
                        '                        <img src="'+article[j].articleCover+'" alt="">\n' +
                        '                    </div>\n' +
                        '                </div>\n' +
                        '                <!-- 文章结束 -->\n');
                    console.log($("#lable" + lables[i].id + ""))
                    $("#lableLocation" + lables[i].id +"").append($lableArticlList);
                    lables[i].number = articleNum;
                }
            }
        }
        
    }
    for(var i=0;i<lables.length;i++){
        if(lables[i].number>0){
            $("#thisLableArticleNumber"+lables[i].id+"").html(lables[i].number);
            // $("#lable"+lables[i].id+"")
            $("#articleNumber"+lables[i].id+"").html(" "+lables[i].number+" ");
        }
    }
    // for (var i = 0; i < lables.length; i++) {

    //     for (var j = 0; j < article.length-1; i++) {
    //         if (lables[i].name == article[j].articleLable) {

    //             articleNum++;
    //             if (!addHead) {
    //                 var $head = '<div class="content labelContent" id="lable' + lables[i].id + '" style="padding: 10px;">\n' +
    //                     '        <div class="container-fluid">\n' +
    //                     '            <div class="col-md-2"></div>\n' +
    //                     '            <div class="col-md-8 labelArticle" id="labelArticle">\n' +
    //                     '                <div class="ctHead">\n' +
    //                     '                    <div class="headLeft">\n' +
    //                     '                        <i class="glyphicon glyphicon-tags"></i>JavaScript\n' +
    //                     '                    </div>\n' +
    //                     '                    <div class="headRight">\n' +
    //                     '                        共<span id="articleNumber"> ' + articleNum + ' </span>篇\n' +
    //                     '                    </div>\n' +
    //                     '                </div>\n' +
    //                     '            </div>\n' +
    //                     '            <div class="col-md-2"></div>\n' +
    //                     '        </div>\n' +
    //                     '    </div>';
    //                 $("#lablePage").append($head);
    //                 addHead = true;
    //             }
    //             else {

    //             }
    //         }
    //     }
    // }
}
