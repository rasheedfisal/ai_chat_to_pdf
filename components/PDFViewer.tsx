import React from "react";

type Props = { pdf_url: string };

const PDFViewer = ({ pdf_url }: Props) => {
  return (
    <iframe src={pdf_url} className="w-full h-full"></iframe>
    // <iframe
    //   src={`https://docs.google.com/gview?url=${pdf_url}&embedded=true`}
    //   className="w-full h-full"
    // ></iframe>
  );
};

export default PDFViewer;
