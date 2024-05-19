import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./wisata.css";
import MapEmbed from "./map";
import foto1 from '../Assets/Destinations/Situs Sejarah/Candi Arjuna/WhatsApp Image 2024-05-02 at 10.19.19_49d91913.jpg';
import foto2 from '../Assets/Destinations/Situs Sejarah/Candi Borobudur/candi-borobudur.jpg';
import foto3 from '../Assets/Destinations/Situs Sejarah/Candi Cetho/sunset-view-at-cetho-temple-768x433.jpg';
import foto4 from '../Assets/Destinations/Situs Sejarah/Klenteng Sam Po Kong/content_sam-poo-kong-1.jpg';
import foto5 from '../Assets/Destinations/Situs Sejarah/Lawang Sewu/f496a13e-7684-4399-bd8a-0da160aa054b.jpg';
import Mininav from "./mininav";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export function WisataBersejarah() {
  useEffect(() => {
    const elements = document.querySelectorAll('.wisata-content, .wisata-container');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-visible');
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div>
      <WisataJudul />
      <Mininav />
      <div className="wisata-content">
        <img src={foto1} className="wisata-foto" />
        <div className="wisata-info">
          <h2>1. Candi Arjuna</h2>
          <p>
            Lokasi Candi Arjuna berada di Desa Dieng Kulon, Kecamatan Batur, Kabupaten Banjarnegara, Jawa Tengah. Candi Arjuna adalah peninggalan Kerajaan Mataram Kuno yang dibangun pada abad ke-7 hingga ke-9 Masehi. Candi Arjuna sendiri merupakan salah satu candi Hindu dari garis keturunan Siwa. Candi ini juga dikatakan sebagai candi Hindu pertama di Jawa, dibangun sekitar abad ke-7 pada masa pemerintahan kerajaan Mataram Kuno.
          </p>
          <MapEmbed coordinates="-7.2041,109.9032" />
        </div>
      </div>
      <div className="wisata-content">
        <img src={foto2} className="wisata-foto" />
        <div className="wisata-info">
          <h2>2. Candi Borobudur</h2>
          <p>
            Candi Borobudur berada di Magelang, Jawa Tengah, Indonesia. Candi Borobudur adalah sebuah candi Buddha yang terletak di Magelang, Jawa Tengah, Indonesia. Candi ini ditetapkan sebagai warisan budaya dunia oleh UNESCO pada tahun 1991. Candi Borobudur diperkirakan dibangun sekitar tahun 775-832 Masehi, dan diduga didirikan oleh Raja Samaratungga dari Dinasti Sailendra, bersama putrinya Pramodhawardhani, berdasarkan prasasti Karang Tengah dan Sri Kahulunan.
          </p>
          <MapEmbed coordinates="-7.6079,110.2037" />
        </div>
      </div>
      <div className="wisata-content">
        <img src={foto3} className="wisata-foto" />
        <div className="wisata-info">
          <h2>3. Candi Cetho</h2>
          <p>
            Lokasi Candi Cetho berada di Dusun Cetho, Desa Gumeng, Kecamatan Jenawi, Kabupaten Karanganyar, Jawa Tengah. Candi ini diduga kuat dibangun pada masa Majapahit di abad 15 Masehi. Candi Cetho memiliki 13 teras berundak dari barat ke timur, namun setelah pemugaran pada tahun 1978, hanya tinggal sembilan teras yang tersisa. Candi ini memiliki relief yang menggambarkan dua tokoh utama, Sudamala dan Garudeya, yang mencerminkan semangat manusia untuk mengatasi dan melepaskan diri dari malapetaka.
          </p>
          <MapEmbed coordinates="-7.6353,110.6356" />
        </div>
      </div>
      <div className="wisata-content">
        <img src={foto4} className="wisata-foto" />
        <div className="wisata-info">
          <h2>4. Klenteng Sam Po Kong</h2>
          <p>
            Klenteng Sam Po Kong terletak di daerah Simongan, sebelah barat daya Kota Semarang. Klenteng Sam Poo Kong memiliki sejarah yang kaya dan terkait dengan kedatangan Laksamana Tiongkok, Zheng He, yang dikenal sebagai Cheng Ho. Pada tahun 1401 M, Zheng He membawa kapalnya merapat ke Pantai Utara Semarang dan Kota Semarang. Salah satu juru mudi armada, Wang Jing Hong, menderita sakit parah dan menggunakan sebuah gua batu di daerah tersebut sebagai tempat beristirahat dan pengobatan. Dalam waktu yang berikutnya, Klenteng Sam Poo Kong dibangun di atas lokasi tersebut, awalnya sebagai sebuah masjid tepi pantai yang kemudian berubah fungsi menjadi klenteng.
          </p>
          <MapEmbed coordinates="-6.9933,110.3975" />
        </div>
      </div>
      <div className="wisata-content">
        <img src={foto5} className="wisata-foto" />
        <div className="wisata-info">
          <h2>5. Lawang Sewu</h2>
          <p>
            Lawang Sewu adalah sebuah bangunan megah yang terletak di Kota Semarang, Jawa Tengah, Indonesia. Nama Lawang Sewu sendiri diambil dari bahasa Jawa, dengan “Lawang” berarti pintu dan “Sewu” berarti seribu, mengacu pada banyaknya pintu yang terdapat pada bangunan ini. Lawang Sewu dulunya digunakan sebagai Kantor Pusat Kereta Api Swasta NISM (Nederlandschindische Spoorweg Maatschappij) dan dibangun pada tahun 1904 dengan selesai di tahun 1907. Bangunan lainnya dibangun pada tahun 1916 hingga 1918.
          </p>
          <MapEmbed coordinates="-6.9891,110.4176" />
        </div>
      </div>
    </div>
  );
}

const backgroundImageUrl = "https://visitjawatengah.jatengprov.go.id/assets/images/f496a13e-7684-4399-bd8a-0da160aa054b.jpg";

function WisataJudul() {
  return <h1 className="wisata-container" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>Situs Bersejarah</h1>;
}

export default WisataBersejarah;
