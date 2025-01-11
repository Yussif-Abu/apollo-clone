import  {Frame1, Frame2, Frame3, Frame4,Apollo,ask_apollo,Blood_Studies,Circle_Banner,consult,
    Diabetes,DT_Banner_2,Heart,image665,InsuranceIcon,MedicineIcon,monsoon,URLife_Banner,
    URLife_Banner_1,rightarrow,protein_supplements_1,blog_image1,blog_image2,blog_image3,blog_image4,blog_image5,blog_image6} from "../assets/images";

 import { labtest, ui_consult,genuineProducts,fullyreliable,secure_payment } from "../assets/icons";
    export const navLinks = [
    { href: "#BuyMedicines", label: "Buy Medicines" },
    { href: "#FindDoctors", label: "Find Doctors" },
    { href: "#LabTests", label: "Lab Tests" },
    { href: "#CircleMembership", label: "Circle Membership" },
    { href: "#DiabetesReversals", label: "Diabetes Reversal" },
    { href: "#HealthInsurancet", label: "Health Insurance", badge: "Explore" },
];


export const slidesData = [
    {
      id: 1,
      img:Frame1,
    //   bgColor: "bg-blue-500",
    },
    {
      id: 2,
      img:Frame2,
    //   bgColor: "bg-green-500",
    },
    {
      id: 3,
      img:Frame3,
    //   bgColor: "bg-red-500",
    },
    {
        id: 4,
        img:Frame4,
      //   bgColor: "bg-red-500",
      },
  ];
  export const testslides= [
    {
      id: 1,
      img:image665,
    //   bgColor: "bg-blue-500",
    },
    {
      id: 2,
      img:URLife_Banner_1,
    //   bgColor: "bg-green-500",
    },
  ];

  export const pharmacy = [
    {
      id: 1,
      title: "Buy Medicines & Essentials",
      tag: "24HRS DELIVERY",
      img:MedicineIcon,
    //   bgColor: "bg-blue-500",
    },
    {
      id: 2,
        title: "Doctors Appointment",
        tag: "BOOK NOW",
      img:ui_consult,
    //   bgColor: "bg-green-500",
    },
    {
      id: 3,
        title: "Lab Tests",
        tag: "AT HOME",
      img:labtest,
    //   bgColor: "bg-red-500",
    },
    {
        id: 4,
        title: "Insurance",
        tag: "EXPLORE PLANS",
        img:InsuranceIcon,
      //   bgColor: "bg-red-500",
      },
  ];

  export const health = [
    {
      id: 1,
      img:consult,
    //   bgColor: "bg-blue-500",
    },
    {
      id: 2,
      img:URLife_Banner,
    //   bgColor: "bg-green-500",
    },
    {
      id: 3,
      img:Apollo,
    //   bgColor: "bg-red-500",
    },
    {
        id: 4,
        img:monsoon,
      //   bgColor: "bg-red-500",
      },
  ];
  export const categories = [
    { id: 1, name: "Health Monitors", image: protein_supplements_1 },
    { id: 2, name: "Ayurvedic Diabetes Care", image:protein_supplements_1 },
    { id: 3, name: "Pain Relief", image:protein_supplements_1},
    { id: 4, name: "Baby Care", image:protein_supplements_1 },
    { id: 5, name: "Nutritional Drinks & Supplements", image:protein_supplements_1},
    { id: 6, name: "Adult Diapers", image:protein_supplements_1},
    { id: 7, name: "Vitamins & Minerals", image:protein_supplements_1},
    { id: 8, name: "Protein Powders & Drinks", image:protein_supplements_1},
    { id: 9, name: "Summer Essentials", image:protein_supplements_1},
    { id: 10, name: "Home Medical Supplies", image: protein_supplements_1},
    { id: 11, name: "Intimate Care", image: protein_supplements_1},
    { id: 12, name: "Skin & Hair Care", image: protein_supplements_1},
  ];

  export const tests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      details: "29 Tests Included",
      price: "₹430",
      originalPrice: "₹573",
      discount: "25% off",
      cashback: "₹86 cashback",
      icon: Blood_Studies
    },
    {
      id: 2,
      name: "HbA1c, Glycated Hemoglobin",
      details: "3 Tests Included",
      price: "₹610",
      originalPrice: "₹813",
      discount: "25% off",
      cashback: "₹122 cashback",
      icon: Diabetes
    },
    {
      id: 3,
      name: "Glucose, Fasting",
      details: "1 Test Included",
      price: "₹90",
      originalPrice: "₹120",
      discount: "25% off",
      cashback: "₹18 cashback",
      icon: Diabetes
    },
    {
      id: 4,
      name: "Lipid Profile",
      details: "8 Tests Included",
      price: "₹800",
      originalPrice: "₹1067",
      discount: "25% off",
      cashback: "₹180 cashback",
      icon: Heart
    },
  ];

  export const blogs = [
    {
      image:blog_image1,
      title:
        "Understanding Post-Prandial Blood Sugar (PPBS): What's the Normal Range, Procedure and Results",
      author: "By Apollo 24|7",
      date: "07.01.25",
    },
    {
      image: blog_image2,
      title:
        "RFT Test: Normal Range, Purpose, Procedure and Results",
      author: "By Apollo 24|7",
      date: "07.01.25",
    },
    {
      image: blog_image3,
      title:
        "Urea and Creatinine Test: Normal Range, Procedure, and Results",
      author: "By Apollo 24|7",
      date: "07.01.25",
    },
    {
      image: blog_image4,
      title:
        "Understanding Bleeding Time (BT) and Clotting Time (CT) Normal Range",
      author: "",
      date: "06.01.25",
    },
    {
      image:blog_image5,
      title:
        "Understanding Platelet (PLT) Normal Range and its Importance in Health",
      author: "",
      date: "06.01.25",
    },
    {
        image:blog_image6,
        title:
          "Understanding Platelet (PLT) Normal Range and its Importance in Health",
        author: "",
        date: "06.01.25",
      },
  ];

  export const trust = [
    {
        image: secure_payment,
        title:"Secure Payment",
      },
      {
        image: fullyreliable,
        title:"Trusted By 8 Core Indian"
      },
      {
        image: genuineProducts,
        title:"Genuine Products"
      },
     
  ]

  export const FooterLinks = [
    {
      title: "About Apollo 24|7",
      items: [
        "About Us",
        "Contact Us / Grievance",
        "FAQs",
        "Health Queries",
        "Terms and Conditions",
        "Returns Policy",
        "Refund Policy",
        "Privacy Policy",
        "Apollo 24|7 Android App",
        "Apollo 24|7 iOS App",
        "Corporate Disclosures",
        "Apollo 24|7 Sitemap",
        "Online Doctor App",
        "Online Medicine App",
        "Apollo Pharmacy",
        "Hospitals And Clinics",
        "Disease and Conditions",
        "Blogs",
        "Lab Tests Queries",
        "Diagnostics Centres",
      ],
    },
    {
      title: "Services",
      items: [
        "Online Doctor Consultation",
        "Apollo Circle Membership",
        "Online Medicines",
        "Cough Scanner",
        "Apollo Pro Health Program",
        "Doctors by Specialty",
        "Doctors by City",
        "All Doctors List",
        "Apollo Diabetes Reversal",
        "International Patients Login",
      ],
    },
    {
      title: "Top Specialties",
      items: [
        "Covid Consultation",
        "Consult Physicians",
        "Consult Dermatologists",
        "Consult Paediatricians",
        "Consult Gynaecologists",
        "Consult Gastroenterologists",
        "Consult Cardiologists",
        "Consult Dietitians",
        "Consult ENT Specialists",
        "Consult Geriatricians",
        "Consult Diabetologists",
      ],
    },
    {
      title: "Book Lab Tests at Home",
      items: [
        "RT PCR Test At Home",
        "Book Lab Tests at Home",
        "Renal Profile (KFT, RFT Test)",
        "Hemogram Test",
        "Lipid Profile Test",
        "Thyroid Profile Test (T3 T4 TSH Test)",
        "D Dimer Test",
        "Urine Culture Test",
        "Complete Blood Count (CBC Test)",
        "Widal Test",
        "Liver Function Test (LFT Test)",
      ],
    },
    {
      title: "Product Categories",
      items: [
        "View All Brands",
        "Health Care",
        "Personal Care",
        "Baby Care",
        "Nutrition",
        "Healthcare Devices",
        "Beauty Skin Care",
        "Immunity Boosters",
        "Coronavirus Prevention",
        "Diabetes Care",
        "Patanjali Coronil Kit",
        "Mamaearth Products",
      ],
    },
    {
      title: "Top Hospitals",
      items: [
        "Apollo Hospital Jubilee Hills",
        "Apollo Hospitals Greams Road",
        "Indraprastha Apollo Hospital",
        "Apollo Hospitals Bannerghatta Road",
        "Apollo Hospital - Belapur, Navi Mumbai",
        "Apollo Hospitals Canal Circular Road",
      ],
    },
  ];
  