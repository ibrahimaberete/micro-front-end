import React, { useState } from 'react';
import AWS from 'aws-sdk';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    const s3 = new AWS.S3({
      accessKeyId: '893452ce6d0a4c53b6932efca9ccd08e',
      secretAccessKey: 'Y 6733517fd8e84e8d98579efff530a14f',
      region: 'SBG',
    });

    const params = {
      Bucket: 'microcontainer',
      Key: selectedFile.name,
      Body: selectedFile,
    };

    try {
      await s3.upload(params).promise();
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadFile;
