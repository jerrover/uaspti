import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { showModal, closeModal } from "./modall.js";
import "./cards.css";
import "./modalstyles.css";
import "./slick.css";

const SlickSliderMak = () => {
  const Data = [
    {
      id: 1,
      title: "Tempe Mendoan",
      image:
        "https://images.tokopedia.net/img/KRMmCm/2024/2/19/23ae3c0e-b715-4fbb-ba00-efea8421b840.jpg",
      description:
        "Tempe mendoan adalah hidangan khas dari Jawa Tengah, Indonesia. Tempe yang tipis dipadu dengan adonan tepung beras yang digoreng hingga renyah di luar dan lembut di dalam. Rasanya gurih dan memiliki aroma yang khas. Tempe mendoan sering disajikan sebagai camilan atau makanan ringan, dan sering dijumpai di warung-warung atau pasar tradisional di Jawa Tengah.",
    },
    {
      id: 2,
      title: "Lumpia Semarang",
      image:
        "https://awsimages.detik.net.id/community/media/visual/2022/03/04/lumpia-semarang_169.jpeg?w=600&q=90",
      description:
        "Lumpia Semarang adalah hidangan khas dari Semarang, Jawa Tengah, Indonesia. Lumpia ini terbuat dari kulit lumpia yang tipis yang diisi dengan campuran rebung, daging ayam atau udang, telur, dan sayuran, seperti wortel dan tauge. Biasanya disajikan dengan saus kacang atau saus cabai sebagai pelengkap. Lumpia Semarang sering dijadikan sebagai camilan atau hidangan pembuka dan merupakan salah satu kuliner yang terkenal di Jawa Tengah.",
    },
    {
      id: 3,
      title: "Wajik Magelang",
      image:
        "https://magelangekspres.disway.id/upload/77609446f5a14d3148d26d73a3d0e146.jpg",
      description:
        "Wajik Magelang adalah makanan khas dari Magelang, Jawa Tengah, Indonesia. Terbuat dari beras ketan yang direbus bersama dengan gula merah, kelapa parut, dan santan, kemudian diaduk hingga mengental dan membentuk segi enam. Wajik Magelang memiliki tekstur kenyal dan manis yang khas, dengan aroma kelapa yang harum. Biasanya disajikan sebagai camilan tradisional atau sebagai hidangan penutup di acara-acara khusus.",
    },
    {
      id: 4,
      title: "Jenang Kudus",
      image:
        "https://media.suara.com/pictures/653x366/2023/01/08/50456-ilustrasi-dodol-garut-freepikikarahma.jpg",
      description:
        "Jenang Kudus adalah makanan tradisional dari Kudus, Jawa Tengah, Indonesia. Terbuat dari beras ketan yang direbus dengan gula merah, santan, dan rempah-rempah, jenang ini memiliki tekstur yang lembut dan kental. Biasanya disajikan sebagai hidangan penutup atau makanan ringan",
    },
    {
      id: 5,
      title: "Bakmi Jawa",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/1b/ea/4f/7d/bakmie-jawa-pak-blangkon.jpg",
      description:
        "Bakmi Jawa adalah hidangan mi tradisional yang khas dari Jawa Tengah, Indonesia. Mi digunakan sebagai bahan dasar, kemudian disajikan dengan kuah kaldu ayam atau sapi yang kaya rempah-rempah, serta tambahan daging ayam atau sapi, tauge, sayuran, dan telur rebus. Bakmi Jawa memiliki cita rasa yang gurih dan harum, dengan sentuhan rempah yang khas. Biasanya disajikan dengan tambahan sambal dan kecap manis sebagai pelengkap.",
    },
    {
      id: 6,
      title: "Nasi Liwet Solo",
      image:
        "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2022/06/15/resep-nasi-liwet-solo-sajian-tr-20220615112823.jpg",
      description:
        "Nasi Liwet Solo adalah hidangan nasi khas dari Solo, Jawa Tengah, Indonesia. Nasi liwet disajikan dengan lauk-pauk seperti ayam goreng, telur rebus, tempe goreng, tahu goreng, dan sayuran seperti labu siam, daun singkong, dan daun kemangi. Kuah santan yang gurih dengan rempah-rempah khas Jawa menjadi pelengkap utama hidangan ini.",
    },
    {
      id: 7,
      title: "Getuk",
      image:
        "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/06/26/foto-content-39-Abram-Arifin-1-2702611120.png",
      description:
        "Getuk adalah makanan ringan tradisional khas Jawa Tengah, Indonesia. Terbuat dari umbi singkong yang direbus, dihaluskan, lalu dicampur dengan gula dan santan kelapa. Adonan ini kemudian dibentuk menjadi balok-balok kecil dan biasanya disajikan dengan taburan kelapa parut di atasnya. Getuk memiliki tekstur yang lembut dan manis, dengan rasa singkong yang khas.",
    },
    {
      id: 8,
      title: "Sate Tegal",
      image:
        "https://www.hondacommunity.net/assets/contents/images/Sate-Tegal.jpg",
      description:
        "Sate Tegal adalah hidangan sate yang khas dari Tegal, Jawa Tengah, Indonesia. Terdiri dari potongan daging sapi, ayam, atau kambing yang ditusuk menggunakan tusukan bambu, kemudian dipanggang di atas arang. Daging biasanya disajikan dengan bumbu kacang yang kental dan pedas, serta tambahan lontong atau nasi sebagai pelengkap. Sate Tegal terkenal dengan cita rasanya yang gurih, manis, dan pedas, serta tekstur daging yang lembut.",
    },
    {
      id: 9,
      title: "Tongseng",
      image:
        "https://www.unileverfoodsolutions.co.id/dam/ufs-id/marketo/bango/14_TONGSENG_KAMBING.jpg",
      description:
        "Tongseng adalah hidangan khas Jawa Tengah, Indonesia, yang terkenal dengan rasa gurih dan pedasnya. Hidangan ini terbuat dari potongan daging sapi, domba, atau kambing yang dimasak dalam kuah santan kental dengan tambahan rempah-rempah seperti jahe, bawang merah, bawang putih, dan serai. Biasanya disajikan dengan potongan kubis, tomat, daun bawang, dan cabe rawit sebagai pelengkap.",
    },
    {
      id: 10,
      title: "Nasi Megono",
      image:
        "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/04/2023/09/17/nasi-megono-Mlinjo-1915096284.png",
      description:
        "Nasi Megono adalah hidangan khas dari Jawa Tengah, Indonesia, yang terkenal dengan citarasa segar dan aromanya yang harum. Hidangan ini terbuat dari nasi yang dimasak bersama dengan sayuran segar seperti daun singkong, labu siam, dan daun melinjo, serta dicampur dengan santan kelapa dan rempah-rempah. Nasi Megono biasanya disajikan dengan lauk tambahan seperti telur rebus, tahu goreng, dan tempe goreng.",
    },
  ];

  const [activeCard, setActiveCard] = useState(null);
  const sliderRef = useRef(null);

  const toggleDescription = (id, description, imageUrl) => {
    setActiveCard(activeCard === id ? null : id);
    if (activeCard !== id) {
      showModal(description, imageUrl);
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
      <h2>Makanan Khas Jawa Tengah</h2>
      <Slider {...settings}>
        {Data.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => toggleDescription(item.id, item.description, item.image)}
          >
            <img src={item.image} alt={item.title} />
            <div className="description">
              <p>{item.description}</p>
            </div>
            <div className="click-me">Click Me</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default SlickSliderMak;
