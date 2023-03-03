const data = [
  {
    "id": 1,
    "name": "Tteokbokki",
    "price": 96800,
    "image": "/asset/makanan4.png",
    "description": "Tteokbokki adalah makanan khas Korea yang terbuat dari mi beras yang dicampur dengan gochujang (pasta cabai merah) dan dimasak bersama dengan sayuran seperti wortel, kol, dan bawang hijau. Hidangan ini biasanya disajikan sebagai jajanan atau makanan ringan.",
    "isDeleted": false,
    "category": "Pre-Order",
    "expiryDate": "2022-07-24"
  },
  {
    "id": 2,
    "name": "Kimchi Sujebi",
    "price": 102900,
    "image": "/asset/makanan5.png",
    "description": "Kimchi sujebi adalah hidangan mi Korea yang terdiri dari mi gandum yang dipotong menjadi potongan-potongan kecil, sayuran seperti daun bawang dan zucchini, serta kimchi yang diiris kecil-kecil. Mi dan sayuran disajikan dalam kuah kaldu yang gurih dan pedas yang dibuat dari dasi ikan atau kaldu ayam.",
    "isDeleted": false,
    "category": "Ready",
    "expiryDate": null
  },
  {
    "id": 3,
    "name": "Japchae ",
    "price": 87900,
    "image": "/asset/makanan6.png",
    "description": "Japchae adalah hidangan mie khas Korea yang terbuat dari mie kaca yang dicampur dengan sayuran, daging, dan bumbu seperti kecap, bawang putih, dan wijen. Hidangan ini biasanya disajikan sebagai makanan pembuka atau makanan sampingan.",
    "isDeleted": false,
    "category": "Sold Out",
    "expiryDate": "2022-10-04"
  },
  {
    "id": 4,
    "name": "Tokebi",
    "price": 65200,
    "image": "/asset/makanan7.jfif",
    "description": "Strawberry-flavored small cakes with a little buttercream decoration of various kinds",
    "isDeleted": false,
    "category": "Pre-Order",
    "expiryDate": null
  },
  {
    "id": 5,
    "name": "Patbingsoo",
    "price": 93600,
    "image": "/asset/makanan8.jfif",
    "description": "Patbingsoo adalah makanan penutup Korea yang terdiri dari es serut yang disajikan dalam mangkuk besar, yang ditaburi dengan kacang merah manis, biji selasih, potongan buah-buahan, dan susu kental manis. Es serut yang digunakan biasanya terbuat dari air es, gula, dan susu kental manis.",
    "isDeleted": false,
    "category": "Pre-Order",
    "expiryDate": null
  },
  {
    "id": 6,
    "name": "Kimbap",
    "price": 78900,
    "image": "/asset/makanan9.jpg",
    "description": "Nasi yang digulung dengan gim atau rumput laut kering yang di dalamnya berisi sayuran seperti wortel, bayam, timun, kemudian telur dan daging Maeun Dakbal.",
    "isDeleted": false,
    "category": "Ready",
    "expiryDate": "2022-12-09"
  },
  {
    "id": 7,
    "name": "Kimchi",
    "price": 46800,
    "image": "/asset/makanan10.jpg",
    "description": "sayuran yang difermentasi dengan bumbu khas sehingga menghasilkan rasa yang pedas dan asam",
    "isDeleted": false,
    "category": "Pre-Order",
    "expiryDate": "2022-11-04"
  },
  {
    "id": 8,
    "name": "Sannakji",
    "price": 51000,
    "image": "/asset/makanan11.jpg",
    "description": "gurita hidup yang dimakan dengan minyak atau biji wijen",
    "isDeleted": false,
    "category": "Ready",
    "expiryDate": null
  },
  {
    "id": 9,
    "name": "Jjajangmyeon",
    "price": 105400,
    "image": "/asset/makanan12.jpg",
    "description": "Mie dengan saus kedelai hitam dengan beberapa jenis sayuran dan potongan daging.",
    "isDeleted": false,
    "category": "Pre-order",
    "expiryDate": "2022-05-09"
  },
  {
    "id": 10,
    "name": "Miyeok Guk",
    "price": 77900,
    "image": "/asset/makanan13.jpg",
    "description": "Sup berisi rumput laut dan kaldu daging atau ayam dengan bumbu yang khas.",
    "isDeleted": false,
    "category": "Pre-Order",
    "expiryDate": "2022-12-23"
  },
  {
    "id": 11,
    "name": "Bulgogi",
    "price": 89300,
    "image": "/asset/makanan14.jpg",
    "description": "daging sapi yang dipotong-potong dengan tipis dan kemudian dipanggang setelah dibumbui dengan berbagai bumbu yang sangat khas.",
    "isDeleted": false,
    "category": "Ready",
    "expiryDate": null
  },
  {
    "id": 12,
    "name": "Bibimbap",
    "price": 289000,
    "image": "/asset/makanan15.jpg",
    "description": "nasi yang dicampur dan diaduk dengan berbagai macam lauk pauk.",
    "isDeleted": false,
    "category": "Sold Out",
    "expiryDate": "2022-06-18"
  },
  {
    "id": 13,
    "name": "Bungeoppang",
    "price": 470300,
    "image": "/asset/makanan16.jpg",
    "description": "kue manis berbentuk ikan yang di dalamnya terdapat selai kacang merah.",
    "isDeleted": false,
    "category": "Pre-Order",
    "expiryDate": null
  },
  {
    "id": 14,
    "name": "Jjampong",
    "price": 49900,
    "image": "/asset/makanan17.jpg",
    "description": "Mie dengan banyak jenis makanan laut seperti kerang, udang, cumi, gurita dan lainnya, serta daging dan sayuran.",
    "isDeleted": false,
    "category": "Ready",
    "expiryDate": "2022-09-29"
  },
  {
    "id": 15,
    "name": "Tangsuyuk",
    "price": 54800,
    "image": "/asset/makanan18.jpg",
    "description": "ayam filet balut tepung goreng dengan saus asam manis.    .",
    "isDeleted": false,
    "category": "Ready",
    "expiryDate": null
  },
  {
    "id": 16,
    "name": "Samgyetang",
    "price": 989000,
    "image": "/asset/makanan19.jpg",
    "description": "Sup ayam utuh dengan berbagai macam rempah yang sangat alami dan menyehatkan, dimasak dalam waktu yang lama sehingga ayam utuh yang ada di dalamnya benar-benar meresap    ",
    "isDeleted": false,
    "category": "Ready",
    "expiryDate": "2022-12-17"
  },
  {
    "id": 17,
    "name": "Hotteok",
    "price": 277000,
    "image": "/asset/makanan23.jpg",
    "description": "panekuk berisi sirup gula",
    "isDeleted": false,
    "category": "Pre-Order",
    "expiryDate": null
  },
  {
    "id": 18,
    "name": "Tteok",
    "price": 158000,
    "image": "/asset/makanan20.jpg",
    "description": "terbuat dari tepung beras ketan, teksturnya sedikit lengket",
    "isDeleted": false,
    "category": "Ready",
    "expiryDate": "2022-05-18"
  },
  {
    "id": 19,
    "name": "Gimmari",
    "price": 76000,
    "image": "/asset/makanan22.jpg",
    "description": "bihun berbumbu yang digulung dengan nori serta balut tepung digoreng.    ",
    "isDeleted": false,
    "category": "Sold Out",
    "expiryDate": null
  },
  {
    "id": 20,
    "name": "Rabokki",
    "price": 35000,
    "image": "/asset/makanan21.jpg",
    "description": "Kombinasi antara ramyeon dan tteokbokki.    ",
    "isDeleted": false,
    "category": "Ready",
    "expiryDate": "2022-06-05"
  }
]

export default data;
