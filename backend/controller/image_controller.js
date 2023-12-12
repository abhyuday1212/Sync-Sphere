const url = 'http://localhost:8000';

console.log("Inside image_controller");

export const uploadImage = async (request, response) => {
    console.log("image_controller, File:", request.file);

    try {
        if (!request.file) {
            return response.status(404).json({ msg: "File not found" });
        }

        const imageUrl = `${url}/file/${request.file.filename}`;

        console.log("Uploaded image URL:", imageUrl);

        return response.status(200).json({ url: imageUrl });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ msg: "Error uploading image", error });
    }
};
