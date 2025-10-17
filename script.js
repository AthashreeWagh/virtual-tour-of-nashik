function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function showDetails(place) {
  const details = document.getElementById("details");

  const data = {
    // 🌆 PLACES
    "Sula Vineyards": {
      title: "Sula Vineyards",
      info: "Sula Vineyards is India’s leading winery, famous for its scenic views, grape fields, and annual wine festival.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.937865925888!2d73.70343667506852!3d19.99745338141279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9b4ff50e29c7%3A0x18d7883f3f2b4b30!2sSula%20Vineyards!5e0!3m2!1sen!2sin!4v1696329727083!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Trimbakeshwar Temple": {
      title: "Trimbakeshwar Temple",
      info: "A sacred temple dedicated to Lord Shiva, near the origin of the Godavari River.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.484570249874!2d73.5289398749863!3d19.939691781487385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd94e01327e8a5%3A0x96a4e39bb201899d!2sTrimbakeshwar%20Temple!5e0!3m2!1sen!2sin!4v1696329805982!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Pandav Leni Caves": {
      title: "Pandav Leni Caves",
      info: "Ancient Buddhist rock-cut caves from the 3rd century BC.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.290699579816!2d73.7433249749873!3d20.013024981401343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9b50b58f3b71%3A0x66bfb7ff8166f5d8!2sPandav%20Leni!5e0!3m2!1sen!2sin!4v1696329861163!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Godavari Ghat": {
      title: "Godavari Ghat",
      info: "Located on the banks of the Godavari River, known for its evening aarti and rituals.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.244883287442!2d73.79089917498741!3d20.01441298140029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9ba9d6536037%3A0xf9309b1a31d9f0e1!2sGodavari%20Ghat!5e0!3m2!1sen!2sin!4v1696329916524!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Anjaneri Hills": {
      title: "Anjaneri Hills",
      info: "Believed to be the birthplace of Lord Hanuman and offers beautiful trekking routes.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.562054598862!2d73.59823247498632!3d19.937377681490207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd95b8906c5d19%3A0x92a69eb54e33d2cb!2sAnjaneri%20Hill!5e0!3m2!1sen!2sin!4v1696329964541!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Sita Gufa": {
      title: "Sita Gufa",
      info: "Mythological cave in Panchavati where Sita is believed to have stayed during exile.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1847452440114!2d73.78814027498742!3d20.0161236813989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9ba2b7b23481%3A0x803c1d478c87224!2sSita%20Gufa!5e0!3m2!1sen!2sin!4v1696330027658!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Kalaram Mandir": {
      title: "Kalaram Mandir",
      info: "An iconic black stone temple dedicated to Lord Rama, built in 1792.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.223940317986!2d73.78804337498743!3d20.01503198139975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9ba270f699cd%3A0x93a5fd967f0e16cb!2sKalaram%20Temple!5e0!3m2!1sen!2sin!4v1696330079518!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Navsha Ganpati": {
      title: "Navsha Ganpati",
      info: "Popular Ganpati temple known for fulfilling devotees’ wishes.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.273543934611!2d73.79405887498738!3d20.013622681400856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9ba99999b37f%3A0xe67d448df83ff5c2!2sNavasha%20Ganpati!5e0!3m2!1sen!2sin!4v1696330140374!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Kapaleshwar Mandir": {
      title: "Kapaleshwar Mandir",
      info: "A unique Shiva temple with no Nandi idol at the entrance.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2391527886884!2d73.79043707498743!3d20.014627981400116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9ba9a8db23b3%3A0x91f0ab52a5923a36!2sKapaleshwar%20Temple!5e0!3m2!1sen!2sin!4v1696330173289!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Muktidham Temple": {
      title: "Muktidham Temple",
      info: "A beautiful marble temple dedicated to various Hindu gods, a serene spiritual spot.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.255874482514!2d73.79160797498741!3d20.01492468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baea235c7f7%3A0xe1c9e1b8d3c3c3c3!2sMuktidham%20Temple!5e0!3m2!1sen!2sin!4v1696331000000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Someshwar Waterfall": {
      title: "Someshwar Waterfall",
      info: "A scenic waterfall surrounded by lush greenery, perfect for nature lovers.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.125874482514!2d73.76560797498741!3d20.01592468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9badef235c7f7%3A0xe1c9e1b8d3c3c3c3!2sSomeshwar%20Waterfall!5e0!3m2!1sen!2sin!4v1696331100000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Coin Museum": {
      title: "Coin Museum",
      info: "Museum showcasing historical coins and artifacts, perfect for history enthusiasts.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.125874482514!2d73.75560797498741!3d20.01592468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baeae235c7f7%3A0xe1c9e1b8d3c3c3c3!2sCoin%20Museum!5e0!3m2!1sen!2sin!4v1696331150000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Gangapur Dam": {
      title: "Gangapur Dam",
      info: "Popular dam providing water and beautiful views, ideal for picnics.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.225874482514!2d73.72560797498741!3d20.01502468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sGangapur%20Dam!5e0!3m2!1sen!2sin!4v1696331200000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Harihar Fort": {
      title: "Harihar Fort",
      info: "A historic fort offering trekking adventures and panoramic views.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.325874482514!2d73.70560797498741!3d20.01302468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sHarihar%20Fort!5e0!3m2!1sen!2sin!4v1696331250000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Dugarwadi Waterfall": {
      title: "Dugarwadi Waterfall",
      info: "A popular waterfall for trekking and adventure near Nashik.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.425874482514!2d73.70560797498741!3d20.01302468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sDugarwadi%20Waterfall!5e0!3m2!1sen!2sin!4v1696331300000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },

    // 🍴 FOOD PLACES
    "Ambika Misal": {
      title: "Ambika Misal",
      info: "Known for authentic Maharashtrian Misal and friendly ambiance.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.435874482514!2d73.70560797498741!3d20.01312468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sAmbika%20Misal!5e0!3m2!1sen!2sin!4v1696331350000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Budha Halwai": {
      title: "Budha Halwai",
      info: "Famous for traditional sweets and snacks in Nashik.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.445874482514!2d73.71560797498741!3d20.01212468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sBudha%20Halwai!5e0!3m2!1sen!2sin!4v1696331400000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Krushna Vadapav": {
      title: "Krushna Vadapav",
      info: "Famous local Vadapav stall known for spicy and tasty snacks.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.455874482514!2d73.72560797498741!3d20.01112468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sKrushna%20Vadapav!5e0!3m2!1sen!2sin!4v1696331450000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
    },
    "Peruchi Wadi": {
  title: "Peruchi Wadi",
  info: "A local favorite for traditional Maharashtrian snacks and wadi preparations.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.465874482514!2d73.73560797498741!3d20.01012468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sPeruchi%20Wadi!5e0!3m2!1sen!2sin!4v1696331500000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
},
"Sadhna Misal": {
  title: "Sadhna Misal",
  info: "Famous for spicy Misal Pav, loved by locals and tourists alike.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.475874482514!2d73.74560797498741!3d20.00912468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sSadhna%20Misal!5e0!3m2!1sen!2sin!4v1696331550000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
},
"Hotel Panchavati Gaurav": {
  title: "Hotel Panchavati Gaurav",
  info: "Famous multi-cuisine restaurant known for authentic Maharashtrian thalis.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.485874482514!2d73.75560797498741!3d20.00812468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sHotel%20Panchavati%20Gaurav!5e0!3m2!1sen!2sin!4v1696331600000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
},
"Thali House Nashik": {
  title: "Thali House Nashik",
  info: "Well-known for serving authentic Maharashtrian thalis with a homely taste.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.495874482514!2d73.76560797498741!3d20.00712468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sThali%20House%20Nashik!5e0!3m2!1sen!2sin!4v1696331650000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
},
"Sayantara Thali": {
  title: "Sayantara Thali",
  info: "Popular for its delicious thalis and traditional flavors.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.505874482514!2d73.77560797498741!3d20.00612468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sSayantara%20Thali!5e0!3m2!1sen!2sin!4v1696331700000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
},
"Cafe Bliss": {
  title: "Cafe Bliss",
  info: "A cozy cafe offering snacks, desserts, and great coffee.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.515874482514!2d73.78560797498741!3d20.00512468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sCafe%20Bliss!5e0!3m2!1sen!2sin!4v1696331750000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
},
"Tandoor Restaurant": {
  title: "Tandoor Restaurant",
  info: "Known for North Indian cuisine and delicious tandoori dishes.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.525874482514!2d73.79560797498741!3d20.00412468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sTandoor%20Restaurant!5e0!3m2!1sen!2sin!4v1696331800000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
},
"Little Italy Nashik": {
  title: "Little Italy Nashik",
  info: "Authentic Italian cuisine in a cozy and modern setting.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.535874482514!2d73.80560797498741!3d20.00312468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sLittle%20Italy%20Nashik!5e0!3m2!1sen!2sin!4v1696331850000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
},
"Barbeque Ville": {
  title: "Barbeque Ville",
  info: "Famous for buffet-style barbeque and grilled delicacies.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.545874482514!2d73.81560797498741!3d20.00212468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sBarbeque%20Ville!5e0!3m2!1sen!2sin!4v1696331900000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
},
"Cafe88": {
  title: "Cafe 88",
  info: "A trendy cafe with snacks, coffee, and desserts for a casual outing.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.555874482514!2d73.82560797498741!3d20.00112468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sCafe88!5e0!3m2!1sen!2sin!4v1696331950000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
},
"Cafe Dmroa": {
  title: "Cafe Dmroa",
  info: "Known for coffee, desserts, and a cozy ambiance for friends and families.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.565874482514!2d73.83560797498741!3d20.00012468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sCafe%20Dmroa!5e0!3m2!1sen!2sin!4v1696332000000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
},
"Tales and Sperits": {
  title: "Tales and Sperits",
  info: "A modern cafe-bar with an interesting menu and relaxing vibes.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.575874482514!2d73.84560797498741!3d19.99912468140045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9baee235c7f7%3A0xe1c9e1b8d3c3c3c3!2sTales%20and%20Sperits!5e0!3m2!1sen!2sin!4v1696332050000!5m2!1sen!2sin" width="600" height="300" allowfullscreen></iframe>`
}

    
  };

  if (data[place]) {
    details.innerHTML = `
      <h2>${data[place].title}</h2>
      <p>${data[place].info}</p>
      <div class="map">${data[place].map}</div>
    `;
    details.scrollIntoView({ behavior: "smooth" });
  } else {
    details.innerHTML = "<p>Details not found!</p>";
  }
}

