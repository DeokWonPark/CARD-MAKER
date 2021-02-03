class Clouldnary{
    constructor(clouldname){
        this.name=clouldname;
    }
    uploadfile=(files)=>{
        const url = `https://api.cloudinary.com/v1_1/${this.name}/image/upload`;

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          formData.append("file", file);
          formData.append("upload_preset", "zfhffhko");
        }

        return fetch(url, {
            method: "POST",
            body: formData
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
                console.log(data)
                return data;
            });
    }
}

export default Clouldnary;