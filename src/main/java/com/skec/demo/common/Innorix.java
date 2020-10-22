package com.skec.demo.common;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Map;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

//import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.support.StandardMultipartHttpServletRequest;

import com.innorix.transfer.InnorixUpload;
//import com.skec.wpcs.base.BaseBehind;





public class Innorix {

	
	public void upload(HttpServletRequest request, HttpServletResponse response) throws Exception {

		
		System.out.println("#################### request : "+request);
		String directory = "D:/project-temp/repositories";
		//String directory ="/home/ubuntu/repository"; 


		System.out.println("############################### Directory : "+directory);

		int maxPostSize = 1024 * 1024 * 100; // bytes
		//System.out.println("############################### request httpServletRequestToString:["+httpServletRequestToString(request)+"]");

		
		
		
		
		
		
		InnorixUpload uploader = new InnorixUpload(request, response, maxPostSize, directory);

        String _action = uploader.getParameter("_action"); // 동작 플래그
        /*
         * String _orig_filename = uploader.getParameter("_orig_filename"); //
         * 원본 파일명 String _new_filename = uploader.getParameter("_new_filename");
         * // 저장 파일명 String _filesize = uploader.getParameter("_filesize"); //
         * 파일 사이즈 String _start_offset = uploader.getParameter("_start_offset");
         * // 파일저장 시작지점 String _end_offset =
         * uploader.getParameter("_end_offset"); // 파일저장 종료지점 String _filepath =
         * uploader.getParameter("_filepath"); // 파일 저장경로 String _transferId =
         * uploader.getParameter("_transferId"); // TransferId String
         * _custParam1 = uploader.getParameter("custParam1"); // 커스텀 정의 POST
         * Param 1 String _custParam2 = uploader.getParameter("custParam2"); //
         * 커스텀 정의 POST Param 2 String _custParam3 =
         * uploader.getParameter("custParam3"); // 커스텀 정의 POST Param 3
         */

        /**
         * Action Parameter 아래 순서로 호출. 
         * 1. speedCheck : 전송속도 측정 (Agent) 
         * 2. getServerInfo : 서버정보 확인 (Agent) 
         * 3. getFileInfo : 파일정보 확인 
         * 4.attachFile : 파일전송 진행 
         * 5. attachFileCompleted : 파일전송 완료
         * 
         */

        if (_action.equals("getFileInfo")) {

            uploader.setFileName(uploader.getParameter("_unique_filename"));

        }

        if (_action.equals("attachFileCompleted")) {

        }

        String ret = uploader.run();

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Authorization,DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type");

        response.getWriter().write(ret);
		

	}

	
	
	
	
	String httpServletRequestToString(HttpServletRequest request) throws Exception {

	    ServletInputStream mServletInputStream = request.getInputStream();
	    byte[] httpInData = new byte[request.getContentLength()];
	    int retVal = -1;
	    StringBuilder stringBuilder = new StringBuilder();

	    while ((retVal = mServletInputStream.read(httpInData)) != -1) {
	        for (int i = 0; i < retVal; i++) {
	            stringBuilder.append(Character.toString((char) httpInData[i]));
	        }
	    }

	    return stringBuilder.toString();
	}
	
	

}
