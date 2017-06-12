<?php 
	//路径
	$path = 'index';
	//文件名称
	$filename = 'index';
	//判断数组中是否存在对应的key
	if(array_key_exists('PATH_INFO',$_SERVER)){
		//获取url中的路径
		$url = $_SERVER['PATH_INFO'];//  /index/login
		//substr 截取字符串
		$str = substr($url, 1);  //index/login
		//根据字符进行分割字符串
		$pathinfo = explode('/',$str);
		if(count($pathinfo)==2){
			//两层路径
			$path = $pathinfo[0];
			$filename = $pathinfo[1];
		}else{
			//一层路径
			$filename = 'login';
		}
	}

	include('/view/'.$path.'/'.$filename.'.html');

	
?>