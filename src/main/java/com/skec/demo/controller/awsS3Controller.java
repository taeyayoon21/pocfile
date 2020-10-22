package com.skec.demo.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.StandardMultipartHttpServletRequest;

import com.skec.demo.common.Innorix;

import java.io.*;
import java.nio.channels.FileChannel;
import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import java.util.Iterator;
import java.util.Map;
import java.util.StringTokenizer;

import com.skec.demo.object.AWSs3;
import com.skec.demo.common.Innorix;

@Controller
public class awsS3Controller {

	@RequestMapping("/awsS3")
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {  	
		String bucketName = "cross-region-test-seoul";
		
		
		//String storagePath = "\\\\192.168.0.70\\public\\uploadfile\\test\\";
		request.setCharacterEncoding("UTF-8");
		java.util.Enumeration names = request.getParameterNames();
		
		
		while (names.hasMoreElements()) {
			String name = (String)names.nextElement();
			String values[] = request.getParameterValues(name);
			// 전송한 파일 정보를 알아옴
			
			
			if (name.equals("files") && values != null)
			{
				JSONArray jsonFiles = new JSONArray(values[0]);
				for(int index = 0; index < jsonFiles.length(); ++index)
				{
					JSONObject jsonFileInfo = jsonFiles.getJSONObject(index);
					// 파일이 서버에 저장되어있는 경로와 파일 이름을 알라옴
					String serverFilePath = jsonFileInfo.getString("serverFilePath");
					String serverFileName = jsonFileInfo.getString("serverFileName");
					// 서버에 저장되어있는 파일을 storagePath 로 이동시킴
					File serverFile = new File(serverFilePath);
					
					new AWSs3().fileupload(bucketName, serverFileName, serverFile);
					
				}
			}		
		}

		
		
		
		
	}
	
}	
	
