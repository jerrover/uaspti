import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { showModal, closeModal } from "./modall.js"; 
import "./cards.css";
import "./modalstyles.css";
import "./slick.css";

const SlickSliderMus = () => {
  const Data = [
    {
      id: 1,
      title: "Gambang",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0Wv9gWQeV5KVimVdliYIqUpw9xagHj8Zjs7cJpEBpmMkL32t395mDyxIagvLTDbiz176ZuA3cICuHOzbm3w5pNljkWnoZ2XbHjvWSvOaP9rEiVYLcQpBvwZk9ISZ2yaOaFuHq1iLuBGI/s1600/Gambang.jpg",
      description:
        "Gambang adalah alat musik tradisional yang berasal dari Jawa Tengah, Indonesia. Alat musik ini terbuat dari kayu dan memiliki bentuk kotak panjang dengan bilah-bilah bambu yang disusun secara horizontal di atasnya. Bilah-bilah bambu tersebut dipukul dengan pemukul kecil untuk menghasilkan suara. Gambang umumnya dimainkan dalam kelompok gamelan sebagai bagian dari ansambel musik tradisional Jawa.",
    },
    {
      id: 2,
      title: "Siter",
      image:
        "https://partojambe.com/asset/foto_produk/alat-musik-harmonis-11.jpg",
      description:
        "Siter adalah alat musik tradisional Jawa Tengah yang terbuat dari bambu dan dimainkan dengan cara dipetik. Biasanya, siter memiliki sekitar 12 sampai 16 dawai yang dipasang di atas resonator bambu. Saat dimainkan, dawai-dawai tersebut dipetik dengan jari atau menggunakan alat bantu seperti pencon untuk menghasilkan suara yang khas dan indah. Siter sering dimainkan dalam ansambel gamelan Jawa Tengah dan merupakan bagian integral dari warisan seni dan budaya Jawa.",
    },
    {
      id: 3,
      title: "Bonang",
      image:
        "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/10/19/alat-musik-bonangjpg-20231019125746.jpg",
      description:
        "Bonang adalah alat musik tradisional khas Jawa Tengah yang terbuat dari logam. Alat ini terdiri dari serangkaian gong kecil yang disusun dalam dua baris dan dipasang di atas bingkai kayu. Bonang dimainkan dengan cara dipukul menggunakan pemukul karet atau kayu, menghasilkan suara yang khas dan melodi dalam ansambel gamelan Jawa Tengah.",
    },
    {
      id: 4,
      title: "Kendang",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Traditional_indonesian_drums.jpg",
      description:
        "Kendang adalah alat musik perkusi khas Jawa Tengah yang terbuat dari kayu dan kulit binatang. Alat ini berbentuk seperti tabung silinder dengan dua sisi yang dilapisi kulit. Kendang dimainkan dengan cara dipukul menggunakan tangan atau alat pemukul kecil. Dalam musik Jawa, kendang memiliki peran yang sangat penting sebagai pengatur irama dan pola ritmis.",
    },
    {
      id: 5,
      title: "Saron",
      image:
        "https://partojambe.com/asset/foto_produk/master_1q11ODCt70_1988_cara_memainkan_alat_musik_saron.jpg",
      description:
        "Saron adalah alat musik tradisional Jawa Tengah yang termasuk dalam keluarga gamelan. Alat ini terbuat dari logam dan memiliki bentuk persegi panjang dengan bilah-bilah logam yang dipasang di atasnya. Saron dimainkan dengan cara dipukul menggunakan pemukul yang disebut dengan tabuh, menghasilkan suara yang khas dan berbagai nada dalam ansambel gamelan.",
    },
    {
      id: 6,
      title: "Gender",
      image:
        "https://i.pinimg.com/originals/b3/62/cb/b362cb838bd7962929dc8aba41074576.jpg",
      description:
        "Gender adalah alat musik tradisional Jawa Tengah yang terdiri dari serangkaian bilah logam yang disusun secara horizontal di atas bingkai kayu. Setiap bilah logam memiliki ukuran dan ketebalan yang berbeda, sehingga menghasilkan nada yang berbeda saat dipukul. Gender dimainkan dengan cara dipukul menggunakan pemukul kecil yang disebut tabuh.",
    },
    {
      id: 7,
      title: "Kenong",
      image:
        "https://parto.id/asset/foto_produk/3ae5e1d058a63d95f4385f1fdb87a30c410c7d5a.jpg",
      description:
        "Kenong adalah salah satu alat musik perkusi dalam ansambel gamelan Jawa Tengah. Berbentuk cembung dan terbuat dari logam, kenong memiliki suara yang khas dan berat. Biasanya terdiri dari dua buah kenong yang dipasang di atas bingkai kayu, di mana salah satunya memiliki nada yang lebih tinggi dari yang lain.",
    },
    {
      id: 8,
      title: "Gong",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Traditional_indonesian_instruments04.jpg/640px-Traditional_indonesian_instruments04.jpg",
      description:
        "Gong adalah alat musik tradisional khas Jawa Tengah yang memiliki peran penting dalam ansambel gamelan. Terbuat dari logam dan berbentuk datar bulat, gong menghasilkan suara yang khas dan bergetar panjang saat dipukul dengan alat pemukul berbentuk palu atau tabuh. Suara gong memiliki kekuatan dan kedalaman yang memenuhi ruang, memberikan warna dan nuansa dalam musik gamelan Jawa Tengah.",
    },
    {
      id: 9,
      title: "Slenthem",
      image:
        "https://ik.imagekit.io/tvlk/blog/2021/04/Slenthem-shutterstock_1805307166-1024x682.jpeg",
      description:
        "Slenthem adalah salah satu alat musik dalam ansambel gamelan Jawa Tengah. Alat ini terdiri dari serangkaian bilah logam yang disusun horizontal di atas bingkai kayu. Setiap bilah logam memiliki panjang dan ketebalan yang berbeda, sehingga menghasilkan beragam nada saat dipukul.",
    },
    {
      id: 10,
      title: "Suling",
      image:
        "https://tatkala.co/wp-content/uploads/2022/01/mariyana.-gong-suling-sempidi.jpg",
      description:
        "Suling adalah alat musik tiup tradisional khas Jawa Tengah, Indonesia. Terbuat dari bambu atau logam dengan lubang-lubang yang disusun secara tertentu, suling menghasilkan suara yang indah dan menenangkan saat ditiup. Alat musik ini sering dimainkan secara solo atau sebagai bagian dari ansambel musik tradisional Jawa.",
    },
  ];

  const [activeCard, setActiveCard] = useState(null);
  const sliderRef = useRef(null);

  const toggleDescription = (id, description) => {
    setActiveCard(activeCard === id ? null : id);
    if (activeCard !== id) {
      showModal(description);
    } else {
      closeModal(document.querySelector(".modal"));
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="ccontainer">
      <h2>Alat Musik Jawa Tengah</h2>
      <Slider ref={sliderRef} {...settings}>
        {Data.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => toggleDescription(item.id, item.description)}
          >
            <img src={item.image} alt={item.title} />
            {activeCard === item.id && (
              <div className="description">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSliderMus;
