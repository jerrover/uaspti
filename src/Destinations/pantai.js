import React from "react";
import { createRoot } from "react-dom/client";
import "./wisata.css";
import foto1 from '../Assets/Destinations/Pantai/Pantai Batu Topeng/Pantai-Batu-Topeng-Karimunjawa.jpg';
import foto2 from  '../Assets/Destinations/Pantai/Pantai Karang/pantai-karang-telu-571c7244b509eaeed27910730903d9ef-fb25aa3fed163dd4690c856d2df4d7e7_600x400.jpg';
import foto3 from  '../Assets/Destinations/Pantai/Pantai Menganti/YWpHNkgxVjBOTjlQ.jpg';
import foto4 from  '../Assets/Destinations/Pantai/Pantai Suwuk/explore-Pantai-Suwuk.jpg';
import foto5 from  '../Assets/Destinations/Pantai/Pantai Tanjung Gelam/Pantai_tanjung_gelam_Taman_Nasional_Karimunjawa.jpg';
import Mininav from "./mininav";
import MapEmbed from "./map";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export function WisataPantaiList() {
  return (
    <div> 
      <WisataJudul />
      <Mininav />
      <hr />
      <div className="wisata-content">
        <img src={foto1} className="wisata-foto"/>
        <div className="wisata-info">  
          <h2>1. Pantai Batu Topeng </h2>
          <p>
            Pantai Batu Topeng berada di Desa Alang-Alang, sebelah utara Tanjung Gelam, Kecamatan Karimun Jawa. Pantai Batu Topeng menawarkan pemandangan alam yang menakjubkan dengan pasir putih yang lembut, air laut yang jernih serta deretan batu-batu berukuran besar yang menambah pesona pantai.
          </p>
          <MapEmbed coordinates={"-5.837870600562861, 110.41508429983983"} />
        </div>
      </div>
      <div className="wisata-content">
        <img src={foto2} className="wisata-foto"/>
        <div className="wisata-info">
          <h2>2. Pantai Karang</h2>
          <p>
            Pantai Karang terletak di Desa Karangpakis, Kecamatan Nusawungu, Kabupaten Cilacap, Jawa Tengah. Pantai Karang memiliki gazebo tepi pantai yang menjadi spot foto yang estetik dan Instagramable. Pantai Karang memiliki pasir putih yang membuat wisatawan enggan beranjak dari pantai tersebut. Harga tiket masuk Pantai Karang 
          </p>
          <MapEmbed coordinates={"-8.69365475238399, 115.26601599560189"} />
        </div>
      </div>
      <div className="wisata-content">
        <img src={foto3} className="wisata-foto"/>
        <div className="wisata-info">
          <h2>3. Pantai Menganti</h2>
          <p>
            Pantai Menganti ini terletak di di Desa Karangduwur, Kecamatan Ayah, Kabupaten Kebumen, Jawa Tengah. Pantai Menganti memiliki hamparan pasir putih yang berpadu dengan birunya air laut. Selain itu, pantai ini juga terkenal dengan ombak yang cukup bagus sehingga sangat cocok untuk surfing. Harga tiket masuk Pantai Menganti sebesar Rp10.000 per orang
          </p>
          <MapEmbed coordinates={"-7.770144316061118, 109.41294880113912"} />
        </div>
      </div>
      <div className="wisata-content">
        <img src={foto4} className="wisata-foto"/>
        <div className="wisata-info">
          <h2>4. Pantai Suwuk</h2>
          <p>
            Pantai Suwuk terletak di Dusun Suwuk, Desa Tambakmulyo, Kecamatan Puring, Kabupaten Kebumen, Jawa Tengah. Keberadaan pantai ini berbatasan langsung dengan samudera, sehingga pengunjung dapat menikmati pemandangan laut yang sangat luas dan menakjubkan. Harga tiket masuk Pantai Suwuk di Kebumen sebesar Rp5.000 per orang.
          </p>
          <MapEmbed coordinates={"-7.760231597743967, 109.48483012285512"} />
        </div>
      </div>
      <div className="wisata-content">
        <img src={foto5} className="wisata-foto"/>
        <div className="wisata-info">
          <h2>5. Pantai Tanjung Gelam</h2>
          <p>
            Pantai Tanjung Gelam berada di ujung barat Pulau Karimunjawa, Kabupaten Jepara, Jawa Tengah.Pantai Tanjung Gelam menjadi daya tarik utama karena keberadaan formasi bebatuan berwarna hitam atau gelam yang unik, menciptakan lanskap yang memikat mata para pengunjung. Harga tiket masuk Air Terjun Jumog sebesar Rp15 ribu per orang
          </p>
          <MapEmbed coordinates={"-5.8390433385444105, 110.41159041463263"} />
        </div>
      </div>
    </div>
  );
}

function WisataJudul () {
  return <h1 className="wisata-container">Pantai</h1>
}

export default WisataPantaiList;
