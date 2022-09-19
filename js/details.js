

var articleDetails = function (articleId) {
    for (var i = 0; i < article.length; i++) {
        if (articleId == article[i].articleId) {
            // 详情盒子
            var $details = $('<div class="details">\n' +
                '    <div class="container">\n' +
                '        <div class="col-md-11 detailsBox col-xs-12" id="detailsBox">\n' +
                '            <div class="details_box">\n' +
                '                <div class="details_head container">\n' +
                '                    <div class="autor col-md-2 col-xs-4">\n' +
                '                        <img src="' + article[i].autorPhotoSrc + '" alt="" id="detailsAutorPhoto">\n' +
                '                        <span id="detailsAutorName">' + article[i].autorName + '</span>\n' +
                '                    </div>\n' +
                '                    <div class="time col-md-2 col-xs-4">\n' +
                '                        <i class="glyphicon glyphicon-calendar"></i>\n' +
                '                        <span id="detailsAnnounceTime">' + article[i].announceTime + '</span>\n' +
                '                    </div>\n' +
                '                    <div class="view col-md-2 col-xs-4">\n' +
                '                        <i class="glyphicon glyphicon-eye-open"></i>\n' +
                '                        <span id="detailsArticleViewNumber">' + article[i].articleViewNumber + '</span>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '                <div class="detailsCover">\n' +
                '                    <img src="' + article[i].articleCover + '" alt="">\n' +
                '                </div>\n' +
                '                <div class="detailsContent">\n' +
                '                    <p class="detailsTitle">' + article[i].articleTitle + '</p>\n' +
                '                    <p class="detailsText">'+article[i].articleIntor+'\n' +
                '                    </p>\n' +
                '                    <p class="subTitle">\n' +
                '                        题目描述\n' +
                '                    </p>\n' +
                '                    <p class="detailsText">\n' +
                '                        给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。\n' +
                '                        <br>\n' +
                '                        你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。\n' +
                '                    </p>\n' +
                '                    <p class="subTitle">\n' +
                '                        实例\n' +
                '                    </p>\n' +
                '                    <p class="detailsText">\n' +
                '                        给定 nums = [2, 7, 11, 15], target = 9\n' +
                '                        <br>\n' +
                '                        因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]\n' +
                '                    </p>\n' +
                '                    <p class="subTitle">\n' +
                '                        代码实现\n' +
                '                    </p>\n' +
                '                    <code>\n' +
                '<pre>\n' +
                '.details .autor>img{\n' +
                '    border: #e0e0e0 1px solid;\n' +
                '    width: 28px;\n' +
                '    height: 28px;\n' +
                '    object-fit: cover;\n' +
                '    margin-top:-8px;\n' +
                '    }\n' +
                '</pre>\n' +
                '                    </code>\n' +
                '                    <div class="menu_sign">\n' +
                '                        <li><i></i><span>HTML</span></li>\n' +
                '                        <li><i></i><span>JS</span></li>\n' +
                '                        <li><i></i><span>JavaScript</span></li>\n' +
                '                        <li><i></i><span>唐诗三百首</span></li>\n' +
                '                        <li><i></i><span>Engine</span></li>\n' +
                '                        <li><i></i><span>C#</span></li>\n' +
                '                        <li><i></i><span>C++</span></li>\n' +
                '                        <li><i></i><span>Unreal Engine</span></li>\n' +
                '                    </div>\n' +
                '                    <div class="admireBox">\n' +
                '                        <a href="" class="admire">赞赏</a>\n' +
                '                    </div>\n' +
                '                    <div class="contactAutor">\n' +
                '                        <ul class="infoList">\n' +
                '                            <li>联系作者:1008611(<a href="" id="detailsAnnounceTime2">318988419</a>)</li>\n' +
                '                            <li>发表时间:<span id="detailsAnnounceTime2">' + article[i].announceTime + '15:13:20</span></li>\n' +
                '                        </ul>\n' +
                '                        <img src="./img/wechat.jpg" alt="图片到异次元了">\n' +
                '                    </div>\n' +
                '                    <div class="comment">\n' +
                '                        <p class="commentHead">\n' +
                '                            评论\n' +
                '                        </p>\n' +
                '                        <textarea name="" id="commentInfo" cols="30" rows="5" placeholder="请输入评论信息...">\n' +
                '\n' +
                '                        </textarea>\n' +
                '                        <div class="commentUserInfo">\n' +
                '                            <div class="inputName">\n' +
                '                                <i class="glyphicon glyphicon-user"></i>\n' +
                '                                <input type="text" name="commentUserName" id="" placeholder="姓名">\n' +
                '                            </div>\n' +
                '                            <div class="inputEmail">\n' +
                '                                <i class="glyphicon glyphicon-envelope"></i>\n' +
                '                                <input type="email" name="commentUserEmail" id="" placeholder="邮箱">\n' +
                '                            </div>\n' +
                '                            <div class="sendComment">\n' +
                '                                <i class="glyphicon glyphicon-pencil"></i>\n' +
                '                                <span>评论</span>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>');
            $("#content").html($details);
        }
    }
}