import { useEffect, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import Link from "ol/interaction/Link";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import Draw from "ol/interaction/Draw.js";

// import Draw from "ol/interaction/Draw";

function CreateMap({ isDrawing, handleModal }) {
  const [polygons, setPolygons] = useState([]);

  const fetchPolygons = async () => {
    try {
      const response = await fetch("http://localhost:5000/getPolygons");
      const data = await response.json();

      if (data.PolygonsWithMetadata) {
        setPolygons(data.PolygonsWithMetadata);
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  useEffect(() => {
    const turkeyCoordinates = [3986195.118020016, 4856268.863595544]; // EPSG:3857 koordinat sistemi

    //Polygon çizmek için kullanılan her bir vektör
    const drawVector = new VectorLayer({
      source: new VectorSource(),
      style: {
        "stroke-color": "rgba(100,50 , 0, 1)",
        "stroke-width": 2,
        "fill-color": "rgba(100, 255, 0, 0.3)",
      },
    });

    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        drawVector,
      ],
      view: new View({
        center: turkeyCoordinates,
        zoom: 6.5,
      }),
    });
    // Geri butonuyla haritanın önceki konumlarına gidiş
    map.addInteraction(new Link());

    //Çizilen polygon için ayarlama
    const draw = new Draw({
      type: "Polygon",
      source: drawVector.getSource(),
      trace: true,
      style: {
        "stroke-color": "rgba(100, 50, 0, 0.3)",
        "stroke-width": 1.5,
        "fill-color": "rgba(200, 30, 0, 0.3)",
        "circle-radius": 6,
        "circle-fill-color": "red",
      },
    });

    // Add Drawinge tıklandıysa
    if (isDrawing === true) {
      //Çizme işlemi bu etkileşim ile yapılıyor
      map.addInteraction(draw);
    }

    //Polygon noktalarının koordinatlarını alma
    draw.on("drawend", async (event) => {
      const polygon = event.feature.getGeometry();
      const coordinates = polygon.getCoordinates();
      console.log("Polygon Coordinates:", coordinates);
      const metadata = {
        MetadataString: "Bu bir metin verisidir.",
        MetadataNumber: 42,
      };

      // Verileri backend'e gönder
      await fetch("http://localhost:5000/savePolygon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ coordinates, ...metadata }),
      });
      handleModal(true);

      // Yeni polygon ekledikten sonra tüm polygonları getir
      fetchPolygons();
    });

    // Yeni polygon ekledikten sonra tüm polygonları getir
    fetchPolygons();

    return () => {
      // Komponent kaldırıldığında etkileşimi kaldır
      map.removeInteraction(draw);
      map.dispose();
    };
  }, [isDrawing]);

  return <div id="map"></div>;
}

export default CreateMap;
