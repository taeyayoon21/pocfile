package com.skec.demo.object;

import java.io.File;
import java.io.FileNotFoundException;

import org.springframework.stereotype.Component;

import com.amazonaws.ClientConfiguration;
import com.amazonaws.Protocol;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Component
public class AWSs3 {

    private String accessKey ="";
    private String secretKey ="";

    private AmazonS3 s3Client;

    public AWSs3() {
    	System.out.println("####################### AWSs3() aws S3 ClientConfiguration");
        AWSCredentials credentials = new BasicAWSCredentials(accessKey, secretKey);
        ClientConfiguration clientConfig = new ClientConfiguration();
        clientConfig.setProtocol(Protocol.HTTP);
        this.s3Client = new AmazonS3Client(credentials, clientConfig);
        s3Client.setEndpoint("s3.ap-northeast-2.amazonaws.com"); //  아시아 태평양 서울
    }


    public void fileupload(String bucketName,String fileName, File file) throws FileNotFoundException{
    	System.out.println("####################### AWSs3() fileupload");
        String fileExt = file.getName().split("[.]")[1];
        //this.s3Client.putObject(new PutObjectRequest(bucketName, "bucket하위 경로/"+fileName+"."+fileExt, file)
        //this.s3Client.putObject(new PutObjectRequest(bucketName, fileName+"."+fileExt, file)
        this.s3Client.putObject(new PutObjectRequest(bucketName, fileName, file)
                .withCannedAcl(CannedAccessControlList.PublicRead));
    }


}