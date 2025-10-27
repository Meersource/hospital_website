// export const services = [
//   {
//     slug: 'cardiology',
//     name: 'Cardiology',
//     emoji: '⚕️',
//     shortDescription: 'Heart health specialists.',
//     heroDescription:
//       'Comprehensive cardiac care including diagnostics, interventional cardiology, and cardiac rehabilitation.',
//     highlights: [
//       'Non-invasive and invasive diagnostics',
//       '24/7 emergency cardiac care',
//       'Post-operative cardiac rehab programs',
//     ],
//     faqs: [
//       {
//         q: 'What cardiac tests are available?',
//         a: 'We offer ECG, ECHO, TMT, Holter monitoring, and advanced imaging as needed.',
//       },
//       {
//         q: 'Do you have pediatric cardiology?',
//         a: 'Yes, pediatric cardiology consultations are available by appointment.',
//       },
//     ],
//   },
//   {
//     slug: 'general-surgery',
//     name: 'General Surgery',
//     emoji: '🏥',
//     shortDescription: 'Expert surgical team.',
//     heroDescription:
//       'Broad range of surgical procedures with a focus on minimally invasive techniques and fast recovery.',
//     highlights: [
//       'Laparoscopic procedures',
//       'Pre-op and post-op care',
//       'Day-care surgeries',
//     ],
//     faqs: [
//       { q: 'Are same-day discharges available?', a: 'Yes, for eligible minimally invasive procedures.' },
//       { q: 'Do you accept referrals?', a: 'We accept referrals from primary care and specialists.' },
//     ],
//   },
//   {
//     slug: 'primary-care',
//     name: 'Primary Care',
//     emoji: '👨‍⚕️',
//     shortDescription: 'Routine checkups and wellness.',
//     heroDescription:
//       'Comprehensive primary care for individuals and families, focusing on prevention and long-term wellness.',
//     highlights: [
//       'Annual physicals and screenings',
//       'Chronic disease management',
//       'Lifestyle and nutrition counseling',
//     ],
//     faqs: [
//       { q: 'Can I choose a primary doctor?', a: 'Yes, you can select a preferred provider.' },
//       { q: 'Do you offer telehealth?', a: 'Yes, teleconsultations are available for follow-ups.' },
//     ],
//   },
//   {
//     slug: 'women-health',
//     name: "Women's Health",
//     emoji: '👩‍🍼',
//     shortDescription: 'Maternity and gynecological care.',
//     heroDescription:
//       'Dedicated services for women’s health including obstetrics, gynecology, and maternal care.',
//     highlights: [
//       'Prenatal and postnatal care',
//       'Gynecological screenings',
//       'Family planning and counseling',
//     ],
//     faqs: [
//       { q: 'Do you have delivery suites?', a: 'Yes, with neonatal support available.' },
//       { q: 'Are routine screenings available?', a: 'Pap smears, breast exams, and ultrasounds are available.' },
//     ],
//   },
//   {
//     slug: 'heart-vascular',
//     name: 'Heart & Vascular',
//     emoji: '🫀',
//     shortDescription: 'Cardiac and blood vessel treatments.',
//     heroDescription:
//       'Integrated cardiovascular care including interventional cardiology and vascular surgery.',
//     highlights: [
//       'Cath lab and stenting',
//       'Vascular surgery and endovascular care',
//       'Cardiac rehab programs',
//     ],
//     faqs: [
//       { q: 'Is 24/7 cath lab available?', a: 'Yes, for cardiac emergencies.' },
//       { q: 'Do you offer cardiac rehab?', a: 'Yes, supervised rehabilitation is available.' },
//     ],
//   },
//   {
//     slug: 'gastro-health',
//     name: 'Gastro Health',
//     emoji: '🍎',
//     shortDescription: 'Digestive system and nutrition care.',
//     heroDescription:
//       'Comprehensive gastrointestinal care including endoscopy, nutrition, and hepatology services.',
//     highlights: [
//       'Endoscopy and colonoscopy',
//       'IBD and liver clinics',
//       'Dietary counseling',
//     ],
//     faqs: [
//       { q: 'Is bowel prep provided?', a: 'Yes, clear instructions and prep kits are provided.' },
//       { q: 'Do you treat pediatric GI?', a: 'Pediatric GI consults are available by appointment.' },
//     ],
//   },
//   {
//     slug: 'neurology',
//     name: 'Neurology',
//     emoji: '🧠',
//     shortDescription: 'Brain & nervous system care.',
//     heroDescription:
//       'Expert diagnosis and treatment for neurological disorders with a multidisciplinary team.',
//     highlights: [
//       'Stroke unit and acute management',
//       'Seizure and epilepsy clinics',
//       'Neurophysiology and imaging',
//     ],
//     faqs: [
//       {
//         q: 'Do you offer stroke rehabilitation?',
//         a: 'Yes, comprehensive post-stroke rehabilitation and physiotherapy are available.',
//       },
//       {
//         q: 'Can I get a second opinion?',
//         a: 'Our specialists provide second opinions on complex neurological cases.',
//       },
//     ],
//   },
//   {
//     slug: 'pediatrics',
//     name: 'Pediatrics',
//     emoji: '👶',
//     shortDescription: 'Dedicated child health.',
//     heroDescription:
//       'Family-centered pediatric care from newborns to adolescents, including immunizations and wellness.',
//     highlights: [
//       'Well-child checkups and vaccinations',
//       'Neonatal and infant care',
//       'Pediatric emergency services',
//     ],
//     faqs: [
//       {
//         q: 'Do you offer vaccination schedules?',
//         a: 'We follow WHO-recommended schedules customized to your child’s needs.',
//       },
//       {
//         q: 'Is there a pediatric ER?',
//         a: 'Yes, pediatric-trained clinicians are on call 24/7.',
//       },
//     ],
//   },
//   {
//     slug: 'orthopedics',
//     name: 'Orthopedics',
//     emoji: '🦴',
//     shortDescription: 'Joint & bone surgery.',
//     heroDescription:
//       'Advanced orthopedic surgery and sports medicine with minimally invasive techniques.',
//     highlights: [
//       'Arthroscopy and joint replacement',
//       'Sports injury clinics',
//       'Physiotherapy and rehab',
//     ],
//     faqs: [
//       {
//         q: 'Do you perform knee replacements?',
//         a: 'Yes, including robotic-assisted procedures when indicated.',
//       },
//       {
//         q: 'Is physiotherapy available on-site?',
//         a: 'Yes, integrated physiotherapy for prehab and rehab is available.',
//       },
//     ],
//   },
//   {
//     slug: 'diagnostics',
//     name: 'Diagnostics',
//     emoji: '🔬',
//     shortDescription: 'Advanced lab services.',
//     heroDescription:
//       'Accurate and timely diagnostics across pathology, radiology, and advanced imaging.',
//     highlights: [
//       '24/7 laboratory',
//       'MRI, CT, Ultrasound, X-ray',
//       'Home sample collection',
//     ],
//     faqs: [
//       {
//         q: 'Can I book tests online?',
//         a: 'Yes, common tests can be booked via our appointment portal.',
//       },
//       {
//         q: 'How quickly are reports available?',
//         a: 'Most reports are available within 24 hours; urgent processing possible.',
//       },
//     ],
//   },
// ];

export const services= [
  {
    "slug": "medical-indoor",
    "name": "Indoor",
    "shortDescription": "Spacious hospital rooms and male and female wards.",
    "heroDescription": "Ergonomic Hospital Bed. Spacious Rooms & Wards for both Male & Female Patients, ensuring comfort and privacy."
  },
  {
    "slug": "medical-laboratory",
    "name": "Laboratory",
    "shortDescription": "Fully automated lab for accurate tests in-house.",
    "heroDescription": "Lab. is Fully Automated and performs all major pathological tests in house with precision and speed."
  },
  {
    "slug": "medical-pharmacy",
    "name": "Pharmacy",
    "shortDescription": "Medicine available 24/7.",
    "heroDescription": "Hospital Pharmacy Services are available 24/7, providing access to necessary medication and supplies."
  },
  {
    "slug": "medical-opd",
    "name": "OPD/Consultancy",
    "shortDescription": "Equipped rooms for eye, ENT, and gynaecology consultations.",
    "heroDescription": "Equipped Rooms for Eye, ENT, Gynaecology, Medicine, General Surgery, Orthopaedics & Paediatrics Consultations."
  },
  {
    "slug": "medical-ultrasound",
    "name": "Ultrasound",
    "shortDescription": "Latest machine for Sonography and Echocardiography.",
    "heroDescription": "Latest Machine available for Sonography and Echocardiography services."
  },
  {
    "slug": "medical-xray",
    "name": "X-Ray",
    "shortDescription": "Latest mobile X-ray machine.",
    "heroDescription": "Latest X-Ray Machines, including Mobile X-Ray Machines for convenient imaging services."
  },
  {
    "slug": "medical-ct-scan",
    "name": "CT-Scan",
    "shortDescription": "Spiral CT-Scan for trauma screening.",
    "heroDescription": "Spiral CT-Scan available for all sorts of Trauma's, providing detailed diagnostic imaging."
  },
  {
    "slug": "medical-endoscopy",
    "name": "Endoscopy",
    "shortDescription": "Endoscopy for diagnosing internal issues, bleeding, and foreign body extraction.",
    "heroDescription": "Endoscopy available for visualizing bleeding, varices, stones, Foreign body extraction, and other diagnostic/therapeutic procedures."
  },
  {
    "slug": "medical-gynecology",
    "name": "Gynaecology",
    "shortDescription": "Dedicated machine for Caesarean operations.",
    "heroDescription": "Caesarean operation dedicated machine available for Gynaecology procedures."
  },
  {
    "slug": "ot-surgeon-office",
    "name": "Surgeon Office",
    "shortDescription": "Dedicated consultation space with a viewing window for the operation theater.",
    "heroDescription": "Surgeon Office with Viewing Window for Pre & Post OP Counseling and for Relatives to see the patient in Surgeon office."
  },
  {
    "slug": "ot-recovery-room",
    "name": "Recovery Room",
    "shortDescription": "Post-operative care unit for patients.",
    "heroDescription": "Pre & Post OP Rooms for patients, ensuring careful monitoring and recovery after surgery."
  },
  {
    "slug": "ot-labor-room",
    "name": "Labor Room",
    "shortDescription": "Equipped labor room with ECG/CTG, dedicated to delivery and patient care.",
    "heroDescription": "Labor Room is equipped with Electro Medical equipment and dedicated staff for patient & Baby Care."
  },
  {
    "slug": "ot-general-theater",
    "name": "General Operaton Theater",
    "shortDescription": "Equipped for General Surgery, Orthopaedics, and Urology.",
    "heroDescription": "Fully equipped General Operation Theater for General Surgery, Orthopaedic, Urology, and other surgical procedures."
  },
  {
    "slug": "ot-c-arm",
    "name": "C-Arm",
    "shortDescription": "Used in orthopaedic surgery and foreign body removal.",
    "heroDescription": "C-ARM is used in Orthopaedics Surgeries, Ureteric Stones and for locating foreign bodies."
  },
  {
    "slug": "ot-anaesthesia",
    "name": "Anaesthesia",
    "shortDescription": "Latest machine with ventilators and monitors.",
    "heroDescription": "Latest Anaesthesia Machine equipped with ventilators and monitors for patient safety during procedures."
  },
  {
    "slug": "ot-eye-theater",
    "name": "Eye Operation Theater",
    "shortDescription": "Fully equipped eye-dedicated operation theater.",
    "heroDescription": "Fully Equipped Eye Operation Theater with separate Operation Theater for Optic and Vitreous Surgeries."
  },
  {
    "slug": "ot-phacoemulsifier",
    "name": "Phacoemulsifier Millennium",
    "shortDescription": "Laser machine for cataract surgery.",
    "heroDescription": "Latest Millennium Laser Cataract Surgery Phacoemulsification Machine for precise cataract removal."
  },
  {
    "slug": "ot-ctg",
    "name": "CTG",
    "shortDescription": "Cardiotocography for fetal monitoring.",
    "heroDescription": "Cardiotocography for fetal ECG and monitoring of uterine contractions."
  },
  {
    "slug": "supportive-generator",
    "name": "Generator",
    "shortDescription": "For continuous power backup.",
    "heroDescription": "Heavy Duty Generator for Continued Power and Life Support, ensuring uninterrupted electricity supply."
  },
  {
    "slug": "supportive-elevators",
    "name": "Elevators",
    "shortDescription": "Lifts for patient ease.",
    "heroDescription": "Elevators/Lifts available for patient ease to move between floors comfortably."
  },
  {
    "slug": "supportive-mobile-hospital",
    "name": "Mobile Hospital",
    "shortDescription": "Units for emergency use.",
    "heroDescription": "Units available for Emergency Use, ensuring rapid deployment of essential medical services when needed."
  },
  {
    "slug": "supportive-ambulance",
    "name": "Ambulance",
    "shortDescription": "Ambulance services 24/7.",
    "heroDescription": "Ambulance Services available 24/7 for patient transfer and emergency transport."
  },
  {
    "slug": "supportive-medical-store",
    "name": "Medical Store",
    "shortDescription": "Reporting and medicine store.",
    "heroDescription": "Facility for Reporting Medicines and related health products."
  },
  {
    "slug": "supportive-optical-center",
    "name": "Optical Center",
    "shortDescription": "Local and imported glasses, lenses, and contact lenses available.",
    "heroDescription": "All Type of Local and Imported Spectacle Frames, Lenses & Contact Lenses are Available."
  },
  {
    "slug": "supportive-cafeteria",
    "name": "Cafeteria & Mosque",
    "shortDescription": "On-site food and prayer facilities.",
    "heroDescription": "A comfortable Cafeteria and a Mosque are available for patients and visitors."
  }
]


// export const teamMembers = [
//   {
//     name: 'Dr. Rehan Ahmed Cheema',
//     title: 'M.B.B.S., F.C.S.(S.A) / C. Surgeon',
//     description: 'Specializes in interventional cardiology with a focus on patient-centered preventive care.',
//     src: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=2070&auto=format&fit=crop',
//   },
//   {
//     name: 'Dr. Zeeshan Ahmed Cheema',
//     title: 'M.B.B.S, S.C.P.S, I.C. Opthalmologist',
//     description: 'Specializes in interventional cardiology with a focus on patient-centered preventive care.',
//     src: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=2070&auto=format&fit=crop',
//   },
//   {
//     name: 'Dr. Ayesha Khan',
//     title: 'Consultant Cardiologist',
//     description: 'Specializes in interventional cardiology with a focus on patient-centered preventive care.',
//     src: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=2070&auto=format&fit=crop',
//   },
//   {
//     name: 'Dr. Ayesha Khan',
//     title: 'Consultant Cardiologist',
//     description: 'Specializes in interventional cardiology with a focus on patient-centered preventive care.',
//     src: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=2070&auto=format&fit=crop',
//   },
//   {
//     name: 'Dr. Ayesha Khan',
//     title: 'Consultant Cardiologist',
//     description: 'Specializes in interventional cardiology with a focus on patient-centered preventive care.',
//     src: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=2070&auto=format&fit=crop',
//   },
//   {
//     name: 'Dr. Ayesha Khan',
//     title: 'Consultant Cardiologist',
//     description: 'Specializes in interventional cardiology with a focus on patient-centered preventive care.',
//     src: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=2070&auto=format&fit=crop',
//   },
  
// ];

export const teamMembers = [
  
    {
      "name": "Dr. Rehan Ahmad Cheema",
      "title": "MBBS, FCS (SA)/C. Surgeon",
      "description": "Consultant Surgeon in the Surgery department.",
      "src": "https://images.unsplash.com/photo-1576091160550-21735c29a8a6?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8c3VyZ2VvbnxlbnwwfHx8fDE3MjUwMjE3MjR8MA"
    },
    {
      "name": "Dr. Zeeshan Ahmad Cheema",
      "title": "MBBS, MCPS, FCPS (Eye)",
      "description": "Consultant Ophthalmologist in the Eye department.",
      "src": "https://images.unsplash.com/photo-1582234036980-0a1f0a28f73b?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8b3BocGhhbG1vbG9neXxlbnwwfHx8fDE3MjUwMjE3NTJ8MA"
    },
    {
      "name": "Dr. Shabbir Shahid",
      "title": "MBBS, DLO, MCPS (ENT)",
      "description": "Consultant ENT Specialist in the ENT department.",
      "src": "https://images.unsplash.com/photo-1629858564177-380387a6d884?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZW50JTIwZG9jdG9yfGVufDB8fHx8MTcyNTAyMTc4NHww"
    },
    {
      "name": "Dr. Rehan Cheema",
      "title": "MBBS, FCPS (Gynaecology)",
      "description": "Consultant Obstetrician & Gynaecologist.",
      "src": "https://images.unsplash.com/photo-1588636284377-526b701c9c7f?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG9ic3RldHJpY3N8ZW58MHx8fHwxNzI1MDIxODA3fDA"
    },
    {
      "name": "Dr. Faezhan Ahmad",
      "title": "MBBS, MCPS, FCPS (Gynaecology)",
      "description": "Consultant Obstetrician & Gynaecologist.",
      "src": "https://images.unsplash.com/photo-1549419163-146313b2c24f?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGZlbWFsZSUyMGRvY3RvcnxlbnwwfHx8fDE3MjUwMjE4MzZ8MA"
    },
    {
      "name": "Dr. Muhammad Asghar",
      "title": "MBBS, DipCard, MRCP (UK), FRCP (London)",
      "description": "Consultant Cardiologist in the Cardiology department.",
      "src": "https://images.unsplash.com/photo-1551076805-e366a64c4857?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Y2FyZGlvbG9neXxlbnwwfHx8fDE3MjUwMjE4NjN8MA"
    },
    {
      "name": "Dr. Imran Altaf",
      "title": "MBBS, FCPS (Neurosurgery)",
      "description": "Consultant Neuro Surgeon.",
      "src": "https://images.unsplash.com/photo-1579684385140-5e87a2a1975b?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG5ldXJvc3VyZ2VyeXxlbnwwfHx8fDE3MjUwMjE4ODV8MA"
    },
    {
      "name": "Dr. Sohail Nasir",
      "title": "MBBS, FCPS (Medicine, Gastroenterology)",
      "description": "Consultant Physician & Gastroenterologist.",
      "src": "https://images.unsplash.com/photo-1616422839210-91a52b88b7cc?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8Z2FzdHJvZW50ZXJvbG9neXxlbnwwfHx8fDE3MjUwMjE5MTB8MA"
    },
    {
      "name": "Dr. Shehzad Anwar",
      "title": "MBBS, FCPS (Urology)",
      "description": "Urologist and Professor.",
      "src": "https://images.unsplash.com/photo-1627993047248-18e0018d9f1b?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fHVyb2xvZ3l8ZW58MHx8fHwxNzI1MDIxOTM2fDA"
    },
    {
      "name": "Dr. Javed Iqbal",
      "title": "MBBS, MD",
      "description": "Skin Specialist.",
      "src": "https://images.unsplash.com/photo-1570172600287-21a117b9b5a1?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fGRlcm1hdG9sb2d5fGVufDB8fHx8MTcyNTAyMTk2M3ww"
    },
    {
      "name": "Dr. Altaf Hussain Mughal",
      "title": "MBBS, MS, Anesthesia",
      "description": "Consultant Anaesthetist.",
      "src": "https://images.unsplash.com/photo-1576091160394-c764b85c2196?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fGFuYWVzdGhlc2lhfGVufDB8fHx8MTcyNTAyMjAxMXww"
    }
  
]


export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

