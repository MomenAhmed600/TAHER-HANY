const translations = {
  ar: {
    logo: "طاهر&هاني",
    "logo-2": "المكتب القانوني",
    "m-home": "الرئيسية",
    "m-about": "من نحن",
    "m-services": "خدماتنا",
    "m-team": "فريق العمل",
    "m-contact": "اتصل بنا",
    "m-Areas": "مجالات الممارسة",
    "h1-t": "سيادة القانون.. أمان لمستقبلكم",
    "h1-d":
      "نحن نوفر لعملائنا أفضل الاستشارات القانونية والتمثيل القضائي بخبرة تزيد عن 25 عاماً.",
    "h2-t": "حماية قانونية متكاملة للشركات",
    "h2-d":
      "نرافق نمو أعمالكم بخطوات قانونية ثابتة، موفرين بيئة آمنة لاستثماراتكم.",
    "btn-consult": "احجز استشارة فورية",
    "a-title": "تاريخ من التميز والنزاهة",
    "st-1": "قضية ناجحة",
    "st-2": "سنة خبرة",
    "st-4": "سرية تامة",
    "home-p1":
      "تأسس مكتب النخبة للمحاماة ليكون منارة للعدالة في المنطقة، حيث نجمع بين الأصالة القانونية والحلول العصرية المبتكرة.",
    "a-p1":
      "نحن مكتب محاماة رائد متخصص في تقديم الحلول القانونية المبتكرة. نجمع بين الخبرة التقليدية والأساليب الحديثة.",
    "a-p2":
      "رؤيتنا تتجاوز مجرد كسب القضايا، نحن نسعى لبناء بيئة قانونية آمنة تساهم في تحقيق الاستقرار.",
    "s-title": "خدماتنا القانونية",
    "s1-t": "القانون البحري والشحن",
    "s1-d":
      "يقدم مكتبنا خدمات متكاملة في مجال القانون البحري، بما في ذلك نزاعات الشحن، التأمين البحري، وعقود الاستئجار.",
    "s2-t": "قانون الشركات والتجارة الدولية",
    "s2-d":
      "خدمات متكاملة تشمل الاندماج والاستحواذ، إدارة الشركات، والنزاعات التجارية الدولية العابرة للحدود.",
    "s3-t": "الجمارك والخدمات الضريبية",
    "s3-d":
      "تمثيل الموكلين أمام كافة السلطات الجمركية والضريبية، وحل النزاعات المعقدة المتعلقة بالتعريفات الجمركية.",
    "view-all": "عرض جميع الخدمات",
    "tm-1": "د. محمد المنصوري",
    "tm-1-pos": "الشريك المؤسس",
    "tm-2": "أ. سارة كامل",
    "tm-2-pos": "رئيس قسم التقاضي",
    "tm-3": "أ. خالد يسري",
    "tm-3-pos": "مستشار قانوني أول",
    "c-d": "نحن هنا للإجابة على تساؤلاتكم وتوفير الدعم القانوني اللازم.",
    "c-addr": "برج النخبة، حي المال والأعمال، القاهرة",
    "f-name": "الاسم الكامل",
    "f-email": "البريد الإلكتروني",
    "f-msg": "تفاصيل الاستشارة",
    "footer-copy": "جميع الحقوق محفوظة لمكتب النخبة للمحاماة © 2024",
  },
  en: {
    logo: "TAHER & HANY",
    "logo-2": "LEGAL FIRM",
    "m-home": "Home",
    "m-about": "About Us",
    "m-services": "Our Services",
    "m-team": "Our Team",
    "m-contact": "Contact Us",
    "m-Areas": "Areas of Practice",
    "h1-t": "Rule of Law, Secure Future",
    "h1-d":
      "We provide our clients with the best legal advice and representation with over 25 years of experience.",
    "h2-t": "Full Legal Protection for Corporations",
    "h2-d":
      "We accompany your business growth with firm legal steps, ensuring a safe environment for your investments.",
    "btn-consult": "Book Consultation",
    "a-title": "History of Excellence & Integrity",
    "st-1": "Successful Cases",
    "st-2": "Years Experience",
    "st-4": "Confidentiality",
    "home-p1":
      "Elite Law Firm was founded to be a legal lighthouse in the region, combining legal tradition with modern innovative solutions.",
    "a-p1":
      "We are a leading law firm specializing in providing innovative legal solutions. We combine tradition with modern methods.",
    "a-p2":
      "Our vision goes beyond winning cases; we aim to build a secure legal environment contributing to social stability.",
    "s-title": "Our Legal Services",
    "s1-t": "Maritime & Shipping Law",
    "s1-d":
      "Our firm provides comprehensive services in maritime law, including shipping disputes, insurance, and charter parties.",
    "s2-t": "Corporate Law & International Trade",
    "s2-d":
      "Our firm provides services worldwide in respect of commercial arrangements, mergers, acquisitions, and regulatory issues.",
    "s3-t": "Customs & Tax Services",
    "s3-d":
      "Representing clients before customs and tax authorities and resolving complex tariff disputes.",
    "view-all": "View All Services",
    "tm-1": "Dr. Mohamed Mansouri",
    "tm-1-pos": "Founding Partner",
    "tm-2": "Ms. Sarah Kamel",
    "tm-2-pos": "Head of Litigation",
    "tm-3": "Mr. Khalid Yousry",
    "tm-3-pos": "Senior Associate",
    "c-d":
      "We are here to answer your questions and provide the necessary legal support.",
    "c-addr": "Elite Tower, Business District, Cairo",
    "f-name": "Full Name",
    "f-email": "Email Address",
    "f-msg": "Consultation Details",
    "footer-copy": "© 2024 ELITE LAW FIRM. ALL RIGHTS RESERVED.",
  },
};
let currentLang = "ar";

// async function loadPage(pageName) {
//   const contentArea = document.getElementById("content-area");
//   try {
//     const response = await fetch(`pages/${pageName}.html`);
//     if (!response.ok) throw new Error("Page not found");
//     const html = await response.text();
//     contentArea.innerHTML = html;

//     applyTranslations();
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   } catch (error) {
//     contentArea.innerHTML =
//       "<p class='text-center py-20'>حدث خطأ في تحميل الصفحة.</p>";
//   }
// }

// دالة تحميل الصفحات ديناميكياً
async function loadPage(pageName) {
  const contentArea = document.getElementById("content-area");
  try {
    const response = await fetch(`pages/${pageName}.html`);
    if (!response.ok) throw new Error("Page not found");
    const html = await response.text();
    contentArea.innerHTML = html;

    applyTranslations();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    contentArea.innerHTML =
      "<p class='text-center py-20'>حدث خطأ في تحميل الصفحة.</p>";
  }
}

function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = currentLang;

  applyTranslations();

  document.getElementById("lang-btn").textContent =
    currentLang === "ar" ? "English" : "العربية";
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
}

// تشغيل الـ Accordion للخدمات
window.toggleAccordion = function (header) {
  const item = header.parentElement;
  item.classList.toggle("active");
};

// تحميل الصفحة الرئيسية عند البداية
window.onload = () => loadPage("home");

let currentSlide = 0;

window.moveCarousel = function (direction) {
  const slides = document.querySelectorAll(".carousel-item");
  if (slides.length === 0) return;

  // إخفاء السلايد الحالي
  slides[currentSlide].classList.remove("active");

  // حساب السلايد الجديد
  currentSlide = (currentSlide + direction + slides.length) % slides.length;

  // إظهار السلايد الجديد
  slides[currentSlide].classList.add("active");
};

// اختياري: تشغيل تلقائي كل 5 ثواني
setInterval(() => {
  if (document.querySelector(".carousel-item")) {
    moveCarousel(1);
  }
}, 4000);

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) {
    menu.classList.toggle("hidden");
    // إضافة أنيميشن بسيط عند الفتح
    if (!menu.classList.contains("hidden")) {
      menu.style.animation = "fadeIn 0.3s ease-out";
    }
  }
}
