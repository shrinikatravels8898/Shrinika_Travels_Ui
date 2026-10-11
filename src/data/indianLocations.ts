export interface LocationSuggestion {
  name: string;
  region: string;
  state: string;
  category: 'Airport' | 'Hill Station & Nature' | 'Temple & Heritage' | 'Coastal & Beach' | 'City & Hub' | 'Outstation India';
  priority: number; // 1 = Karnataka priority, 2 = Major India
  keywords?: string[];
}

export const KARNATAKA_AND_INDIA_LOCATIONS: LocationSuggestion[] = [
  // --- KARNATAKA AIRPORTS & MAJOR TRANSIT HUBS ---
  {
    name: 'Kempegowda International Airport (BLR), Bengaluru',
    region: 'Devanahalli, Bengaluru',
    state: 'Karnataka',
    category: 'Airport',
    priority: 1,
    keywords: ['bangalore airport', 'blr', 'kia', 'bial', 'devanahalli', 'kempegowda']
  },
  {
    name: 'Mangaluru International Airport (IXE), Mangaluru',
    region: 'Bajpe, Dakshina Kannada',
    state: 'Karnataka',
    category: 'Airport',
    priority: 1,
    keywords: ['mangalore airport', 'ixe', 'bajpe']
  },
  {
    name: 'Mysuru Airport (MYQ), Mysuru',
    region: 'Mandakalli, Mysuru',
    state: 'Karnataka',
    category: 'Airport',
    priority: 1,
    keywords: ['mysore airport', 'myq']
  },
  {
    name: 'Hubballi Airport (HBX), Hubballi',
    region: 'Dharwad District',
    state: 'Karnataka',
    category: 'Airport',
    priority: 1,
    keywords: ['hubli airport', 'hbx']
  },
  {
    name: 'Belagavi Airport (IXG), Belagavi',
    region: 'Sambra, Belagavi',
    state: 'Karnataka',
    category: 'Airport',
    priority: 1,
    keywords: ['belgaum airport', 'ixg']
  },
  {
    name: 'Kalaburagi Airport (GBI), Kalaburagi',
    region: 'Gulbarga',
    state: 'Karnataka',
    category: 'Airport',
    priority: 1,
    keywords: ['gulbarga airport', 'gbi']
  },
  {
    name: 'Shivamogga Airport (RQY), Shivamogga',
    region: 'Sogane, Shimoga',
    state: 'Karnataka',
    category: 'Airport',
    priority: 1,
    keywords: ['shimoga airport', 'kuvempu airport']
  },

  // --- BENGALURU & SURROUNDINGS ---
  {
    name: 'Bengaluru (Bangalore City Center / MG Road)',
    region: 'Bengaluru Urban',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['bangalore', 'bengaluru', 'mg road', 'majestic', 'indiranagar', 'koramangala', 'whitefield', 'electronic city', 'yelechenahalli', 'jayanagar', 'jp nagar', 'hebbal', 'yeshwanthpur', 'kr puram', 'marathahalli', 'hsr layout', 'btm layout', 'banashankari', 'malleshwaram', 'rajajinagar', 'yelahanka']
  },
  {
    name: 'Majestic / KSR Bengaluru City Railway Station',
    region: 'Bengaluru Urban',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['majestic', 'ksr', 'kempegowda bus stand', 'bangalore railway station']
  },
  {
    name: 'Whitefield, Bengaluru',
    region: 'East Bengaluru',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['itpl', 'marathahalli', 'kr puram', 'hoodi']
  },
  {
    name: 'Electronic City, Bengaluru',
    region: 'South Bengaluru',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['ecity', 'hosur road', 'bommasandra', 'silk board']
  },
  {
    name: 'Koramangala & HSR Layout, Bengaluru',
    region: 'South-East Bengaluru',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['btm', 'indiranagar', 'bellandur', 'sarjapur']
  },
  {
    name: 'Yeshwanthpur / Hebbal, Bengaluru',
    region: 'North Bengaluru',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['yelahanka', 'peenya', 'rajajinagar', 'malleshwaram', 'manyata tech park']
  },
  {
    name: 'Jayanagar / JP Nagar / Banashankari, Bengaluru',
    region: 'South Bengaluru',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['basavanagudi', 'kanakapura road', 'bannerghatta road', 'vijayanagar']
  },
  {
    name: 'Nandi Hills, Chikkaballapur',
    region: 'Near Bengaluru',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['nandi hills', 'chikkaballapur', 'sunrise point', 'isha foundation', 'adiyogi']
  },
  {
    name: 'Adiyogi / Isha Foundation, Chikkaballapur',
    region: 'Chikkaballapur District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['isha', 'adiyogi', 'chikkaballapur', 'nandi hills']
  },
  {
    name: 'Bannerghatta National Park, Bengaluru',
    region: 'South Bengaluru',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['safari', 'zoo', 'bannerghatta']
  },
  {
    name: 'Ramanagara & Kanakapura',
    region: 'Ramanagara District',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['bidadi', 'wonderla', 'channapatna', 'mekedatu', 'sangama']
  },
  {
    name: 'Tumakuru (Tumkur)',
    region: 'Tumakuru District',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['tumkur', 'siddaganga mutt', 'devarayanadurga', 'sira', 'kunigal', 'tiptur']
  },
  {
    name: 'Kolar & Kotilingeshwara Temple',
    region: 'Kolar District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['kgf', 'antaragange', 'mulbagal', 'malur', 'bangarpet']
  },

  // --- MYSURU, MANDYA & CHAMARAJANAGAR ---
  {
    name: 'Mysuru (Mysore Palace / City Center)',
    region: 'Mysuru District',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['mysore', 'mysuru', 'chamundi hills', 'brindavan gardens', 'krs dam']
  },
  {
    name: 'Srirangapatna & Ranganathittu Bird Sanctuary',
    region: 'Mandya District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['srirangapatna', 'krs', 'nimishamba', 'tipu sultan']
  },
  {
    name: 'Mandya & Maddur',
    region: 'Mandya District',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['melukote', 'shivanasamudra', 'gaganchukki', 'bharachukki', 'malavalli', 'nagamangala', 'krishnarajpet']
  },
  {
    name: 'Melukote Cheluvanarayana Swamy Temple',
    region: 'Mandya District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['melkote', 'pandavapura']
  },
  {
    name: 'Bandipur National Park & Tiger Reserve',
    region: 'Chamarajanagar District',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['bandipur', 'safari', 'gundlupet', 'himavad gopalaswamy betta']
  },
  {
    name: 'Nagarahole National Park (Kabini)',
    region: 'Kodagu & Mysuru',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['kabini', 'nagarhole', 'hd kote', 'hunsur', 'kutta']
  },
  {
    name: 'Chamarajanagar & Male Mahadeshwara Hills (MM Hills)',
    region: 'Chamarajanagar District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['mm hills', 'malai mahadeshwara', 'br hills', 'biligiriranga hills', 'kollegal', 'hogenakkal', 'talakadu', 'somanathapura', 'nanjangud']
  },
  {
    name: 'Nanjangud (Srikanteshwara Temple)',
    region: 'Mysuru District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['nanjangud', 'kabini river']
  },
  {
    name: 'Bylakuppe (Golden Temple / Namdroling Monastery)',
    region: 'Kushalnagar / Mysuru Border',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['tibetan monastery', 'golden temple', 'kushalnagar', 'periyapatna']
  },

  // --- MALNAD & HILL STATIONS (COORG, CHIKKAMAGALURU, HASSAN, SHIVAMOGGA) ---
  {
    name: 'Coorg / Madikeri (Kodagu)',
    region: 'Kodagu District',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['coorg', 'madikeri', 'kodagu', 'abbey falls', 'raja seat', 'mandalpatti', 'talacauvery', 'bhagamandala']
  },
  {
    name: 'Kushalnagar, Coorg',
    region: 'Kodagu District',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['dubare elephant camp', 'nisargadhama', 'harangi', 'somwarpet']
  },
  {
    name: 'Virajpet & Gonikoppal, Coorg',
    region: 'South Kodagu',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['irpu falls', 'tadiandamol', 'ponnampet', 'pollibetta']
  },
  {
    name: 'Chikkamagaluru (Chikmagalur)',
    region: 'Chikkamagaluru District',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['chikmagalur', 'mullayanagiri', 'baba budangiri', 'hebbe falls', 'jhari falls', 'kallathigiri', 'hirekolale']
  },
  {
    name: 'Kemmanagundi & Kudremukh, Chikkamagaluru',
    region: 'Chikkamagaluru District',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['kalasa', 'horanadu', 'mudigere', 'charmadi ghat', 'samse']
  },
  {
    name: 'Sringeri Sharada Peetham & Horanadu Annapoorneshwari',
    region: 'Chikkamagaluru District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['sringeri', 'horanadu', 'kalasa', 'koppa', 'tarikere', 'kadur']
  },
  {
    name: 'Sakleshpur (Western Ghats)',
    region: 'Hassan District',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['manjarabad fort', 'bisle ghat', 'shiradi ghat', 'ettina bhuja', 'donigal']
  },
  {
    name: 'Hassan, Belur & Halebidu',
    region: 'Hassan District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['hoysala', 'chennakeshava temple', 'shravanabelagola', 'channarayapatna', 'arsikere', 'holanarasipura', 'gorur dam']
  },
  {
    name: 'Shravanabelagola (Gommateshwara Bahubali)',
    region: 'Hassan District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['jain temple', 'bahubali', 'channarayapatna']
  },
  {
    name: 'Shivamogga (Shimoga) & Jog Falls',
    region: 'Shivamogga District',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['shimoga', 'jog falls', 'sagara', 'agumbe', 'kodachadri', 'thirthahalli', 'kuvempu', 'kuppalli', 'sigandur', 'keladi', 'ikkeri', 'bhadravathi', 'honnavar road', 'shikaripura', 'soraba', 'hosanagara']
  },
  {
    name: 'Agumbe & Thirthahalli, Shivamogga',
    region: 'Malnad Region',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['sunset point', 'kundadri', 'kavaledurga', 'kuppalli', 'mandagadde']
  },
  {
    name: 'Sigandur Chowdeshwari Temple & Kodachadri',
    region: 'Sagara, Shivamogga',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['sigandur', 'kodachadri', 'kollur', 'sagara', 'launch']
  },

  // --- COASTAL KARNATAKA (DAKSHINA KANNADA, UDUPI, UTTARA KANNADA) ---
  {
    name: 'Mangaluru (Mangalore City)',
    region: 'Dakshina Kannada',
    state: 'Karnataka',
    category: 'Coastal & Beach',
    priority: 1,
    keywords: ['mangalore', 'panambur beach', 'tannirbhavi', 'kadri', 'kudroli', 'surathkal', 'ullal', 'mulki', 'moodabidri', 'bantwal', 'puttur', 'sullia', 'belthangady']
  },
  {
    name: 'Dharmasthala Manjunatha Temple',
    region: 'Dakshina Kannada',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['shri kshetra dharmasthala', 'belthangady', 'ujire', 'netravathi']
  },
  {
    name: 'Kukke Subramanya Temple',
    region: 'Dakshina Kannada',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['kukke', 'subrahmanya', 'kumara parvatha', 'kadaba', 'sullia']
  },
  {
    name: 'Udupi Sri Krishna Matha & Malpe Beach',
    region: 'Udupi District',
    state: 'Karnataka',
    category: 'Coastal & Beach',
    priority: 1,
    keywords: ['udupi', 'malpe', 'st marys island', 'manipal', 'kapu beach', 'kaup lighthouse', 'padubidri', 'karkala', 'brahmavar']
  },
  {
    name: 'Manipal, Udupi',
    region: 'Udupi District',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['mit', 'kmc', 'end point', 'udupi']
  },
  {
    name: 'Kollur Mookambika Temple & Kundapura',
    region: 'Udupi District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['kollur', 'mookambika', 'kundapur', 'maravanthe beach', 'byndoor', 'anegudde', 'hattiangadi']
  },
  {
    name: 'Murudeshwar Temple & Beach',
    region: 'Uttara Kannada',
    state: 'Karnataka',
    category: 'Coastal & Beach',
    priority: 1,
    keywords: ['murudeshwara', 'shiva statue', 'netrani island', 'bhatkal']
  },
  {
    name: 'Honnavar, Apsarakonda & Sharavathi Backwaters',
    region: 'Uttara Kannada',
    state: 'Karnataka',
    category: 'Coastal & Beach',
    priority: 1,
    keywords: ['honnavar', 'mangrove boardwalk', 'kasarkod beach', 'idagunji', 'kumta']
  },
  {
    name: 'Gokarna (Om Beach, Kudle Beach & Mahabaleshwar Temple)',
    region: 'Uttara Kannada',
    state: 'Karnataka',
    category: 'Coastal & Beach',
    priority: 1,
    keywords: ['gokarna', 'om beach', 'kudle', 'half moon beach', 'paradise beach', 'mirjan fort', 'kumta', 'ankola']
  },
  {
    name: 'Karwar & Devbagh Beach',
    region: 'Uttara Kannada',
    state: 'Karnataka',
    category: 'Coastal & Beach',
    priority: 1,
    keywords: ['karwar', 'rabindranath tagore beach', 'sadashivgad', 'majali', 'kaiga', 'ankola']
  },
  {
    name: 'Dandeli Wildlife Sanctuary & Kali River',
    region: 'Uttara Kannada',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['dandeli', 'river rafting', 'syntheri rocks', 'ulavi', 'haliyal', 'joida', 'ambikanagar']
  },
  {
    name: 'Sirsi (Marikamba Temple), Yana Rocks & Banavasi',
    region: 'Uttara Kannada',
    state: 'Karnataka',
    category: 'Hill Station & Nature',
    priority: 1,
    keywords: ['sirsi', 'yana', 'sahasralinga', 'unchalli falls', 'sathodi falls', 'magod falls', 'yellapur', 'siddapur', 'mundgod']
  },

  // --- CENTRAL & NORTH KARNATAKA ---
  {
    name: 'Hampi (UNESCO World Heritage Site) & Hosapete',
    region: 'Vijayanagara District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['hampi', 'hospet', 'hosapete', 'virupaksha', 'vittala temple', 'tungabhadra dam', 'anegundi', 'anjaneyadri hill', 'kishkinda', 'kamalapur']
  },
  {
    name: 'Ballari (Bellary) & Toranagallu (JSW)',
    region: 'Ballari District',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['bellary', 'ballari', 'sandur', 'jindal', 'vidyanagar']
  },
  {
    name: 'Davanagere & Harihar',
    region: 'Davanagere District',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['davangere', 'benne dose', 'harihara', 'channagiri', 'honnali', 'jagalur', 'kondajji']
  },
  {
    name: 'Chitradurga Fort (Kallina Kote)',
    region: 'Chitradurga District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['chitradurga', 'onake obavva', 'hiriyur', 'vanivilas sagar', 'marikanive', 'challakere', 'hosadurga']
  },
  {
    name: 'Hubballi - Dharwad (Twin Cities)',
    region: 'Dharwad District',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['hubli', 'hubballi', 'dharwad', 'siddharoodha math', 'unkal lake', 'nrupatunga betta', 'kundgol', 'kalghatgi', 'navalgund']
  },
  {
    name: 'Belagavi (Belgaum) & Gokak Falls',
    region: 'Belagavi District',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['belgaum', 'belagavi', 'suvarna vidhana soudha', 'gokak', 'savadatti', 'saundatti yellamma', 'chikkodi', 'athani', 'bailhongal', 'khanapur', 'kittur', 'nipani', 'ramdurg', 'raibag']
  },
  {
    name: 'Badami, Aihole & Pattadakal',
    region: 'Bagalkot District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['badami caves', 'pattadakal', 'aihole', 'banashankari', 'kudalasangama', 'bagalkot', 'jamkhandi', 'mudhol', 'ilkal', 'guledgudda', 'hungund']
  },
  {
    name: 'Vijayapura (Bijapur - Gol Gumbaz)',
    region: 'Vijayapura District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['bijapur', 'vijayapura', 'gol gumbaz', 'ibrahim rouza', 'almatti dam', 'basavana bagewadi', 'indi', 'sindagi', 'muddebihal']
  },
  {
    name: 'Gadag & Lakkundi',
    region: 'Gadag District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['gadag', 'betgeri', 'kappatagudda', 'laxmeshwar', 'ron', 'nargund', 'mundargi']
  },
  {
    name: 'Haveri, Ranebennur & Byadagi',
    region: 'Haveri District',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['haveri', 'ranebennur blackbuck', 'byadgi', 'shiggaon', 'savannur', 'hangal', 'hirekerur', 'kaginele']
  },
  {
    name: 'Koppal & Gavimath',
    region: 'Koppal District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['koppal', 'gangavathi', 'anjaneyadri', 'huligi', 'huligemma temple', 'munirabad', 'kushtagi', 'yelburga']
  },
  {
    name: 'Raichur & Mantralayam Border',
    region: 'Raichur District',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['raichur', 'sindhanur', 'manvi', 'lingsugur', 'hatti gold mines', 'devadurga', 'mantralaya']
  },
  {
    name: 'Kalaburagi (Gulbarga) & Ganagapur Dattatreya Temple',
    region: 'Kalaburagi District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['gulbarga', 'kalaburagi', 'ganagapur', 'deval gangapur', 'sharanabasaveshwara', 'sedam', 'shahabad', 'wadi', 'chincholi', 'afzalpur', 'aland', 'jewargi']
  },
  {
    name: 'Bidar Fort, Gurudwara Nanak Jhira & Basavakalyan',
    region: 'Bidar District',
    state: 'Karnataka',
    category: 'Temple & Heritage',
    priority: 1,
    keywords: ['bidar', 'basavakalyan', 'bhalki', 'humnabad', 'aurad', 'narashima jhira']
  },
  {
    name: 'Yadgir & Surpur (Shorapur)',
    region: 'Yadgir District',
    state: 'Karnataka',
    category: 'City & Hub',
    priority: 1,
    keywords: ['yadgir', 'shahapur', 'shorapur', 'narayanpur dam']
  },

  // --- POPULAR NEIGHBORING & SOUTH INDIA OUTSTATION DESTINATIONS ---
  {
    name: 'Ooty (Udhagamandalam) & Coonoor',
    region: 'Nilgiris',
    state: 'Tamil Nadu',
    category: 'Outstation India',
    priority: 2,
    keywords: ['ooty', 'coonoor', 'nilgiris', 'pykara', 'doddabetta', 'kotagiri', 'masinagudi', 'gudalur']
  },
  {
    name: 'Wayanad (Kalpetta, Sultan Bathery & Mananthavady)',
    region: 'Wayanad',
    state: 'Kerala',
    category: 'Outstation India',
    priority: 2,
    keywords: ['wayanad', 'edakkal caves', 'banasura sagar', 'vythiri', 'meppadi', 'lakkidi']
  },
  {
    name: 'Goa (Panjim, Calangute, Baga, South Goa & Mopa/Dabolim Airport)',
    region: 'North & South Goa',
    state: 'Goa',
    category: 'Outstation India',
    priority: 2,
    keywords: ['goa', 'panaji', 'panjim', 'calangute', 'baga', 'anjuna', 'vagator', 'margao', 'palolem', 'colva', 'vasco', 'dudhsagar', 'mopa', 'dabolim']
  },
  {
    name: 'Tirupati & Tirumala Balaji Temple',
    region: 'Tirupati District',
    state: 'Andhra Pradesh',
    category: 'Outstation India',
    priority: 2,
    keywords: ['tirupati', 'tirumala', 'srikalahasti', 'kanipakam', 'renigunta', 'chittoor']
  },
  {
    name: 'Mantralayam (Sri Raghavendra Swamy Mutt)',
    region: 'Kurnool District',
    state: 'Andhra Pradesh',
    category: 'Outstation India',
    priority: 2,
    keywords: ['mantralaya', 'raghavendra swamy', 'tungabhadra']
  },
  {
    name: 'Srisailam Mallikarjuna Jyotirlinga Temple',
    region: 'Nandyal District',
    state: 'Andhra Pradesh',
    category: 'Outstation India',
    priority: 2,
    keywords: ['srisailam', 'mahanandi', 'ahobilam']
  },
  {
    name: 'Puttaparthi (Prasanthi Nilayam) & Lepakshi',
    region: 'Sri Sathya Sai District',
    state: 'Andhra Pradesh',
    category: 'Outstation India',
    priority: 2,
    keywords: ['puttaparthi', 'sai baba', 'lepakshi', 'hindupur', 'anantapur', 'penukonda']
  },
  {
    name: 'Hosur, Krishnagiri & Yelagiri Hills',
    region: 'Border Tamil Nadu',
    state: 'Tamil Nadu',
    category: 'Outstation India',
    priority: 2,
    keywords: ['hosur', 'krishnagiri', 'dharmapuri', 'hogenakkal falls', 'yelagiri', 'amboor', 'vellore', 'golden temple sripuram']
  },
  {
    name: 'Chennai (Madras) & Chennai Airport (MAA)',
    region: 'Chennai Metropolitan',
    state: 'Tamil Nadu',
    category: 'Outstation India',
    priority: 2,
    keywords: ['chennai', 'madras', 'mahabalipuram', 'kanchipuram', 'marina beach', 'sriperumbudur']
  },
  {
    name: 'Puducherry (Pondicherry) & Auroville',
    region: 'Puducherry',
    state: 'Puducherry',
    category: 'Outstation India',
    priority: 2,
    keywords: ['pondicherry', 'puducherry', 'white town', 'auroville', 'ecr']
  },
  {
    name: 'Coimbatore, Isha Yoga Center & Pollachi',
    region: 'Kongu Nadu',
    state: 'Tamil Nadu',
    category: 'Outstation India',
    priority: 2,
    keywords: ['coimbatore', 'adiyogi', 'isha', 'palani', 'valparai', 'erode', 'salem', 'tiruppur']
  },
  {
    name: 'Kodaikanal, Madurai & Rameswaram',
    region: 'South Tamil Nadu',
    state: 'Tamil Nadu',
    category: 'Outstation India',
    priority: 2,
    keywords: ['kodaikanal', 'madurai meenakshi', 'rameshwaram', 'dhanushkodi', 'kanyakumari', 'tiruchirappalli', 'trichy', 'thanjavur']
  },
  {
    name: 'Tiruvannamalai (Arunachaleswarar Temple)',
    region: 'Tiruvannamalai',
    state: 'Tamil Nadu',
    category: 'Outstation India',
    priority: 2,
    keywords: ['tiruvannamalai', 'arunachalam', 'girivalam']
  },
  {
    name: 'Kasaragod, Bekal Fort & Kannur',
    region: 'North Malabar',
    state: 'Kerala',
    category: 'Outstation India',
    priority: 2,
    keywords: ['kasaragod', 'bekal', 'kannur', 'thalassery', 'kozhikode', 'calicut', 'guruvayur']
  },
  {
    name: 'Munnar, Kochi (Cochin) & Alleppey',
    region: 'Central Kerala',
    state: 'Kerala',
    category: 'Outstation India',
    priority: 2,
    keywords: ['munnar', 'kochi', 'cochin', 'alappuzha', 'alleppey', 'thekkady', 'kumarakom', 'athirappilly', 'sabarimala', 'trivandrum', 'thiruvananthapuram', 'kovalam', 'varkala']
  },
  {
    name: 'Hyderabad & Rajiv Gandhi International Airport (HYD)',
    region: 'Hyderabad',
    state: 'Telangana',
    category: 'Outstation India',
    priority: 2,
    keywords: ['hyderabad', 'secunderabad', 'charminar', 'ramoji film city', 'gachibowli', 'hitec city', 'shamshabad']
  },
  {
    name: 'Shirdi Sai Baba Temple, Pandharpur & Tuljapur',
    region: 'Pilgrimage Circuit',
    state: 'Maharashtra',
    category: 'Outstation India',
    priority: 2,
    keywords: ['shirdi', 'pandharpur', 'tuljapur', 'kolhapur mahalaxmi', 'solapur', 'akkalkot', 'ganagapur', 'nashik', 'trimbakeshwar']
  },
  {
    name: 'Pune, Lonavala & Mahabaleshwar',
    region: 'Western Maharashtra',
    state: 'Maharashtra',
    category: 'Outstation India',
    priority: 2,
    keywords: ['pune', 'lonavala', 'mahabaleshwar', 'panchgani', 'satara', 'sangli', 'kolhapur']
  },
  {
    name: 'Mumbai (Bombay) & CSMIA Airport (BOM)',
    region: 'Mumbai Metropolitan',
    state: 'Maharashtra',
    category: 'Outstation India',
    priority: 2,
    keywords: ['mumbai', 'navi mumbai', 'thane', 'bombay']
  },
  {
    name: 'New Delhi & Indira Gandhi International Airport (DEL)',
    region: 'Delhi NCR',
    state: 'Delhi',
    category: 'Outstation India',
    priority: 2,
    keywords: ['delhi', 'noida', 'gurugram', 'gurgaon', 'agra', 'jaipur']
  },
  {
    name: 'Varanasi (Kashi), Ayodhya & Prayagraj',
    region: 'Spiritual Circuit',
    state: 'Uttar Pradesh',
    category: 'Outstation India',
    priority: 2,
    keywords: ['varanasi', 'kashi', 'ayodhya', 'prayagraj', 'allahabad']
  },
  {
    name: 'Ahmedabad, Statue of Unity & Dwarka',
    region: 'Gujarat',
    state: 'Gujarat',
    category: 'Outstation India',
    priority: 2,
    keywords: ['ahmedabad', 'surat', 'vadodara', 'somnath', 'dwarka', 'kutch']
  },
  {
    name: 'Kolkata (Calcutta)',
    region: 'West Bengal',
    state: 'West Bengal',
    category: 'Outstation India',
    priority: 2,
    keywords: ['kolkata', 'howrah', 'darjeeling']
  }
];

export function getSmartLocationSuggestions(query: string, limit = 10): LocationSuggestion[] {
  const trimmed = query.trim().toLowerCase();

  // When input is empty, show top Karnataka popular hubs first
  if (!trimmed) {
    return KARNATAKA_AND_INDIA_LOCATIONS.filter((loc) => loc.priority === 1).slice(0, 8);
  }

  const scored = KARNATAKA_AND_INDIA_LOCATIONS.map((loc) => {
    const nameLower = loc.name.toLowerCase();
    const regionLower = loc.region.toLowerCase();
    const stateLower = loc.state.toLowerCase();
    const keywords = loc.keywords || [];

    let score = 0;

    // Exact or starts-with match on name gets highest score
    if (nameLower.startsWith(trimmed)) {
      score += 120;
    } else if (
      nameLower.split(/[\s,()-]+/).some((word) => word.startsWith(trimmed))
    ) {
      score += 100;
    } else if (nameLower.includes(trimmed)) {
      score += 75;
    }

    // Match in keywords (e.g., typing 'b' or 'bl' or 'co' or 'my')
    if (keywords.some((kw) => kw.toLowerCase().startsWith(trimmed))) {
      score += 90;
    } else if (keywords.some((kw) => kw.toLowerCase().includes(trimmed))) {
      score += 60;
    }

    // Match in region or state
    if (regionLower.startsWith(trimmed) || stateLower.startsWith(trimmed)) {
      score += 50;
    } else if (regionLower.includes(trimmed) || stateLower.includes(trimmed)) {
      score += 30;
    }

    // Boost Karnataka locations so Karnataka always appears prominently first
    if (score > 0 && loc.state === 'Karnataka') {
      score += 35;
    }

    return { loc, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.loc.priority - b.loc.priority;
    })
    .slice(0, limit)
    .map((item) => item.loc);
}
