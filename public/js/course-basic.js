define(['jquery','template','util'],function($,template,util){
	//设置导航栏选中
	util.setMenu('/course/add');
	//获取课程id
	var csId = util.qs('cs_id',location.search);
	if(csId){
		//编辑操作'
		//根据课程id查询课程的详细信息
		$.ajax({
			url: '/api/course/basic',
			type: 'get',
			dataType: 'json',
			data: {cs_id: csId},
			success : function(data){
				var html = template('courseBasicTpl',data.result);
				$('#courseBasicInfo').html(html);
			}
		});	
	}else{
		//添加操作
		var html = template('courseBasicTpl',{});
		$('$courseBasicInfo').html(html);
	}
});