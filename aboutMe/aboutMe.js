//关于作者页

var data = [
    {title:"LeetCode-001 两数之和"},
    {title:"关于MySQL面试的100个常见问题"},
    {title:"Linux系统使用Yum命令安装Java环境"}]

    var blogData = '';
    for(var i=0; i<data.length; i++) {
        blogData += '<li>'+data[i].title+'</li>'
    }

function onAboutMe(self){
    var loc = $(".active");
    loc.removeClass("active");
    var myself = $(self);
    myself.addClass("active");
    setTimeout(function () {
        console.log("setTimeout")
        var loc = $(".active");
        loc.removeClass("active");
        var myself = $(self);
        myself.addClass("active");
    }, 500)
    
			$("#content").html('<div class="container">'+
            '<div class="col-md-2">'+
                '<div class="userNav">'+
                    '<div class="information">'+
                        '<ul class="userNavUl">'+
                            '<li class="userNavUlActive" onclick="onInformation()" id="userInformation"><i class="userNavUlfirst"></i><span>基本信息</span></li>'+
                            '<li onclick="onPhotoWall()" id="userPhotoWall"><i></i><span>照片墙</span></li>'+
                            '<li class="newTitle"><i></i><span>最新博客</span>'+
                                '<ol class="newBlog" id="newBlog">'
                                +blogData+
                               '</ol>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<!-- 信息 -->'+
            '<div class="col-md-6" id="col-md-6">'+
                '<div class="aboutMe_img">'+
                    '<img src="./img/mikoto (45).jpg" alt="">'+
                '</div>'+
            '</div>'+
            '<div class="col-md-4" id="col-md-4">'+
                '<div class="aboutMe_message">'+
                    '<div class="message_top">'+
                        '<div class="userName">关于我</div>'+
                    '</div>'+
                    '<div class="message_Myself">'+
                        '<p>一个独立开发者,折腾在0和1世界的大叔,一个终身学习者,誓将学习无限循环,希望可以结识共同成长的小伙伴。</p>'+
                       '<p>热爱编程,喜欢折腾,正在探索高效学习编程技术的方法...</p>'+
                    '</div>'+
                    '<div class="message_tag">'+
                        '<ul>'+
                            '<span><i></i>编程</span>'+
							'<span><i></i>写作</span>'+
							'<span><i></i>思考</span>'+
							'<span><i></i>运动</span>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="message_tag">'+
                        '<ul class="tag2">'+
                            '<span><i></i>JAVA</span>'+
							'<span><i></i>HTML</span>'+
							'<span><i></i>CSS</span>'+
							'<span><i></i>JAVAScript</span>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="message_share">'+
                        '<ul>'+
                            '<span class="one">'+
                                '<i class="glyphicon glyphicon-cloud"></i>'+
                                '<div class="share">'+
                                    '<i></i>'+
                                    '<div class="weChat_img">'+
                                        '<img src="./img/mikoto (50).jpg" alt="">'+
                                    '</div>'+
                                '</div>'+
                            '</span>'+
                            '<span class="two">'+
                                '<i class="glyphicon glyphicon-qrcode two"></i>'+
                                '<div class="weChat">'+
                                    '<i></i>'+
                                    '<div class="weChat_img">'+
                                        '<img src="./img/mikoto (43).jpg" alt="">'+
                                    '</div>'+
                                '</div>'+
                            '</span>'+
                            '<span class="three">'+
                                '<i class="glyphicon glyphicon-thumbs-up"></i>'+
                                '<div class="admire">'+
                                    '<i></i>'+
                                    '<div class="weChat_img">'+
                                        '<img src="./img/mikoto (45).jpg" alt="">'+
                                    '</div>'+
                                '</div>'+
                            '</span>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
            '</div>'+

            '<!-- 照片墙 -->'+
            '<div class="col-md-10 isNot" id="col-md-10">'+
                '<div class="photoWall">'+
                    '<ul class="photoUl">'+
                        '<li class="photoLi">'+
                            '<img src="./img/mikoto (50).jpg" alt="">'+
                        '</li>'+
                        '<li class="photoLi">'+
                            '<img src="./img/mikoto (50).jpg" alt="">'+
                        '</li>'+
                        '<li class="photoLi">'+
                            '<img src="./img/mikoto (50).jpg" alt="">'+
                        '</li>'+
                        '<li class="photoLi">'+
                            '<img src="./img/mikoto (50).jpg" alt="">'+
                        '</li>'+
                        '<li class="photoLi">'+
                            '<img src="./img/mikoto (50).jpg" alt="">'+
                        '</li>'+
                        '<li class="photoLi">'+
                            '<img src="./img/mikoto (50).jpg" alt="">'+
                        '</li>'+
                    '</ul>'+
                '</div>'+
            '</div>'+
        '</div>')
        // $("#newBlog").html(blogData);
		}
        // 23,42,45,50

function onPhotoWall() {
            var isRight = document.getElementById('userPhotoWall').classList.contains('userNavUlActive');
            if ( isRight != true ) {
                document.getElementById('userInformation').classList.remove('userNavUlActive');
                document.getElementById('userPhotoWall').classList.add('userNavUlActive');
                
                document.getElementById('col-md-6').classList.add('isNot');
                document.getElementById('col-md-4').classList.add('isNot');
                document.getElementById('col-md-10').classList.remove('isNot');
            }
        }
    
function onInformation() {
            var isRight = document.getElementById('userInformation').classList.contains('userNavUlActive');
            if ( isRight != true ) {
                document.getElementById('userInformation').classList.add('userNavUlActive');
                document.getElementById('userPhotoWall').classList.remove('userNavUlActive');
    
                document.getElementById('col-md-6').classList.remove('isNot');
                document.getElementById('col-md-4').classList.remove('isNot');
                document.getElementById('col-md-10').classList.add('isNot');
            }
        }

