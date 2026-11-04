import educationImg from '../assets/education.jpg';
import healthcareImg from '../assets/healthcare.jpg';
import womenEmpowermentImg from '../assets/women-empowerment.jpg';
import hungerReliefImg from '../assets/hunger-relief.jpg';
import cleanWaterImg from '../assets/clean-water.jpg';
import elderlyCareImg from '../assets/elderly-care.jpg';
import meeraSorenImg from '../assets/Meera Soren.jpg';
import devakiBaiImg from '../assets/Devaki Bai.jpg';
import rajuSunitaImg from '../assets/Raju & Sunita.jpg';

export const ngoConfig = {
  name: "Samarpan Foundation",
  tagline: "Empowering Lives, Restoring Dignity",
  legalName: "Samarpan Socio-Educational & Welfare Trust",
  establishedYear: 2011,
  regNumber: "REG/MH/2011/48912",
  panNumber: "AAATS9218F",
  darpanId: "MH/2011/0087412",
  taxExemption: "Approved under Section 80G & 12A of Income Tax Act",
  fcraNumber: "FCRA Reg. 083781290",
  phone: "+91 (022) 2894-0199",
  emergencyHelp: "+91 98200 12345",
  email: "care@samarpanfoundation.org",
  address: "Sector 14, Vasant Kunj Heritage Enclave, New Delhi - 110070",
  bankDetails: {
    bankName: "State Bank of India",
    accountName: "Samarpan Socio-Educational Trust",
    accountNumber: "3892010049281",
    ifscCode: "SBIN0004092",
    branch: "Connaught Place, New Delhi"
  }
};

export const causesData = [
  {
    id: "education",
    category: "Education",
    title: "Project Vidya: Girl Child STEM & Higher Education",
    subtitle: "Empowering first-generation girls from tribal hamlets with laptops, STEM labs, and college tuition.",
    image: educationImg,
    raised: 2840000,
    goal: 3500000,
    donorsCount: 1420,
    daysLeft: 18,
    impactUnit: "₹1,800 sponsors 1 girl's digital STEM & study kit",
    tags: ["STEM Education", "Girls Empowerment", "Digital Labs"],
    featured: true
  },
  {
    id: "healthcare",
    category: "Healthcare",
    title: "Aarogya Vahini: Rural Mobile Medical Vans",
    subtitle: "Bringing free diagnostic tests, maternal screening, and emergency medicines to 45 cut-off villages.",
    image: healthcareImg,
    raised: 4120000,
    goal: 5000000,
    donorsCount: 2310,
    daysLeft: 24,
    impactUnit: "₹2,500 funds health checkups & medicine for 10 villagers",
    tags: ["Mobile Clinic", "Maternal Health", "Free Medicine"],
    featured: true
  },
  {
    id: "women-empowerment",
    category: "Livelihood",
    title: "Sakhi Swavalamban: Women's Artisan Guild",
    subtitle: "Training 1,200 rural widows and single mothers in handloom weaving, organic farming, and financial literacy.",
    image: womenEmpowermentImg,
    raised: 1950000,
    goal: 2200000,
    donorsCount: 890,
    daysLeft: 31,
    impactUnit: "₹3,500 sponsors 1 artisan sewing machine & skill training",
    tags: ["Micro-Finance", "Handloom Guild", "Dignified Livelihood"],
    featured: false
  },
  {
    id: "hunger-relief",
    category: "Nutrition",
    title: "Annapurna Seva: Warm Meals for Hospital Attendants & Children",
    subtitle: "Serving 2,500 freshly cooked, hygienic, calorie-dense warm meals every day outside cancer and general public hospitals.",
    image: hungerReliefImg,
    raised: 3750000,
    goal: 4000000,
    donorsCount: 3105,
    daysLeft: 12,
    impactUnit: "₹1,200 delivers 30 hot nutritious meals to hospital families",
    tags: ["Zero Hunger", "Hospital Support", "Nutritious Food"],
    featured: true
  },
  {
    id: "clean-water",
    category: "Environment",
    title: "Jal Jeevan: Solar Wells & Clean Water in Drought Belts",
    subtitle: "Installing solar-powered deep filtration pumps to stop waterborne disease outbreaks in remote arid zones.",
    image: cleanWaterImg,
    raised: 2100000,
    goal: 2800000,
    donorsCount: 940,
    daysLeft: 42,
    impactUnit: "₹5,000 provides clean solar-filtered water for 25 homes",
    tags: ["Clean Water", "Solar Powered", "Disease Prevention"],
    featured: false
  },
  {
    id: "elderly-care",
    category: "Elderly Care",
    title: "Sanjeevani: Dignified Assisted Living for Abandoned Seniors",
    subtitle: "Providing warm shelter, round-the-clock nursing, physical rehabilitation, and companionship for destitute seniors.",
    image: elderlyCareImg,
    raised: 1680000,
    goal: 2000000,
    donorsCount: 760,
    daysLeft: 27,
    impactUnit: "₹4,000 sponsors 1 month senior living & palliative care",
    tags: ["Palliative Care", "Senior Dignity", "Shelter & Love"],
    featured: false
  }
];

export const impactStatsData = [
  { value: "450,000+", label: "Nutritious Meals Served", detail: "Prepared fresh daily with audited hygiene standards" },
  { value: "34,200+", label: "Children Enrolled in Schools", detail: "With 96% retention through high school completion" },
  { value: "185+", label: "Vulnerable Villages Supported", detail: "Integrated health, sanitation and drinking water systems" },
  { value: "88.4%", label: "Direct Ground Allocation", detail: "Every ₹100 audited by leading chartered accountants" }
];

export const impactCalculatorTiers = [
  {
    amount: 750,
    title: "Child Nutrition & Immunity Kit",
    description: "Provides protein supplements, micronutrients, and deworming medicine for 3 malnourished toddlers for 60 days.",
    taxDeduction: 375,
    mealsCount: 25,
    beneficiaries: "3 Children"
  },
  {
    amount: 1500,
    title: "Student Learning & Digital Kit",
    description: "Provides school bag, bilingual textbooks, geometry sets, and 3 months of evening community tuition for 1 student.",
    taxDeduction: 750,
    mealsCount: 50,
    beneficiaries: "1 Student"
  },
  {
    amount: 3500,
    title: "Maternal Health & Diagnostic Support",
    description: "Full prenatal ultrasounds, iron-folic supplements, and emergency ambulance transport coverage for a rural expecting mother.",
    taxDeduction: 1750,
    mealsCount: 110,
    beneficiaries: "Mother & Newborn"
  },
  {
    amount: 7500,
    title: "Women's Micro-Enterprise Startup Kit",
    description: "High-grade industrial sewing machine, initial raw cloth fabric roll, and 12-week artisan certification training.",
    taxDeduction: 3750,
    mealsCount: 250,
    beneficiaries: "1 Woman Entrepreneur"
  },
  {
    amount: 15000,
    title: "Village Solar Water Filtration Plant",
    description: "Supplies community-level biosand and reverse osmosis filters delivering potable disease-free drinking water to 50 families.",
    taxDeduction: 7500,
    mealsCount: 500,
    beneficiaries: "50 Rural Families"
  }
];

export const storiesData = [
  {
    id: 1,
    name: "Meera Soren",
    age: 17,
    location: "Purulia, West Bengal",
    role: "First-Generation Polytechnic Scholar",
    quote: "Until Samarpan's Vidya center opened in our hamlet, my family believed girls should only collect firewood. Today, I am studying electrical engineering on a 100% scholarship.",
    impact: "Passed 12th Board with 91.4% | Future Micro-grid Engineer",
    image: meeraSorenImg,
    causeType: "Education"
  },
  {
    id: 2,
    name: "Devaki Bai",
    age: 44,
    location: "Barmer, Rajasthan",
    role: "President, Thar Handloom Cooperative",
    quote: "When drought wiped out our crops, we had zero income. The Sakhi guild taught us traditional mirror-work and connected us directly to ethical fashion buyers. I now employ 18 women in my village.",
    impact: "Earns ₹22,000/month | Sent both daughters to nursing college",
    image: devakiBaiImg,
    causeType: "Livelihood"
  },
  {
    id: 3,
    name: "Raju & Sunita",
    age: 32,
    location: "Solapur, Maharashtra",
    role: "Beneficiaries of Mobile Aarogya Vahini",
    quote: "When my twin babies fell critically ill with pneumonia during monsoons, no bus was running. The Samarpan mobile clinic doctor arrived with pediatric oxygen and saved their lives without asking for a single rupee.",
    impact: "Both babies fully recovered | Regular monthly pediatric checkups",
    image: rajuSunitaImg,
    causeType: "Healthcare"
  }
];

export const financialBreakdown = [
  { category: "Direct Ground Social Programs", percentage: 88.4, color: "#0A3323", amount: "₹14.28 Crores", description: "Teacher stipends, medical supplies, mobile clinics, food grains, and artisan equipment" },
  { category: "Governance, Audit & Field Operations", percentage: 6.8, color: "#145239", amount: "₹1.10 Crores", description: "Field coordinator monitoring, third-party impact auditing, and compliance reporting" },
  { category: "Fundraising & Donor Accountability", percentage: 4.8, color: "#C98B2C", amount: "₹0.77 Crores", description: "Payment gateway fees, secure server management, and 80G tax receipt automation" }
];

export const trusteesData = [
  {
    name: "Dr. Radhika V. Sharma",
    role: "Managing Trustee & Co-Founder",
    credentials: "MD, AIIMS New Delhi | Former WHO Public Health Consultant",
    bio: "Over 28 years designing community health systems for tribal and remote rural clusters."
  },
  {
    name: "Shri K. S. Ramanathan, IAS (Retd.)",
    role: "Trustee, Governance & Ethics",
    credentials: "Former Secretary, Ministry of Rural Development",
    bio: "Oversees zero-leakage compliance, statutory audits, and institutional governance."
  },
  {
    name: "Prof. Ananya Sen",
    role: "Director of Educational Initiatives",
    credentials: "PhD in Education, TISS Mumbai | Fulbright Scholar",
    bio: "Pioneered accelerated learning curriculums currently utilized across 120 rural learning pods."
  }
];

export const faqsData = [
  {
    question: "Is my donation eligible for 80G Tax Exemption?",
    answer: "Yes, 100%! Samarpan Foundation is officially registered under Section 80G of the Indian Income Tax Act. Indian citizens and entities can claim up to 50% deduction on taxable income. Your digitally signed 80G Tax Exemption Certificate and Form 10BE will be emailed to you within 24 hours of your contribution."
  },
  {
    question: "How do I know my donation is genuinely reaching beneficiaries?",
    answer: "We publish quarterly audited utilization certificates, geotagged photo reports, and annual statements verified by independent chartered accountants. In addition, registered donors receive personalized WhatsApp and email impact reports showing the exact village and child their contribution helped."
  },
  {
    question: "Can I donate from outside India (FCRA)?",
    answer: "Yes. Samarpan Foundation is fully registered under the Foreign Contribution Regulation Act (FCRA Reg. 083781290) and maintains an official State Bank of India New Delhi FCRA designated bank account to accept contributions in USD, EUR, GBP, AUD, and SGD."
  },
  {
    question: "Can I visit your project sites or meet the children?",
    answer: "Absolutely. We maintain an open-door policy for all patrons, well-wishers, and potential volunteers. You can schedule a guided visit to our Vidya Learning Centers, Mobile Clinic routes, or Women's Artisan Guild in New Delhi, Maharashtra, or West Bengal by reaching out to care@samarpanfoundation.org."
  },
  {
    question: "How do I volunteer or contribute non-monetary skills?",
    answer: "We welcome passionate individuals across digital marketing, curriculum drafting, medical volunteering, field workshops, and legal advisory. Simply click 'Join as Volunteer' in our navigation bar or footer to submit your profile."
  }
];

export const partnersData = [
  { name: "Tata CSR Initiative", type: "Grant Partner" },
  { name: "Infosys Social Impact", type: "Technology Partner" },
  { name: "GiveIndia Foundation", type: "Accredited Non-Profit" },
  { name: "State Bank of India", type: "Banking & FCRA Rail" },
  { name: "GuideStar India Platinum", type: "Transparency Seal" },
  { name: "Razorpay Rize", type: "Zero-Fee Gateway" }
];

