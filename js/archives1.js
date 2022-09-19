function archives(msg){
	console.log(msg)
	$("#content").html('<div class="row">'+
	'<div class="col-md-2">'+'</div>'+
				'<div class="col-md-6">'+
					'<div class="content">'+
						'<div class="content_head" style="border: 1px solid #D4D4D5;">'+
							'<div><i class="glyphicon glyphicon-book"></i>博客归档</div>'+
							'<div>共<span id="total"> 105 </span>篇博客</div>'+
						'</div>'+
						'<div id="content_left_box" >'+
							'<ul class="nav_list">'+
								'<li>'+
									'<a>2018<i class="glyphicon glyphicon-chevron-down" style="float: right;color: #00B4AD;"></i></a>'+
									'<ul class="twoNav">'+
										'<li>'+
											'<a onclick="details()">Node.js | 搭建后端服务器（含内置模块 http | url | querystring 的使用</a>'+
											'<span>原创<i></i></span>'+
										'</li>'+
										'<li>'+
											'<a >vue自适应布局（各种浏览器，分辨率）</a>'+
											'<span>转载<i></i></span>'+
										'</li>'+
										'<li>'+
											'<a >【JavaScript 进阶教程】函数的定义 调用 及 this指向问题</a>'+
											'<span>原创<i></i></span>'+
										'</li>'+
										'<li>'+
											'<a >【Vue 路由（vue—router）二】路由传参（params的类型 、Query参数的类型、路由name）</a>'+
											'<span>原创<i></i></span>'+
										'</li>'+
									'</ul>'+
								'</li>'+
							'</ul>'+
							'<ul class="nav_list" >'+
								'<li>'+
									'<a>2020<i class="glyphicon glyphicon-chevron-down" style="float: right;color: #00B4AD;"></i></a>'+
									'<ul class="twoNav">'+
										'<li>'+
											'<a >猿创征文|13万字学会Spring+SpringMVC+Mybatis框架</a>'+
											'<span>转载<i></i></span>'+
										'</li>'+
										'<li>'+
											'<a >springboot 缓存一致性常用解决方案</a>'+
											'<span>原创<i></i></span>'+
										'</li>'+
										'<li>'+
											'<a >【微服务】SpringCloud-Feign远程调用</a>'+
											'<span>转载<i></i></span>'+
										'</li>'+
										'<li>'+
											'<a >【JAVA进阶篇】时间与日期相关类</a>'+
											'<span>原创<i></i></span>'+
										'</li>'+
									'</ul>'+
								'</li>'+
							'</ul>'+
						'</div>'+
						'<div class="line_Y"></div>'+
						'<div class="line_left"></div>'+
						'<div class="line_right"></div>'+
						'<div id="content_right_box">'+
							'<ul class="nav_list">'+
								'<li>'+
									'<a>2019<i class="glyphicon glyphicon-chevron-down" style="float: right;color: #00B4AD;"></i></a>'+
									'<ul class="twoNav">'+
										'<li>'+
											'<a >七大排序算法（插排，希尔，选择排序，堆排，冒泡，快排，归并）--图文详解</a>'+
											'<span>原创<i></i></span>'+
										'</li>'+
										'<li>'+
											'<a >【SSM框架】MyBatis核心配置文件详解</a>'+
											'<span>转载<i></i></span>'+
										'</li>'+
										'<li>'+
											'<a >Java 方法的递归调用详解（递归调用的分析和案例：阶乘、斐波那契、猴子吃桃）</a>'+
											'<span>原创<i></i></span>'+
										'</li>'+
										'<li>'+
											'<a >牛客网《剑指offer》专栏刷题练习之掌握动态规划思想</a>'+
											'<span>原创<i></i></span>'+
										'</li>'+
									'</ul>'+
								'</li>'+
							'</ul>'+
							'<ul class="nav_list">'+
								'<li>'+
									'<a>2022<i class="glyphicon glyphicon-chevron-down" style="float: right;color: #00B4AD;"></i></a>'+
									'<ul class="twoNav">'+
										'<li>'+
											'<a >数据库、数据库系统、数据库管理系统三者的区别</a>'+
											'<span>原创<i></i></span>'+
										'</li>'+
										'<li>'+
											'<a >云原生中间件RocketMQ-消费者消费模式之广播模式、偏移量offset解析</a>'+
											'<span>原创<i></i></span>'+
										'</li>'+
										'<li>'+
											'<a >Web 开发框架（安装使用、静态托管、路由处理、中间件的使用）</a>'+
											'<span>原创<i></i></span>'+
										'</li>'+
										'<li>'+
											'<a >springboot+vue练手级项目，真实的在线博客系统</a>'+
											'<span>原创<i></i></span>'+
										'</li>'+
									'</ul>'+
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="col-md-2">'+
					'<div class="right_sort">'+
						'<div class="content_head right_head">'+
							'<div class="font_size">原创推荐</div>'+
							'<div style="padding: 0 10px;color: #4183C4;font-weight: bold;">更多<i class="glyphicon glyphicon-menu-right"></i></div>'+
						'</div>'+
						'<ul class="right_sort_content">'+
							'<li>教程<i class="glyphicon glyphicon-fire"></i></li>'+
							'<li>学习笔记<i class="glyphicon glyphicon-fire"></i></li>'+
							'<li>面试整理<i class="glyphicon glyphicon-fire"></i></li>'+
							'<li>程序人生</li>'+
							'<li>踩坑记录</li>'+
						'</ul>'+
					'</div>'+
					'<div class="right_tag">'+
						'<div class="content_head right_head">'+
							'<div class="font_size">热门转载</div>'+
							'<div style="padding: 0 10px;color: #4183C4;font-weight: bold;">更多<i class="glyphicon glyphicon-menu-right"></i></div>'+
						'</div>'+
						'<ul class="right_sort_content">'+
							'<li>云原生<i class="glyphicon glyphicon-fire"></i></li>'+
							'<li>面试题精选<i class="glyphicon glyphicon-fire"></i></li>'+
							'<li>java进阶<i class="glyphicon glyphicon-fire"></i></li>'+
							'<li>框架</li>'+
							'<li>新版本发布</li>'+
						'</ul>'+
					'</div>'+
				'</div>'+
				'<div class="col-md-2">'+'</div>'+
			'</div>')
}