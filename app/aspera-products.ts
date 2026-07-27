export type ProductSpecSection = {
  title: string;
  rows: Array<[string, string]>;
};

export type AsperaProduct = {
  slug: string;
  name: string;
  model: string;
  category: string;
  summary: string;
  image: string;
  pdf: string;
  functions: string[];
  specs: ProductSpecSection[];
  standardAccessories: string[];
  optionalAccessories?: string[];
};

export const asperaProducts: AsperaProduct[] = [
  {
    slug: "aspera-v7",
    name: "Aspera V7 PMR446 FM Transceiver",
    model: "V7",
    category: "License Free PMR Radio",
    summary: "Compact UHF PMR446 two way radio with 16 channels, voice prompts, scanning and PC programming.",
    image: "/images/products/aspera/v7.png",
    pdf: "/brochures/ASPERA-V7.pdf",
    functions: ["16 channels", "PC programmable", "VOX functions", "CTCSS/DCS", "English voice prompt", "Power saving function", "Scanning function", "Scrambler", "COMP function", "Wide/narrow bandwidth selective", "End tone elimination", "Emergency alarm"],
    specs: [
      { title: "General", rows: [["Frequency range", "UHF PMR446MHz"], ["Operating temperature", "-20C to +50C"], ["Operating voltage", "DC 7.2V"], ["Operate mode", "Simplex or Semi-duplex"], ["Antenna impedance", "50 ohm"], ["Weight", "190g including battery and antenna"], ["Dimensions (W x H x D)", "116 x 57 x 34mm"]] },
      { title: "Transmitter", rows: [["RF output power", "UHF 0.5W"], ["Frequency stability", "+/- 2.5ppm"], ["Modulation limiting", "<= 2.5KHz"], ["Audio distortion", "<= 5%"], ["Modulation character", "+3dB to -3dB"], ["Adjacent channel power", ">= 65dB"], ["Spurious radiation", "<= 7.5uW"], ["Occupied bandwidth", "<= 16KHz"]] },
      { title: "Receiver", rows: [["Receiving sensitivity", "< 0.2uV"], ["Audio distortion", "<= 5%"], ["Audio response", "+2dB to -10dB"], ["Co-channel suppression", ">= -8dB"], ["Adjacent channel selectivity", ">= 55dB"], ["Intermodulation rejection", ">= 55dB"], ["Spurious response", ">= 65dB"], ["Blocking", ">= 85dB"]] },
    ],
    standardAccessories: ["Battery", "Charger", "AC Adapter", "Belt clip", "Antenna"],
    optionalAccessories: ["Vehicle Charger", "Speaker", "Antenna Adapter", "Earphone", "Clone Cable", "Program Cable", "Eliminator", "Software CD"],
  },
  {
    slug: "aspera-vista",
    name: "Aspera Vista Analog Walkie Talkie",
    model: "Vista",
    category: "Analog Walkie Talkie",
    summary: "Analog license-free walkie talkie with 16 channels, scan, scramble, companding and PC programming.",
    image: "/images/products/aspera/vista.png",
    pdf: "/brochures/aspera-vista.pdf",
    functions: ["LED display logo", "16 channel", "446.000-446.2000MHz", "50 CTCSS, 105 DCS", "TOT function", "Auto save battery", "VOX function", "Low power remind", "Scan function", "Free license", "Scramble function", "Companding function", "PC programming", "Fluorescent color", "Alarm function"],
    specs: [
      { title: "General Function", rows: [["Frequency range", "446.000-446.2000MHz"], ["Battery voltage", "DC 7.4V"], ["Channel capacity", "16"], ["Antenna impedance", "50 ohm"], ["Weight", "450g including battery and antenna"], ["PLL channel spacing", "12.5kHz/25KHz"], ["Battery capacity", "4200 mAh"], ["Dimensions without antenna", "130 x 33 x 56mm"]] },
      { title: "Transmitter", rows: [["Modulation type", "16K0F3E / 8K0F3E"], ["Maximum deviation", "25K <= 5kHz, 12.5K <= 2.5kHz"], ["Frequency stability", "+/- 2.5ppm"], ["Modulation distortion", "<= 5%"], ["FM hum and noise", "-45dB"], ["Intermodulation", "67dB"], ["RF power output", "0.5W"]] },
      { title: "Receiver", rows: [["Sensitivity", "< 0.16uV (12dB SINAD)"], ["Squelch selectivity", "< 0.2uV"], ["Adjacent channel selectivity", "25K >= 65dB, 12.5K >= 60dB"], ["Spurious rejection", ">= 80dB"], ["Image rejection", "25K >= 45dB, 12.5K >= 40dB"], ["AF outpower", ">= 0.5W"], ["Audio distortion", "<= 5%"], ["Audio power", "1W"]] },
      { title: "Environment", rows: [["Work temperature", "-20C to +65C"], ["Save temperature", "-20C to +70C"], ["Standard", "According GJB 150-2009 and MIL-STD-810 C/D/E/F/G Standard"]] },
    ],
    standardAccessories: ["Antenna", "Battery", "Charger", "Adapter", "Belt clip"],
  },
  {
    slug: "aspera-victor",
    name: "Aspera Victor Walkie Talkie",
    model: "Victor",
    category: "PMR446 Walkie Talkie",
    summary: "Lightweight PMR446 radio with 0.5W RF output, simplex/semi-duplex operation and compact battery-powered design.",
    image: "/images/products/aspera/victor.png",
    pdf: "/brochures/aspera-victor-walkie-talkie.pdf",
    functions: ["UHF PMR446 operation", "Simplex or semi-duplex mode", "Compact lightweight body", "0.5W RF output", "Battery and antenna included"],
    specs: [
      { title: "General/Technical Specification", rows: [["Frequency", "UHF PMR446"], ["Operating temperature", "-20C to +60C"], ["Battery voltage", "DC 3.7V"], ["Operation mode", "Simplex or Semi-duplex"], ["Modulation type", "16K0F3E / 8K0F3E"], ["Weight", "130.2g including battery and antenna"], ["RF output power", "0.5W"], ["Audio distortion", "< 5%"]] },
    ],
    standardAccessories: ["Battery", "Antenna", "Charger"],
  },
  {
    slug: "aspera-v9",
    name: "Aspera V9 License Free Walkie Talkie",
    model: "V9",
    category: "License Free PMR Radio",
    summary: "License-free PMR446 radio approved under WPC order, with 16 channels, 0.5W output and standard field accessories.",
    image: "/images/products/aspera/v9.png",
    pdf: "/brochures/aspera-v9-walkie-talkie.pdf",
    functions: ["License free PMR446 operation", "16 channels", "25KHz/12.5KHz channel spacing", "0.5W power output", "Wide/narrow modulation support"],
    specs: [
      { title: "General", rows: [["Frequency range", "446.0-446.2MHz"], ["Channel capacity", "16"], ["Channel spacing", "25KHz/12.5KHz"], ["Operating temperature", "-20C to +60C"], ["Antenna impedance", "50 ohm"], ["Working voltage", "7.4VDC (+/- 20%)"], ["Battery capacity", "2200mAh (Li-Poly)"], ["Frequency stability", "<= +/- 2.5ppm"], ["Dimensions", "126 x 61 x 40mm"], ["Weight", "238g battery included"]] },
      { title: "Transmitter", rows: [["Power output", "0.5W"], ["Modulation", "16K0F3E (Wide) / 8K0F3E (Narrow)"], ["Noise and harmonic", "<= -36dB"], ["FM noise", "<= -40dB"], ["Audio distortion", "<= 5%"], ["Adjacent channel power", ">= 55dB (Wide) / 55dB (Narrow)"], ["Modulation limitation", "<= 5KHz (Wide) / 2.5KHz (Narrow)"]] },
      { title: "Receiver", rows: [["Sensitivity", "< 0.2uV (Wide) / 0.25uV (Narrow)"], ["Adjacent channel selectivity", ">= 60dB (Wide) / 50dB (Narrow)"], ["Intermodulation", ">= 60dB (Wide) / 50dB (Narrow)"], ["Spurious suppression", ">= 60dB (Wide) / 50dB (Narrow)"], ["SNR", ">= 45dB (Wide) / 40dB (Narrow)"], ["Audio output power", "0.5W"], ["Audio distortion", "0.05"]] },
    ],
    standardAccessories: ["Stubby Antenna", "Belt Clip", "Battery", "Charger", "Adapter"],
    optionalAccessories: ["Whip Antenna", "Programming Cable", "Earpiece"],
  },
  {
    slug: "aspera-ip-360s",
    name: "Aspera IP-360S PoC + Analog Dual Mode Radio",
    model: "IP-360S",
    category: "PoC + Analog Dual Mode Radio",
    summary: "Dual mode PoC and analog radio with LTE bands, 200 analog channels, 0.5W analog output and 3000mAh battery.",
    image: "/images/products/aspera/ip-360s.png",
    pdf: "/brochures/aspera-ip-360s-walkie-talkie.pdf",
    functions: ["PoC + analog dual mode", "200 analog channels", "LTE FDD/TDD network bands", "Type-C port battery", "1.5W audio output", "3000mAh battery"],
    specs: [
      { title: "Analog Parameter", rows: [["Frequency range", "446-446.200MHz"], ["Channel", "200"], ["Receiving sensitivity", "0.2uV @ 12dB SINAD"], ["Output power", "0.5W"]] },
      { title: "PoC Parameter", rows: [["Network band", "LTE FDD B1/B3/B5/B8 and LTE TDD B38/B39/B40/B41"], ["PoC data characteristics", "LTE FDD max 10Mbps DL / 5Mbps UL; LTE TDD max 7.5Mbps DL / 1Mbps UL"], ["Output power", "Class 3 for LTE FDD/TDD bands; Class E2 for EGSM900/DCS1800 8-PSK; Class 4 EGSM900; Class 1 DCS1800"], ["Sensitivity", "FDD B1 -98.5dBm, B3 -97.5dBm, B5 -99dBm, B8 -98.5dBm; TDD B38 -97.5dBm, B39 -97dBm, B40 -97dBm, B41 -97dBm"], ["Group No.", "50"]] },
      { title: "Others", rows: [["Audio output power", "1.5W"], ["Working temperature", "-20C to +60C"], ["Voltage/Battery capacity", "4.2V, 3000mAh"]] },
    ],
    standardAccessories: ["Antenna", "Type-C port Battery", "Adapter", "Power cable", "Belt Clip"],
  },
];

export const motorolaProducts: AsperaProduct[] = [
  {
    slug: "motorola-tlk-150",
    name: "Motorola TLK 150 Mobile Two-Way Radio",
    model: "TLK 150",
    category: "WAVE Nationwide Push-to-Talk Mobile Radio",
    summary: "A mobile two-way radio combining nationwide cellular coverage with push-to-talk simplicity, GPS, Wi-Fi and Bluetooth.",
    image: "/images/products/motorola/tlk-150.png",
    pdf: "/brochures/tlk_150_datasheet.pdf",
    functions: ["Private and group push-to-talk", "Over-the-air device management", "Wi-Fi connectivity", "GPS location tracking", "Loud and clear audio", "Real-time presence", "Bluetooth enabled", "Powered by WAVE"],
    specs: [
      { title: "General Specifications", rows: [["Network", "4G LTE, 3G"], ["Channel capacity", "96 channels"], ["Contact list", "300 contacts"], ["Dimensions (H x W x L)", "169 x 44 x 93mm"], ["Weight", "1.41 lbs"], ["Voice codec", "OPUS"], ["Wi-Fi", "802.11 a/b/g/n - 2.4 / 5.0 GHz"], ["Bluetooth", "Bluetooth V4.2 BR/EDR + BLE"], ["GPS", "GNSS / A-GPS (GPS, GLONASS, Galileo, BeiDou)"], ["IP rating", "IP54 IEC60529"], ["Rated audio", "4W internal, 16W external - 4 ohms"]] },
      { title: "Environmental Specifications", rows: [["Operating temperature", "-20C to +60C"], ["Storage temperature", "-40C to +85C"], ["Thermal shock", "Per MIL-STD 810"], ["Humidity", "Per MIL-STD 810"], ["ESD", "IEC61000-4-2 Level 4"], ["Dust and water intrusion", "IEC60529 - IP54 Cat 2"], ["Packaging test", "Per MIL-STD 810"]] },
    ],
    standardAccessories: ["Mobile microphone", "LTE antennas", "GNSS antenna", "Power cable"],
    optionalAccessories: ["Wideband compact mobile microphone", "Visor microphone", "Footswitch PTT", "Pushbutton PTT", "External speaker", "Bluetooth earpiece"],
  },
  {
    slug: "motorola-slr5300",
    name: "Motorola MOTOTRBO SLR 5300 Repeater",
    model: "SLR 5300",
    category: "MOTOTRBO Repeater",
    summary: "A high-efficiency 1U MOTOTRBO repeater with 50W output, 64 channels and support for analog, digital and mixed-mode operation.",
    image: "/images/products/motorola/slr5300.png",
    pdf: "/brochures/SLR5300_DS_AP_100919.pdf",
    functions: ["Next-generation MOTOTRBO repeater", "Analog, digital and mixed-mode operation", "Single site conventional support", "IP Site Connect", "Capacity Plus and Linked Capacity Plus", "Connect Plus", "Integrated battery charger", "Remote management support"],
    specs: [
      { title: "General Specifications", rows: [["Frequency range", "VHF 136-174MHz, UHF1 400-470MHz, UHF2 450-527MHz, 300MHz 350-400MHz"], ["Channel capacity", "64"], ["RF output power", "1-50W"], ["Dimensions (H x W x D)", "44 x 438 x 370mm"], ["Weight", "8.6kg"], ["Input voltage AC", "100-240Vac, 47-63Hz"], ["Input voltage DC", "11.0-14.4Vdc"], ["Operating temperature", "-30C to +60C"], ["Humidity", "RH 95%, non-condensing at 50C"], ["Max duty cycle", "100%"], ["Digital vocoder type", "AMBE+2"]] },
    ],
    standardAccessories: ["Repeater chassis", "Power supply module", "Power amplifier module", "Modem module"],
  },
  {
    slug: "motorola-xir-p8600ex",
    name: "Motorola MOTOTRBO XiR P8600 Ex Series",
    model: "XiR P8600 Ex",
    category: "ATEX Digital Portable Radio",
    summary: "ATEX-rated MOTOTRBO digital radios for hazardous areas, available as XiR P8608 Ex non-display and XiR P8668 Ex display models.",
    image: "/images/products/motorola/xir-p8600ex.png",
    pdf: "/brochures/atex_xir_p8600ex_bro_11-2012.pdf",
    functions: ["ATEX and IECEx intrinsically safe design", "Digital voice and data", "Clear audio in excessive noise", "Large controls for gloved operation", "Emergency button", "GPS location capability", "Text messaging and caller ID on display model", "IP67 dust and water protection"],
    specs: [
      { title: "Safety Ratings", rows: [["Gas protection", "II 2G Ex ib IIC T4"], ["Dust protection", "II 2D Ex IIIC T130C"], ["Mining protection", "I M2 Ex ib I"], ["Ingress protection", "IP67"], ["Durability", "Meets or exceeds MIL-STD-810 and Motorola Accelerated Life Test"]] },
      { title: "Models", rows: [["XiR P8608 Ex", "Rugged non-display model"], ["XiR P8668 Ex", "Full keypad and large colour display model"]] },
    ],
    standardAccessories: ["ATEX battery", "Antenna", "Belt clip", "Charger"],
  },
  {
    slug: "motorola-xir-m8660-m8668",
    name: "Motorola MOTOTRBO XiR M8660 / XiR M8668",
    model: "XiR M8660 / XiR M8668",
    category: "Colour Display Mobile Digital Radio",
    summary: "Professional MOTOTRBO colour-display mobile radios with analog/digital operation, scan, IP Site Connect and Capacity Plus features.",
    image: "/images/brands/motarola.jpg",
    pdf: "/brochures/mototrbo-xir-m8660-xir-m8668-colour-display-mobile.pdf",
    functions: ["Conventional analog and digital modes", "IP Site Connect", "Capacity Plus", "Linked Capacity Plus", "Group, private, all and selective calls", "Scan lists", "Remote monitor", "Radio check", "Bluetooth device support"],
    specs: [
      { title: "Guide-Based Product Information", rows: [["Radio type", "Professional digital two-way mobile radio"], ["Models", "XiR M8660 and XiR M8668 colour display mobile"], ["Modes", "Conventional analog and digital"], ["System features", "IP Site Connect, Capacity Plus and Linked Capacity Plus"], ["Controls", "Volume/channel knob, programmable buttons and PTT"], ["Advanced features", "Radio check, remote monitor, scan, talkaround and call management"]] },
    ],
    standardAccessories: ["Mobile radio", "Microphone", "Mounting hardware", "Power cable"],
  },
  {
    slug: "motorola-r7",
    name: "Motorola MOTOTRBO R7 Portable Two-Way Radio",
    model: "R7",
    category: "Digital Portable Radio",
    summary: "A rugged connected portable radio with advanced audio processing, Wi-Fi, Bluetooth 5.2, optional intrinsic safety and long battery life.",
    image: "/images/brands/motarola.jpg",
    pdf: "/brochures/r7-datasheet-na.pdf",
    functions: ["VHF, UHF and 800/900MHz bands", "Wi-Fi 2.4/5.0GHz", "Bluetooth Core 5.2", "Digital and analog signaling", "WAVE PTX Backup Client", "QVGA display on keypad model", "Adaptive dual microphone noise cancellation", "AI-trained noise suppression", "IP68 and IP66 rated", "Rugged to MIL-STD 810"],
    specs: [
      { title: "General Specifications", rows: [["Frequency", "VHF 136-174MHz, UHF 400-527MHz, 800/900MHz"], ["High power output", "VHF 5W, UHF 4W, 800/900MHz 2.5W"], ["Low power output", "1W"], ["Channel spacing", "12.5kHz, 20kHz, 25kHz"], ["Channel capacity", "1000 FKP / 64 NKP"], ["Display", "2.4in 320 x 240 QVGA on full keypad model"], ["Power supply", "7.5V nominal"], ["Battery life", "Up to 28 hours depending on battery and band"], ["Operating temperature", "-20C to +60C"]] },
      { title: "Receiver and Transmitter", rows: [["Digital protocol", "ETSI TS 102 361-1, -2, -3, -4; DMR Tier II and III"], ["Frequency stability", "0.5ppm"], ["Analog sensitivity", "0.16uV typical"], ["Digital sensitivity", "0.14uV typical"], ["Spurious rejection", "70dB"]] },
    ],
    standardAccessories: ["Battery", "Antenna", "Belt clip", "Charger"],
  },
  {
    slug: "motorola-r2",
    name: "Motorola MOTOTRBO R2 Portable Two-Way Radio",
    model: "R2",
    category: "Portable Two-Way Radio",
    summary: "An everyday workhorse portable radio with 64 channels, UHF/VHF options, rugged IP55 housing and analog or digital models.",
    image: "/images/brands/motarola.jpg",
    pdf: "/brochures/MOTOTRBO R2 Data Sheet.pdf",
    functions: ["UHF and VHF", "64 channels", "Analog-only or analog/digital models", "Transmit interrupt", "Dual priority scan", "Enhanced privacy optional", "Voice announcement", "SINC+ noise suppression optional", "IP55 dust and water protection", "Rugged to MIL-STD 810"],
    specs: [
      { title: "General Specifications", rows: [["Frequency", "UHF 400-480MHz, VHF 136-174MHz"], ["Typical RF output", "UHF 4W high / 1W low; VHF 5W high / 1W low"], ["Channel spacing", "12.5 / 20.0 / 25.0kHz"], ["Channel capacity", "64"], ["Dimensions", "125 x 55 x 37mm high capacity battery; 125 x 55 x 32mm slim battery"], ["Weight", "286g high capacity battery; 261g slim battery"], ["Battery life", "Up to 19.5h analog / 26.5h digital with high capacity battery"], ["Power supply", "7.5V nominal"]] },
      { title: "Audio and Environment", rows: [["Audio output power", "1W rated / 3W max"], ["Maximum speech loudness", "101 phon"], ["Operating temperature", "-30C to +60C"], ["Storage temperature", "-40C to +85C"], ["Dust and water intrusion", "IEC60529 IP55"]] },
    ],
    standardAccessories: ["Battery", "Antenna", "Belt clip", "Charger"],
  },
  {
    slug: "motorola-r5",
    name: "Motorola MOTOTRBO R5 Portable Two-Way Radio",
    model: "R5",
    category: "Digital Portable Radio",
    summary: "A compact, tough MOTOTRBO portable with loud clear audio, optional display/GNSS/Wi-Fi/Bluetooth and up to 32 hours battery life.",
    image: "/images/brands/motarola.jpg",
    pdf: "/brochures/R5-datasheet-emea-eng.pdf",
    functions: ["VHF and UHF", "Wi-Fi 2.4/5.0GHz option", "Bluetooth Core 5.2 option", "Integrated GNSS option", "Digital and analog signaling", "1.5in display on LKP model", "SINC+ and AI-trained noise suppression", "IP67 dust-tight and waterproof", "Rugged to MIL-STD 810H"],
    specs: [
      { title: "General Specifications", rows: [["Frequency", "VHF 136-174MHz, UHF 400-527MHz"], ["High power output", "VHF 5W, UHF 4W"], ["Low power output", "1W"], ["Channel spacing", "12.5kHz, 20kHz, 25kHz"], ["Channel capacity", "256 LKP / 64 NKP"], ["Zone capacity", "50 LKP / 4 NKP"], ["Display", "132 x 48px 1.5in monochrome display on LKP"], ["Battery life", "Up to 32h digital / 24h analog with 3200mAh battery"], ["Operating temperature", "-20C to +60C"]] },
      { title: "Connectivity and Receiver", rows: [["GNSS", "GPS, GLONASS, BeiDou, Galileo on LKP GNSS model"], ["Wi-Fi", "2.4GHz and 5GHz; WPA3/WPA2"], ["Bluetooth", "Bluetooth Classic, LE and Dual Mode; Core 5.2"], ["Analog sensitivity", "0.16uV"], ["Digital sensitivity", "0.14uV"], ["Spurious rejection", "70dB"]] },
    ],
    standardAccessories: ["Battery", "Antenna", "Belt clip", "Charger"],
  },
];

export const kenwoodProducts: AsperaProduct[] = [
  {
    slug: "kenwood-nx-1700-1800",
    name: "Kenwood NX-1700 / NX-1800 Mobile Transceivers",
    model: "NX-1700 / NX-1800",
    category: "VHF/UHF Mobile Transceiver",
    summary: "NX-1000 series mobile radios supporting NXDN, DMR and FM analog protocols with clear Kenwood audio and rugged operation.",
    image: "/images/brands/kenwood.png",
    pdf: "/brochures/NX-1700_1800_mobile_UK_050722-ver1.pdf",
    functions: ["Multi-protocol NXDN, DMR and FM analog support", "Upgradable digital/analog mode by software option", "White backlit LCD display", "7-colour LED status indicator", "6W max loud audio", "260 channels and 128 zones", "Wide band UHF 70MHz coverage", "Emergency button and lone worker", "Remote stun, kill and check", "GPS connectivity", "Horn alert and public address", "IP54 and MIL-STD 810C/D/E/F/G/H"],
    specs: [
      { title: "General Specifications", rows: [["Frequency range", "NX-1700: 136-174MHz; NX-1800: 400-470MHz"], ["Max channels per radio", "260"], ["Number of zones", "128"], ["Channels per zone", "250"], ["Channel spacing", "Analog 25 / 20 / 12.5kHz; Digital 12.5 / 6.25kHz"], ["Operating voltage", "13.2V DC (10.8V to 15.6V DC)"], ["Current drain", "Standby 0.45A max, RX 2.4A max, TX 10A max"], ["Operating temperature", "-30C to +60C"], ["Frequency stability", "+/- 0.5ppm"], ["Dimensions including projections", "161 x 43 x 168.2mm"], ["Dimensions excluding projections", "160 x 43 x 137.7mm"], ["Weight", "1.21kg"]] },
    ],
    standardAccessories: ["Mobile transceiver", "Microphone", "Mounting bracket", "DC power cable"],
    optionalAccessories: ["Desktop microphone", "Keypad microphone", "External speaker", "Ignition sense cable", "Connection cable"],
  },
  {
    slug: "kenwood-tk-3501",
    name: "Kenwood TK-3501 PMR446 License Free Radio",
    model: "TK-3501",
    category: "License Free PMR446 UHF FM Transceiver",
    summary: "Thin, lightweight and durable license-free PMR446 UHF radio with 16 channels, IP54 protection and powerful 1.5W audio.",
    image: "/images/brands/kenwood.png",
    pdf: "/brochures/Kenwood-TK-3501-Brochure.pdf",
    functions: ["License-free PMR446 operation", "16 channels", "Up to 9km talk range", "1.5W BTL audio output", "Built-in VOX function", "Key lock function", "Preset 10 calling alert", "Proceed tone and PTT release tone", "Busy channel lock out", "QT/DQT compatible", "Self programming", "IP54 and 11 US MIL-STD standards"],
    specs: [
      { title: "General Specifications", rows: [["Frequency range", "446.0 to 446.1MHz"], ["Number of channels", "16"], ["RF power output ERP", "500mW"], ["Channel spacing", "12.5kHz"], ["Modulation", "Analog narrow 8K50F3E"], ["Operating voltage", "7.5V DC +/- 20%"], ["Frequency stability", "2.5ppm"], ["Audio output", "Internal speaker 1.5W / 8 ohm; external output 500mW / 8 ohm"], ["Dimensions radio only", "54 x 117 x 14.6mm, 140g"], ["With KNB-63L", "54 x 117 x 25.5mm, 210g"], ["With KNB-65L", "54 x 117 x 27.5mm, 230g"], ["Battery life", "KNB-63L 14h / 18h with save on; KNB-65L 20h / 26h with save on"]] },
    ],
    standardAccessories: ["KNB-63L Li-ion battery", "Rapid charger", "Belt clip"],
    optionalAccessories: ["Earphone kit", "Headsets", "Speaker microphone", "Water resistant bag", "Nylon case", "Multiple charger"],
  },
  {
    slug: "kenwood-nxr-1700-1800",
    name: "Kenwood NXR-1700 / NXR-1800 Repeater",
    model: "NXR-1700 / NXR-1800",
    category: "VHF/UHF Multi-Mode Repeater",
    summary: "Compact multi-mode conventional repeater supporting DMR, NXDN and FM analog operation in a space-saving 1U rack design.",
    image: "/images/brands/kenwood.png",
    pdf: "/brochures/NXR1K(RPT)_17_18_AM_SSi.pdf",
    functions: ["50/40W to 1W RF output", "Fits two repeaters in 1U 19-inch rack", "1.71-inch OLED display", "Thermal-controlled cooling fan", "Up to 32 channels", "Selectable DMR Tier II or NXDN conventional", "Mixed analog/digital operation", "Built-in IP network adapter", "IP remote management", "Hot standby redundancy", "Voting repeater support", "Built-in AMBE+2 vocoder"],
    specs: [
      { title: "General Specifications", rows: [["Frequency range", "NXR-1700: 136-174MHz; NXR-1800 Type 1: 450-520MHz; Type 2: 400-470MHz"], ["Channel capacity", "32"], ["Channel spacing", "Analog 30/25/15/12.5kHz or 25/12.5kHz; Digital 12.5/6.25kHz"], ["PLL channel step", "6.25 / 5 / 3.125 / 2.5kHz"], ["Frequency stability", "+/- 0.5ppm"], ["Power supply", "10.8-15.6V DC"], ["Current drain", "Standby 0.6-0.7A; transmitting 12.0A max power, 9.0A at 25W"], ["Operating temperature", "-30C to +60C"], ["Antenna impedance", "50 ohm"], ["Dimensions including projections", "214.5 x 44.0 x 242.9mm"], ["Dimensions excluding projections", "208.5 x 44.0 x 211.5mm"], ["Weight", "1.9kg"]] },
    ],
    standardAccessories: ["Repeater unit", "Power cable", "Rack mounting hardware"],
  },
  {
    slug: "kenwood-nx-1200-1300",
    name: "Kenwood NX-1200 / NX-1300 Portable Transceivers",
    model: "NX-1200 / NX-1300",
    category: "VHF/UHF Portable Transceiver",
    summary: "NX-1000 series portable radios for NXDN or DMR digital operation with mixed-mode analog support, Kenwood audio and rugged body options.",
    image: "/images/brands/kenwood.png",
    pdf: "/brochures/NX1K_Specsheet_M.pdf",
    functions: ["NXDN or DMR digital CAI models", "Basic, standard keypad and full keypad variants", "8-digit white backlit LCD models", "Large 7-colour LED indicator", "5W RF output on VHF/UHF", "Wide band UHF 70MHz coverage", "Audio equalizer and noise suppressor", "Multiple scan functions", "VOX and semi-VOX", "Emergency function and lone worker", "Remote stun, kill and check", "Front panel programming on keypad model", "MIL-STD 810C/D/E/F/G", "IP54/IP55 and IP67 variants"],
    specs: [
      { title: "Platform Specifications", rows: [["Series", "NX-1200 VHF / NX-1300 UHF transceivers"], ["Digital protocols", "NXDN or DMR models"], ["Analog mode", "FM conventional with FleetSync, MDC1200, QT/DQT, DTMF, 2-tone and 5-tone"], ["RF output power", "5W VHF/UHF"], ["Display", "8-digit LCD on display models"], ["Audio", "Kenwood TX/RX audio profile with optimizable digital processor"], ["Ingress protection", "IP54/IP55 and IP67 depending on model/accessory configuration"], ["Intrinsically safe", "Option available"]] },
    ],
    standardAccessories: ["Portable radio", "Antenna", "Battery pack", "Belt clip", "Charger"],
    optionalAccessories: ["Helical antenna", "Stubby antenna", "Li-ion battery packs", "Ni-MH battery pack", "Rapid charger", "Multiple charger", "Speaker microphone", "Clip microphone with earphone", "Headset"],
  },
];

export const additionalProducts: AsperaProduct[] = [
  {
    slug: "icom-ic-a25n-a25c",
    name: "Icom IC-A25N / IC-A25C VHF Air Band Transceivers",
    model: "IC-A25N / IC-A25C",
    category: "VHF Air Band Transceiver",
    summary: "Portable VHF air band transceivers with 6W PEP output, IP57 protection, NAV/COM or COM-only variants and flight-planning app support.",
    image: "/images/brands/icom.png",
    pdf: "/brochures/IC-A25N-A25C_product-brochure-092020-1.pdf",
    functions: ["NAV and COM channels on IC-A25N", "COM channels on IC-A25C", "300 memory channels in 15 groups", "25/8.33kHz channel spacing", "6W typical PEP output", "IP57 dust-protection and waterproof construction", "Bluetooth headset option", "Android and iOS flight planning apps", "VOR screen and CDI functions on NAV model", "AA battery case option"],
    specs: [
      { title: "General Specifications", rows: [["Frequency range TX", "118.000-136.992MHz"], ["Frequency range RX", "IC-A25N: 108.000-136.992MHz; IC-A25C: 118.000-136.992MHz"], ["Weather RX", "161.650-163.275MHz"], ["Memory channels", "300 channels / 15 groups"], ["Channel spacing", "25 / 8.33kHz"], ["Emission", "6K00A3E, 5K60A3E, 16K0G3E weather"], ["Power supply", "7.2V DC BP-288, 11.0V DC external jack"], ["Antenna impedance", "50 ohm"], ["Operating temperature", "-10C to +60C"], ["Dimensions", "58.9 x 148.4 x 31.8mm"], ["Weight", "384g with antenna and BP-288"]] },
      { title: "Transmitter and Receiver", rows: [["Output power", "6.0 / 1.8W typical PEP/carrier"], ["Audio harmonic distortion", "Less than 10% at 60% modulation"], ["Hum and noise ratio", "More than 35dB"], ["Frequency stability", "0.4kHz"], ["Intermediate frequencies", "46.35MHz / 450kHz"], ["Audio output", "530mW typical external, 1200mW typical internal"], ["Ingress protection", "IP57, one meter depth for 30 minutes"]] },
    ],
    standardAccessories: ["BP-288 battery pack", "BC-224 rapid charger", "FA-B02AR antenna", "MB-133 belt clip", "Hand strap"],
    optionalAccessories: ["BP-289 battery case", "VS-3 Bluetooth headset", "HM-231 speaker microphone", "OPC-2379 headset adapter cable", "OPC-478UC programming cable", "CP-20 cigarette lighter cable"],
  },
  {
    slug: "aspera-ad90",
    name: "Aspera AD-90 PMR446 License Free Radio",
    model: "AD-90",
    category: "PMR446 License Free Digital Radio",
    summary: "PMR446 license-free digital radio with TDMA technology, enhanced encryption, 32 channels and Mototrbo Tier 1/Tier 2 voice compatibility.",
    image: "/images/brands/aspera.png",
    pdf: "/brochures/Aspera_AD90_PMR446_LF.pdf",
    functions: ["Enhanced encryption", "Private, group and all call", "Battery saving function", "End-tone elimination", "Low battery prompt", "Programmable side key", "Talk around", "PC programming protection", "TOT", "Busy channel lock", "Wide/narrow bandwidth selective", "Built-in CTCSS/DCS", "Compatible with Mototrbo Tier 1 and Tier 2 voice only", "Up to 32 channels"],
    specs: [
      { title: "General Specifications", rows: [["Frequency range", "446-446.2MHz"], ["Channel capacity", "32"], ["Zones", "2"], ["Channel spacing", "12.5kHz"], ["Working voltage", "DC 7.4V (+/- 20%)"], ["Antenna impedance", "50 ohm"], ["Frequency stability", "+/- 1.5ppm"], ["Weight", "259g including battery pack"], ["Battery average working time", "Digital 18 hours, analog 14 hours"], ["Battery capacity", "2300mAh"], ["Dimensions", "35(L) x 59.7(W) x 114(H)mm"], ["Working temperature", "-20C to +60C"], ["Storage temperature", "-30C to +85C"], ["Waterproof", "IP54"]] },
      { title: "Transmitter", rows: [["Power output", "0.5W"], ["4FSK modulation", "12.5kHz data only 7K60FXD; data and voice 7K60FXE"], ["FM modulation", "12.5kHz 8K50F3E"], ["Modulation limitation", "+/- 2.5kHz @ 12.5kHz"], ["FM noise", "-40dB"], ["Spurious emission", "< -36dB <= 1GHz, -30dB >= 1GHz"], ["Adjacent channel power", "<= -60dB"], ["Audio distortion", "< 3%"], ["Vocoder", "AMBE+2"]] },
      { title: "Receiver", rows: [["Digital sensitivity", "0.3uV / -117.4dBm BER 5%; 0.7uV / -110dBm BER 1%"], ["Analog sensitivity", "0.35uV / -116dBm (20dB SINAD); 0.22uV / -120dBm typical"], ["Intermodulation", "TIA603C 65dB; ETSI 65dB"], ["Adjacent channel selectivity", "TIA603C 70dB; ETSI 70dB"], ["Spurious suppression", "60dB @ 12.5kHz"], ["Audio power", "84dB"]] },
    ],
    standardAccessories: ["Battery", "Charger", "Adapter", "Antenna", "Belt clip"],
  },
  {
    slug: "vertel-team-talky",
    name: "Vertel Team Talky PMR446 Device",
    model: "Team Talky",
    category: "License Free Walky Talky",
    summary: "WPC-approved license-free PMR446 walkie talkie with 99 channels, USB charging, Li-ion battery and IP55 water resistance.",
    image: "/images/brands/aspera.png",
    pdf: "/brochures/vertel-team-talky.pdf",
    functions: ["WPC approved license-free operation", "99 channels", "Long range", "High capacity Li-ion battery", "LED display", "Menu display mode", "Low battery strength display", "USB charger", "High/low power", "Scan", "Squelch noise control", "CTCSS and DCS channels", "Rugged construction meets MIL-STD 810", "IP55 water resistant"],
    specs: [
      { title: "Specifications", rows: [["Name", "Team Talky PMR446MHz Device"], ["Frequency", "446-446.2MHz"], ["Frequency band", "UHF"], ["Channel capacity", "99"], ["Rated voltage", "DC 3.7V"], ["Battery capacity", "2300mAh BIS approved Li-ion battery"], ["Dimensions", "92 x 56 x 28mm"], ["Weight with battery", "128g"], ["Temperature range", "-20C to +60C"], ["Frequency stability", "1.5ppm"], ["TX power output", "0.5W"], ["RX sensitivity", "0.18uV"], ["Selectivity", "60dB"], ["Audio power", "1W"], ["Audio distortion", "< 3%"], ["Modulation emission", "11K0F3E (12.5kHz)"], ["Water resistant", "Meets IP55"]] },
    ],
    standardAccessories: ["Type-C USB charger", "Handstrap", "Belt clip", "Li-ion battery pack"],
    optionalAccessories: ["Charger", "Earpiece"],
  },
  {
    slug: "icom-ic-a220",
    name: "Icom IC-A220 TSO VHF Air Band Transceiver",
    model: "IC-A220 TSO",
    category: "Panel Mount VHF Air Band Transceiver",
    summary: "TSO/ETSO accepted panel-mount VHF air band radio with high-visibility OLED display, large controls and built-in intercom.",
    image: "/images/brands/icom.png",
    pdf: "/brochures/IC-A220_TSO_A4.pdf",
    functions: ["High visibility OLED screen", "Large illuminated switch buttons", "TSO/ETSO certification", "Auto squelch function", "Quick squelch adjustment", "Auto dimmer and external dimmer control", "Built-in voice activated intercom", "20 memory channels and 20 history channels", "Group memory channels", "Weather channel scanning", "8.33kHz channel spacing", "Remote control capability", "9V power supply operation", "Dualwatch and priority watch", "One-touch access to 121.5MHz emergency frequency"],
    specs: [
      { title: "Product Information", rows: [["Radio type", "Panel mount VHF air band transceiver"], ["Certification", "TSO version accepted as ETSO radio under reciprocal acceptance policy"], ["Display", "OLED high-contrast display with wide viewing angle"], ["Electrical systems", "13.8V and 27.5V aircraft systems compatible"], ["Channel spacing", "8.33kHz and 25kHz selectable"], ["Memory", "20 memory channels, 20 history memory channels and group memories"], ["Intercom", "Built-in voice activated intercom with audio level and squelch control"], ["Remote controls", "FLIP-FLOP, intercom and recall via rear panel connector"]] },
    ],
    standardAccessories: ["Panel mount radio", "Installation hardware"],
  },
];

export const allProducts = [...asperaProducts, ...motorolaProducts, ...kenwoodProducts, ...additionalProducts];

export function getAsperaProduct(slug: string) {
  return allProducts.find((product) => product.slug === slug);
}
