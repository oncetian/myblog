/**   
 * 
 * @author: TianLi   
 *
 * @date: 2018年5月15日 下午1:01:50 
 */
package com.tianli.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tianli.service.UserService;

/** 
 * @Description: TODO
 * @author: TianLi
 * @date: 2018年5月15日 下午1:01:50  
 */
@Controller
@RequestMapping("")
public class AdminController {
	
	@RequestMapping("/admin_index")
	public String adminindex(){
		System.out.println("123");
		return "admin/adminindex";
	}
	
}

