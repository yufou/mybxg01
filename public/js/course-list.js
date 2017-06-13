define(['jquery','template','util'],function($,template,util){
	//设置导航菜单选中
	util.setMenu(location.pathname);
	//获取课程列表数据
	$.ajax({
		url: '/api/course',
		type: 'get',
		dataType: 'json',
		success : function(data){
			//渲染数据
			console.log(data)
			var html = template('courseTpl',{list : data.result});
			$('#courseInfo').html(html);
		}
	});
	
});