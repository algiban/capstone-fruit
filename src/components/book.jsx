import React, { useState } from "react";
import "./book.css";

const fruits = [
  {
    name: "Apel",
    image: "/img/apple.jpg", 
    description: `Apel adalah buah yang berwarna merah, hijau, atau kuning tergantung varietasnya. 
    Buah ini berasal dari Asia Tengah dan kini banyak dibudidayakan di negara beriklim sedang seperti Amerika Serikat, Tiongkok, dan Eropa. 
    Apel memiliki rasa manis hingga sedikit asam, teksturnya renyah, dan kaya akan serat serta vitamin C.`,
  },
  {
    name: "Pisang",
    image: "/img/banana.jpg",
    description: `Pisang merupakan buah berwarna kuning saat matang, berasal dari Asia Tenggara dan kini tumbuh luas di daerah tropis.
    Buah ini memiliki rasa manis dan tekstur lembut. Pisang kaya akan kalium, vitamin B6, serta karbohidrat, sehingga sangat baik sebagai sumber energi alami.`,
  },
  {
    name: "Jeruk",
    image: "/img/orange.jpg",
    description: `Jeruk adalah buah berwarna oranye dengan rasa manis hingga asam segar. 
    Buah ini berasal dari Asia Timur dan tumbuh optimal di iklim hangat dan lembap. 
    Jeruk sangat populer karena kandungan vitamin C-nya yang tinggi dan manfaat antioksidan yang baik untuk daya tahan tubuh.`,
  },
  {
    name: "Alpukat",
    image: "/img/alpukat.jpg",
    description: `Alpukat adalah buah yang memiliki rasa khas dan berasal dari wilayah tropis maupun subtropis. 
    Buah ini kaya akan vitamin dan mineral, serta sering dikonsumsi dalam keadaan segar maupun diolah menjadi berbagai makanan dan minuman. 
    Alpukat umumnya tumbuh subur di iklim sedang atau tropis.`,
  },
  {
    name: "Anggur",
    image: "/img/anggur.jpg",
    description: `Anggur adalah buah yang memiliki rasa khas dan berasal dari wilayah tropis maupun subtropis. 
    Buah ini kaya akan vitamin dan mineral, serta sering dikonsumsi dalam keadaan segar maupun diolah menjadi berbagai makanan dan minuman. 
    Anggur umumnya tumbuh subur di iklim sedang atau tropis.`,
  },
  {
    name: "Belimbing",
    image: "/img/belimbing.jpg",
    description: `Belimbing adalah buah yang memiliki bentuk bintang saat dipotong, dengan rasa manis-asam. 
    Buah ini berasal dari Asia Tenggara dan banyak dikonsumsi dalam bentuk segar atau jus. Belimbing juga kaya akan vitamin C dan antioksidan.`,
  },
  {
    name: "Blueberry",
    image: "/img/blueberry.jpg",
    description: `Blueberry adalah buah kecil berwarna biru keunguan yang tumbuh di semak-semak. 
    Dikenal kaya akan antioksidan, blueberry sering digunakan dalam smoothie, salad, dan produk roti. Buah ini umumnya tumbuh di daerah beriklim sedang.`,
  },
  {
    name: "Buah Naga",
    image: "/img/dragon.jpg",
    description: `Buah naga adalah buah tropis berkulit merah cerah dengan sisik menyerupai naga dan daging buah berwarna putih atau merah keunguan. 
    Dikenal kaya akan vitamin C dan antioksidan, buah naga sering dikonsumsi langsung, dijadikan jus, atau campuran smoothie. Buah ini umumnya tumbuh di daerah beriklim tropis dengan sinar matahari penuh dan curah hujan sedang.`,
  },
  {
    name: "Ceri",
    image: "/img/ceri.jpg",
    description: `Ceri adalah buah kecil berbentuk bulat dengan warna merah terang hingga merah tua yang tumbuh di pohon. 
    Dikenal memiliki rasa manis atau sedikit asam dan kaya akan antioksidan, ceri sering digunakan dalam kue, selai, jus, dan hidangan penutup. Buah ini umumnya tumbuh di daerah beriklim sedang dengan musim dingin yang cukup untuk mendukung proses dormansi pohonnya.`,
  },
  {
    name: "Delima",
    image: "/img/delima.jpg",
    description: `Delima adalah buah bulat berkulit tebal berwarna merah dengan biji-biji kecil berair berwarna merah terang di dalamnya. 
    Dikenal kaya akan vitamin C, serat, dan antioksidan, delima sering dikonsumsi langsung, dijadikan jus, atau digunakan sebagai topping salad dan hidangan manis. Buah ini umumnya tumbuh di daerah beriklim hangat hingga kering, seperti iklim subtropis dan mediterania.`,
  },
  {
    name: "Dukuh",
    image: "/img/duku.jpg",
    description: `Dukuh adalah buah kecil bulat berkulit kuning kecokelatan dengan daging buah bening dan rasa manis menyegarkan.
    Dikenal kaya akan vitamin C dan serat, dukuh sering dikonsumsi langsung sebagai camilan segar. Buah ini umumnya tumbuh di daerah beriklim tropis dengan curah hujan tinggi dan kelembapan yang cukup, terutama di kawasan Asia Tenggara.`,
  },
  {
    name: "Durian",
    image: "/img/durian.jpg",
    description: `Durian adalah buah tropis berukuran besar dengan kulit berduri tajam dan daging buah berwarna kuning lembut yang khas.
   Dikenal sebagai “raja buah” dan memiliki aroma kuat yang khas, durian sering dikonsumsi langsung atau diolah menjadi es krim, kue, dan berbagai hidangan penutup. Buah ini umumnya tumbuh di daerah beriklim tropis dengan curah hujan tinggi dan tanah yang subur serta berdrainase baik.`,
  },
  {
    name: "Jambu Air",
    image: "/img/jambu air.jpg",
    description: `Jambu air adalah buah berbentuk lonceng dengan kulit tipis berwarna merah, merah muda, atau hijau, dan daging buah yang renyah serta berair.
    Dikenal menyegarkan dan rendah kalori, jambu air sering dikonsumsi langsung atau dijadikan rujak dan salad buah. Buah ini umumnya tumbuh di daerah beriklim tropis dengan curah hujan tinggi dan paparan sinar matahari yang cukup.`,
  },
  {
    name: "Jambu Biji",
    image: "/img/jambu biji.jpg",
    description: `Blueberry adalah buah kecil berwarna biru keunguan yang tumbuh di semak-semak. 
    Dikenal kaya akan antioksidan, blueberry sering digunakan dalam smoothie, salad, dan produk roti. Buah ini umumnya tumbuh di daerah beriklim sedang.`,
  },
  {
    name: "Kelapa",
    image: "/img/kelapa.jpg",
    description: `Kelapa adalah buah tropis berkulit keras dan berserat dengan air serta daging putih di dalamnya yang kaya manfaat.
    Dikenal sebagai sumber elektrolit alami dan lemak sehat, kelapa digunakan dalam berbagai olahan seperti santan, minyak, minuman, hingga makanan tradisional. Buah ini umumnya tumbuh di daerah pesisir beriklim tropis dengan sinar matahari penuh dan curah hujan yang cukup tinggi.`,
  },
  {
    name: "Kiwi",
    image: "/img/kiwi.jpg",
    description: `Kiwi adalah buah berbentuk oval dengan kulit cokelat berbulu dan daging buah berwarna hijau cerah yang berpola bintang di bagian tengahnya.
    Dikenal kaya akan vitamin C, serat, dan antioksidan, kiwi sering dikonsumsi langsung, dicampurkan dalam salad buah, atau dijadikan jus dan topping dessert. Buah ini umumnya tumbuh di daerah beriklim sedang dengan musim dingin ringan dan musim panas yang sejuk.`,
  },
  {
    name: "Kurma",
    image: "/img/kurma.jpg",
    description: `Kurma adalah buah kecil berbentuk lonjong dengan kulit cokelat keemasan dan daging buah yang manis serta kenyal. 
    Dikenal kaya akan gula alami, serat, dan mineral, kurma sering dikonsumsi langsung sebagai camilan sehat atau digunakan dalam hidangan tradisional dan kue. Buah ini umumnya tumbuh di daerah beriklim panas dan kering seperti gurun dan oasis di wilayah Timur Tengah dan Afrika Utara.`,
  },
  {
    name: "leci",
    image: "/img/leci.jpg",
    description: `Leci adalah buah kecil berbentuk bulat dengan kulit berduri halus berwarna merah muda dan daging buah putih transparan yang manis dan berair. 
    Dikenal kaya akan vitamin C dan antioksidan, leci sering dikonsumsi langsung atau dijadikan jus, sirup, dan campuran dalam makanan penutup. Buah ini umumnya tumbuh di daerah beriklim tropis dengan suhu hangat dan curah hujan yang cukup.`,
  },
  {
    name: "Mangga",
    image: "/img/mangga.jpg",
    description: `Mangga adalah buah tropis berbentuk lonjong dengan kulit berwarna hijau, kuning, atau merah, dan daging buah berwarna oranye kekuningan yang manis dan lembut.
   Dikenal kaya akan vitamin A dan C, mangga sering dikonsumsi langsung, dijadikan jus, sambal, atau diolah menjadi berbagai hidangan penutup. Buah ini umumnya tumbuh di daerah beriklim tropis hingga subtropis dengan musim kemarau yang jelas dan paparan sinar matahari penuh.`,
  },
  {
    name: "Manggis",
    image: "/img/manggis.jpg",
    description: `Manggis adalah buah bulat berukuran sedang dengan kulit tebal berwarna ungu gelap dan daging buah putih yang lembut dan manis. 
    Dikenal kaya akan antioksidan dan vitamin, manggis sering dikonsumsi langsung atau dijadikan jus dan minuman kesehatan. Buah ini umumnya tumbuh di daerah beriklim tropis dengan curah hujan tinggi dan suhu hangat sepanjang tahun.`,
  },
  {
    name: "Markisa",
    image: "/img/markisa.jpg",
    description: `Markisa adalah buah bulat kecil berkulit keras berwarna ungu tua atau kuning dengan daging buah berair dan rasa asam manis yang segar.
   Dikenal kaya akan vitamin C dan antioksidan, markisa sering digunakan dalam jus, sirup, dan makanan penutup. Buah ini umumnya tumbuh di daerah beriklim tropis dan subtropis dengan suhu hangat dan curah hujan sedang.`,
  },
  {
    name: "Melon",
    image: "/img/melon.jpg",
    description: `Melon adalah buah bulat hingga oval dengan kulit berwarna hijau muda atau kuning dan daging buah manis berwarna oranye atau hijau pucat. 
    Dikenal kaya akan vitamin C dan air, melon sering dikonsumsi langsung sebagai buah segar atau dijadikan jus. Buah ini umumnya tumbuh di daerah beriklim hangat dengan curah hujan sedang.`,
  },
  {
    name: "Nanas",
    image: "/img/nanas.jpg",
    description: `Nanas adalah buah tropis berukuran sedang dengan kulit berduri berwarna cokelat keemasan dan daging buah kuning yang manis dan sedikit asam.
   Dikenal kaya akan enzim bromelain dan vitamin C, nanas sering dikonsumsi langsung, dijadikan jus, atau digunakan dalam berbagai hidangan dan minuman. Buah ini umumnya tumbuh di daerah beriklim tropis dengan suhu hangat dan curah hujan sedang hingga tinggi.`,
  },
  {
    name: "Nangka",
    image: "/img/nangka.jpg",
    description: `Nangka adalah buah besar dengan kulit berduri berwarna hijau kekuningan dan daging buah kuning yang manis dan aromatik.
    Dikenal kaya akan karbohidrat dan vitamin, nangka sering dikonsumsi langsung, diolah menjadi hidangan manis, atau dijadikan bahan pengganti daging dalam masakan vegetarian. Buah ini umumnya tumbuh di daerah beriklim tropis dengan suhu hangat dan curah hujan cukup tinggi.`,
  },
  {
    name: "Pepaya",
    image: "/img/pepaya.jpg",
    description: `Pepaya adalah buah oval dengan kulit hijau kekuningan dan daging buah oranye yang lembut dan manis. 
    Dikenal kaya akan enzim papain dan vitamin A, pepaya sering dikonsumsi langsung, dijadikan jus, atau digunakan dalam salad dan hidangan penutup. Buah ini umumnya tumbuh di daerah beriklim tropis dengan suhu hangat dan curah hujan sedang.`,
  },
  {
    name: "Pir",
    image: "/img/pir.jpg",
    description: `Pir adalah buah berbentuk bulat hingga lonjong dengan kulit halus berwarna hijau kekuningan atau cokelat muda, dan daging buah putih yang manis dan berair. 
   Dikenal kaya akan serat dan vitamin C, pir sering dikonsumsi langsung atau dijadikan jus dan salad buah. Buah ini umumnya tumbuh di daerah beriklim sedang dengan musim dingin ringan dan musim panas sejuk.`,
  },
  {
    name: "Rambutan",
    image: "/img/rambutan.jpg",
    description: `Rambutan adalah buah kecil bulat dengan kulit berwarna merah atau kuning yang berduri halus seperti rambut, dan daging buah putih transparan yang manis dan berair.
   Dikenal kaya akan vitamin C dan serat, rambutan sering dikonsumsi langsung sebagai buah segar atau dijadikan campuran dalam salad dan minuman. Buah ini umumnya tumbuh di daerah beriklim tropis dengan suhu hangat dan curah hujan tinggi.`,
  },
  {
    name: "Salak",
    image: "/img/salak.jpg",
    description: `Sawo adalah buah bulat hingga lonjong dengan kulit cokelat kasar dan daging buah berwarna kuning kecokelatan yang manis dan lembut.
    Dikenal sebagai buah tropis khas Indonesia, salak sering dikonsumsi langsung sebagai camilan atau dijadikan acar dan manisan. Buah ini umumnya tumbuh di daerah beriklim tropis dengan curah hujan tinggi dan suhu hangat.`,
  },
  {
    name: "Sawo",
    image: "/img/sawo.jpg",
    description: `Blueberry adalah buah kecil berwarna biru keunguan yang tumbuh di semak-semak. 
    Dikenal kaya akan serat dan vitamin, sawo sering dikonsumsi langsung sebagai buah segar atau diolah menjadi jus dan hidangan pencuci mulut. Buah ini umumnya tumbuh di daerah beriklim tropis dengan suhu hangat dan curah hujan sedang hingga tinggi.`,
  },
  {
    name: "Semangka",
    image: "/img/semangka.jpg",
    description: `Semangka adalah buah besar berbentuk bulat atau oval dengan kulit hijau belang-belang dan daging buah merah atau kuning yang manis dan berair. 
 Dikenal kaya akan air dan vitamin C, semangka sering dikonsumsi langsung sebagai buah segar atau dijadikan jus. Buah ini umumnya tumbuh di daerah beriklim hangat dengan sinar matahari penuh dan curah hujan sedang.`,
  },
  {
    name: "Sirsak",
    image: "/img/sirsak.jpg",
    description: `Sirsak adalah buah berbentuk oval dengan kulit hijau berduri lembut dan daging buah putih yang lembut serta rasa manis asam.
    Dikenal kaya akan vitamin C dan serat, sirsak sering dikonsumsi langsung atau dijadikan jus dan makanan penutup. Buah ini umumnya tumbuh di daerah beriklim tropis dengan suhu hangat dan curah hujan sedang hingga tinggi.`,
  },
  {
    name: "Stoberi",
    image: "/img/stoberi.jpg",
    description: `Stroberi adalah buah kecil berbentuk hati dengan warna merah cerah dan biji kecil di permukaan, serta daging buah yang manis dan sedikit asam.
    Dikenal kaya akan vitamin C dan antioksidan, stroberi sering dikonsumsi langsung, dijadikan selai, jus, atau topping makanan penutup. Buah ini umumnya tumbuh di daerah beriklim sedang dengan musim dingin ringan dan musim panas sejuk.`,
  },
  {
    name: "Tomat",
    image: "/img/tomat.jpg",
    description: `Tomat adalah buah bulat berwarna merah, kuning, atau hijau dengan daging buah yang berair dan rasa manis asam.
   Dikenal kaya akan likopen dan vitamin C, tomat sering digunakan dalam salad, saus, dan berbagai masakan. Buah ini umumnya tumbuh di daerah beriklim hangat dengan sinar matahari penuh dan curah hujan sedang.`,
  },
];

const Book = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFruits = fruits.filter(
    (fruit) =>
      fruit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fruit.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="book" className="book-container">
      <h2>Fruit Library</h2>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Cari buah..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid-book">
        {filteredFruits.length > 0 ? (
          filteredFruits.map((fruit, index) => (
            <div className="book-page" key={index}>
              <img src={fruit.image} alt={fruit.name} />
              <h3>{fruit.name}</h3>
              <p>{fruit.description}</p>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1" }}>Buah tidak ditemukan.</p>
        )}
      </div>
    </section>
  );
};

export default Book;
