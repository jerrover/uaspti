import React from "react";
import "./wisata.css";
import foto1 from "../Assets/Destinations/Air Terjun/Air Terjun Jumog/air-terjun-jumog-karanganyar.jpg";
import foto2 from "../Assets/Destinations/Air Terjun/Curug Lawe/lawe_2384844479.jpg";
import foto3 from "../Assets/Destinations/Air Terjun/Curug Telu/curugtelu.jpg";
import foto4 from "../Assets/Destinations/Air Terjun/Air Terjun Kedung Kayang/curug-kedung-kayang_169.jpeg";
import foto5 from "../Assets/Destinations/Air Terjun/Curug Bajing/curug-bajing.jpg";
import MapEmbed from "./map";
import Mininav from "./mininav";

export function WisataAirTerjun() {
  return (
    <div>
      <WisataJudul />
      <Mininav />
      <div className="wisata-content">
        <img src={foto1} className="wisata-foto"/>
      <div className="wisata-info">  
    <h2>1. Air Terjun Jumog</h2>
    <p>
      Air Terjun Jumog terletak di Taman Batu Tiban, Jl. Jumog, Gandu, Berjo, Kecamatan Ngargoyoso, Kabupaten Karanganyar, Jawa Tengah. Air Terjun Jumog memiliki ketinggian sekitar 30 meter yang menawarkan pemandangan air terjun yang cukup deras. air terjun ini bersumber dari mata air asli pegunungan dan mengalir ke tiga cabang, yaitu Klueng, Kusumajati, dan Jubleg, yang menawarkan variasi pemandangan dan pengalaman berbeda. Harga tiket masuk Air Terjun Jumog sebesar Rp15 ribu per orang
    </p>
    <MapEmbed coordinates={"-7.6309984618174544, 111.1244898051975"} />
</div>
</div>
<div className="wisata-content">
  <img src={foto2} className="wisata-foto"/>
  <div className="wisata-info">
    <h2>2. Curug Lawe</h2>
    <p>
      Curug lawe berada di Desa Kalisidi, Kecamatan Ungaran Barat, Semarang, Provinsi Jawa Tengah Curug Lawe memiliki daya tarik yang memikat karena berbagai Aktivitas seru yang diberikan meliputi trekking, menikmati keindahan curug, dan menikmati jembatan-jembatan. Setelah menikmati keindahan curug, wisatawan dapat melihat ketinggian curug yang sekitar 30 meter dan 40 meter, yang masih tergolong asri dan terlindungi Perhutani. Harga tiket untuk masuk ke Curug Lawe adalah Rp. 5.000
    </p>
    <MapEmbed coordinates={"-7.15174939610069, 110.15486185001677"} />
  </div>
</div>
<div className="wisata-content">
  <img src={foto3} className="wisata-foto"/>
  <div className="wisata-info">
    <h2>3. Curug Telu</h2>
    <p>
      Curug Telu berada di Desa Karangsalam, Kecamatan Baturraden, Banyumas, Jawa Tengah. Curug Telu salah satu cabang aliran memiliki debit air yang besar dan ketinggian mencapai 12 meter, membentuk struktur vertikal yang terapit oleh dua aliran di kedua sisinya. Harga Curug Telu cukup membayar 5.000 rupiah per orang sebagai tiket masuk. Pengunjung bisa datang dari jam 8.00-16.00. Setelah masuk kita harus berjalan untuk sampai ke Curug Telu.
    </p>
    <MapEmbed coordinates={"-7.069742493871356, 110.09722281131027"} />
  </div>
</div>
<div className="wisata-content">
  <img src={foto4} className="wisata-foto"/>
  <div className="wisata-info">
    <h2>4. Air terjun Kedung Kayang</h2>
    <p>
      Air terjun Kedung Kayang berada di perbatasan antara Kabupaten Magelang dan Kabupaten Boyolali, di antara Gunung Merapi dan Gunung Merbabu, tepatnya di Desa Wonolelo, Sawangan, Magelang, Kabupaten Magelang, Jawa Tengah. Air terjun Kedung Kayang adalah sebuah air terjun tertinggi di Jawa Tengah, terletak di ketinggian 1200 mdpl dengan tinggi mencapai 40 meter Harga tiket masuk air terjun Kedung Kayang cukup murah, sebesar Rp 2.500 rupiah saja. Jika anda membawa motor, anda bisa memarkir kendaraan anda dengan biaya parkir Rp 2.000, sementara bagi anda yang membawa mobil, biaya parkirnya adalah Rp 5.000 saja
    </p>
    <MapEmbed coordinates={"-7.5001332027590975, 110.39307011302894"} />
  </div>
</div>
<div className="wisata-content">
  <img src={foto5} className="wisata-foto"/>
  <div className="wisata-info">
    <h2>5. Curug Bajing</h2>
    <p>
      Lokasi Curug Bajing berada di Desa Tlogopakis, Gumelem, Kecamatan Petungkriyono, Kabupaten Pekalongan, Jawa Tengah. Air terjun ini memiliki tinggi sekitar 75 meter, dan diameter kolam yang menampungnya sekitar 3 meter. Harga tiket masuk Curug Bajing sebesar Rp 5.000 per orang.
    </p>
    <MapEmbed coordinates={"-7.171333127556314, 109.72863658024359"} />
  </div>
</div>


    </div>
  );
}

const backgroundImageUrl = "https://ik.imagekit.io/tvlk/blog/2022/11/Air-Terjun-Jumog-Wisata-Alam-Jawa-Tengah-Shutterstock.jpg?tr=dpr-2,w-675";

function WisataJudul () {
  return <h1 className="wisata-container" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>Air Terjun</h1>;
}

export default WisataAirTerjun;
