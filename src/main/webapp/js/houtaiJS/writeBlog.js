
 
 /**
  * 发布博客
  */
 function submitData() {
 	//获取博客标题
 	var title = $("#title").val();
 	//获取博客类别id
 	var blogTypeId = $("#blogTypeId").combobox("getValue");
 	//获取博客内容 带标记
 	var content = UE.getEditor('editor').getContent();
 	//博客关键词
 	var keyWord = $("#keyWord").val();
 /*	//获取博客内容  不带标签 纯文本
 	var contentNoTag = UE.getEditor('editor').getContentTxt();*/
 	//校验
 	if (title == null || title == '') {
 		$.messager.alert("系统提示", "请输入标题！");
 	} else if (blogTypeId == null || blogTypeId == '') {
 		$.messager.alert("系统提示", "请选择博客类型！");
 	} else if (content == null || content == '') {
 		$.messager.alert("系统提示", "请编辑博客内容！");
 	} else {
 		//ajax请求 请求后台写博客接口
 		$.post("../blog/save", {
 			'title': title,
 			'category.id': blogTypeId,
 			'content': content,
 			'keyWord': keyWord,
 			//'contentNoTag': contentNoTag
 		}, function(result){
 			console.log(111);
 			if (result=="123") {
 				$.messager.alert("系统提示", "博客发布成功！");
 				clearValues();
 			} else {
 				$.messager.alert("系统提示", "博客发布失败！");
 			}
 		}, "json");
 	}
 }
 //清空功能
 function clearValues() {
 	$("#title").val("");
 	$("#blogTypeId").combobox("setValue", "");
 	UE.getEditor("editor").setContent("");
 	$("#keyWord").val("");
 }