import React from "react";
import { createRoot } from "react-dom/client";
import "./wisata.css";
import foto1 from '../Assets/Destinations/Pegunungan/Gunung Andong/1284047_720.jpg';
import foto2 from  '../Assets/Destinations/Pegunungan/Gunung Merbabu/IMG_0160-1536x768.jpeg';
import foto3 from  '../Assets/Destinations/Pegunungan/Gunung Prau/3-fakta-gunung-prau-pintu-ke-alam-gaib-hingga-persemayaman-dewa-jz5Ud6U5Ma.jpg';
import foto4 from  '../Assets/Destinations/Pegunungan/Gunung Sumbing/hamzah-hanafi-kojsgwjvcce-unsplash-07a4f29dba4b014075e472810bb49bf0-692f1a803ec69c4ea8db2333184da2ca.jpg';
import foto5 from  '../Assets/Destinations/Pegunungan/Gunung Telomoyo/download.jpeg';
import Mininav from "./mininav";
import MapEmbed from "./map";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export function WisataGunungList() {
  return (
    <div> 
      <WisataJudul />
      <Mininav />
      <hr />
      <div className="wisata-content">
        <img src={foto1} className="wisata-foto"/>
        <div className="wisata-info">  
          <h2>1. Gunung Andong</h2>
          <p>
          Gunung Andong terletak di antara Desa Ngablak dan Tlogorjo, Grabag, Provinsi Jawa Tengah. Gunung Andong memiliki ketinggian 1.726 meter di atas permukaan laut (mdpl).Gunung ini diapit oleh Gunung Merbabu, Gunung Sumbing, Gunung Telomoyo, dan Gunung Ungaran.
          </p>
          <MapEmbed coordinates={"-7.389701869706533, 110.37036356142639"} />
        </div>
      </div>
      <div className="wisata-content">
        <img src={foto2} className="wisata-foto"/>
        <div className="wisata-info">
          <h2>2. Gunung Merbabu</h2>
          <p>
          Gunung Merbabu terletak di wilayah Kabupaten Magelang di lereng sebelah barat dan Kabupaten Boyolali di lereng sebelah timur dan selatan, serta Kabupaten Semarang di lereng sebelah utara, Jawa Tengah.Gunung Merbabu memiliki lima jalur pendakian resmi, dengan ketinggian puncak utamanya mencapai 3.145 meter di atas permukaan air laut
          </p>
          <MapEmbed coordinates={"-7.454914625725227, 110.43961369267099"} />
        </div>
      </div>
      <div className="wisata-content">
        <img src={foto3} className="wisata-foto"/>
        <div className="wisata-info">
          <h2>3. Gunung Prau</h2>
          <p> Gunung Prau terletak di Dataran Tinggi Dieng, Jawa Tengah, Indonesia .Ia menjadi tapal batas empat kabupaten di Jawa Tengah, yaitu Kabupaten Batang, Kabupaten Kendal, Kabupaten Temanggung, dan Kabupaten Wonosobo .Ketinggian puncak Gunung Prau mencapai 2.565 meter di atas permukaan laut (mdpl).Bukit Teletubbies dan Milky Way di Gunung Prau menjadi salah satu daya tarik yang sangat populer.
          </p>
          <MapEmbed coordinates={"-7.195691914097415, 109.93196140680456"} />
        </div>
      </div>
      <div className="wisata-content">
        <img src={foto4} className="wisata-foto"/>
        <div className="wisata-info">
          <h2>4. Gunung Sumbing</h2>
          <p>Gunung Sumbing terletak di Kabupaten Wonosobo, Temanggung, dan Magelang, Jawa Tengah. Gunung ini memiliki ketinggian 3.371 meter di atas permukaan air laut dan memiliki 12 jalur pendakian yang tersebar di tiga kabupaten tersebut
          </p>
          <MapEmbed coordinates={"-7.38457413824718, 110.07258576142564"} />
        </div>
      </div>
      <div className="wisata-content">
        <img src={foto5} className="wisata-foto"/>
        <div className="wisata-info">
          <h2>5. Gunung Telomoyo</h2>
          <p>Lokasi Gunung Telomoyo berada di Desa Pandean, Kecamatan Ngablak, Kabupaten Magelang, Jawa Tengah.Gunung Telomoyo memiliki ketinggian 1.996 meter di atas permukaan laut (mdpl).Gunung ini memiliki jalur pendakian yang cukup mudah dan bisa ditempuh dalam waktu sekitar 3-4 jam, serta terdapat air terjun kecil di pertengahan jalan menuju puncak gunung.
          </p>
          <MapEmbed coordinates={"-7.360711962310507, 110.40012940744887"} />
        </div>
      </div>
    </div>
  );
}

function WisataJudul () {
  return <h1 className="wisata-container">Gunung</h1>
}

export default WisataGunungList;
