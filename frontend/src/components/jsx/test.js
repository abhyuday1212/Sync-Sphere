//test.js
import React, { useState } from "react";
import { API } from "../../service/Api";
import FormControl from "@mui/material/FormControl";

const Test = () => {
  const [file, setFile] = useState();

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    setFile(selectedFile);

    // Call the API instantly when a file is selected
    try {
      const data = new FormData();
      data.append("file", selectedFile.name);
      data.append("file", selectedFile);

      const response = await API.uploadFile(data);
      console.log("API Response:", response);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <FormControl>
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
        />
      </FormControl>
    </>
  );
};

export default Test;
