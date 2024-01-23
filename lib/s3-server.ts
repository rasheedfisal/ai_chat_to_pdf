import fs from "node:fs";
export async function downloadFromLocalDisk(file_key: string) {
  try {
    const pdfRespone = await fetch("http://localhost:3000/uploads/" + file_key);
    const pdfBuffer = await pdfRespone.arrayBuffer();
    const fileName = `/tmp/pdf-${Date.now()}.pdf`;
    const binaryPdf = Buffer.from(pdfBuffer);
    fs.writeFileSync(fileName, binaryPdf);
    return fileName;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// downloadFromS3("uploads/1693568801787chongzhisheng_resume.pdf");
