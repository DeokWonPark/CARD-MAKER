class ImageUpload{

    async uploadImage(file){
        const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOULDNARY_NAME}/image/upload`;
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "zfhffhko");

        const response = await fetch(url, {
            method: "POST",
            body: formData
        });

        return await response.json();
    }
}

export default ImageUpload;