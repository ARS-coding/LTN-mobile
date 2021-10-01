
const constants = {
    activityList: [
      "Animals",
      "Arts",
      "Aviation",
      "Architecture",
      "Business",
      "Coding",
      "Computers",
      "Design",
      "Entrepreneurship",
      "Fashion",
      "Health",
      "Machines",
    ],
    districtList: [
      "ADALAR",
      "ARNAVUTKÖY",
      "ATAŞEHİR",
      "AVCILAR",
      "BAĞCILAR",
      "BAHÇELİEVLER",
      "BAKIRKÖY",
      "BAŞAKŞEHİR",
      "BAYRAMPAŞA",
      "BEŞİKTAŞ",
      "BEYKOZ",
      "BEYLİKDÜZÜ",
      "BEYOĞLU",
      "BÜYÜKÇEKMECE",
      "ÇATALCA",
      "ÇEKMEKÖY",
      "ESENLER",
      "ESENYURT",
      "EYÜPSULTAN",
      "FATİH",
      "GAZİOSMANPAŞA",
      "GÜNGÖREN",
      "KADIKÖY",
      "KAĞITHANE",
      "KARTAL",
      "KÜÇÜKÇEKMECE",
      "MALTEPE",
      "PENDİK",
      "SANCAKTEPE",
      "SARIYER",
      "SİLİVRİ",
      "SULTANBEYLİ",
      "SULTANGAZİ",
      "ŞİLE",
      "ŞİŞLİ",
      "TUZLA",
      "ÜMRANİYE",
      "ÜSKÜDAR",
      "ZEYTİNBURNU",
    ],
    recommendedPlaces : {
        KADIKÖY: [
            {
                name: "Ağaç Ev",
                image: "https://b.zmtcdn.com/data/pictures/3/18970253/105a380e6ad9ccdf63b8c9939273ce6f.jpg",
                address: "Osmanağa, No: 34104, Osmancık Sk. No:13 B, 34714 Kadıköy/İstanbul",
            },
            {
                name: "Dorock XL",
                address: "Caferağa, Namlı Market Yanı, Neşet Ömer Sk. 3C, 34710 Kadıköy/İstanbul ",
                image: "https://b.zmtcdn.com/data/pictures/1/18016871/7548fd97977dd16fc4448828a36dac35.jpg",
            },
            {
                name: "Starbucks",
                address: "Caferağa Mah, Muvakkıthane Cd. No:9, 34710 Kadıköy/İstanbul",
                image: "https://emoji.com.tr/wp-content/uploads/2017/12/en-guzel-starbucks-subeleri-019.jpg",
            },
        ],
        BEYOĞLU: [
            {
                name: "James Joyce Irish Pub",
                image: "https://sorabula.com.tr/wp-content/uploads/2020/06/james-joyce-irish-pub-1200x675.jpg",
                address: "Balo Sk. No:26, 34435 Beyoğlu/İstanbul",
            },
            {
                name: "Starbucks",
                address: "Merkez Mah. Abide-i Hürriyet Cad. No:211 Bolkan Center A-B-C Blok, 34384 Şişli/İstanbul",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScd0503peeHSqnRBynuMoUE5lK06lnsfh6gA&usqp=CAU",
            },
            {
                name: "Dorock Heavy Metal Club",
                address: "Hüseyinağa, Kameriye Sk. No 11/A, 34435 Beyoğlu/İstanbul",
                image: "https://i.ibb.co/ZXQLFg3/drck-txm-1-jpg-1564052455-2.jpg",
            },
        ],
        ŞİŞLİ: [
            {
                name: "Starbucks",
                address: "Merkez Mah. Abide-i Hürriyet Cad. No:211 Bolkan Center A-B-C Blok, 34384 Şişli/İstanbul",
                image: "https://lh5.googleusercontent.com/p/AF1QipMycl8J6vaaacODjOVPR1Yz3aF1h5eIGbLGm7_-=w408-h306-k-no",
            },
            {
                name: "Tuğra Restaurant",
                address: "Ciragan Palace Kempinski Hotel, Ciragan Caddesi 32, Çiragan Cd, 34349 Besiktas/İstanbul",
                image: "https://lh5.googleusercontent.com/p/AF1QipMwUyDiuhAunLhMkAwizzbCiEyZskoKJnaBQTku=w426-h240-k-no",
            },
            {
                name: "Banyan Restaurant",
                address: "Yıldız Muallim Naci Caddesi &, Salhane Sokak No:3, 34347 Beşiktaş/İstanbul",
                image: "https://lh5.googleusercontent.com/p/AF1QipMyxGeh6o3Myy3JtVWp9dauZQmh2vY62n10Fw0T=w408-h306-k-no",
            },
        ],
        FATİH: [
            {
                name: "Pierre Loti Roof Pub",
                address: "Binbirdirek, Pierre Loti Hotel, Piyer Loti Cd. No:1, 34122 Fatih/İstanbul ",
                image: "https://media-cdn.tripadvisor.com/media/photo-s/06/e1/1e/d5/pierre-loti-roof-pub.jpg ",
            },
            {
                name: "Reggae BR Shot & Food",
                address: "Küçük Ayasofya Mahallesi, Kadırga Limanı Cd. No:147, 34122 Fatih/İstanbul",
                image: "https://lh3.googleusercontent.com/3Tg-lj_a45SF0dVjItEnxfBRiw2ovDw8N45nEQToFX0xucklRphWv8Kuw04GmObxkxU7ui05=w1080-h608-p-no-v0 ",
            },
            {
                name: "Cozy Pub & Restaurant",
                address: "Alemdar, Divan Yolu Cd. No:60, 34110 Fatih/İstanbul",
                image: "https://m.fourseasons.com/alt/img-opt/~70.1530.0,0000-377,5877-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/IST/IST_380_original.jpg ",
            },
        ],
    }
};
  
export const arrayOfActivityObjects = constants.activityList.map((activity, index) => ({ content: activity, id: index }));

export default constants;