import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

import OpenSansRegular from "./assets/OpenSans-Regular.ttf"; // Font dosyasının doğru yolunu vermelisiniz

const TableToPDF = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  const generatePDF = () => {
    const pdf = new jsPDF();

    const headers = Object.keys(data[0]);

    const content = {
      startY: 50,
      head: [headers],
      body: data.map((row) => headers.map((header) => row[header])),
    };

    pdf.autoTable(content);

    // Open Sans fontunu ekleyerek Türkçe karakter desteği sağla
    pdf.addFileToVFS("OpenSans-Regular.ttf", OpenSansRegular);
    pdf.addFont("OpenSans-Regular.ttf", "Open Sans", "normal");
    pdf.setFont("Open Sans");

    pdf.save("tablo.pdf");
  };

  return (
    <div>
      <button onClick={generatePDF}>PDF Oluştur</button>
    </div>
  );
};

export default TableToPDF;
