import React from 'react'

class Jello extends React.Component {
  imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
      localStorage["fileBase64"] = base64;
      console.debug("file stored:", base64)
    });
  };
  render(){
    return <input
    type="file"
    id="imageFile"
    name="imageFile"
    onChange={this.imageUpload}>
  };
}

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    }
    reader.onerror = error => {console.log(error).then(reject(error))}
    reader.readAsDataURL(file)
  })
}

export default Jello
