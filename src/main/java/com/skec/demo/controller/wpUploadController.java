package com.skec.demo.controller;

import org.apache.commons.io.FileUtils;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import java.io.File;
import java.io.IOException;
import java.util.Enumeration;
import java.util.Map;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.skec.demo.common.Innorix;
//import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletInputStream;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
//import javax.servlet.annotation.WebServlet;

import org.apache.commons.io.FilenameUtils;
//import org.apache.maven.model.Model;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.support.StandardMultipartHttpServletRequest;

import org.springframework.web.*;


@Controller
public class wpUploadController {
	private static final long serialVersionUID = 1L;
	
	@RequestMapping("/InnorixUpload")
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {  	
		
		  
      try {
           
         new Innorix().upload(request, response);
          
      } catch (Exception e) {
          
          // TODO Auto-generated catch block
          e.printStackTrace();
      }
      
       
       
       
      
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
