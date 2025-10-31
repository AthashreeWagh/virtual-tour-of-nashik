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
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0761127263527!2d73.68368299678956!3d20.005319999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddedba795be8dd%3A0xb20dce447adb0a9d!2sSula%20Vineyards!5e0!3m2!1sen!2sin!4v1761917898979!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Trimbakeshwar Temple": {
      title: "Trimbakeshwar Temple",
      info: "A sacred temple dedicated to Lord Shiva, near the origin of the Godavari River.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.8159531406113!2d73.52591137901513!3d19.932159133644276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb013af2e74b%3A0x716282a3a46b04cc!2sTrimbakeshwar%20Jyotirling%20Mandir!5e0!3m2!1sen!2sin!4v1761918154163!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Pandav Leni Caves": {
      title: "Pandav Leni Caves",
      info: "Ancient Buddhist rock-cut caves from the 3rd century BC.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7501.40834793043!2d73.74334034130857!3d19.93686722581224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd94a7de75e413%3A0xeb2ea9ed807519b!2sPandav%20Leni!5e0!3m2!1sen!2sin!4v1761918319094!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Godavari Ghat": {
      title: "Godavari Ghat",
      info: "Located on the banks of the Godavari River, known for its evening aarti and rituals.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59984.27131478316!2d73.71639714863284!3d20.007803000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebc5b7ef16cf%3A0x4cd8658e18833c9a!2sGoda%20Ghat!5e0!3m2!1sen!2sin!4v1761918390401!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Anjaneri Hills": {
      title: "Anjaneri Hills",
      info: "Believed to be the birthplace of Lord Hanuman and offers beautiful trekking routes.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30008.83613779278!2d73.5318911743164!3d19.92000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd8ca520c03921%3A0xa082f094e810ff95!2sAnjaneri!5e0!3m2!1sen!2sin!4v1761918454320!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Sita Gufa": {
      title: "Sita Gufa",
      info: "Mythological cave in Panchavati where Sita is believed to have stayed during exile.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0243983099163!2d73.7935394750025!3d20.007490681398384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea539985328b%3A0x3e228148910fbbfa!2sSita%20Gufa!5e0!3m2!1sen!2sin!4v1761918506834!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Kalaram Mandir": {
      title: "Kalaram Mandir",
      info: "An iconic black stone temple dedicated to Lord Rama, built in 1792.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0381071909005!2d73.79294307500251!3d20.006915281398907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea54af96efeb%3A0xb51dc47e5439e432!2sSri%20Kala%20Rama%20Swamy%20Temple%2C%20Panchavati%2C%20Nashik%2C%20Maharashtra%20422003!5e0!3m2!1sen!2sin!4v1761918567472!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Navsha Ganpati": {
      title: "Navsha Ganpati",
      info: "Popular Ganpati temple known for fulfilling devotees’ wishes.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.8481993467867!2d73.74077217500277!3d20.014884831392703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec741805db45%3A0x7db184d696e3555!2sNavshya%20Ganapati%20Parisar%2C%20Ganpati%20Nagar%2C%20Anandvalli%2C%20Nashik%2C%20Maharashtra%20422013!5e0!3m2!1sen!2sin!4v1761919245964!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Kapaleshwar Mandir": {
      title: "Kapaleshwar Mandir",
      info: "A unique Shiva temple with no Nandi idol at the entrance.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0069388330994!2d73.79021937500258!3d20.008223481397906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb3c573e87a7%3A0xfc8df808bf157528!2sKapaleshwar%20Mahadev%20Mandir%20Stairs!5e0!3m2!1sen!2sin!4v1761919293124!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Muktidham Temple": {
      title: "Muktidham Temple",
      info: "A beautiful marble temple dedicated to various Hindu gods, a serene spiritual spot.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.353884191085!2d73.83413257500096!3d19.951614381441665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9556cf257a25%3A0xa0608cef3e2f5d60!2sMuktidham%20Mandir!5e0!3m2!1sen!2sin!4v1761919333769!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Someshwar Waterfall": {
      title: "Someshwar Waterfall",
      info: "A scenic waterfall surrounded by lush greenery, perfect for nature lovers.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.5078242921845!2d73.72083997500312!3d20.029161181381692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec1682978165%3A0x75e5dfd33a421265!2sSomeshwar%20Waterfall!5e0!3m2!1sen!2sin!4v1761919403391!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Coin Museum": {
      title: "Coin Museum",
      info: "Museum showcasing historical coins and artifacts, perfect for history enthusiasts.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.200898473537!2d73.60869927500111!3d19.958051781436723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddf2deed80751f%3A0xf510e847bf37af24!2sCoin%20Museum%20(Shanti-Krishna%20Museum%20of%20Money%20and%20History)!5e0!3m2!1sen!2sin!4v1761919445519!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Gangapur Dam": {
      title: "Gangapur Dam",
      info: "Popular dam providing water and beautiful views, ideal for picnics.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.055680245625!2d73.67723467500372!3d20.048110381367028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddef1a668666e5%3A0x1f46536a4d58ea8e!2sGangapur%20Dam!5e0!3m2!1sen!2sin!4v1761919513700!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Harihar Fort": {
      title: "Harihar Fort",
      info: "A historic fort offering trekking adventures and panoramic views.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15005.820055126622!2d73.46185934781921!3d19.905221653639494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd8aa3cbdc02b5%3A0x16fa7d9ad92945af!2sHarihar%20Fort!5e0!3m2!1sen!2sin!4v1761919548807!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Dugarwadi Waterfall": {
      title: "Dugarwadi Waterfall",
      info: "A popular waterfall for trekking and adventure near Nashik.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.6127616561066!2d73.46573677500072!3d19.940716681450162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddf55921a96453%3A0xcfec1778eab8178f!2sDugarwadi%20Waterfall!5e0!3m2!1sen!2sin!4v1761919590136!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },

    // 🍴 FOOD PLACES
    "Ambika Misal": {
      title: "Ambika Misal",
      info: "Known for authentic Maharashtrian Misal and friendly ambiance.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.983228891989!2d73.79233257500253!3d20.009218581397114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb70664b1845%3A0x1f303842a785de6a!2sShree%20Ambika%20Restaurant-Misal%20Pav!5e0!3m2!1sen!2sin!4v1761919632361!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Budha Halwai": {
      title: "Budha Halwai",
      info: "Famous for traditional sweets and snacks in Nashik.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119995.2412040185!2d73.6482307755308!3d19.972755388708368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebaa8699834b%3A0xe1df942ceb11acae!2sBudha%20Halwai%20(Famous%20Jilebi)!5e0!3m2!1sen!2sin!4v1761919988704!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Krushna Vadapav": {
      title: "Krushna Vadapav",
      info: "Famous local Vadapav stall known for spicy and tasty snacks.",
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0510676204776!2d73.78244687500249!3d20.00637128139935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba8b6f04a13%3A0x64cad01a272f0a2b!2sKrushnai%20Uphar!5e0!3m2!1sen!2sin!4v1761921962636!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    "Peruchi Wadi": {
  title: "Peruchi Wadi",
  info: "A local favorite for traditional Maharashtrian snacks and wadi preparations.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.947086907269!2d73.72163887903763!3d20.052658933310607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddef550a6daebb%3A0xdf6ed42da1619d5d!2sPeruchi%20Wadi%20Chulivarachi%20Misal!5e0!3m2!1sen!2sin!4v1761922011970!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
},
"Sadhna Misal": {
  title: "Sadhna Misal",
  info: "Famous for spicy Misal Pav, loved by locals and tourists alike.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.6866769626135!2d73.71829467500291!3d20.02166078138744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec3ef7737e75%3A0x6158d3bc86aa2eba!2sSadhana%20Chulivarchi%20Misal!5e0!3m2!1sen!2sin!4v1761922061127!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
},
"Hotel Panchavati Gaurav": {
  title: "Hotel Panchavati Gaurav",
  info: "Famous multi-cuisine restaurant known for authentic Maharashtrian thalis.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60006.720271729006!2d73.76471384863278!3d19.948831000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddbffd5d9381cb%3A0x2cd5d223fa486f5a!2sHotel%20Nashik%20Parivaar!5e0!3m2!1sen!2sin!4v1761923236391!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
},
"Thali House Nashik": {
  title: "Thali House Nashik",
  info: "Well-known for serving authentic Maharashtrian thalis with a homely taste.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59990.908730466035!2d73.7065527486328!3d19.990384300000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb00ffffffe1%3A0xb1e0d7c5614d5c29!2sShree%20Rajbhog%20Thali%2C%20Mumbai%20Naka!5e0!3m2!1sen!2sin!4v1761923310997!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
},
"Sayantara Thali": {
  title: "Sayantara Thali",
  info: "Popular for its delicious thalis and traditional flavors.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59990.91235567737!2d73.70655268770452!3d19.99037478230953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebaa0dd793c3%3A0x6385195a7c1a502d!2sSAYANTARA!5e0!3m2!1sen!2sin!4v1761923352964!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
},
"Cafe Bliss": {
  title: "Cafe Bliss",
  info: "A cozy cafe offering snacks, desserts, and great coffee.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.885323715643!2d73.75133787903027!3d20.013327133419498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb8ef1a88a15%3A0x66f563b093391275!2sCafe%20Bliss!5e0!3m2!1sen!2sin!4v1761923397793!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
},
"Tandoor Restaurant": {
  title: "Tandoor Restaurant",
  info: "Known for North Indian cuisine and delicious tandoori dishes.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29994.62225755198!2d73.7517772743164!3d19.99475310000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb08cd160c1d%3A0xfe4a20c1261443fb!2sBaadshah%20Tandoor%20(with%20dining)!5e0!3m2!1sen!2sin!4v1761923613384!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
},
"Little Italy Nashik": {
  title: "Little Italy Nashik",
  info: "Authentic Italian cuisine in a cozy and modern setting.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59984.29323434492!2d73.5845643486328!3d20.00774549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddedcec114af29%3A0x7a5871bbc617025b!2sLittle%20Italy%20Soma!5e0!3m2!1sen!2sin!4v1761923663693!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
},
"Barbeque Ville": {
  title: "Barbeque Ville",
  info: "Famous for buffet-style barbeque and grilled delicacies.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.7556794325697!2d73.77422697500165!3d19.976774581422198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb3e0237d14b%3A0xff3f1d0f571df9da!2sBarbeque%20Ville!5e0!3m2!1sen!2sin!4v1761923730748!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
},
"Cafe88": {
  title: "Cafe 88",
  info: "A trendy cafe with snacks, coffee, and desserts for a casual outing.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.6811671687215!2d73.76545957500291!3d20.021891881387397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb6515d3d409%3A0xd6f5edfbc5361335!2sCafe%2088!5e0!3m2!1sen!2sin!4v1761923786377!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
},
"Cafe Dmroa": {
  title: "Cafe Dmroa",
  info: "Known for coffee, desserts, and a cozy ambiance for friends and families.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29992.231702165827!2d73.72736277431642!3d20.007299100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb1e0752aaf5%3A0xb2a3c1d3d4a91e1a!2sD%E2%80%99mora%20cafe%20%26%20Bistro!5e0!3m2!1sen!2sin!4v1761923839291!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
},
"Tales and Sperits": {
  title: "Tales and Sperits",
  info: "A modern cafe-bar with an interesting menu and relaxing vibes.",
  map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.1902494250917!2d73.75975177500236!3d20.00052838140389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb18be4e5de9%3A0x76cad730b6dc855f!2sTales%20%26%20Spirits%20Bistro!5e0!3m2!1sen!2sin!4v1761923913639!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
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
<<<<<<< HEAD
}
=======
};

>>>>>>> old-version
