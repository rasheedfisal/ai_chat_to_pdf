import axios from "axios";

export async function uploadToLocalDisk(
  file: File
): Promise<{ file_key: string; file_name: string }> {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post<{ file_name: string }>(
      "http://localhost:3000/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response.data);

    const { file_name } = response.data;

    return { file_key: file_name, file_name };
  } catch (error) {
    return { file_key: "", file_name: "" };
  }
}

export function getS3Url(file_key: string) {
  return `http://localhost:3000/uploads/${file_key}`;
}
