export const services = [
  {
    slug: 'cardiology',
    name: 'Cardiology',
    emoji: '⚕️',
    shortDescription: 'Heart health specialists.',
    heroDescription:
      'Comprehensive cardiac care including diagnostics, interventional cardiology, and cardiac rehabilitation.',
    highlights: [
      'Non-invasive and invasive diagnostics',
      '24/7 emergency cardiac care',
      'Post-operative cardiac rehab programs',
    ],
    faqs: [
      {
        q: 'What cardiac tests are available?',
        a: 'We offer ECG, ECHO, TMT, Holter monitoring, and advanced imaging as needed.',
      },
      {
        q: 'Do you have pediatric cardiology?',
        a: 'Yes, pediatric cardiology consultations are available by appointment.',
      },
    ],
  },
  {
    slug: 'general-surgery',
    name: 'General Surgery',
    emoji: '🏥',
    shortDescription: 'Expert surgical team.',
    heroDescription:
      'Broad range of surgical procedures with a focus on minimally invasive techniques and fast recovery.',
    highlights: [
      'Laparoscopic procedures',
      'Pre-op and post-op care',
      'Day-care surgeries',
    ],
    faqs: [
      { q: 'Are same-day discharges available?', a: 'Yes, for eligible minimally invasive procedures.' },
      { q: 'Do you accept referrals?', a: 'We accept referrals from primary care and specialists.' },
    ],
  },
  {
    slug: 'primary-care',
    name: 'Primary Care',
    emoji: '👨‍⚕️',
    shortDescription: 'Routine checkups and wellness.',
    heroDescription:
      'Comprehensive primary care for individuals and families, focusing on prevention and long-term wellness.',
    highlights: [
      'Annual physicals and screenings',
      'Chronic disease management',
      'Lifestyle and nutrition counseling',
    ],
    faqs: [
      { q: 'Can I choose a primary doctor?', a: 'Yes, you can select a preferred provider.' },
      { q: 'Do you offer telehealth?', a: 'Yes, teleconsultations are available for follow-ups.' },
    ],
  },
  {
    slug: 'women-health',
    name: "Women's Health",
    emoji: '👩‍🍼',
    shortDescription: 'Maternity and gynecological care.',
    heroDescription:
      'Dedicated services for women’s health including obstetrics, gynecology, and maternal care.',
    highlights: [
      'Prenatal and postnatal care',
      'Gynecological screenings',
      'Family planning and counseling',
    ],
    faqs: [
      { q: 'Do you have delivery suites?', a: 'Yes, with neonatal support available.' },
      { q: 'Are routine screenings available?', a: 'Pap smears, breast exams, and ultrasounds are available.' },
    ],
  },
  {
    slug: 'heart-vascular',
    name: 'Heart & Vascular',
    emoji: '🫀',
    shortDescription: 'Cardiac and blood vessel treatments.',
    heroDescription:
      'Integrated cardiovascular care including interventional cardiology and vascular surgery.',
    highlights: [
      'Cath lab and stenting',
      'Vascular surgery and endovascular care',
      'Cardiac rehab programs',
    ],
    faqs: [
      { q: 'Is 24/7 cath lab available?', a: 'Yes, for cardiac emergencies.' },
      { q: 'Do you offer cardiac rehab?', a: 'Yes, supervised rehabilitation is available.' },
    ],
  },
  {
    slug: 'gastro-health',
    name: 'Gastro Health',
    emoji: '🍎',
    shortDescription: 'Digestive system and nutrition care.',
    heroDescription:
      'Comprehensive gastrointestinal care including endoscopy, nutrition, and hepatology services.',
    highlights: [
      'Endoscopy and colonoscopy',
      'IBD and liver clinics',
      'Dietary counseling',
    ],
    faqs: [
      { q: 'Is bowel prep provided?', a: 'Yes, clear instructions and prep kits are provided.' },
      { q: 'Do you treat pediatric GI?', a: 'Pediatric GI consults are available by appointment.' },
    ],
  },
  {
    slug: 'neurology',
    name: 'Neurology',
    emoji: '🧠',
    shortDescription: 'Brain & nervous system care.',
    heroDescription:
      'Expert diagnosis and treatment for neurological disorders with a multidisciplinary team.',
    highlights: [
      'Stroke unit and acute management',
      'Seizure and epilepsy clinics',
      'Neurophysiology and imaging',
    ],
    faqs: [
      {
        q: 'Do you offer stroke rehabilitation?',
        a: 'Yes, comprehensive post-stroke rehabilitation and physiotherapy are available.',
      },
      {
        q: 'Can I get a second opinion?',
        a: 'Our specialists provide second opinions on complex neurological cases.',
      },
    ],
  },
  {
    slug: 'pediatrics',
    name: 'Pediatrics',
    emoji: '👶',
    shortDescription: 'Dedicated child health.',
    heroDescription:
      'Family-centered pediatric care from newborns to adolescents, including immunizations and wellness.',
    highlights: [
      'Well-child checkups and vaccinations',
      'Neonatal and infant care',
      'Pediatric emergency services',
    ],
    faqs: [
      {
        q: 'Do you offer vaccination schedules?',
        a: 'We follow WHO-recommended schedules customized to your child’s needs.',
      },
      {
        q: 'Is there a pediatric ER?',
        a: 'Yes, pediatric-trained clinicians are on call 24/7.',
      },
    ],
  },
  {
    slug: 'orthopedics',
    name: 'Orthopedics',
    emoji: '🦴',
    shortDescription: 'Joint & bone surgery.',
    heroDescription:
      'Advanced orthopedic surgery and sports medicine with minimally invasive techniques.',
    highlights: [
      'Arthroscopy and joint replacement',
      'Sports injury clinics',
      'Physiotherapy and rehab',
    ],
    faqs: [
      {
        q: 'Do you perform knee replacements?',
        a: 'Yes, including robotic-assisted procedures when indicated.',
      },
      {
        q: 'Is physiotherapy available on-site?',
        a: 'Yes, integrated physiotherapy for prehab and rehab is available.',
      },
    ],
  },
  {
    slug: 'diagnostics',
    name: 'Diagnostics',
    emoji: '🔬',
    shortDescription: 'Advanced lab services.',
    heroDescription:
      'Accurate and timely diagnostics across pathology, radiology, and advanced imaging.',
    highlights: [
      '24/7 laboratory',
      'MRI, CT, Ultrasound, X-ray',
      'Home sample collection',
    ],
    faqs: [
      {
        q: 'Can I book tests online?',
        a: 'Yes, common tests can be booked via our appointment portal.',
      },
      {
        q: 'How quickly are reports available?',
        a: 'Most reports are available within 24 hours; urgent processing possible.',
      },
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

