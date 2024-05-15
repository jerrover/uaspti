import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { showModal, closeModal } from "./modall.js"; 
import "./cards.css";
import "./modalstyles.css";
import "./slick.css";

const SlickSliderSej = () => {
  const Data = [
    {
      id: 1,
      title: "Candi Borobudur",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ef/47/1c/borobudur-temple.jpg?w=1200&h=-1&s=1",
      description:
        "Borobudur adalah candi Buddha Mahayana abad ke-9 di Magelang, Jawa Tengah, Indonesia.",
    },
    {
      id: 2,
      title: "Candi Sewu",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/d3/f4/04/sewu-temple.jpg?w=1200&h=-1&s=1",
      description:
        "Candi Sewu, juga dikenal sebagai Candi Manjusrigrha, adalah candi Buddha abad ke-8 yang terletak dekat Candi Prambanan di Jawa Tengah.",
    },
    {
      id: 3,
      title: "Candi Prambanan",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/92/c8/88/dsc03537-01-largejpg.jpg?w=1200&h=-1&s=1",
      description:
        "Prambanan adalah kompleks candi Hindu abad ke-9 di Jawa Tengah, Indonesia, yang didedikasikan untuk Trimurti, ekspresi Tuhan sebagai Pencipta (Brahma), Pemelihara (Vishnu), dan Penghancur (Shiva).",
    },
    {
      id: 4,
      title: "Lawang Sewu",
      image: "https://cdn.timesmedia.co.id/images/2020/08/12/LAwang-Semu.jpg",
      description:
        "Lawang Sewu adalah bangunan bersejarah di Semarang, Jawa Tengah, dikenal dengan arsitektur megahnya. Awalnya merupakan kantor administrasi untuk perusahaan kereta api Hindia Belanda. Kini berfungsi sebagai museum dan atraksi wisata, terkenal dengan cerita misteri dan legenda yang mengelilinginya.",
    },
    {
      id: 5,
      title: "Masjid Menara Kudus",
      image: "https://cdn.timesmedia.co.id/images/2020/08/12/Menara-Kudus.jpg",
      description:
        "Masjid Menara Kudus adalah situs bersejarah di Kudus, Jawa Tengah, Indonesia. Bangunan ini terkenal dengan menaranya yang tinggi. Dibangun pada abad ke-16 oleh Sunan Kudus. Masjid ini digunakan sebagai pusat kegiatan keagamaan dan budaya Islam.",
    },
    {
      id: 6,
      title: "Kelenteng Sam Poo Kong",
      image:
        "https://ik.imagekit.io/tvlk/blog/2023/01/Klenteng-Sam-Poo-Kong-Traveloka-Xperience.jpg",
      description:
        "Klenteng Sam Poo Kong di Semarang, Indonesia, adalah situs bersejarah yang menghubungkan Tiongkok dan Indonesia. Dibangun untuk mengenang Sam Poo Tay Djien, pelaut terkenal. Klenteng ini menawarkan arsitektur megah dan ornamen tradisional. Sebagai tempat ibadah dan atraksi wisata, klenteng ini menarik pengunjung yang ingin menjelajahi warisan budaya Tionghoa di Indonesia.",
    },
    {
      id: 7,
      title: "Candi Arjuna",
      image:
        "https://happytour.id/wp-content/uploads/2018/07/Paket-Wisata-Dieng-Candi-Arjuna-1.jpg",
      description:
        "Candi Arjuna adalah sebuah kompleks candi Hindu yang terletak di Dataran Tinggi Dieng, Jawa Tengah, Indonesia. Candi ini terdiri dari beberapa bangunan candi kecil yang didedikasikan untuk dewa-dewa Hindu, dengan candi utama yang dipersembahkan untuk Arjuna, salah satu tokoh pahlawan dalam wiracarita Mahabharata.",
    },
    {
      id: 8,
      title: "Candi Plaosan",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Kemegahan_Candi_Plaosan.jpg/2560px-Kemegahan_Candi_Plaosan.jpg",
      description:
        "Candi Plaosan adalah kompleks candi Buddha dan Hindu yang terletak di Klaten, Jawa Tengah, Indonesia. Kompleks ini terdiri dari dua candi utama, yaitu Candi Plaosan Lor (utara) dan Candi Plaosan Kidul (selatan), yang masing-masing didedikasikan untuk agama Buddha dan Hindu.",
    },
    {
      id: 9,
      title: "Kelenteng Cu An Kiong",
      image: "https://onetimes.id/wp-content/uploads/2020/03/Cu-An-Kiong-3.jpg",
      description:
        "Kelenteng Cu An Kiong adalah sebuah kelenteng Tionghoa yang terletak di Semarang, Jawa Tengah, Indonesia. Kelenteng ini merupakan salah satu kelenteng tertua dan terbesar di Semarang, didedikasikan untuk pemujaan Dewi Kwan Im, dewi penyayang dalam agama Buddha.",
    },
    {
      id: 10,
      title: "Benteng Portugis",
      image:
        "https://portalarjuna.net/wp-content/uploads/2022/06/Screenshot_30-5-630x380-1.jpg",
      description:
        "Prambanan is a 9th-century Hindu temple compound in Central Java, Indonesia, dedicated to the Trimurti, the expression of God as the Creator (Brahma), the Preserver (Vishnu), and the Destroyer (Shiva).",
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
      <h2>Peninggalan Sejarah Jawa Tengah</h2>
      <Slider {...settings}>
  {Data.map((item) => (
    <div
      key={item.id}
      className="card"
      onClick={() => showModal(item.description)}
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

export default SlickSliderSej;
