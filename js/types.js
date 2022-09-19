var data = [{
    id: 1,
    title: "LeetCode-001 两数之和",
    content: "给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。",
    avatar: "./images/avatar.jpg",
    username: "小马",
    time: "2022-05-22",
    num: "59",
    sign: "学习笔记",
    img: "./images/about.jpeg"
},
{
    id: 2,
    title: "关于MySQL面试100个常见问题1",
    content: "本文主要受众为开发人员,所以不涉及到MySQL的服务部署等操作",
    avatar: "./images/avatar.jpg",
    username: "小灰",
    time: "2021-02-22",
    num: "1550",
    sign: "面试整理",
    img: "./images/about.jpeg"
},
{
    id: 3,
    title: "关于MySQL面试100个常见问题2",
    content: "本文主要受众为开发人员,所以不涉及到MySQL的服务部署等操作",
    avatar: "./images/avatar.jpg",
    username: "小灰",
    time: "2021-03-02",
    num: "666",
    sign: "面试整理",
    img: "./images/about.jpeg"
},
{
    id: 4,
    title: "Linux系统使用Yum命令安装Java环境",
    content: "Linux上安装软件，可以用yum非常方便，不需要下载解压，也不需要配置环境变量,一个指令就能完成",
    avatar: "./images/avatar.jpg",
    username: "小马",
    time: "2022-03-18",
    num: "163",
    sign: "教程",
    img: "./images/about.jpeg"
},
{
    id: 5,
    title: "SpringBoot项目部署云服务器详细步骤",
    content: "此篇文章将详细介绍如何将自己的SpringBoot项目部署到各大互联网公司提供的在线云解决方案,并且能从外网直接访问",
    avatar: "./images/avatar.jpg",
    username: "小马",
    time: "2022-05-18",
    num: "888",
    sign: "教程",
    img: "./images/about.jpeg"
},
{
    id: 6,
    title: "Git以及Github使用指南",
    content: "GitHub于2008年4月10日正式上线，除了Git代码仓库托管及基本的Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑器、协作图谱（报表）、代码片段分享（Gist）等功能",
    avatar: "./images/avatar.jpg",
    username: "小马",
    time: "2022-07-08",
    num: "4000",
    sign: "教程",
    img: "./images/about.jpeg"
},
{
    id: 7,
    title: "如何成为一名合格的程序员",
    content: "GitHub于2008年4月10日正式上线，除了Git代码仓库托管及基本的Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑器、协作图谱（报表）、代码片段分享（Gist）等功能",
    avatar: "./images/avatar.jpg",
    username: "小红",
    time: "2022-06-06",
    num: "500",
    sign: "程序人生",
    img: "./images/about.jpeg"
},
{
    id: 8,
    title: "小白容易犯的错误",
    content: "GitHub于2008年4月10日正式上线，除了Git代码仓库托管及基本的Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑器、协作图谱（报表）、代码片段分享（Gist）等功能",
    avatar: "./images/avatar.jpg",
    username: "小王",
    time: "2022-03-06",
    num: "255",
    sign: "踩坑记录",
    img: "./images/about.jpeg"
},
{
    id: 9,
    title: "三句话暖ta一整天",
    content: "GitHub于2008年4月10日正式上线，除了Git代码仓库托管及基本的Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑器、协作图谱（报表）、代码片段分享（Gist）等功能",
    avatar: "./images/avatar.jpg",
    username: "张三",
    time: "2022-04-04",
    num: "789",
    sign: "踩坑记录",
    img: "./images/about.jpeg"
}
]
//分类
var course=0;
var note=0;
var interview=0;
var life=0;
var mistake=0;
for (var i = 0; i < data.length; i++) {
	if(data[i].sign=='教程'){
		course++
	}else if(data[i].sign=='学习笔记'){
		note++;
	}else if(data[i].sign=='面试整理'){
		interview++;
	}else if(data[i].sign=='程序人生'){
		life++;
	}else{
		mistake++;
	}
}
var courses= "教程"
var notes = "学习笔记"
var interviews = '面试整理'
var lifes = '程序人生'
var mistakes = '踩坑记录'




	$('#content2').html('<div class="container" id="container">'+
			'<div class="row">'+
					'<div class="col-lg-9">'+
						'<div class="types_cen">'+
							'<div class="types_top_num">'+
								'<div class="top_left">'+
									'<i class="glyphicon glyphicon-list"></i>博客分类'+
								'</div>'+
								'<div class="top_right">'+
									'共<span id="top_right"> 5 </span>类'+
								'</div>'+
								'<div class="top_line">'+
									
								'</div>'+
									'<ul class="types_top" id="types_top">'+
										'<li onclick="ontypes('+'学习笔记'+')" >学习笔记<span><i></i>1</span></li>'+
										'<li onclick="ontypes('+'面试整理'+')" >面试整理<span><i></i>2</span></li>'+
										'<li onclick="ontypes('+'程序人生'+')" >程序人生<span><i></i>0</span></li>'+
										'<li onclick="ontypes('+'踩坑记录'+')" >踩坑记录<span><i></i>0 </span></li>'+
									'</ul>'+
							'</div>'+
							'<div id="cen_box">'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="col-md-3">'+
						'<div class="right_center">'+
							'<div class="right_top">'+
								'<div class="right_top_left">'+
									'<i class="glyphicon glyphicon-sort-by-attributes-alt"></i>浏览排名'+
								'</div>'+
								'<div class="right_top_right " onclick="onHot()">'+
									'更多<i class="glyphicon glyphicon-chevron-right"></i>'+
								'</div>'+
							'</div>'+
							'<ul class="right_list" id="hot_list">'+
							'</ul>'+
						'</div>'+
						'<div class="right_center">'+
							'<div class="right_top">'+
								'<div class="right_top_left">'+
									'<i class="glyphicon glyphicon-list"></i>最近更新'+
								'</div>'+
								'<div class="right_top_right" onclick="onNew()">'+
									'更多<i class="glyphicon glyphicon-chevron-right"></i>'+
								'</div>'+
							'</div>'+
							'<div class="right_list" id="new_list">'+
							'</div>'+
						'</div>'+
						'<div class="right_center">'+
							'<div class="right_top">'+
								'<div class="right_top_left">'+
									'<i class="glyphicon glyphicon-bookmark"></i>博客推荐'+
								'</div>'+
							'</div>'+
							'<ul class="right_list" id="recom_list">'+
							'</ul>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>')
	$("#types_top").html('<li onclick="ontypes('+'courses'+')" >教程<span><i></i>'+course+'</span></li>'+
	'<li onclick="ontypes('+'notes'+')" >学习笔记<span><i></i>'+note+'</span></li>'+
	'<li onclick="ontypes('+'interviews'+')" >面试整理<span><i></i>'+interview+'</span></li>'+
	'<li onclick="ontypes('+'lifes'+')" >程序人生<span><i></i>'+life+'</span></li>'+
	'<li onclick="ontypes('+'mistakes'+')" >踩坑记录<span><i></i>'+mistake+'</span></li>')




var str = "";
for (var i = 0; i < data.length; i++) {
	if(data[i].sign=='教程'){
		str += '<div class="cen_list">' +
			'<div class="text">' +
			'<h3><a onclick="ondatails(' + data[i].id + ')">' + data[i].title + '</a></h3>' +
			'<p><a onclick="ondatails(' + data[i].id + ')">' + data[i].content + '</a>' +
			'</p>' +
			'<div>' +
			'<div class="text_img"><img src="' + data[i].avatar + '" alt=""></div>' +
			'<div class="text_name">' + data[i].username + '</div>' +
			'<div class="text_time"><i class="glyphicon glyphicon-calendar"></i>' + data[i].time + '</div>' +
			'<div class="text_num"><i class="glyphicon glyphicon-eye-open"></i>' + data[i].num + '</div>' +
			'<div class="text_sign">' + data[i].sign + '</div></div></div>' +
			'<div class="cen_img">' +
			'<div class="img"><img src="' + data[i].img + '"></div></div>' +
			'<div class="item_line"></div></div>'
	}
}
$("#cen_box").html(str)



//推荐
var recom = "";

for (var i = 0; i < 5; i++) {
	recom += '<li onclick="ondatails(' + data[i].id + ')">' + data[i].title + '</li>'
}
$("#recom_list").html(recom)
//最多观看
var hotArr=[];
for (var i = 0; i < data.length-1;i++) {
	   hotArr[i]=data[i]; 
}
for (var i = 0; i <  hotArr.length-1; i++) {
	for (var j = 0; j<  hotArr.length-i-1; j++) {
		var num1=Number(hotArr[j].num);
		var num2=Number(hotArr[j+1].num);
		if ( num1< num2){
			 b= hotArr[j];
			 hotArr[j]= hotArr[j+1];
			 hotArr[j+1]=b;
		}
	}
}
var hot='';
for (var i =0; i<5; i++) {
	var n=i+1
	hot += '<li onclick="ondatails(' + hotArr[i].id + ')"><span style="color: red;font-size: 15px;float:left;margin-right: 10px;">'+n+'  '+'</span>' + hotArr[i].title + '</li>'
}
$("#hot_list").html(hot)

//最多观看更多
function onHot(){
	var str = "";
	for (var i = 0; i < hotArr.length; i++) {
			str += '<div class="cen_list">' +
				'<div class="text">' +
				'<h3><a onclick="ondatails(' + hotArr[i].id + ')">' + hotArr[i].title + '</a></h3>' +
				'<p><a onclick="ondatails(' + hotArr[i].id + ')">' + hotArr[i].content + '</a>' +
				'</p>' +
				'<div>' +
				'<div class="text_img"><img src="' + hotArr[i].avatar + '" alt=""></div>' +
				'<div class="text_name">' + hotArr[i].username + '</div>' +
				'<div class="text_time"><i class="glyphicon glyphicon-calendar"></i>' + hotArr[i].time + '</div>' +
				'<div class="text_num"><i class="glyphicon glyphicon-eye-open"></i>' + hotArr[i].num + '</div>' +
				'<div class="text_sign">' + hotArr[i].sign + '</div></div></div>' +
				'<div class="cen_img">' +
				'<div class="img"><img src="' + hotArr[i].img + '"></div></div>' +
				'<div class="item_line"></div></div>'
	}
	$("#cen_box").html(str)
}
	//最新
	
	var news='';
	var newArr=[];
	for (var i = 0; i < data.length;i++) {
		   newArr[i]=data[i]; 
	}
	for (var i = 0; i < newArr.length-1; i++) {
		for (var j = 0; j< newArr.length-i-1; j++) {
			if (newArr[j].time<newArr[j+1].time){
				var temp=newArr[j];
				newArr[j]=newArr[j+1];
				newArr[j+1]=temp;
			}
		}
	}

	for (var i =0; i<5; i++) {
		news += '<li onclick="ondatails(' + newArr[i].id + ')">'+ newArr[i].title + '</li>'
}
$("#new_list").html(news)
//最近更新更多
function onNew(){
	var str = "";
	for (var i = 0; i < newArr.length; i++) {
			str += '<div class="cen_list">' +
				'<div class="text">' +
				'<h3><a onclick="ondatails(' + newArr[i].id + ')">' + newArr[i].title + '</a></h3>' +
				'<p><a onclick="ondatails(' + newArr[i].id + ')">' + newArr[i].content + '</a>' +
				'</p>' +
				'<div>' +
				'<div class="text_img"><img src="' + newArr[i].avatar + '" alt=""></div>' +
				'<div class="text_name">' + newArr[i].username + '</div>' +
				'<div class="text_time"><i class="glyphicon glyphicon-calendar"></i>' + newArr[i].time + '</div>' +
				'<div class="text_num"><i class="glyphicon glyphicon-eye-open"></i>' + newArr[i].num + '</div>' +
				'<div class="text_sign">' + newArr[i].sign + '</div></div></div>' +
				'<div class="cen_img">' +
				'<div class="img"><img src="' + newArr[i].img + '"></div></div>' +
				'<div class="item_line"></div></div>'
	}
	$("#cen_box").html(str)
}


//类型查看
function ontypes(types){
	var str = "";
	for (var i = 0; i < data.length; i++) {
		if(types==data[i].sign){
			str += '<div class="cen_list">' +
				'<div class="text">' +
				'<h3><a onclick="ondatails(' + data[i].id + ')">' + data[i].title + '</a></h3>' +
				'<p><a onclick="ondatails(' + data[i].id + ')">' + data[i].content + '</a>' +
				'</p>' +
				'<div>' +
				'<div class="text_img"><img src="' + data[i].avatar + '" alt=""></div>' +
				'<div class="text_name">' + data[i].username + '</div>' +
				'<div class="text_time"><i class="glyphicon glyphicon-calendar"></i>' + data[i].time + '</div>' +
				'<div class="text_num"><i class="glyphicon glyphicon-eye-open"></i>' + data[i].num + '</div>' +
				'<div class="text_sign">' + data[i].sign + '</div></div></div>' +
				'<div class="cen_img">' +
				'<div class="img"><img src="' + data[i].img + '"></div></div>' +
				'<div class="item_line"></div></div>'
		}
	}
	$("#cen_box").html(str)
	
}

//详情
function ondatails(msg){
	console.log(msg)
	for(var i=0;i<data.length;i++){
		if(msg==data[i].id){
			$("#container").html('<div class="row">'+
				'<div class="col-lg-10 col-md-offset-1">'+
					'<div class="cen">'+
						'<div class="data_cen">'+
							'<div class="data_top">'+
								'<div class="text_img"><img src="'+data[i].avatar+'" alt=""></div>'+
								'<div class="text_name">'+data[i].username+'</div>'+
								'<div class="text_time"><i class="glyphicon glyphicon-calendar"></i>'+data[i].time+'</div>'+
								'<div class="text_num"><i class="glyphicon glyphicon-eye-open"></i>'+data[i].num+'</div>'+
							'</div>'+
							'<div class="data_img">'+
								'<img src="./images/bigImg.jfif">'+
							'</div>'+
							'<div class="data_center">'+
								'<h2>'+data[i].title+'</h2>'+
								'<p>题目来源于 LeetCode 上第 1 号问题：两数之和。题目难度为 Easy，目前通过率为 45.8% 。</p>'+
								'<h3>题目描述</h3>'+
								'<p>'+data[i].content+'</p>'+
								'<p>你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。</p>'+
								'<h3>示例：</h3>'+
								'<p>给定 nums = [2, 7, 11, 15], target = 9</p>'+
								'<p>因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]</p>'+
								'<h3>代码实现</h3>'+
								'<pre>'+
									'<code>'+
	'// 1. Two Sum\n'+
	'// https://leetcode.com/problems/two-sum/description/\n'+
	'// 时间复杂度：O(n)\n'+
	'// 空间复杂度：O(n)\n'+
	'class Solution {\n'+
		'\t public int[] twoSum(int[] nums, int target) {\n'+
			'\t\tint l = nums.length;\n'+
			'\t\tint[] ans=new int[2];\n'+
			'\t\tint i,j;\n'+
		'\t}\n'+
	'}'+
									'</code>'+
								'</pre>'+
								'<div class="data_type">'+
									'<span><i></i>leetCode</span>'+
									'<span><i></i>数据算法与结构</span>'+
								'</div>'+
								'<div class="data_but">'+
									'<button>赞赏</button>'+
								'</div>'+
							'</div>'+
							'<ul class="data_writer">'+
								'<li>作者：'+data[i].username+'<a href="#">（联系作者）</a></li>'+
								'<li>发表时间：'+data[i].time+' 15:05:06</li>'+
								'<div class="writer_img">'+
									'<img src="./images/wechat.jpg" alt="添加作者微信">'+
								'</div>'+
							'</ul>'+
							'<div class="data_review">'+
								'<h4>评论</h4>'+
								'<textarea class="data_review_text" placeholder="请输入评论信息..."></textarea>'+
								'<div class="data_review_but">'+
									'<div class="input_name">'+
										'<i class="glyphicon glyphicon-user"></i>'+
										'<input type="text" placeholder="姓名">'+
									'</div>'+
									'<div class="input_email">'+
										'<i class="glyphicon glyphicon-envelope"></i>'+
										'<input type="text" placeholder="邮箱">'+
									'</div>'+
									'<div class="input_but"><i class="glyphicon glyphicon-pencil"></i>评论</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>')
		}
	}
}
//主页面
