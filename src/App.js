import React from 'react';
import S3 from 'aws-s3-reactjs';

const config = {
  bucketName: 'react-upload-medias',
  //dirName: 'media', /* optional */
  region: 'us-east-1',
  accessKeyId: 'AKIAJQNXMRBYJ2MYAO7A',
  secretAccessKey: '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',
  s3Url: 'https://react-upload-medias.s3.amazonaws.com/'
}

const ReactS3Client = new S3(config);

function uploadFile(event){

  var file = event.target.files[0];
  console.log(file);
  console.log(`uploading file (${file.name})...`);
  ReactS3Client
    .uploadFile(file, file.name)
    .then(data => {
      console.log("...upload finish")
      console.log(data)
    })
    .catch(err => {
      console.log("...upload error")
      console.error(err)
    })
}

function App() {
  return (
    <div className="App">
      <span>AWS S3 Upload</span>
      <br></br>
      <input type="file" onChange={uploadFile}></input>
    </div>
  );
}

export default App;