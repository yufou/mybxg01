define(['jquery','util'],function($,util){
	//设置导航选中
	util.setMenu('/teacher/list');
	//提交表单处理
	var tcId = util.qs('tc_id',location.search);
	//提交表单处理
	function submitForm(url){
		$("#addTeacherForm").validate({
			sendForm : false;
			eachInvalidField : function(){
				console.log(1);
			},
			eachInvalidField : function(){
				console.log(2);
			},
			valid : function(){
                // 提交表单
                $(this).ajaxSubmit({
                    type : 'post',
                    url : url,
                    success : function(data){
                        location.href = '/teacher/list';
                    }
                });
            },
            description : {
                tcName : {
                    required : '姓名必须填写',
                    valid : '姓名格式正确'
                },
                tcPass : {
                    required : '密码不能为空',
                    pattern : '密码必须是六位数字',
                    valid : '密码可以使用'
                },
                tcJoinDate : {
                    required : '入职日期不能为空',
                    valid : '日期可以使用'
                }
            }
        });
    }
    if(tcId){
        // 编辑讲师操作
        // 根据ID查询数据
        $.ajax({
            type : 'get',
            url : '/api/teacher/edit',
            data : {tc_id : tcId},
            dataType : 'json',
            success : function(data){
                $('#navFlag').html('讲师编辑');
                data.result.operateFlag = '编辑';
                var html = template('teacherFormTpl',data.result);
                $('#teacherFormInfo').html(html);
                submitForm('/api/teacher/update');
            }
        });
    }else{
        // 添加讲师操作
        $('#navFlag').html('讲师添加');
        var html = template('teacherFormTpl',{operateFlag:'添加',tc_gender:1});
        $('#teacherFormInfo').html(html);
        submitForm('/api/teacher/add');
    }
    

});
