//查询
function onSearch(){
	var $searchVal = $("#sel").val();
	var num=0;
	if($searchVal){
		//这里就相对于把我们的input框的值 传输到后台进行 模糊查询
		//http://gaoql.top/getdata/getdata.php
	$("#container").html('<div class="row">'+
		'<div class="col-lg-10 col-md-offset-1">'+
			'<div class="cen">'+
				'<div class="cen_top">'+
					'<div class="top_left">'+
						'搜索结果'+
					'</div>'+
					'<div class="top_right" >'+
						'共<span id="top_right"></span>个'+
					'</div>'+
				'</div>'+
				'<div id="cen_box">'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>')

	var sel_data='';
	for(var i=0;i<data.length;i++){
		if($searchVal==data[i].id){
			num++;
			sel_data+='<div class="cen_list">'+
						'<div class="text">'+
							'<h3><a onclick="ondatails('+data[i].id+')">'+data[i].title+'</a></h3>'+
							'<p><a onclick="ondatails('+data[i].id+')">'+data[i].content+'</a>'+
							'</p>'+
							'<div>'+
								'<div class="text_img"><img src="'+data[i].avatar+'" alt=""></div>'+
								'<div class="text_name">'+data[i].username+'</div>'+
								'<div class="text_time"><i class="glyphicon glyphicon-calendar"></i>'+data[i].time+'</div>'+
								'<div class="text_num"><i class="glyphicon glyphicon-eye-open"></i>'+data[i].num+'</div>'+
								'<div class="text_sign">'+data[i].sign+'</div></div></div>'+
						'<div class="cen_img">'+
							'<div class="img"><img src="'+data[i].img+'"></div></div>'+
						'<div class="item_line"></div></div>'
		}
	}
	
	$("#cen_box").html(sel_data)
	$("#top_right").html(num)
	}else{
		alert("请输入搜索的值！")
	}
}