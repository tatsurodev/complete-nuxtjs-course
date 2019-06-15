export const state = {
  brand: 'Toyota',
  model: 'Land Cruiser',
  spec: {
    engine: 'Petrol',
    gearbox: 'Automatic',
    acceleration: 6.0,
    displacement: 5.7,
    turbo: 'No',
  },
  introduction: "The Toyota Land Cruiser (Japanese: トヨタ ランドクルーザー Toyota Rando-kurūzā) is a series of four-wheel drive vehicles produced by the Japanese car maker Toyota. It is Toyota's longest running series. Production of the first generation Land Cruiser began in 1951 (90 units) as Toyota's version of a Jeep-like vehicle. The Land Cruiser has been produced in convertible, hardtop, station wagon and cab chassis versions. The Land Cruiser's reliability and longevity has led to huge popularity, especially in Australia where it is the best-selling body-on-frame, four-wheel drive vehicle. Toyota also extensively tests the Land Cruiser in the Australian outback – considered to be one of the toughest operating environments in both temperature and terrain. In Japan, the Land Cruiser is exclusive to Toyota Japanese dealerships called Toyota Store.",
  history: "When the Imperial Japanese Army occupied the Philippines in 1941 they found an old Bantam Mk II and promptly sent it to Japan. The Japanese military authorities ordered Toyota to produce a similar vehicle but to alter the appearance. The resulting Model AK prototype led to the Yon-Shiki Kogata Kamotsu-Sha (四式小型 貨物 車 type 4 compact cargo-truck). Later in 1941 the Japanese government instructed Toyota to produce a light truck for Japan's military. In 1942, Toyota developed the AK10 prototype by reverse-engineering a Bantam GP . The half-ton truck features an upright front grille, flat front wheel arches that angled down and back like the FJ40, headlights mounted above the wheel arches on either side of the radiator, and a folding windshield. The AK10 is powered by the 2259 cc, 4-cylinder Type C engine from the Toyota Model AE sedan coupled to a three-speed manual transmission and two-speed transfer gearbox. Unlike the U.S. Jeep, few AK10's were ever used and photographs of them in the battlefield are rare. In June 1954, responding to claims of trademark violation by the Willys Company that produced the original Jeep, then Director of Technology Hanji Umehara renamed this 4-wheeled vehicle as the Land Cruiser. The postwar Toyota'Jeep' BJ is completely different from the AK10 and inherits no mechanical parts from it.",
}

export const getters = {
  capital_barand(state) {
    return state.brand.toUpperCase()
  }
}
