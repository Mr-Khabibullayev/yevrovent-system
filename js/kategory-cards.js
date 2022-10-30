const itemsPerPage = 10;
let pagination = document.querySelector(".pagination-scrool");

// reference to keep track of current page
let currentPage = 1;


const cards = [
  
  {
    title: "MIS-ALYUMINIY ISSIQLIK ALMASHTIRGICH VOV",
    imgCard:
      "../img/massivimages/vov-is.png",
    imgBg:
      '/img/issiqlik-almashinish-uskunalari-logosi.svg',
    class: "1",
    value: "issiqlik-almashinish-uskunalari",
    description:
      "<p>Plastinkasimon mis-alyuminiydan ishlangan VNV va VOV tipidagi issiqlik almashtirgichlarning isitish yelementi plastinka shaklida, alyuminiy qanotli mis trubadan yasalgan, turli xil konstruksiyali havoni isitish, ventilyasiyalash hamda kondisioner tizimda havoni isitish va sovutish uchun mo‘ljallangan.</p>",
  },
  {
    title: 'Issiqlik almashtirgich',
    imgCard:
      "../img/hohh.jpg",
    imgBg:
      "../img/issiqlik-almashinish-uskunalari-logosi.svg",
    value: "issiqlik-almashinish-uskunalari",
    class: "2",
    description:
      "<p>Plastinkasimon mis-alyuminiydan ishlangan VNV va VOV tipidagi issiqlik almashtirgichlarning isitish yelementi plastinka shaklida, alyuminiy qanotli mis trubadan yasalgan, turli xil konstruksiyali havoni isitish, ventilyasiyalash hamda kondisioner tizimda havoni isitish va sovutish uchun mo‘ljallangan.</p>",
  },
  {
    title: "ELEKTR BILAN ISITISH AGREGATI AOE",
    imgCard:
      "../img/massivimages/aoe.png",
    imgBg:
      "../img/isitish-uskunalri-logog.svg",
    value: "isitish-uskunalari",
    class: "3",
    description:
      "<p>Qurilma bino ichidagi havoni elektr isitgich yordamida isitish hamda ventilyator va yo‘naltiruvchi darparda orqali uni teng taqsimlash uchun mo‘ljallangan. Bu katta binolarda yoki yirik ishlab chiqarish hududlarida, masalan, ulkan omborxonalar yoki ishlab chiqarish sexlarida mahalliy isitish tizimini tashkil etish imkonini beradi.</p>",
  },
  
  // {
  //   title: "SUV BILAN ISHLAYDIGAN KANALLI SOVUTGICH ПВО",
  //   imgCard:
  //   "../img/massivimages/plpl.jpg",
  //   imgBg:
  //   "../img/kanalli-logo.png",
  //   value: "kanal-uskunalari",
  //   class: "4",
  //   description:
  //     "<p>To‘g‘ri burchakli kanallar uchun suv bilan ishlaydigan sovutgichlar ventilyasiya va kondisioner tizimlarida havo hamda boshqa portlamaydigan gaz aralashmalarini sovutish uchun mo‘ljallangan.</p>",
  // },
  
  {
    title: "Isitiluvchi parnik agregati AVO-44",
    imgCard:
      "../img/massivimages/oiu.jfif",
    imgBg:
    "../img/isitish-uskunalri-logog.svg",
    value: "isitish-uskunalari",
    class: "5",
    description:
      "<p>Suv isitgichli issiqxona isitish punktlari-AVO44 havo isitgich punktlari issiqxona va parniklarni, omborlar va suv isitish tizimi bilan jihozlangan sanoat binolarini qayta isitish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Elektr bilan isitish qurilmasi UEO",
    imgCard:
      "../img/massivimages/ueo.png",
    imgBg:
      "../img/isitish-uskunalri-logog.svg",
    value: "isitish-uskunalari",
    class: "6",
    description:
      "<p>Elektr isitish qurilmasi ( issiqlik to‘pi) omborxona, ishlab chiqarish binolari va boshqa shunga o‘xshash joylar, shuningdek quritish kameralariga toza havo yetkazib berish hamda ularni isitish maqsadida o‘rnatiladi. Havo SFO seriyali elektr isitgichlar yordamida isitiladi.</p>",
  },
  {
    title: "VG sovutish minorasi",
    imgCard:
      "../img/massivimages/vg.png",
    imgBg:
      "../img/muzlatish-uskunali-logo.svg",
    class: "7",
    value: 'muzlatish-uskunalari' ,
    description:
      "<p>VG sovutish minorasi suv bilan ta'minlashning aylanma usulida issiqlik almashgichlarida ishlatiladigan suvni sovutish uchun mo‘ljallangan bo‘lib,. Sovutish minorasi sanoat sovutish agregatlari, kompressor stansiyalari, kondisioner tizimlari va suvni sovutishni talab qiluvchi boshqa texnologik uskunalarni sovutish tizimlarida qo‘llaniladi.</p><p>Sovutish minorasi bilan sovutilgan suv tarkibida o‘zo‘zidan alangalanuvchi aralashmalar bo‘lmasligi kerak.</p><p>Suvdagi yog‘lar, smolalar va neft mahsulotlarining miqdori 25 mg/l, muallaq moddalar miqdori – 80 mg/l dan oshmasligi kerak.</p>",
  },
  {
    title: "Shovqinni bosish plitalari va qalpoqlari",
    imgCard:
      "../img/massivimages/sh-b.png",
    imgBg:
      "../img/shovqin-yutgich-logo.svg",
    value: '' ,
    class: "8",
    description:
      "<p>P tipidagi shovqinni o'chirish plitalari GP shovqin susaytirgichlarining korpusiga o'rnatiladi va ventilyatorlar, konditsionerlar, havoni boshqarish moslamalari, shuningdek shamollatish tarmog'ining elementlarida paydo bo'ladigan va tarqaladigan turbulent va aerodinamik shovqinlarni kamaytirish uchun mo'ljallangan. havo kanallari orqali.</p><p>Qarshilikni pasaytirish maqsadida shovqinni bostirish plitalariga OP pardalari o'rnatiladi.</p>",
  },
  {
    title: "Kompressor-kondensator bloki JVK",
    imgCard:
      "../img/massivimages/jvk.png",
    imgBg:
      "../img/muzlatish-uskunali-logo.svg",
    class: "9",
    value: 'muzlatish-uskunalari' ,
    description:
      "<p>Kompressor va kondensator bloki (KKB) Markaziy konditsioner&nbsp;tizimlarida xladogentni bevosita bug‘lash maqsadida foydalanish uchun mo‘ljallangan. Asosiy komponentlar kompressor va kondensator bo‘lib, tashqi bug‘latgichdan foydalaniladi.&nbsp;U suyuq freon tayyorlanishi uchun mas'uldir va MKPK, kanal sovutgichi va boshqalar kabi konditsioner&nbsp;uchun tashqi sovituvchi manba sifatida ishlatiladi.</p>",
  },
  {
    title: "Sovitish mashinasi JV (chiller)",
    imgCard:
    "../img/massivimages/chiller.jfif",
    imgBg:
    "../img/muzlatish-uskunali-logo.svg",
    value: 'muzlatish-uskunalari' ,
    class: "10",
    description:
      "<p>Sovitish mashinasi (chiller) suyuqlikni sovutish uchun mo‘ljallangan bo‘lib, u uskunadan issiqlikni chiqarish yoki uni issiqlik almashtirgichlarga yetkazib berish (konditsioner uchun) uchun ishlatiladi.</p>",
  },




  {
    title: "Yacheykali cho‘ntakli fil'tlar ЯЧФ",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-09/uBMlCcxiGilszmWDidoqs0iUbWYtoLJ52LO4RRl9.png",
    imgBg:
      "../img/filterlar-logosi.svg",
    value: "filtrlar",
    class: "11",
    description:
      "<p>Yacheykali cho‘ntakli fil'trlar YaChF o‘tuvchi shamollatish va havoni bir xil ushlab turish tizimlarida changi ko‘pi bilan 1 mg/m3 tashqi va aylanuvchi havo-ni changdan tozalash uchun mo‘ljallangan.&nbsp;Havoni tozalash darajasi bo‘yicha fil'tr GOST 30528-97 yoki EUR0VENT4/9 bo‘yicha EU4- EU7ga asosan II klassga taalluqlidir&nbsp;Fil'tr 1 mkm dan yirik bo‘lgan chang zarralaridan tashqi havoni samarali tozalashni ta'minlaydi.</p>",
  },
  {
    title: "Havo universal klapani KVU",
    imgCard:
      "../img/massivimages/kvu.png",
    imgBg:
      "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "12",
    description:
      "<p>Havo universal klapan KVU shamollatish va havoni bir xil saqlab turish tizimlarida o‘tuvchi, resirkulyasion yoki tortuvchi havo xarajatlarini tartibga solish uchun, shuningdek ventilyasion tarmoqlar ichki hajmining zich bo‘lishi uchun mo‘jallangan.</p>",
  },
  {
    title: "Alyumin havo klapani AXKv",
    imgCard:
    "../img/massivimages/avkx.jfif",
    imgBg:
    "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "13",
    description:
      "<p>Alyumin havo klapani portlashdan himoya qilish AHKp kiruvchi, resirkulyasion yoki tortuvchi havoning shamollatish va havoni bir xil saqlash tizimlarida sarflanishini tartibga solish uchun, ventilyasion tarmoqlar ichki hajmining zich bo‘lishiga mo‘ljallangan.</p>",
  },
  // {
  //   title: "SN-11, SN-15, SN-24, BSSh siklonlar",
  //   value: 'aspiratsiya-uskunalari' ,
  //   imgCard:
  //     "../img/massivimages/sn11.jpg",
  //   imgBg:
  //     "../img/aspiratsiya-uskunalari.svg",
  //   class: "14",
  //   description:
  //     "<p>SN-11, SN-15 va SN-24 siklonlar maydalash yoki un tortish uskunalari ishlaganda, yoqilg‘i yondirilganda, ishlab chiqarishda pishirish jarayonida, qurutishda, sochiluvchi moddalar, kullarni tashishda va shu kabi ishlarda yuzaga keladigan og‘ir aralashmalar va quruq chang gazlar va aspirasion havodan ajratib oladi.&nbsp;</p>",
  // },
  // {
  //   value: 'aspiratsiya-uskunalari' ,
  //   title: "Changtutuvchi agregat ZIL",
  //   imgCard:
  //     "../img/massivimages/zil.jfif",
  //   imgBg:
  //   "../img/aspiratsiya-uskunalari.svg",
  //   class: "15",
  //   description:
  //     "<p>Chang tutuvchi agregatlar ZIL-900M, ZIL-1600M charxlash, dag‘al ishlovchi va pardozlash stanoklarining abrazivli aylanalarini pana joydan so‘rib olinadigan changni tutib olish uchun mo‘ljallangan. Agregatlar so‘rib olinadigan havoni ikki pog‘onali tozalashni amalga oshiradi.</p>",
  // },
  {
    title: "Kanalli ventilyator VKPP",
    imgCard:
    "../img/massivimages/vkpp.jpg",
    imgBg:
      "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "16",
    description:
      "<p>VKPP to‘g‘ri burchakli kanalli ventilyatorlar kanallarni shamollatish tizimlarining bir qismi sifatida ishlashga mo‘ljallangan bo‘lib, kanallar bo‘ylab havo yoki chiqindi oqimini hosil qilish uchun ishlatiladi. Rux bilan qoplangan korpusda joylashgan ushbu turdagi kanalli ventilyatorlar to‘g‘ridan-to‘g‘ri havo o‘tkazgich qismiga o‘rnatiladi va ko‘p joy egallamaydi. Analoglari: WNP, VL, VRPP.</p>",
  },
  {
    title: "Kanalli ventilyator VKPN",
    imgCard:
    "../img/massivimages/vkpn.webp",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "17",
    description:
      "<p>Pryamougol'nie kanal'nie ventilyatori VKPN prednaznacheni dlya raboti v sostave kanal'nix sistem ventilyasii i slujat dlya generasii pritochnogo ili vityajnogo vozdushnogo potoka vdol' vozduxovodov. Kanal'nie ventilyatori v osinkovannom korpuse dannogo tipa ustanavlivayutsya neposredstvenno v sechenie vozduxovodov i ne zanimayut mnogo mesta. Analog: Box, VR, VKP, BDKF .</p>",
  },
  {
    title: "Kanalli ventilyator VKP",
    imgCard:
    "../img/massivimages/vkp.jpg",
    imgBg:
       "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "18",
    description:
      "<p>VKP to‘g‘ri burchakli kanalli ventilyatorlar kanallarni shamollatish tizimlarining bir qismi sifatida ishlashga mo‘ljallangan bo‘lib, kanallar bo‘ylab havo yoki chiqindi oqimini hosil qilish uchun ishlatiladi. Rux bilan qoplangan korpusda joylashgan ushbu turdagi kanalli ventilyatorlar to‘g‘ridan-to‘g‘ri havo o‘tkazgich qismiga o‘rnatiladi va ko‘p joy egallamaydi. Analoglari: Vox-F, VR, VKPF.</p>",
  },
  {
    title: "Aylana shakldagi kanalli ventilyator VK-P",
    imgCard:
    "../img/massivimages/vk-p.png",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "19",
    description:
      "<p>Aylana shaklidagi kanalli ventilyator VK-P havo va sekin tarqaluvchi gaz aralashmalarini tashish uchun mo‘ljallangan. Ventilyatorlar shovqin yuqori bo‘lgan jamoat, turar-joy, sanoat binolari hamda binolarning aylanasimon kanalli ventilyasiya-shamollatish va</p>",
  },
  {
    title: "Aylana shakldagi klapanli ventilyator VK-S",
    imgCard:
    "../img/massivimages/vk-s.jpg",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "20",
    description:
      "<p>Aylana shaklidagi kanalli ventilyator VK-S havo va sekin tarqaluvchi gaz aralashmalarini tashish uchun mo‘ljallangan. Ventilyatorlar shovqin yuqori bo‘lgan jamoat, turar-joy, sanoat binolari hamda binolarning aylanasimon kanalli ventilyasiya-shamollatish va</p><p>kondisioner tizimlarida foydalanish uchun o‘rnatilishi mumkin. Ventilyator qoplamasi rux bilan qoplangan po‘latdan yasalgan.</p>",
  },



  {
    title: "Havo bilan isitish agregati AO2",
    imgCard:
      "../img/massivimages/a02.jpg",
    imgBg:
      "../img/isitish-uskunalri-logog.svg",
    value: "isitish-uskunalari",
    class: "21",
    description:
      "<p>AO 2 havo-isitish bloki sanoat binolari, omborlar, garajlar va boshqa shu kabi binolarni havo bilan isitishni resirkulyasiya qilish uchun mo‘ljallangan. Issiqlik tashuvchi harorati 95°C gacha bo‘lgan issiq suv va 1,2 Mpa dan ortiq bo‘lmagan ish bosimidir. Analoglari: AV, VU, AVP, APVS, APVO, AVO.</p>",
  },
  {
    title: "Qayta yo‘nalgan to‘g‘ri burchakli klapan QPK",
    imgCard:
      "../img/massivimages/qpk.png",
    imgBg:
      "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "22",
    description:
      "<p>Shamollatish tizimlari uchun qayta yo‘nalgan to‘g‘ri burchakli klapanlar ventilyatorlarning kollektorlarga ulanganda havoning o‘chirilgan ventilyatorlarga (o‘chirilgan ventilyatorlardan) tirqish orqali o‘tishining oldini olish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Markaziy karkas panelli konditsioner KCKP",
    imgCard:
    "../img/massivimages/kckp.jfif",
    imgBg:
    "../img/isitish-uskunalri-logog.svg",
    value: "konditsanerlar",
    class: "23",
    description:
      "<p>Markaziy karkas panelli kondisioner (yetkazib beruvchi va yetkazib beruvchi-so‘ruvchi kamera) MKPK turli maqsadlar uchun mo‘ljallangan binolarda sun'iy iqlimni yaratish va saqlash uchun mo‘ljallangan.</p><p>Konditsioner qulaylik yoki texnologik parametrlar bo‘yicha ma'lum talablarga javob beradigan jamoat va ishlab chiqarish binolarida havoni tozalash, isitish, sovutish va aralashtirish maqsadida binolarni ventilyasiya qilish va kondisioner tizimida qo‘llanadi.</p>",
  },
  {
    title: "Shovqin pasaytirgich plastinkali GP",
    imgCard:
    "../img/massivimages/gp-c.jfif",
    imgBg:
      "../img/shovqin-yutgich-logo.svg",
    value: "shovqin-yutgichlar",
    class: "24",
    description:
      "<p>Shovqin pasaytirgichlar GTK ventilyatorlar, kondisionerlar, havoni boshqaruvchi qurilmalardan chiqadigan turbulentli va aerodinamikli shovqinni, shuningdek ventilyasion tarmoqning elementlarida yuzaga keladigan va havo o‘tkazich bo‘ylab tarqaladigan shovqinni pasaytirish uchun mo‘ljallangan. Shovqin darajasiga katta talablar qo‘yil-ganda, bir vaqtda GTK tipdagi ikkita shovqin pasaytirgichlardan foydalanish mumkin. Shovqin darajasini samaraliroq pasaytirish uchun shovkin pasaytirgichlar oldiga 1 metr uzunlikdagi to‘g‘ri joy bo‘lishi tavsiya etiladi.</p>",
  },
  {
    title: "Shovqin pasaytirgich to‘g‘ri burchakli GTP",
    imgCard:
    "../img/massivimages/gtp.png",
    imgBg:
    "../img/shovqin-yutgich-logo.svg",
    value: "shovqin-yutgichlar",
    class: "25",
    description:
      "<p>Shovqin pasaytirgichlar GTK ventilyatorlar, kondisionerlar, havoni boshqaruvchi qurilmalardan chiqadigan turbulentli va aerodinamikli shovqinni, shuningdek ventilyasion tarmoqning elementlarida yuzaga keladigan va havo o‘tkazich bo‘ylab tarqaladigan shovqinni pasaytirish uchun mo‘ljallangan. Shovqin darajasiga katta talablar qo‘yiladiganda, bir vaqtda GTK tipdagi ikkita shovqin pasaytirgichlardan foydalanish mumkin.&nbsp;Shovqin darajasini samaraliroq pasaytirish uchun shovkin pasaytirgichlar oldiga 1 metr uzunlikdagi to‘g‘ri joy bo‘lishi tavsiya etiladi.</p>",
  },
  {
    title: "Shovqin pasaytirgich aylanali GTK",
    imgCard:
    "../img/massivimages/gtk.jfif",
    imgBg:
    "../img/shovqin-yutgich-logo.svg",
    value: "shovqin-yutgichlar",
    class: "26",
    description:
      "<p>Shovqin pasaytirgichlar GTK ventilyatorlar, kondisionerlar, havoni boshqaruvchi qurilmalardan chiqadigan turbulentli va aerodinamikli shovqinni, shuningdek ventilyasion tarmoqning elementlarida yuzaga keladigan va havo o‘tkazich bo‘ylab tarqaladigan shovqinni pasaytirish uchun mo‘ljallangan.&nbsp;Shovqin darajasiga katta talablar qo‘yiladiganda, bir vaqtda GTK tipdagi ikkita shovqin pasaytirgichlardan foydalanish mumkin.&nbsp;Shovqin darajasini samaraliroq pasaytirish uchun shovkin pasaytirgichlar oldiga 1 metr uzunlikdagi to‘g‘ri joy bo‘lishi tavsiya etiladi.</p>",
  },
  {
    title: "Ikki qatorli boshqariladigan panjara RVR-2",
    imgCard:
    "../img/massivimages/pbp-2.jfif",
    imgBg:
      "../img/ventilyatsion-panjaralar-logois.svg",
    value: "ventilyatsion-panjaralar",
    class: "27",
    description:
      "<p>Gorizontal va vertikal boshqariladigan jalyuzali ventilyasion boshqariladigan panjara RVR-2 o‘tkazish-tortish shamollatish tizimida va havoni bir xil saqlab turish tizimlarida havoni berish va chiqarib tashlash uchun foydala-niladi, vazifasi bo‘yicha turlicha bo‘lgan xona-larning havo o‘tkazgichida yoki qurilish ishlari o‘rnida montaj qilish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Montajli burchak",
    imgCard:
    "../img/massivimages/mb.jpg",
    imgBg:
    "../img/qoshimcha-uskunalar-logosi.svg",
    value: "qoshimcha-jiholar",
    class: "28",
    description:
      "<p>Montajli burchak UGF to‘g‘ri burchakli kesimli ventilyasion havo o‘tkazgichlarning flansli ramkalarini tayyorlash uchun qo‘llanila-di. Burchak koroba ramkasining o‘zaro bog‘liq bo‘lgan tomonlar uchun ulovchi bo‘g‘in bo‘lib xizmat qiladi. Montaj ishlaridan keyin havo o‘tkazgichlar boltlar bilan burchaklardagi markaziy mahkamlash tirqishlari orqali bir biri bilan ulanadi</p>",
  },
  {
    title: "Vibroizolyatorlar DO",
    imgCard:
    "../img/massivimages/do.jpg",
    imgBg:
      "../img/qoshimcha-uskunalar-logosi.svg",
    value: "qoshimcha-jiholar",
    class: "29",
    description:
      "<p>Prujinali vibroizolyatorlarni DO uskuna ishlash vaqtida yuzaga keladigan tebranishlarni fundamentga va asosga ta'sirini kamaytirish maqsadida ventilyatorlar va boshqa uskunaga o‘rnatish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Yacheykali gofrilangan filtrlar YaGF",
    imgCard:
    "../img/massivimages/yagf.jpg",
    imgBg:
    "../img/ventilyatsion-panjaralar-logois.svg",
    value: "filtrlar",
    class: "30",
    description:
      "<p>Yacheykali gofrilangan fil'trlar YaGF o‘tuvchi shamollatish va havoni bir xil ushlab turish tizimlarida turli vazifadagi ma'muriy va sanoat binolarining xonalari uchun tashqi va aylanuvchi havo-ni changdan tozalash uchun mo‘ljallangan.&nbsp;Havoni tozalash darajasi bo‘yicha fil'trlar GOST 30528-97 yoki EUR0VENT4/9 bo‘yicha EU3-EU4ga asosan III va IV klassga taalluqlidir Fil'trlar 10 mkm dan yirik bo‘lgan chang zarralaridan tashqi havoni samarali tozalashni ta'minlaydi.</p>",
  },




  {
    title: "Shaxtali MVM ventilyatori",
    imgCard:
    "../img/massivimages/mbm.jfif",
    imgBg:
      "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatorlar",
    class: "31",
    description:
      "<p>O‘kli shaxtali mahalliy shamollatish, portlashdan himoyalangan dvigatelli bir pog‘onali ventilyatori ko‘mir va ruda shaxtalarda, shu jumladan havo zichligi 1,3 kg/m3 gacha, harorat -5°S dan 35°S gacha, changlanganligi 0,05 g/m3 gacha va nisbiy namlik 95% gacha (plyus 25°S haroratda) bo‘lgan gaz va chang bilan xavfli bo‘lgan berk tog‘da ishlab chiqarish joylarini shamollatish uchun mo‘ljallangan. Analog: VME, VOE.</p>",
  },
  {
    title: "O‘qli tutun chiqaruvchi ventilyator VOD-DU",
    imgCard:
    "../img/massivimages/vod-du.png",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatorlar",
    class: "32",
    description:
      "<p>Tutun ketkazish o‘qli ventilyatori TO‘V-TK yong‘inga qarshi kurashish va insonlarni qutqarish bo‘yicha ishlarni amalga oshirish maqsadida yong‘in boshlanishi vaqtida gazlarni ketkazish, shuningdek issiqlikni binodan tashqariga chiqarish uchun mo‘ljallangan. Ventilyatorlar havodagi tutun aralashmasini 120 minut davomida 400°S gacha v 120 minut davomida 600° S gacha harorat bilan (foydalanish variantiga asosan) joyini o‘zgartirishi mumkin.</p>",
  },
  {
    title: "O'qli ventilyatori VO 6-300",
    imgCard:
    "../img/massivimages/vo.jfif",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatorlar",
    class: "33",
    description:
      "<p>O‘q bo‘ylab yo‘nalgan ventilyatorlar VO 6-300 past va o‘rta bosimli bo‘lib, havo va boshqa gaz aralashmalarini o‘tkazishga mo‘ljallangan. Ularning agressivligi oddiy sifatli uglerodli po‘latga nisbatan yopishqoq moddalarni o‘z ichiga olmaydigan, 0,1 g / m dan oshmaydigan chang va boshqa 3 ta qattiq aralashmali materiallarni o‘z ichiga oladigan havoning agressivligidan yuqori emas. Analoglari: VO 12-300, VO 12-330, VO 14-320, OSA300.</p>",
  },
  {
    title: "Ventilyator VR 12-26 (VR 240-26)",
    imgCard:
    "../img/massivimages/bp12.jpg",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatorlar",
    class: "34",
    description:
      "<p>VVR 12-26 radial, yuqori bosimli, bir tomonlama assimilyasiya qilinadigan ventilyator bo'lib, turli shamollatish va havoni tozalash tizimlarida, havo isitish tizimlarida, ishlab chiqarish zavodlarida, yengil va og'ir sanoatning texnologik liniyalarida ishlatiladi.</p>",
  },
  {
    title: "Ventilyator VR 6-28 (5-ijro)",
    imgCard:
    "../img/massivimages/bp6-28.jpg",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatorlar",
    class: "35",
    description:
      "<p>Radial, yuqori bosimli, bir tomonlama assimilyasiya qilinadigan, umumiy maqsadli ventilyator bo'lib, turli shamollatish va havoni tozalash tizimlarida, havo isitish tizimlarida, ishlab chiqarish zavodlarida, yengil va og'ir sanoatning texnologik liniyalarida ishlatiladi. Analoglari: VVD, BP 132-30, BP 120-28.</p>",
  },
  {
    title: "Ventilyator VR 6-28 (1-ijro)",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-12/BNAoMioeZQevhGf4S1LxqyDZbQb7rqhOV1FANepo.png",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatolar",
    class: "36",
    description:
      "<p>Radial, yuqori bosimli, bir tomonlama assimilyasiya qilinadigan, umumiy maqsadli ventilyator bo'lib, turli shamollatish va havoni tozalash tizimlarida, havo isitish tizimlarida, ishlab chiqarish zavodlarida, yengil va og'ir sanoatning texnologik liniyalarida ishlatiladi. Analoglari: VVD, BP 132-30, BP 120-28</p>",
  },
  {
    title: "Ventilyator VS tilyatorlar4-75 (5-ijro)",
    imgCard:
    "../img/massivimages/bc.jpg",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatorlar",
    class: "37",
    description:
      "<p>VS 4-75 radial, past bosimli, bir tomonlama assimilyasiya qilinadigan, umumiy maqsadli</p><p>ventilyator bo‘lib, turli shamollatish va havoni tozalash tizimlarida, havo isitish tizimlarida,</p><p>ishlab chiqarish zavodlarida, yengil va og‘ir sanoatning texnologik liniyalarida ishlatiladi</p><p>Analoglari: VR 80-75, VR 86-77, VRAN9,&nbsp;VRAN6.</p>",
  },
  {
    title: "Markazdan qochma ventilyator VS 4-75 (1-versiya)",
    imgCard:
    "../img/massivimages/bc-4.jfif",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatorlar",
    class: "38",
    description:
      "<p>&nbsp;VS 4-75 radial, past bosimli, bir tomonlama assimilyasiya qilinadigan, umumiy maqsadli ventilyator bo‘lib, turli shamollatish va havoni tozalash tizimlarida, havo isitish tizimlarida,</p><p>ishlab chiqarish zavodlarida, yengil va og‘ir sanoatning texnologik liniyalarida</p>",
  },
  {
    title: "Markazdan qochma ventilyator VS 14-46",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-12/gUA3QM3DLzfd9Wp9XkBoOX132WdED7Kou5iUc0Nt.png",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatorlar",
    class: "39",
    description:
      "<p>VS 4-75 radial, past bosimli, bir tomonlama assimilyasiya qilinadigan, umumiy maqsadli ventilyator bo‘lib, turli shamollatish va havoni tozalash tizimlarida, havo isitish tizimlarida,</p><p>ishlab chiqarish zavodlarida, yengil va og‘ir sanoatning texnologik liniyalarida ishlatiladi.</p><p>Analoglari: BP 80-75, BP 86-77, BP AH9,&nbsp;BP AH6.</p>",
  },
  {
    title: "Kanalli ventilyator VKK",
    imgCard:
    "../img/massivimages/bkk.jfif",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "40",
    description:
      "<p>VKK kvadrat shakldagi kanalli ventilyatorlar kanallarni shamollatish tizimlarining bir qismi sifatida ishlashga mo‘ljallangan bo‘lib, kanallar bo‘ylab havo yoki chiqindi oqimini hosil qilish uchun ishlatiladi. Rux bilan qoplangan korpusda joylashgan ushbu turdagi kanalli ventilyatorlar to‘g‘ridan-to‘g‘ri havo o‘tkazgich qismiga o‘rnatiladi va ko‘p joy egallamaydi.</p>",
  },


  
  {
    title: "Aylanasimon kanalli drossel klapan DKSk",
    imgCard:
    "../img/massivimages/dkck.jfif",
    imgBg:
      "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "41",
    description:
      "<p>Aylana havo kanallari uchun kanalli klapanlar (amortizatorlar) ventilyasiya va kondisioner tizimlarida havo kanallari orqali o‘tadigan havo miqdorini tartibga solish hamda havo kanalini yopish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Round check valve type RSK",
    imgCard:
    "../img/massivimages/rsk.jfif",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "42",
    description:
      "<p>Check valves type RSK are used to automatically shut down round air ducts when the fan is turned off, and are designed to prevent air flow back through the openings to the shut down fans (from the shut down fans) when the fans are connected to the collectors.</p>",
  },
  {
    title: "Qayta yo‘nalgan aylana klapan KK",
    imgCard:
    "../img/massivimages/kk.jfif",
    imgBg:
      "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "43",
    description:
      "<p>Shamollatish tizimlari uchun qayta yo‘nalgan aylana klapanlar ventilyatorlar kollektorlarga ulanganda havoning o‘chirilgan ventilyatorlarga (o‘chirilgan ventilyatorlardan) tirqish orqali o‘tishining oldini olish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Tegirmon ventilyator TV",
    imgCard:
    "../img/massivimages/tv.jfif",
    imgBg:
      "../img/ventilyatorlar-logsi.svg",
    class: "44",
    description:
      "<p>Orqaga bukilgan kurakchali tegirmon ventilyatorlar changlanganligi 80 g/m3gacha bo‘lgan, -30°C dan +200°C gacha haroratli havo va portlash xavfi bo‘lmagan, agressiv bo‘lmagan chang-gaz-havo aralashmalarini joyini o‘zartirish uchun mo‘ljallangan.&nbsp;Joyi o‘zagaradigan muhitdagi va uning yopishishga moyilligi bo‘lgan changning abrazivliligi ko‘mir changining shunga o‘xshash ko‘rsatkichlaridan oshmasligi kerak. Tegirmon ventilyatorlaridan stasionar bug‘ qozonlarining chang tayyorlash tizimlarida, qora va rangli metallni ishlab chiqarish bo‘yicha texnologik liniyalarda va shu kabilarda&nbsp;foydalaniladi.</p>",
  },
  {
    title: "Yuk tortish-puflash mashinalari OT, OPV",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-13/SxoUv4FrmndiDI1nzEotxPu9QAzjGOtFBJ8nzISN.png",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlari",
    class: "45",
    description:
      "<p>Puflash ventilyatorlari OT va OPV yopishqoq, tolali va abrazivli aralashmalar bo‘lmagan changlanganligi 0,1 g/m3, -30°C dan +200°C gacha haroratli havo va portlash xavfi bo‘lmagan, agressiv bo‘lmagan gaz-havo aralashmalarini joyini o‘zartirish uchun mo‘lallangan.&nbsp;Puflash ventilyatorlaridan stasionar bug‘ va suv qaynatiladigan qozonlar yoqilishiga, shamollatish va havo haroratini bir xil saqlash tizimlariga va shu&nbsp;kabilarga havoni berish uchun foydalaniladi.</p>",
  },
  {
    title: "Maxsus ventilyator V-3, VKPE-4, VDPB-5",
    imgCard:
    "../img/massivimages/vdpb.jpg",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlari",
    class: "46",
    description:
      "<p>Ventilyator V-3 burg‘ilash qurilmasining asosiy mexanizmlarini o‘tkazish uchun mo‘ljallangan quvvati 560-1000 kVt bo‘lgan DPB tipdagi doimiy tokli elektrodvigatelni sovutish maqsadida puflab tozalash uchun&nbsp;mo‘ljallangan.</p>",
  },
  {
    title: "Changyutgich ventilyatori VR 6-45 (5-ijro)",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-13/yynuepMcdstp9ienU9sRKohRvXqpbzP2AEQNn4DE.png",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlari",
    class: "47",
    description:
      "<p>VR 6-45 radial changyutgich ventilyatori bir tomonlama assimilyasiya qilinadigan, markazdan qochma ventilytaor bo‘lib, chang tozalash tizimida chang va shlaklarni, yog‘och qipixlarini tozalashda, dastgohlardan metall changni tozalashda, pnevmatik don tashish tizimlarida va don mahsulotlari ishlab chiqarishda, namuna olish tizimlarida sement va temir -beton konstruksiyalari ishlab chiqarishda va boshqa maqsadlarda ishlatiladi. Analoglari: VSP 7-40, VR 140-40, VR 115-45, VR 100-45.</p>",
  },
  {
    title: "Tom ventilyatori VKRV-DU",
    imgCard:"../img/massivimages/vkpb.jfif",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlari",
    class: "48",
    description:
      "<p>VKRV-DU tipidagi radial qopqoqli tutun chiqaruvchi ventilyator ishlab chiqarish yoki sanoat inshootlarining shamollatish tizimlarida yong'in paytida binodan gaz aralashmalari va tutunni chiqarib tashlash uchun ishlatiladi.</p>",
  },
  {
    title: "Tom ventlyatori VKOP",
    imgCard:"../img/massivimages/vkop.jfif",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlari",
    class: "49",
    description:
      "<p>Binolarning tomlarida tutunni nazorat qilish tizimlari uchun qopqoqli moslamalar o'rnatiladi. Ular tashqi havoni zinapoya va lift maydonlariga to'g'ridan -to'g'ri yetkazib berishni ta'minlaydi, zinapoya, lift va boshqa joylarda ortiqcha bosim hosil qilib, tutunning bu joylarga kirishiga yo'l qo'ymaydi. Bu shamollatish tizimini soddalashtiradi va texnik qavatda ish joyini bo'shatadi.</p>",
  },
  {
    title: "Tom ventilyatori VKR",
    imgCard:
    "../img/massivimages/vkp.jfif",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlari",
    class: "50",
    description:
      "<p>VKR-bu shamollatish inshootining asosiy bo'g'ini sifatida binolarning tomlariga o'rnatilgan past bosimli, bir tomonlama assimilyasiyaqilinadigan qopqoqli ventilyatorlar. Havo kanallari tarmoqsiz ishlash uchun mo'ljallangan, lekin agar optimal ishlash ta'minlansa (sig'im minimaldan katta bo'lsa), kanallar bilan ulanish ham mumkin. Sanoat, jamoat va turar - joy binolarining ventilyasion tortuvchi tizimlarida ishlatiladi.</p>",
  },


  {
    title: "Portlashdan himoya qilish klapani КОВ",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-31/ZMZg3nNI4iJr1pU3xFsUQQvDukELbeTo43NvD1V5.png",
    imgBg:
      "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "51",
    description:
      "<p>Portlash xavfi bo‘lgan ishlarda shamollatish tizimlari uchun qayta yo‘nalgan portlashdan himoya qilish klapanlari ventilyatorlar kollektorlarga ulanganda havoning o‘chirilgan ventilyatorlarga (o‘chirilgan ventilyatorlardan) tirqish orqali o‘tishining oldini olish uchun&nbsp;mo‘ljallangan.</p>",
  },
  {
    title: "VANA KOPVINI CHEKLASH",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-30/H1qFXP1ZbeUYVn0XBrzH8IBQjZoIbaFjAMtPNtQ8.png",
    imgBg:
    "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "52",
    description:
      "<p>Portlash xavfli tarmoqlarning shamollatish tizimlari uchun portlashdan himoyalangan KOPv valflari fanatlar kollektorlarga ulanganda, ajratilgan fanatlarga (ajratilgan fanatlardan) teshiklar orqali havo oqishini oldini olish uchun mo'ljallangan.</p>",
  },
  {
    title: "Yong'inni ushlab qoluvchi klapan КОГ",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-04-25/tL1ywsnPkT61aIrxVHEZ29g9nS88dSOH6XcvSOfA.png",
    imgBg:
    "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "53",
    description:
      "<p>O‘tga chidamlilik chegarasi kamida 0,5 soat bo‘lgan orqaga yo‘nalgan yong‘inni ushlab qoluvchi klapanlar havo va havodagi bug‘-gaz aralashmalari tarmoqlangan joylar orqali kollektorga ulangan o‘chirilgan ventilyatorlarga (o‘chirilgan ventilyatorlardan) oqib ketishning oldini olish uchun to‘suvchi konstruksiyalarni havo o‘tkazgichlar kesishadigan joylarga o‘rnatish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Yog‘inga qarshi tutun ketkazish klapan КПД",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-30/mtMUuR2TbEEb7ZuVEkn7Jo7rwEIDkz9IYfzOD5TK.png",
    imgBg:
    "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "54",
    description:
      "<p>Yong‘inga qarshi tutun ketkazish klapani YoTK turli vazifadagi bino va inshootlarning tutunga qarshi shamollatishning havo kelish va havoni tortish tizimlarida, shuningdek gazli, aerozolli yoki kukunli yong‘in o‘chirish qurilmalari bilan himoya qilinadigan xonalarda yong‘indan keyin tutun va gazlarni chiqarish tizimlarida qo‘llash uchun mo‘ljallangan. Klapandan foydalanish KMK 2.04.05 va talablariga muvofiq amalga oshiriladi.</p>",
  },
  {
    title: "HAVO FAP",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-30/lo8yxeigwOSPznOUBWpKH79IZ6kOGZ1OZI2YiMz3.png",
    imgBg:
    "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "55",
    description:
      "<p>Shamollatish va konditsioner tizimlarida dumaloq havo kanallari uchun UVZK birlashtirilgan havo amortizatorlari ishlatiladi. Havo kanallari orqali o'tadigan havo miqdorini tartibga solish va havo kanalini yopish uchun mo'ljallangan.</p>",
  },
  {
    title: "HAVO DAMPERI",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-30/5Tf3vYn1QxYaY6zNTrzYcXeqbYfgyGRPotSnsPet.png",
    imgBg:
    "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "56",
    description:
      "<p>Shamollatish va konditsioner tizimlarida to'rtburchaklar kanallar uchun UVZP yagona havo namlagichlari ishlatiladi. Havo kanallari orqali o'tadigan havo miqdorini tartibga solish va havo kanalini yopish uchun mo'ljallangan.</p>",
  },
  {
    title: "Kanalli drossel klapan ДКСП",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-30/4AuV9n2wbmv0GuPJL1LVHpdD9J1CR4TvT6cL5pj5.png",
    imgBg:
      "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "57",
    description:
      "<p>DKCp boshqaruv klapanlari (amortizatorlar) ventilyasiya va kondisioner tizimlarida havo kanallari orqali o‘tadigan havo miqdorini tartibga solish hamda havo kanalini yopish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Gulbargli klapan КЛ",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-30/wtH7Y5VDM4FCupPeGWjIsz8o70HWoRt3MBqo0Hev.png",
    imgBg:
    "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "58",
    description:
      "<p>Gulbargsimon klapan o‘qli ventilyatorlarning dam beradigan tomoniga ventilyator o‘chirilgandan keyin ishlab chiqarish xonasiga sovuq havo va havo yog‘inlari kirishining oldini olish maqsadida o‘rnatish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Shiftga o‘rnatiladigan dumalok diffuzorlar DVS va DVS-P",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-26/wtKofaUZYunZ5k8yJ28Npp3ncsZ6EhAEmJ90TbUs.jpg",
    imgBg:
      "../img/ventilyatsion-panjaralar-logois.svg",
    value: "ventilyatsion-panjaralar",
    class: "59",
    description:
      "<p>Shiftga o‘rnatiladigan dumaloq diffuzorlar turarjoylar, ma'muriy, jamoat va ishlab chiqarish xonalarda shamollatish va havoni bir xil ushlab turish tizimlari bilan havoni berish va chiqarib tashlash uchun mo‘ljallangan.&nbsp;Havoning sarflanishini tartibga solish diffuzor (kam qarshilik ko‘rsatkich (obtekatel')) ning markaziy qismini korpusning o‘qi atrofid to‘liq to‘silganga qadar aylashtirish yo‘li bilan amalga oshiriladi.</p>",
  },

  {
    title: "O‘zi ochiluvchi klapan  КС",
    imgCard:
    "../img/massivimages/kc.jfif",
    imgBg:
    "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "60",
    description:
      "<p>O‘zi ochiluvchi klapan ventilyator ustki qismining havo haydaydigan tomoniga ventilyator o‘chirilgandan keyin ishlab chiqarish xonasiga sovuq havo va havo yog‘inlarining kirishining oldini olish maqsadida o‘rnatish uchun muljallangan.</p>",
  },

  {
    title: "Deflektor DT",
    imgCard:
      "../img/massivimages/dt.jfif",
    imgBg:
      "https://jihozvent.uz:2118/images/product/2021-08-31/yKS1cbpAOGXrGliIsYDAZMZ8aynsw2QNmQtWD3PF.svg",
    value: "",
    class: "61",
    description:
      "<p>Ventilyasion deflektor ventilyasion tortish shaxtaning havo o‘tkazgichidagi tortish kuchini tabiiy usulda oshirish uchun mo‘ljallangan, shuningdek havo o‘tkazgichni havo yog‘inlarining tushishidan himoya qiladi.&nbsp;Deflektorning ishlash prinsipi havo oqimi bilan puflanadigan silindrik qobiq bosimini kamaytirishga asoslangan. Shamol bilan yuzaga keladigan havo oqimi deflektorning konstruksiyasini egib qo‘yadi, ichida past bosim zonasi hosil bo‘ladi. Bu aatmosfera havosining ventilyasiya kanalidagi havo massalariga ta'sirini pasaytiradi va havoni ventilyasiya kanalidan kuchli bosim ostidagi zona so‘rish imkonini beradi. Shunday qilib, deflektordan foydalanish tortish moslamasining va dudbo‘ronning qo‘shimcha energiya sarflamasdan 15-20% ga tortish kuchini sezilarli&nbsp;darajada oshiradi.</p>",
  },
  {
    title: "Montajli va pitometrik lyuchok skobasi",
    imgCard:
    "../img/massivimages/nu.webp",
    imgBg:
      "../img/qoshimcha-uskunalar-logosi.svg",
    value: "qo'shimcha-jihozlar",
    class: "62",
    description:
      "<p>Montajli skoba flanslarni zichlikni oshirish va havo o‘tkazgichlarni yig‘ishda ulanish joylarning siljimasligi maqsadida qo‘shimcha tortish uchun mo‘ljallangan. Pitometr tiqin ishga tushirish ishlarda havoni o‘lchash uchun zarur bo‘lgan ventilyasion tizimlarda havo o‘tkazgichlarning&nbsp;lyuchok tirqishini zich yopish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Yacheykali tekis fil'trlar ФЯП",
    imgCard:
    "../img/massivimages/fyap.jpg",
    imgBg:
      "../img/ventilyatsion-panjaralar-logois.svg",
    value: "filtrlar",
    class: "63",
    description:
      "<p>Yacheykali tekis fil'trlar YaTF shamollatish va havoni bir xil ushlab turish tizimlarida turli vazifadagi xonalarga beriladigan tashqi havoni dastlabki tozalash uchun mo‘ljallangan.&nbsp;Havoni tozalash darajasi bo‘yicha fil'tr GOST 30528-97 yoki EUR0VENT4/9 bo‘yicha EU3ga asosan III klassga taalluqlidir&nbsp;Fil'tr 10 mkm dan yirik bo‘lgan chang zarralaridan tashqi havoni samarali tozalashni&nbsp;ta'minlaydi.</p>",
  },
  {
    title: "Polga o‘rnatiladigan diffuzor DFN",
    imgCard:
    "../img/massivimages/dfn.jfif",
    imgBg:
    "../img/ventilyatsion-panjaralar-logois.svg",
    value: "ventilyatsion-panjaralar",
    class: "64",
    description:
      "<p>Polga o‘rnatiladigan diffuzorlar DFN fal'shpol bilan jihozlangan xonalarda (auditoriyalar, konsert zallari, teatrlar, ofis xonalari, telekommunikasiya uskunali xonalar, komp'yuter markazlari va sh.k.)shamollatish va havoni bir xil ushlab turish tizimlari bilan havoni berish uchun mo‘ljallangan. Juda yaxshi akustik xarakteristikalar shovqin darajasiga katta talab qo‘yiladigan xonalarda DFN diffuzorlardan foydalanish imkonini&nbsp;beradi.</p>",
  },
  {
    title: "Bir qatorli boshqariladigan panjara RVR-1",
    imgCard:
    "../img/massivimages/pbp-1.jfif",
    imgBg:
    "../img/ventilyatsion-panjaralar-logois.svg",
    value: "ventilyatsion-panjaralar",
    class: "65",
    description:
      "<p>Gorizontal boshqariladigan jalyuzi ventilyasion boshqariladigan panjara RVR-1 o‘tkazishtortish shamollatish tizimida va havoni bir xil saqlab turish tizimlarida havoni berish va chiqarib tashlash uchun foydala-niladi, vazifasi bo‘yicha turlicha bo‘lgan xona-larning havo o‘tkazgichida yoki qurilish ishlari o‘rnida montaj&nbsp;qilish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Ventilyasion panjara RV-1",
    imgCard:
    "../img/massivimages/pb.jfif",
    imgBg:
    "../img/ventilyatsion-panjaralar-logois.svg",
    value: "ventilyatsion-panjaralar",
    class: "66",
    description:
      "<p>Gorizontal mahkamlanadigan jalyuzili ventilyasionn boshqarilmaydigan panjaradan RV-1 o‘tkazish-tortish shamollatish tizimida va havoni bir xil saqlab turish tizimlarida havoni berish va chiqarib tashlash uchun foydalaniladi, vazifasi bo‘yicha turlicha bo‘lgan xonalarning havo o‘tkazgichida yoki qurilish ishlari o‘rnida montaj&nbsp;qilish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Inersion panjara RVI",
    imgCard:
    "../img/massivimages/pvi.jfif",
    imgBg:
    "../img/ventilyatsion-panjaralar-logois.svg",
    value: "ventilyatsion-panjaralar",
    class: "67",
    description:
      "<p>Gorizontal tarzda siljidigan qilib mahkamlangan jalyuzali inersion ventilyasion panjaradan RVI o‘tkazish-tortish shamollatish tizimida va havoni bir xil saqlab turish tizimlarida havoni chiqarib tashlash uchun foydalaniladi, orqaga yo‘nalgan klapan funksiyali havo o‘tkazgichda montaj qilish uchun mo‘ljallangan.&nbsp;Panjaralar havoni chiqarib tashlash uchun mo‘ljallangaan va og‘irlik ta'sirida o‘tkazgich&nbsp;kesimini to‘sib qo‘yadi.</p>",
  },
  {
    title: "Tashqi panjara RVN",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-31/Igby7WJt4MB8x4yds6MoVZjfzVJUL2AaDig7LQX8.png",
    imgBg:
    "../img/ventilyatsion-panjaralar-logois.svg",
    value: "ventilyatsion-panjaralar",
    class: "68",
    description:
      "<p>Gorizontal siljimaydigan qilib mahkamlangan jalyuzali tashqi ventilyasion panjaradan RVN o‘tkazish-tortish shamollatish tizimida va havoni bir xil saqlab turish tizimlarida havoni berish va chiqarib tashlash uchun foydalaniladi, vazifasi bo‘yicha turlicha bo‘lgan xonalarning havo o‘tkazgichlari yoki devorlari (qurilishga oid o‘rni)da bir vaqtda panjara orqali havo yog‘inlari o‘tishining oldini olish bilan montaj qilish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Shiftga o‘rnatiladigan panjara 4RVP",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-31/t0V7Sz66XCm8KyUpw3wgtkUcyb9tHPABnd7gtm87.png",
    imgBg:
    "../img/ventilyatsion-panjaralar-logois.svg",
    value: "ventilyatsion-panjaralar",
    class: "69",
    description:
      "<p>-4 tomonlama havo taqsimlanadigan va olinadi-gan markaziy qismi bo‘lgan ventilyasion boshqariladigan panjara 4RVP o‘tkazish-tortish shamollatish tizimida va havoni bir xil saqlab turish tizimlarida havoni berish va chiqarib tashlash uchun foydalaniladi, vazifasi bo‘yicha turlicha bo‘lgan xonalardagi «Armstrong» tipdagi shiftda va boshqa turdagi shiftlarda montaj qilish uchun&nbsp;mo‘ljallangan.</p>",
  },



  {
    title: "Yelpig‘ichsimon diffuzor DFA",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-08-31/uknkTscJ6MCVBatQzr4rnJ0wXcnH1JeMyuBl1WK0.png",
    imgBg:
    "../img/ventilyatsion-panjaralar-logois.svg",
    value: "ventilyatsion-panjaralar",
    class: "70",
    description:
      "<p>Turar-joy va jamoat binolarining havosini shamollatish va havoni bir xil saqlash tizimlarida foydalaniladi.&nbsp;Katta hajmli havoni berish imkoniyatiga va o‘z turida eng ko‘p kuchli kesimlarga ega bo‘ladi. Diffuzorning olinadigan markaziy qism&nbsp;montaj ishlarini soddalashtiradi.</p>",
  },
  {
    title: "AVTOMATIK BOSHQARISH TIZIMINING SHKAFI ШСАУ",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-02-23/V15q17X5mmbKtOhZpAfjU8NzJVxtpWdrCLtGjp3L.jpg",
    imgBg:
      "../img/qoshimcha-uskunalar-logosi.svg",
    value: "qo'shimcha-jihozlar",
    class: "71",
    description:
      "<p>Avtomatik boshqarish tizimining shkafi ABTSh havoni shamollatish va bir xil ushlab turish tizimlarini avtomatik boshqarish uchun mo‘ljallangan.</p>",
  },
  {
    title: "SOLINOEDLI KLAPAN",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-03-01/x6KgDf1mAYowJKq5hcsrUiK1nqTQdEKU6AqYVh5k.png",
    imgBg:
    "../img/qoshimcha-uskunalar-logosi.svg",
    value: "qo'shimcha-jihozlar",
    class: "72",
    description:
      "<p>Solenoidli ventil' (Elektromagnit solenoidli klapan) suyuqlikli va so‘ruvchi liniyalariga, issiq gaz trubalariga sovutgich qurilmalari va havoni bir xil ushlab turish tizimlarini o‘rnatish uchun mo‘ljallangan.</p>",
  },
  {
    title: "CHASTOTALI O'ZGARTIRGICH",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-03-01/3cDzNLQdkW3N86iDIhB9e3O4Vtmvw2TsAX3nvKvQ.png",
    imgBg:
    "../img/qoshimcha-uskunalar-logosi.svg",
    value: "qo'shimcha-jihozlar",
    class: "73",
    description:
      "<p>Chastotali o‘zgartirgich (regulyator) shamollatish va havoni bir xil ushlab turish tizimlarida ventilyator dvigatelining aylanish tezligini boshqarish uchun qo‘llaniladi. Chastotani o‘zgartirgich energiyadn samarali foydalanish va energiyaga to‘yingan ishlab chiqarish ventilyatorlarning uzoq ishlashini ta'minlaydi.</p>",
  },
  {
    title: "EGILUVCHAN ULAGICH",
    imgCard:
    "../img/massivimages/ccs.jfif",
    imgBg:
      "../img/qoshimcha-uskunalar-logosi.svg",
    value: "qo'shimcha-jihozlar",
    class: "74",
    description:
      "<p>Shamollatish uchun egiluvchan ulagichlar ventilyatorlardan yoki ventilyasion qurilmalardan havo o‘tkazgichlarga tebranishlarni o‘tkazmaslik uchun mo‘ljallangan. O‘rtasi yumshoq vinil material-lar bilan ulangan ruxlangan po‘latdan ikkita qattiq qismdan iborat.</p>",
  },
  {
    title: "STATIK BOSIM KAMERASI СБК",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-03-01/56G3NbDpd9e1e6TDa0dzynd5l2qBSwiFoINkprfG.png",
    imgBg:
      "https://jihozvent.uz:2118/images/product/2022-02-23/ZlrX7rPlIs3Ogrg1GuoZX8SAaJojyL2w1ap1GCxB.png",
    value: "",
    class: "75",
    description:
      "<p>Statik bosim kamerasi SBK yoki adapter (plenum) turar-joy va jamoat binolarining havosini shamollatish va havoni bir xil saqlab turish tizimlarida qo‘llaniladi, havo taqsimla-gichlarni (ventilyasion panjaralar yoki diffuzor-larni) havo o‘tkazgichlar tizimiga ulash uchun mo‘ljallangan va havo oqimini havo taqsimlagich kesimi bo‘ylab bir tekis taqsimlashni ta'minlaydi.</p>",
  },
  {
    title: "DEFLEKTOR ROTATSION ДР",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-03-01/GTGdfA5uUSL8v2cjDUtldPeQBrqqKNSdGgzCBB7U.png",
    imgBg:
      "https://jihozvent.uz:2118/images/product/2022-02-23/RlETAf3GwoQ9ZpNRzNGSSpP5Odtn5D7Fy1AC970a.png",
    value: "",
    class: "76",
    description:
      "<p>Deflektor rotasion havo o‘tkazgichidagi tortish kuchini oshirish va tabiiy tortish ventilyasiyali tizimli sanoat va fuqarolik vazifasidagi binolaarda havo almashinish darjasini oshirish uchun mo‘ljallangan,</p>",
  },
  {
    title: "TIRQISHLI PANJARA",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-03-01/JYaCEOca2qQFKpAXj3UDCnguRa0YPGXL2nCC68Cc.png",
    imgBg:
      "https://jihozvent.uz:2118/images/product/2022-02-23/zW3mn1YBm63k5OO3I7yNIvjXQWYzQjirOnpHwWQn.png",
    value: "ventilyatsion-panjaralar",
    class: "77",
    description:
      "<p>Ventilyasion tirqishli panjaralar RSh havoni bir xil ushlab turish, shamollatish va isitish tizimlarida o‘tuvchi havo sarfini bir tekis boshqarish uchun va xonaning xizmat ko‘rsatiladigan zonaga havo oqimining yo‘nalishini o‘zgartirish uchun qo‘llaniladi.</p>",
  },
  // {
  //   title: "RETSERKULYATSION CHANG-USHLOVCHI AGREGAT SIOT",
  //   imgCard:
  //     "https://jihozvent.uz:2118/images/product/2022-03-01/99uC63xfMwqaWByeUc79O5IxJc63CMSlwup5ZbLf.png",
  //   imgBg:
  //     "https://jihozvent.uz:2118/images/product/2022-02-23/BOVJUCCvu9ThkvRUybchV6xbeq0YG3HRMOv7z60m.png",
  //   value: "aspiratsiya-uskunalar",
  //   class: "78",
  //   description:
  //     "<p>SIOT seria. 5.907-2 retsirkulyatsion chang-ushlovchi agregatlar sovuq, issiq (100 0С) yoki bug'lanuvchi sochiluvchi materiallardan iborat bo'lgan aspiratsiya tizimlariga xizmat ko'rsatiladigan statsionar texnologik uskunani changlantirmaslik uchun mo'ljallangan.&nbsp;</p>",
  // },
  {
    title: "O‘tish uzeli O‘U",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-11-17/ScX03rt9j79sS2ZKGG2bTIQYIAUo5EpE4CCIbEl9.png",
    imgBg:
      "https://jihozvent.uz:2118/images/product/2021-11-17/Te36AE7tGDZw9nBRomtufIONdF5q5eL6w5z0qtJO.svg",
    value: "",
    class: "79",
    description:
      "<p>O‘tish uzellari umumiy foydalanishdagi xonalaarning mexanik va tabiiy shamolatish tizimi uchun mo‘ljallangan. Ularda aylana kesimli po‘lat shaxtalarni tortish shamollatish tizimlarida binoning qoplamasi orqali o‘rnatish&nbsp;uchun qo‘llaniladi.</p>",
  },
  {
    title: "Havo taqsimlagichlar NRV",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2021-11-17/WRVlfwqoIREiviUMovnIsh1ekoQD1xl8HnJCsHML.png",
    imgBg:
      "https://jihozvent.uz:2118/images/product/2021-11-17/8G1TMf1xRlAM5LTZVBjtpxb1KoKFFVwh0NY9AhCU.svg",
    value: "",
    class: "80",
    description:
      "<p>Havo taqsimlagichlar NRV o‘tuvchi havoning ishchi zonaga berish uchun mo‘ljallangan. Ular shamollatish va havo bilan isitish tizimlari ichiga, shuningdek ushbu tizimlarning aralash variantlariga o‘rnatiladi. Bundan tashqari, havo taqsimlagichlar ishlab chiqarish xonalari maydonida texnologik va qulay tarzda havoni bir xil saqlab turish tizimlarida joylashtiriishi mumkin. Odatda uskuna panjaraning o‘qigacha hisoblansa, poldan 4 yoki kamida 1 metr mosofada&nbsp;o‘rnatiladi.</p>",
  },

  {
    title: "KANALLI HAVO ISITGICH ПНЕ",
    imgCard:
    "../img/massivimages/cc.jfif",
    imgBg:
      "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "81",
    description:
      "<p>To‘g‘ri burchakli kanallar uchun elektr isitgichlar ventilyasiya va kondisioner tizimlarida havo hamda boshqa portlamaydigan gaz aralashmalarini isitish uchun mo‘ljallangan.</p>",
  },
  // {
  //   title: "SUV BILAN ISHLAYDIGAN KANALLI ISITGICH ПВН",
  //   imgCard:
  //   "../img/massivimages/ccs.jfif",
  //   imgBg:
  //   "../img/kanalli-logo.png",
  //   value: "kanal-uskunalari",
  //   class: "82",
  //   description:
  //     "<p>To‘g‘ri burchakli kanallar uchun suv bilan ishlaydigan isitgichlar ventilyasiya va kondisioner tizimlarida havo hamda boshqa portlamaydigan gaz aralashmalarini isitish uchun mo‘ljallangan.</p>",
  // },
  {
    title: "KANALLI TOVUSH PASAYTIRGICH КГТ",
    imgCard:
    "../img/massivimages/kk.jfif",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "83",
    description:
      "<p>Aylana kanallar uchun KGT tovush pasaytirgichlar ventilyatorlar, havoni boshqarish moslamalari, shuningdek, ventilyasiya tarmog‘i elementlarida paydo bo‘ladigan hamda havo kanallari orqali tarqaladigan shovqinlarni kamaytirish uchun mo‘ljallangan.</p>",
  },
  {
    title: "AYLANASIMON KANALLI FILTR ФКГ",
    imgCard:
    "../img/massivimages/CDC.jfif",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "84",
    description:
      "<p>Aylana kanallar uchun kassetali havo filtrlari ventilyasiya va kondisioner tizimlarida havoni qattiq tolali zarralardan tozalash uchun mo‘ljallangan.</p>",
  },
  {
    title: "KANALLI ELEKTR ISITGICH КНЕ",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-03-01/akbWjGo2KQ6J3ffsUEm0aafY3PDcbGDtSINnGivt.png",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "85",
    description:
      "<p>Aylanasimon kanallar uchun elektr isitgichlar ventilyasiya va kondisioner tizimlarida havo hamda boshqa alanga olmaydigan gaz aralashmalarini isitish uchun mo‘ljallangan.</p>",
  },
  {
    title: "KANALLI SUV BILAN ISHLAYDIGAN ISITGICH КВН",
    imgCard:
    "../img/massivimages/fvfv.jpg",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "86",
    description:
      "<p>Aylanasimon kanallar uchun suv yordamida ishlaydigan isitgichlar ventilyasiya va kondisioner tizimlarida havo hamda boshqa alanga olmaydigan gaz aralashmalarini isitish uchun mo‘ljallangan.</p>",
  },
  {
    title: "TAGLIK ПД",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-03-11/EENzNIDTfWujERY5KOrBVhXAGW51ewboD9hqfF5g.png",
    imgBg:
      "../img/qoshimcha-uskunalar-logosi.svg",
    value: "qo'shimcha-jihozlar",
    class: "87",
    description:
      "<p>Taglik (PD) xonadan chikib ketadigan nam havo chegarasida hosil bo‘ladigan kondensatni va ventilyatorning sovuq metall qismlari va montaj stakanini yig‘ish va chiqarib tashlash uchun mo‘ljallangan. Taglikni ventilyatorga montaj qilish uchun taglikka to‘rtta o‘tish kronshteynlari bilan butlanadi.</p>",
  },
  {
    title: "VENTILYATORNI BOSHQARISH SHCHITI ВБШ",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-03-01/fOe5fAEPaT89v4KYhCHAQ2IYFz84GOq4WEVHZovI.png",
    imgBg:
    "../img/qoshimcha-uskunalar-logosi.svg",
    value: "qo'shimcha-jihozlar",
    class: "88",
    description:
      "<p>Ventilyatorni boshqarish shchiti VBSh ventilyatorlarni kompleksli boshqarish va ularni standart va qo‘shimcha funksiyalar yordamida himoya qilish uchun qo‘llaniladi.</p>",
  },
  {
    title: "KO'RISH SHISHASI",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-03-01/kjBEGROmoi4agYKKNwi0bOR3lBLFVK1PBxu2FgJA.png",
    imgBg:
    "../img/qoshimcha-uskunalar-logosi.svg",
    value: "qo'shimcha-jihozlar",
    class: "89",
    description:
      "<p>Ventilyatorni boshqarish shchiti VBSh ventilyatorlarni kompleksli boshqarish va ularni standart va qo‘shimcha funksiyalar yordamida himoya qilish uchun qo‘llaniladi.</p>",
  },
  {
    title: "IBV",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-02-23/XVkDQN7wDOHzzc25ZR1IlXqge70uTUOTl6umRFSZ.jpg",
    imgBg:
    "../img/qoshimcha-uskunalar-logosi.svg",
    value: "qo'shimcha-jihozlar",
    class: "90",
    description:
      "<p>Issiqlik bilan boshqariladigan (IBV) eng ko‘p tarqalgan sovutgich qurilmalarining bug‘latgichlariga xladagent berilishini boshqarish organi bo‘lib hisoblanadi.</p>",
  },

  {
    title: "TUTUN CHIQARUVCHI MARKAZDAN KO'CHMA VENTILYATOR ВЦ 4-75 ДУ",
    imgCard:
    "../img/massivimages/bc-4.jfif",
    imgBg:
      "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatorlar",
    class: "91",
    description:
      "<p>Ventilyatorlar chiqindi ventilyasiyasining tutun chiqarish tizimlarida havo va boshqa portlamaydigan gaz-bug‘-havo aralashmalarini ko‘chirish uchun mo‘ljallangan.</p>",
  },
  {
    title: "KANALLI VENTILYATOR ВКК-КХ",
    imgCard:
    "../img/massivimages/bkk.jfif",
    imgBg:
      "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "92",
    description:
      "<p>Oshxona ventilyatori namlik va yog' miqdori yuqori bo‘lgan havoni tozalash uchun mo‘ljallangan. O‘tuvchi havoning maksimal harorati 120°C.</p>",
  },
  {
    title: "KANALLI VENTILYATOR ВКК-Ш",
    imgCard:
    "../img/massivimages/bkk-kx.png",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "93",
    description:
      "<p>VKK-Sh kvadrat shakldagi kanalli ovoz o'tkazmas ventilyatorlar havo kanallarini montaj qilish uchun mo'ljallangan. Izolyasion vosita sifatida 9 mm qalinlikdagi sifatli armafleks material ishlatiladi, bu vosita bilan butun ichki yuza qoplanadi.</p>",
  },
  {
    title: "KANALLI DROSSEL KLAPAN ДКCп",
    imgCard:
    "../img/massivimages/dkckc.png",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "94",
    description:
      "<p>DKCp boshqaruv klapanlari (amortizatorlar) ventilyasiya va kondisioner tizimlarida havo kanallari orqali o‘tadigan havo miqdorini tartibga solish hamda havo kanalini yopish uchun mo‘ljallangan.</p>",
  },
  {
    title: "KANALLI TOVUSH PASAYTIRGICH КГП",
    imgCard:
    "../img/massivimages/kgp.png",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "95",
    description:
      "<p>Plastinkasimon tovush pasaytirgichlar ventilyasion qismdan chiqadigan hamda ventilyasiya va kondisioner tizimlarida kanallar orqali tarqaladigan aerodinamik shovqinlarni kamaytirish uchun mo‘ljallangan.</p>",
  },
  {
    title: "TO'G'RI BURCHAKLI KANALLI FILTR ФПК",
    imgCard:
    "../img/massivimages/fpk.jfif",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "96",
    description:
      "<p>To‘g‘ri burchakli kanallar uchun kassetali havo filtrlari ventilyasiya va kondisioner tizimlarida havoni qattiq tolali zarralardan tozalash uchun mo‘ljallangan.</p>",
  },
  {
    title: "TO'G'RI BURCHAKLI KANALLI FILTR ФПГ",
    imgCard:
    "../img/massivimages/CDC.jfif",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "97",
    description:
      "<p>To‘g‘ri burchakli kanallar uchun kassetali havo filtrlari ventilyasiya va kondisioner tizimlarida havoni qattiq tolali zarralardan tozalash uchun mo‘ljallangan.</p>",
  },
  {
    title: "KANALLI ANTIBAKTERIAL BO'LIM КБC",
    imgCard:
    "../img/massivimages/kvc.png",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "98",
    description:
      "<p>Kanalli antibakterial bo‘lim tibbiyot, bolalar, sport muassasalari va boshqa binolarda ventilyasiya hamda kondisioner tizimlari orqali to‘g‘ri burchakli kanallarda havoni ultrabinafsha nurlantirish yo‘li bilan zararsizlantirish uchun mo‘ljallangan.</p>",
  },
  {
    title: "KANALLI FREON SOVUTGICH ПВФ",
    imgCard:
    "../img/massivimages/ccsc.png",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "99",
    description:
      "<p>To‘g‘ri burchakli kanallar uchun freon sovutgichlar ventilyasiya va kondisioner tizimlarida havo hamda boshqa portlamaydigan gaz aralashmalarini sovutish uchun mo‘ljallangan.</p>",
  },
  {
    title: "SUV BILAN ISHLAYDIGAN KANALLI SOVUTGICH ПВО",
    imgCard:
    "../img/massivimages/cfcf.png",
    imgBg:
    "../img/kanalli-logo.png",
    value: "kanal-uskunalari",
    class: "100",
    description:
      "<p>To‘g‘ri burchakli kanallar uchun suv bilan ishlaydigan sovutgichlar ventilyasiya va kondisioner tizimlarida havo hamda boshqa portlamaydigan gaz aralashmalarini sovutish uchun mo‘ljallangan.</p>",
  },





  
  {
    title: "Yong'inga qarshi klapan КПУ",
    imgCard:
    "../img/massivimages/kpu.jfif",
    imgBg:
      "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "101",
    description:
      "<p>Yong‘inga qarshi universal klapan КПУ turli vazifadagi binolar va inshootlardagi yong‘inlarda yong‘inni havo o‘tkazgich, shaxta, shamollatish va havoni bir xil ushlab turish tizim kanallari bo‘yicha yong‘inni (olov va yonuvchi materiallarni) avtomatik va masofadan to‘sish uchun mo‘ljallangan. Klapandan foydalanish KMK 2.04.05 va SP7.13130-2013 talablariga muvofiq amalga oshiriladi</p>",
  },
  {
    title: "YUK TORTISH-PUFLASH MASHINALARI Т, ПВ",
    imgCard:
    "../img/massivimages/bc-4.jfif",
    imgBg:
      "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlar",
    class: "102",
    description:
      "<p>Tutun-so‘rgichlar T va PV 0,1 g/m3&nbsp;dan 2 g/m3gacha changlanganlikli&nbsp;-30°S dan +200°S gacha haroratli tutunli gazlar va tez portlash xavfi bo‘lmagan chang-gaz-havo aralashmalarni o‘zgartirish uchun mo‘ljallangan.</p>",
  },
  {
    title: "VENTILYATOR ЁЭТВ-52",
    imgCard:
    "../img/massivimages/oiu.jfif",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlar",
    class: "103",
    description:
      "<p>Ventilyator ekskavatorning YoTV-52 aylanish dvigatelida o‘rnatish uchun EKG-5 va ekskavatorning YoET-52 aylanish dvigatelida o‘rnatish uchun EKG-5A mo‘ljallangan.</p>",
  },
  {
    title: "MAXSUS VENTILYATOR В-2",
    imgCard:
    "../img/massivimages/oiu.jfif",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlar",
    class: "104",
    description:
      "<p>«Chavandoz» tipidagi ventilyator V-2 o‘zgartirilgan konstruksiyali o‘rtacha bosimli ventilyatorni o‘z ichiga olgan doimiy tokli elektrodvigatellarni puflab tozalash va tozalash uchun mo‘ljallangan.</p>",
  },
  {
    title: "YONG'INGA QARSHI ELEKTRIK TUTUNSO'RG'ICH ДПЭ",
    imgCard:
    "../img/massivimages/dpc.jfif",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlar",
    class: "105",
    description:
      "<p>ДПЭ tutunso‘rgich – bu yong‘in o‘chirilgandan keyin tiklash ishlarini amalga oshirishda yong‘inda shamollatish uchun qo‘llaniladigan xonalarni tutunning oldini olishda shamollatish uchun tejamkor va yuqori samaradorli ventilyatorlar.</p>",
  },
  {
    title: "O'QLI SOVUTISH VENTILYATOR VOT",
    imgCard:
    "../img/massivimages/vot.jfif",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlar",
    class: "106",
    description:
      "<p>Transformatorning o‘qli sovutish ventilyatoridan (TO‘V) transformatorli quyi stansiyalarni shamollatish uchun foydalaniladi.</p>",
  },
  {
    title: "TOM VENTILYATORI ВКР-ДУ",
    imgCard:
    "../img/massivimages/vkp.jfif",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlar",
    class: "107",
    description:
      "<p>Tutunni bartaraf etuvchi, past bosimli, bir tomonlama assimilyasiya qilinadigan VKR-DU qopqoqli ventilyatorlar turli sanoat, turar joy va jamoat binolarining tortuvchi ventilyasion tutun chiqarish tizimlariga o'rnatiladi.</p>",
  },
  {
    title: "OSMA VENTILYATOR ВНР-ДУ",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-03-07/Y9bXrPWmRnqBvzz7dcOFLiTi2RLHgvzL82wdlMTb.png",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlar",
    class: "108",
    description:
      "<p>VNR-DU ventilyatorlari to‘g‘ridan-to‘g‘ri bino ichidagi yoki tashqarisidagi devorga o‘rnatiladi va yong‘in paytida paydo bo‘ladigan yuqori haroratli tutun-havo aralashmalarini bartaraf etish va bir vaqtning o‘zida bino tashqarisidagi issiqlikni olib tashlash uchun mo‘ljallangan.</p>",
  },
  {
    title: "RADIAL VENTILYATOR ВР",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-03-07/LqnjNf7ogKDnJYjwFqUSSGS27yJ0UuUyfO9or2VD.png",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlar",
    class: "109",
    description:
      "<p>VR-turli xil ventilyasiya va kondisioner tizimlarida ishlatiladigan past bosimli, bir tomonlama assimilyasiya qilinadigan bir fazali radial ventilyatorlar.</p>",
  },
  {
    title: "TUTUN CHIQARUVCHI MARKAZDAN KO'CHMA VENTILYATOR ВЦ 14-46 ДУ",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-03-07/6uMZRCyycRhxdcrCPEgj5QlLnkNbwHbqYwD99mkQ.png",
    imgBg:
    "../img/ventilyatorlar-logsi.svg",
    value: "ventilyatsion-mahsulotlar",
    class: "110",
    description:
      "<p>Ventilyatorlar chiqindi ventilyasiyasining tutun chiqarish tizimlarida havo va boshqa portlamaydigan gaz-bug '-havo aralashmalarini ko‘chirish uchun mo‘ljallangan.</p>",
  },


  
  {
    title: "Teskari yo‘nalishli aylana klapan RSK",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-04-25/hPKzN83yI8fMR9m5snNShwwykk5c28vPDC610GDG.png",
    imgBg:
    "../img/klapanlar-logo.svg",
    value: "klapanlar ",
    class: "111",
    description:
      "<p>Teskari yo‘nalishli klapan RSK ventilyator yopilganda aylanasimon havo kanallarini avtomatik ravishda yopish uchun ishlatiladi va ventilyatorlar kollektorlarga ulanganda o‘chirilgan ventilyatorlarga ( o‘chirilgan ventilyatorlardan) tirqishlar orqali havo o‘tishini oldini oladi.</p>",
  },
  {
    title: "Aylanasimon kanalli drossel klapan DKSk",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-04-25/BkcOVmR3SZe8emAq7mHppgQhf2u5n0bJZzXAqHVE.png",
    imgBg:
    "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "112",
    description:
      "<p>Teskari yo‘nalishli klapan RSK ventilyator yopilganda aylanasimon havo kanallarini avtomatik ravishda yopish uchun ishlatiladi va ventilyatorlar kollektorlarga ulanganda o‘chirilgan ventilyatorlarga ( o‘chirilgan ventilyatorlardan) tirqishlar orqali havo o‘tishini oldini oladi.</p>",
  },
  {
    title: "Ortiqcha bosim klapani КИД",
    imgCard:
      "https://jihozvent.uz:2118/images/product/2022-04-25/dxYrY8tCVSsAsMXsBOiJRpQcJJapOUEe6jhYdwEU.png",
    imgBg:
    "../img/klapanlar-logo.svg",
    value: "klapanlar",
    class: "113",
    description:
      "<p>Teskari yo‘nalishli klapan RSK ventilyator yopilganda aylanasimon havo kanallarini avtomatik ravishda yopish uchun ishlatiladi va ventilyatorlar kollektorlarga ulanganda o‘chirilgan ventilyatorlarga ( o‘chirilgan ventilyatorlardan) tirqishlar orqali havo o‘tishini oldini oladi.</p>",
  },
  {
    title: "MIS-ALYUMINIY ISSIQLIK ALMASHTIRGICH VNV",
    imgCard:
      "../img/massivimages/vnv.png",
    imgBg:
      "../img/issiqlik-almashinish-uskunalari-logosi.svg",
    value: "issiqlik-almashinish-uskunalari",
    class: "114",
    description:
      "<p>Plastinkasimon mis-alyuminiydan ishlangan VNV va VOV tipidagi issiqlik almashtirgichlarning isitish yelementi plastinka shaklida, alyuminiy qanotli mis trubadan yasalgan, turli xil konstruksiyali havoni isitish, ventilyasiyalash hamda kondisioner tizimda havoni isitish va sovutish uchun mo‘ljallangan.</p>",
  },
  {
    title: "Havo bilan isitish agregati AO",
    imgCard:
      "../img/massivimages/ao.png",
    imgBg:
    "../img/isitish-uskunalri-logog.svg",
    value: "isitish-uskunalari",
    class: "115",
    description:
      "<p>AO havo isitish agregati sanoat binolari, omborlar, garajlar va boshqa shu kabi binolarni havo bilan isitish uchun mo‘ljallangan. AO isitish qurilmasining issiqlik tashuvchisi issiq suvdir. Analoglari: AV, VU, AVP, APVS, APVO,&nbsp;AVO.</p>",
  },
];

// reference to total pages
const pages = numPages(cards);

function numPages(cardsArray) {
  // returns the number of pages
  return Math.ceil(cardsArray.length / itemsPerPage);
}

const output = document.getElementById("output");

function changePage(page) {
  if (page < 1) page = 1;
  if (page > pages) page = pages;
  output.innerHTML = "";
  for (
    let i = (page - 1) * itemsPerPage;
    i < page * itemsPerPage && i < cards.length;
    i++
  ) {

    output.innerHTML += `
    <div onclick="localStorage.setItem('cardid', ${cards[i].class}); window.open('../html/katalog-cards.html');  "  class="kategory-img-boxes-card">
        <img src="${cards[i].imgCard}" alt="">
        <h4>${cards[i].title}</h4>
        <div class="kategory-img-boxes-card-background">
            <img src="${cards[i].imgBg}" alt="">
            <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
        </div>
      </div>`;

    
  }
  
}


function nextPage() {
  // if not on last page, goto next page
  if (currentPage < pages) changePage(++currentPage);
}

function prevPage() {
  // if not on the first page, goto previous page
  if (currentPage > 1) changePage(--currentPage);
}
let btnClick = ["btn-clickk"];

// directly access a page by number
function gotoPage(page) {
  // sets the current page to the selected page
  currentPage = page;
  // changes the page to the selected page
  changePage(page);
}
// creates individual page navigation
function addPages() {
  // grab reference to containing element
  const el = document.getElementById("pages");
  // for each page
  for (let i = 1; i < pages + 1; i++) {
    // append a link with the respective page number
    el.innerHTML += `<li><a href="javascript:gotoPage(${i})"><button class="${btnClick[0]}">${i}</button></a></li>`;
  }
}

window.onload = function () {
  changePage(1); // set default page
  addPages(); // generate page navigation
};

let shovqinYutgichlar = document.querySelector(".shovqin-yutgichlar");
let kanalUskunalari = document.querySelector(".kanal-uskunalari");
let issiqlikAlmashinishUskunalari = document.querySelector(
  ".issiqlik-almashinish-uskunalari"
);
let konditsanerlar = document.querySelector(".konditsanerlar");
let muzlatgichUskunalar = document.querySelector(".muzlatgich-uskunalari");
let isitishUskunalari = document.querySelector(".isitish-uskunalari");
let ventilyatorlar = document.querySelector(".ventilyatorlar");
let klapanlar = document.querySelector(".klapanlar");
let ventilyatsionPanjaralar = document.querySelector(
  ".ventilyatsion-panjaralar"
);
let ventilyatsionMahsulotlar = document.querySelector(
  ".ventilyatsiya-mahsulotlari"
);
let filterlar = document.querySelector(".filterlar");
let qoshimchaUskunalar = document.querySelector(".qoshimcha-uskunalar");

muzlatgichUskunalar.addEventListener("click", clickmuzlatgichUskunalar);

shovqinYutgichlar.addEventListener("click", clickshovqinYutgichlar);

kanalUskunalari.addEventListener("click", clickkanalUskunalari);
issiqlikAlmashinishUskunalari.addEventListener(
  "click",
  clickissiqlikAlmashinishUskunalari
);

konditsanerlar.addEventListener("click", clickkonditsanerlar);

isitishUskunalari.addEventListener("click", clickisitishUskunalari);

ventilyatorlar.addEventListener("click", clickventilyatorlar);


klapanlar.addEventListener("click", clickklapanlar);

ventilyatsionPanjaralar.addEventListener("click", clickventilyatsionPanjaralar);

ventilyatsionMahsulotlar.addEventListener(
  "click",
  clickventilyatsionMahsulotlar
);

filterlar.addEventListener("click", clickfilterlar);

qoshimchaUskunalar.addEventListener("click", clickqoshimchaUskunalar);

let push = [];
let katagoryBanner = document.querySelector(".kategory-img-boxes-cards");

function clickshovqinYutgichlar() {
  issiqlikAlmashinishUskunalari.style.borderBottom = "1px solid #030303";
  ventilyatorlar.style.borderBottom = "1px solid #030303";
  kanalUskunalari.style.borderBottom = "1px solid #030303";
  konditsanerlar.style.borderBottom = "1px solid #030303";
  ventilyatsionPanjaralar.style.borderBottom = "1px solid #030303";
  ventilyatsionMahsulotlar.style.borderBottom = "1px solid #030303";
  klapanlar.style.borderBottom = "1px solid #030303";
  muzlatgichUskunalar.style.borderBottom = "1px solid #030303";
  isitishUskunalari.style.borderBottom = "1px solid #030303";
  filterlar.style.borderBottom = "1px solid #030303";
  shovqinYutgichlar.style.borderBottom = "3px solid #F27272";
  output.innerHTML = "";
  push.splice(0, push.length);
  for (let x = 0; x < cards.length; x++) {
    if (cards[x].value === "shovqin-yutgichlar") {
      push.push(cards[x]);
    }
  }

  let pushLength = push.length;
  pagination.style.display = "none";
  for (let r = 0; r < pushLength; r++) {
    console.log(push);
    output.innerHTML += `
        <div onclick="localStorage.setItem('cardid', ${push[r].class}); window.open('../html/katalog-cards.html');  " id="kategory-card-id" class="kategory-img-boxes-card ">
                    <img src="${push[r].imgCard}" alt="">
                    <h4>${push[r].title}</h4>
                    <div class="kategory-img-boxes-card-background">
                        <img src="${push[r].imgBg}" alt="">
                        <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
            </div>
          </div>`;
  }
}
function clickkanalUskunalari() {
  isitishUskunalari.style.borderBottom = "1px solid #030303";
  issiqlikAlmashinishUskunalari.style.borderBottom = "1px solid #030303";
  klapanlar.style.borderBottom = "1px solid #030303";
  muzlatgichUskunalar.style.borderBottom = "1px solid #030303";
  filterlar.style.borderBottom = "1px solid #030303";
  ventilyatsionPanjaralar.style.borderBottom = "1px solid #030303";
  qoshimchaUskunalar.style.borderBottom = "1px solid #030303";
  ventilyatorlar.style.borderBottom = "1px solid #030303";
  kanalUskunalari.style.borderBottom = "3px solid #F27272";
  ventilyatsionMahsulotlar.style.borderBottom = "1px solid #030303";
  konditsanerlar.style.borderBottom = "1px solid #030303";
  shovqinYutgichlar.style.borderBottom = "1px solid #030303";

  output.innerHTML = "";
  push.splice(0, push.length);
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === "kanal-uskunalari") {
      push.push(cards[i]);
    }
  }
  let pushLength = push.length;
  pagination.style.display = "none";
  for (let r = 0; r < pushLength; r++) {
    console.log(push);
    output.innerHTML += `
        <div onclick="localStorage.setItem('cardid', ${push[r].class}); window.open('../html/katalog-cards.html');  " id="kategory-card-id" class="kategory-img-boxes-card ">
                    <img src="${push[r].imgCard}" alt="">
                    <h4>${push[r].title}</h4>
                    <div class="kategory-img-boxes-card-background">
                        <img src="${push[r].imgBg}" alt="">
                        <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
            </div>
          </div>`;
  }
}
function clickissiqlikAlmashinishUskunalari() {
  kanalUskunalari.style.borderBottom = "1px solid #030303";
  ventilyatsionMahsulotlar.style.borderBottom = "1px solid #030303";
  isitishUskunalari.style.borderBottom = "1px solid #030303";
  ventilyatorlar.style.borderBottom = "1px solid #030303";
  ventilyatsionPanjaralar.style.borderBottom = "1px solid #030303";
  qoshimchaUskunalar.style.borderBottom = "1px solid #030303";
  muzlatgichUskunalar.style.borderBottom = "1px solid #030303";
  issiqlikAlmashinishUskunalari.style.borderBottom = "3px solid #F27272";
  konditsanerlar.style.borderBottom = "1px solid #030303";
  shovqinYutgichlar.style.borderBottom = "1px solid #030303";
  filterlar.style.borderBottom = "1px solid #030303";
  klapanlar.style.borderBottom = "1px solid #030303";
  output.innerHTML = "";
  push.splice(0, push.length);
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === "issiqlik-almashinish-uskunalari") {
      push.push(cards[i]);
    }
  }
  let pushLength = push.length;
  pagination.style.display = "none";
  for (let r = 0; r < pushLength; r++) {
    console.log(push);
    output.innerHTML += `
        <div onclick="localStorage.setItem('cardid', ${push[r].class}); window.open('../html/katalog-cards.html');  " id="kategory-card-id" class="kategory-img-boxes-card ">
                    <img src="${push[r].imgCard}" alt="">
                    <h4>${push[r].title}</h4>
                    <div class="kategory-img-boxes-card-background">
                        <img src="${push[r].imgBg}" alt="">
                        <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
            </div>
          </div>`;
  }
}
function clickkonditsanerlar() {
  shovqinYutgichlar.style.borderBottom = "1px solid #030303";
  qoshimchaUskunalar.style.borderBottom = "1px solid #030303";
  ventilyatorlar.style.borderBottom = "1px solid #030303";
  klapanlar.style.borderBottom = "1px solid #030303";
  kanalUskunalari.style.borderBottom = "1px solid #030303";
  ventilyatsionMahsulotlar.style.borderBottom = "1px solid #030303";
  issiqlikAlmashinishUskunalari.style.borderBottom = "1px solid #030303";
  isitishUskunalari.style.borderBottom = "1px solid #030303";
  muzlatgichUskunalar.style.borderBottom = "1px solid #030303";
  filterlar.style.borderBottom = "1px solid #030303";
  konditsanerlar.style.borderBottom = "3px solid #F27272";
  ventilyatsionPanjaralar.style.borderBottom = "1px solid #030303";
  output.innerHTML = "";
  push.splice(0, push.length);
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === "konditsanerlar") {
      push.push(cards[i]);
    }
  }
  let pushLength = push.length;
  pagination.style.display = "none";
  for (let r = 0; r < pushLength; r++) {
    console.log(push);
    output.innerHTML += `
        <div onclick="localStorage.setItem('cardid', ${push[r].class}); window.open('../html/katalog-cards.html');  " id="kategory-card-id" class="kategory-img-boxes-card ">
                    <img src="${push[r].imgCard}" alt="">
                    <h4>${push[r].title}</h4>
                    <div class="kategory-img-boxes-card-background">
                        <img src="${push[r].imgBg}" alt="">
                        <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
            </div>
          </div>`;
  }
}
function clickmuzlatgichUskunalar() {
  klapanlar.style.borderBottom = "1px solid #030303";
  shovqinYutgichlar.style.borderBottom = "1px solid #030303";
  qoshimchaUskunalar.style.borderBottom = "1px solid #030303";
  filterlar.style.borderBottom = "1px solid #030303";
  kanalUskunalari.style.borderBottom = "1px solid #030303";
  ventilyatsionPanjaralar.style.borderBottom = "1px solid #030303";
  ventilyatorlar.style.borderBottom = "1px solid #030303";
  issiqlikAlmashinishUskunalari.style.borderBottom = "1px solid #030303";
  ventilyatsionMahsulotlar.style.borderBottom = "1px solid #030303";
  konditsanerlar.style.borderBottom = "1px solid #030303";
  isitishUskunalari.style.borderBottom = "1px solid #030303";
  muzlatgichUskunalar.style.borderBottom = "3px solid #F27272";
  output.innerHTML = "";
  push.splice(0, push.length);
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === "muzlatish-uskunalari") {
      push.push(cards[i]);
    }
  }
  let pushLength = push.length;
  pagination.style.display = "none";
  for (let r = 0; r < pushLength; r++) {
    console.log(push);
    output.innerHTML += `
        <div onclick="localStorage.setItem('cardid', ${push[r].class}); window.open('../html/katalog-cards.html');  " id="kategory-card-id" class="kategory-img-boxes-card ">
                    <img src="${push[r].imgCard}" alt="">
                    <h4>${push[r].title}</h4>
                    <div class="kategory-img-boxes-card-background">
                        <img src="${push[r].imgBg}" alt="">
                        <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
            </div>
          </div>`;
  }
}
function clickisitishUskunalari() {
  shovqinYutgichlar.style.borderBottom = "1px solid #030303";
  klapanlar.style.borderBottom = "1px solid #030303";
  qoshimchaUskunalar.style.borderBottom = "1px solid #030303";
  kanalUskunalari.style.borderBottom = "1px solid #030303";
  ventilyatsionPanjaralar.style.borderBottom = "1px solid #030303";
  ventilyatorlar.style.borderBottom = "1px solid #030303";
  ventilyatsionMahsulotlar.style.borderBottom = "1px solid #030303";
  issiqlikAlmashinishUskunalari.style.borderBottom = "1px solid #030303";
  muzlatgichUskunalar.style.borderBottom = "1px solid #030303";
  konditsanerlar.style.borderBottom = "1px solid #030303";
  filterlar.style.borderBottom = "1px solid #030303";
  isitishUskunalari.style.borderBottom = "3px solid #F27272";
  push.splice(0, push.length);
  output.innerHTML = "";

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === "isitish-uskunalari") {
      push.push(cards[i]);
    }
  }
  let pushLength = push.length;
  pagination.style.display = "none";
  for (let r = 0; r < pushLength; r++) {
    console.log(push);
    output.innerHTML += `
        <div onclick="localStorage.setItem('cardid', ${push[r].class}); window.open('../html/katalog-cards.html');  " id="kategory-card-id" class="kategory-img-boxes-card ">
                    <img src="${push[r].imgCard}" alt="">
                    <h4>${push[r].title}</h4>
                    <div class="kategory-img-boxes-card-background">
                        <img src="${push[r].imgBg}" alt="">
                        <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
            </div>
          </div>`;
  }
}
function clickventilyatorlar() {
  shovqinYutgichlar.style.borderBottom = "1px solid #030303";
  ventilyatsionMahsulotlar.style.borderBottom = "1px solid #030303";
  muzlatgichUskunalar.style.borderBottom = "1px solid #030303";
  klapanlar.style.borderBottom = "1px solid #030303";
  filterlar.style.borderBottom = "1px solid #030303";
  qoshimchaUskunalar.style.borderBottom = "1px solid #030303";
  kanalUskunalari.style.borderBottom = "1px solid #030303";
  issiqlikAlmashinishUskunalari.style.borderBottom = "1px solid #030303";
  konditsanerlar.style.borderBottom = "1px solid #030303";
  ventilyatsionPanjaralar.style.borderBottom = "1px solid #030303";
  isitishUskunalari.style.borderBottom = "1px solid #030303";
  ventilyatorlar.style.borderBottom = "3px solid #F27272";

  push.splice(0, push.length);
  output.innerHTML = "";

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === "ventilyatorlar") {
      push.push(cards[i]);
    }
  }
  let pushLength = push.length;
  pagination.style.display = "none";
  for (let r = 0; r < pushLength; r++) {
    console.log(push);
    output.innerHTML += `
        <div onclick="localStorage.setItem('cardid', ${push[r].class}); window.open('../html/katalog-cards.html');  " id="kategory-card-id" class="kategory-img-boxes-card ">
                    <img src="${push[r].imgCard}" alt="">
                    <h4>${push[r].title}</h4>
                    <div class="kategory-img-boxes-card-background">
                        <img src="${push[r].imgBg}" alt="">
                        <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
            </div>
          </div>`;
  }
}

function clickklapanlar() {
  shovqinYutgichlar.style.borderBottom = "1px solid #030303";
  muzlatgichUskunalar.style.borderBottom = "1px solid #030303";
  qoshimchaUskunalar.style.borderBottom = "1px solid #030303";
  ventilyatorlar.style.borderBottom = "1px solid #030303";
  isitishUskunalari.style.borderBottom = "1px solid #030303";
  ventilyatsionMahsulotlar.style.borderBottom = "1px solid #030303";
  kanalUskunalari.style.borderBottom = "1px solid #030303";
  ventilyatsionPanjaralar.style.borderBottom = "1px solid #030303";
  issiqlikAlmashinishUskunalari.style.borderBottom = "1px solid #030303";
  filterlar.style.borderBottom = "1px solid #030303";
  konditsanerlar.style.borderBottom = "1px solid #030303";
  klapanlar.style.borderBottom = "3px solid #F27272";
  output.innerHTML = "";
  push.splice(0, push.length);
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === "klapanlar") {
      push.push(cards[i]);
    }
  }
  let pushLength = push.length;
  pagination.style.display = "none";
  for (let r = 0; r < pushLength; r++) {
    console.log(push);
    output.innerHTML += `
        <div onclick="localStorage.setItem('cardid', ${push[r].class}); window.open('../html/katalog-cards.html');  " id="kategory-card-id" class="kategory-img-boxes-card ">
                    <img src="${push[r].imgCard}" alt="">
                    <h4>${push[r].title}</h4>
                    <div class="kategory-img-boxes-card-background">
                        <img src="${push[r].imgBg}" alt="">
                        <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
            </div>
          </div>`;
  }
}
function clickventilyatsionPanjaralar() {
  shovqinYutgichlar.style.borderBottom = "1px solid #030303";
  isitishUskunalari.style.borderBottom = "1px solid #030303";
  kanalUskunalari.style.borderBottom = "1px solid #030303";
  ventilyatorlar.style.borderBottom = "1px solid #030303";
  filterlar.style.borderBottom = "1px solid #030303";
  klapanlar.style.borderBottom = "1px solid #030303";
  issiqlikAlmashinishUskunalari.style.borderBottom = "1px solid #030303";
  muzlatgichUskunalar.style.borderBottom = "1px solid #030303";
  qoshimchaUskunalar.style.borderBottom = "1px solid #030303";
  ventilyatsionMahsulotlar.style.borderBottom = "1px solid #030303";
  konditsanerlar.style.borderBottom = "1px solid #030303";
  ventilyatsionPanjaralar.style.borderBottom = "3px solid #F27272";
  output.innerHTML = "";
  push.splice(0, push.length);
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === "ventilyatsion-panjaralar") {
      push.push(cards[i]);
    }
  }
  let pushLength = push.length;
  pagination.style.display = "none";
  for (let r = 0; r < pushLength; r++) {
    console.log(push);
    output.innerHTML += `
        <div onclick="localStorage.setItem('cardid', ${push[r].class}); window.open('../html/katalog-cards.html');  " id="kategory-card-id" class="kategory-img-boxes-card ">
                    <img src="${push[r].imgCard}" alt="">
                    <h4>${push[r].title}</h4>
                    <div class="kategory-img-boxes-card-background">
                        <img src="${push[r].imgBg}" alt="">
                        <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
            </div>
          </div>`;
  }
}
function clickventilyatsionMahsulotlar() {
  ventilyatorlar.style.borderBottom = "1px solid #030303";
  klapanlar.style.borderBottom = "1px solid #030303";
  isitishUskunalari.style.borderBottom = "1px solid #030303";
  ventilyatsionPanjaralar.style.borderBottom = "1px solid #030303";
  shovqinYutgichlar.style.borderBottom = "1px solid #030303";
  kanalUskunalari.style.borderBottom = "1px solid #030303";
  qoshimchaUskunalar.style.borderBottom = "1px solid #030303";
  issiqlikAlmashinishUskunalari.style.borderBottom = "1px solid #030303";
  filterlar.style.borderBottom = "1px solid #030303";
  muzlatgichUskunalar.style.borderBottom = "1px solid #030303";
  konditsanerlar.style.borderBottom = "1px solid #030303";
  ventilyatsionMahsulotlar.style.borderBottom = "3px solid #F27272";

  output.innerHTML = "";
  push.splice(0, push.length);
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === "ventilyatsion-mahsulotlar") {
      push.push(cards[i]);
    }
  }
  let pushLength = push.length;
  pagination.style.display = "none";
  for (let r = 0; r < pushLength; r++) {
    console.log(push);
    output.innerHTML += `
        <div onclick="localStorage.setItem('cardid', ${push[r].class}); window.open('../html/katalog-cards.html');  " id="kategory-card-id" class="kategory-img-boxes-card ">
                    <img src="${push[r].imgCard}" alt="">
                    <h4>${push[r].title}</h4>
                    <div class="kategory-img-boxes-card-background">
                        <img src="${push[r].imgBg}" alt="">
                        <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
            </div>
          </div>`;
  }
}
function clickfilterlar() {
  ventilyatorlar.style.borderBottom = "1px solid #030303";
  shovqinYutgichlar.style.borderBottom = "1px solid #030303";
  isitishUskunalari.style.borderBottom = "1px solid #030303";
  klapanlar.style.borderBottom = "1px solid #030303";
  kanalUskunalari.style.borderBottom = "1px solid #030303";
  issiqlikAlmashinishUskunalari.style.borderBottom = "1px solid #030303";
  qoshimchaUskunalar.style.borderBottom = "1px solid #030303";
  ventilyatsionMahsulotlar.style.borderBottom = "1px solid #030303";
  muzlatgichUskunalar.style.borderBottom = "1px solid #030303";
  ventilyatsionPanjaralar.style.borderBottom = "1px solid #030303";
  konditsanerlar.style.borderBottom = "1px solid #030303";
  filterlar.style.borderBottom = "3px solid #F27272";
  output.innerHTML = "";
  push.splice(0, push.length);
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === "filtrlar") {
      push.push(cards[i]);
    }
  }
  let pushLength = push.length;
  pagination.style.display = "none";
  for (let r = 0; r < pushLength; r++) {
    console.log(push);
    output.innerHTML += `
        <div onclick="localStorage.setItem('cardid', ${push[r].class}); window.open('../html/katalog-cards.html');  " id="kategory-card-id" class="kategory-img-boxes-card ">
                    <img src="${push[r].imgCard}" alt="">
                    <h4>${push[r].title}</h4>
                    <div class="kategory-img-boxes-card-background">
             
             
             
             
             
                    <img src="${push[r].imgBg}" alt="">
                        <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
            </div>
          </div>`;
  }
}
function clickqoshimchaUskunalar() {
  isitishUskunalari.style.borderBottom = "1px solid #030303";
  ventilyatorlar.style.borderBottom = "1px solid #030303";
  shovqinYutgichlar.style.borderBottom = "1px solid #030303";
  muzlatgichUskunalar.style.borderBottom = "1px solid #030303";
  ventilyatsionPanjaralar.style.borderBottom = "1px solid #030303";
  klapanlar.style.borderBottom = "1px solid #030303";
  filterlar.style.borderBottom = "1px solid #030303";
  ventilyatsionMahsulotlar.style.borderBottom = "1px solid #030303";
  kanalUskunalari.style.borderBottom = "1px solid #030303";
  konditsanerlar.style.borderBottom = "1px solid #030303";
  issiqlikAlmashinishUskunalari.style.borderBottom = "1px solid #030303";
  qoshimchaUskunalar.style.borderBottom = "3px solid #F27272";
  output.innerHTML = "";
  push.splice(0, push.length);
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === "qo'shimcha-jihozlar") {
      push.push(cards[i]);
    }
  }
  let pushLength = push.length;
  pagination.style.display = "none";
  for (let r = 0; r < pushLength; r++) {
    console.log(push);
    output.innerHTML += `
        <div onclick="localStorage.setItem('cardid', ${push[r].class}); window.open('../html/katalog-cards.html');  " id="kategory-card-id"  class="kategory-img-boxes-card ">
                    <img src="${push[r].imgCard}" alt="">
                    <h4>${push[r].title}</h4>
                    <div class="kategory-img-boxes-card-background">
                        <img src="${push[r].imgBg}" alt="">
                        <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
            </div>
          </div>`;
  }
}

// let xxxClose = document.querySelector(".input-value-box i");
// xxxClose.addEventListener("click", xxxCloseClick);

// function xxxCloseClick() {
//   window.location.assign("/html/katalog.html");
// }







// 
    // inputKeyUp.addEventListener("keyup", myFunction);
    // let katalogCards = document.getElementsByClassName('kategory-img-boxes-card')
    // console.log( katalogCards);
    // function myFunction() {
    //   pagination.style.display = 'none'
    //   let filter = input.value.;
    //   cards.forEach((element, index) => {
    //     let titleLowerCase = element.title.toLowerCase();
    //     if (titleLowerCase.includes(filter)) {
    //       searchBar.push(index);
    //     }
    //   });
      // searchBar.forEach(element => {

        // 
      // });
    // }



let searchBar = [];

function MyfunBtn(){
  searchBar.splice(0,searchBar.length-1)
  pagination.style.display = 'none'
  let input = document.getElementById("myFilter");
  let filter = input.value.toLowerCase()
  // console.log(filter)
  for(let i = 0; i < cards.length; i++){
    let titles = cards[i].title
    if(titles.toLowerCase().includes(filter) ){
      searchBar.push(cards[i])
      // console.log(searchBar)
    }
  }
  output.innerHTML = ''
  for(let x = 0; x < searchBar.length ; x++){
    output.innerHTML += `
     <div onclick="localStorage.setItem('cardid',${searchBar[x].class} ); window.open('../html/katalog-cards.html');"  class="kategory-img-boxes-card">
         <img src="${searchBar[x].imgCard}" alt="">
         <h4>${searchBar[x].title}</h4>
         <div class="kategory-img-boxes-card-background">
             <img src="${searchBar[x].imgBg}" alt="">
             <h3><i class="fa-solid fa-eye"></i> Batafsil</h3>
         </div>
     </div>`;
  }
  input.value = ''
}