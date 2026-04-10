/**
 * script.js – Fashion Club Menswear
 * Dark & Luxury Edition
 */

/* ============================================================
   1. PRODUCT DATA
   ============================================================ */

const PRODUCT_DATA = {

  shirts: {
    label: 'Shirts',
    products: [
      { brand: 'Burberry', image: "images/shirts/shirt1.jpeg", name: 'Lacoste Classic Shirt' },
      { brand: 'Burberry', image: "images/shirts/shirt2.jpeg", name: 'Polo Oxford Shirt' },
      { brand: 'Burberry', image: "images/shirts/shirt3.jpeg", name: 'US Polo Assn. Shirt' },
      { brand: 'Lacoste', image: "images/shirts/shirt4.jpeg", name: 'Burberry Classic Shirt' },
      { brand: 'Lacoste', image: "images/shirts/shirt5.jpeg", name: 'Burberry Check Shirt' },
      { brand: 'Lacoste', image: "images/shirts/shirt6.jpeg", name: 'Lacoste Slim Fit' },
      { brand: 'Lacoste', image: "images/shirts/shirt7.jpeg", name: 'Lacoste Casual Shirt' },
      { brand: 'Lacoste', image: "images/shirts/shirt8.jpeg", name: 'Lacoste Formal Shirt' },
      { brand: 'Lacoste', image: "images/shirts/shirt9.jpeg", name: 'Lacoste Linen Shirt' },
      { brand: 'Lacoste', image: "images/shirts/shirt10.jpeg", name: 'Polo Striped Shirt' },
      { brand: 'Polo', image: "images/shirts/shirt11.jpeg", name: 'Burberry Printed Shirt' },
      { brand: 'Polo', image: "images/shirts/shirt12.jpeg", name: 'US Polo Denim Shirt' },
      { brand: 'Polo', image: "images/shirts/shirt13.jpeg", name: 'Lacoste Sport Shirt' },
      { brand: 'US Polo', image: "images/shirts/us-polo1.jpg", name: 'US Polo Polo Shirt' },
      { brand: 'US Polo', image: "images/shirts/us-polo3.jpg", name: 'US Polo Casual Shirt' },
      { brand: 'US Polo', image: "images/shirts/us-polo4.webp", name: 'US Polo Slim Shirt' },
    ]
  },

  tshirts: {
    label: 'T-Shirts',
    products: [
      { brand: 'Sim Boutique', image: "images/t-shirts/tshit7.jpeg", name: 'Drop Shoulder T-Shirt' },
      { brand: 'Sim Boutique', image: "images/t-shirts/tshit8.jpeg", name: 'Round Neck Printed T-Shirt' },
      { brand: 'Premium', image: "images/t-shirts/tshit1.jpeg", name: 'Essential T-Shirt' },
      { brand: 'Slim Fit', image: "images/t-shirts/tshit2.webp", name: 'Graphic T-Shirt' },
      { brand: 'Round Neck', image: "images/t-shirts/tshit3.webp", name: 'Classic T-Shirt' },
      { brand: 'Oversized', image: "images/t-shirts/tshit4.webp", name: 'Slim Fit T-Shirt' },
      { brand: 'Drop Shoulder', image: "images/t-shirts/tshit5.webp", name: 'Premium T-Shirt' },
      { brand: 'Printed', image: "images/t-shirts/tshit6.webp", name: 'Oversized T-Shirt' },
    ]
  },

  pants: {
    label: 'Pants',
    products: [
      { brand: 'Slim Chino', image: "images/pants/pants1.jpeg", name: 'Slim Chino Pants' },
      { brand: 'Scratch Jeans', image: "images/pants/pants2.jpeg", name: 'Classic Formal Trousers' },
      { brand: 'Armani', image: "images/pants/aarmani pants.jpg", name: 'Armani Pants' },
      { brand: 'Multi Pockets', image: "images/pants/multipockets.webp", name: 'Multi Pockets Pants' },
    ]
  },

  nightpants: {
    label: 'Night Pants',
    products: [
      { brand: 'Fashion Club', image: "images/night_pants/nightpant1.jpeg", name: 'Cotton Night Pants' },
      { brand: 'Fashion Club', image: "images/night_pants/nightpant2.jpeg", name: 'Printed Pyjama Set' },
      { brand: 'Fashion Club', image: "images/night_pants/nightpant3.jpeg", name: 'Striped Night Pants' },
      { brand: 'Fashion Club', image: "images/night_pants/nightpant4.jpeg", name: 'Comfort Lounge Pants' },
      { brand: 'Fashion Club', image: "images/night_pants/nightpant5.jpeg", name: 'Flannel Night Pants' },
      { brand: 'Fashion Club', image: "images/night_pants/nightpant6.jpeg", name: 'Drawstring Sleep Pants' },
      { brand: 'Fashion Club', image: "images/night_pants/nightpant7.jpeg", name: 'Elastic Waist Night Pants' },
      { brand: 'Fashion Club', image: "images/night_pants/nightpant8.jpeg", name: 'Checkered Pyjama' },
    ]
  },

  shoes: {
    label: 'Shoes',
    products: [
      { brand: 'Nike', image: "images/shoes/shoes1.jpeg", name: 'Nike Air Max' },
      { brand: 'Nike', image: "images/shoes/shoes2.jpeg", name: 'Nike Revolution' },
      { brand: 'Nike', image: "images/shoes/shoes3.jpeg", name: 'Nike Court Vision' },
      { brand: 'Nike', image: "images/shoes/shoes4.jpeg", name: 'Nike Downshifter' },
      { brand: 'Nike', image: "images/shoes/shoes5.jpeg", name: 'Nike Pegasus' },
      { brand: 'Nike', image: "images/shoes/shoes6.jpeg", name: 'Nike Vomero' },
      { brand: 'Nike', image: "images/shoes/shoes7.jpeg", name: 'Nike Structure' },
    ]
  },

  slippers: {
    label: 'Slippers',
    products: [
      { brand: 'Comfort Slides', image: "images/slippers/slipper1.jpeg", name: 'Comfort Slides' },
      { brand: 'Hitcolus', image: "images/slippers/slipper2.jpeg", name: 'Hitcolus Comfort Slipper' },
      { brand: 'Addoxy', image: "images/slippers/slipper3.jpeg", name: 'Addoxy Classic Flip Flop' },
      { brand: 'Addoxy', image: "images/slippers/slipper4.jpeg", name: 'Addoxy Premium Slide' },
    ]
  },

  sunglasses: {
    label: 'Sunglasses',
    products: [
      { brand: 'Fashion Club', image: 'images/sunglasses/sunglass1.jpg', name: 'Aviator Sunglasses' },
      { brand: 'Fashion Club', image: 'images/sunglasses/sunglass2.jpg', name: 'Wayfarer Sunglasses' },
      { brand: 'Fashion Club', image: 'images/sunglasses/sunglasss3.jpg', name: 'Round Frame Sunglasses' },
      { brand: 'Fashion Club', image: 'images/sunglasses/sunglass4.jpg', name: 'Sport Wrap Sunglasses' },
      { brand: 'Fashion Club', image: 'images/sunglasses/sunglass5.jpg', name: 'Oversized Sunglasses' },
      { brand: 'Fashion Club', image: 'images/sunglasses/sunglass6.jpg', name: 'Square Frame Sunglasses' },
      { brand: 'Fashion Club', image: 'images/sunglasses/sunglass7.jpg', name: 'Cat Eye Sunglasses' },
      { brand: 'Fashion Club', image: 'images/sunglasses/sunglass8.jpg', name: 'Retro Sunglasses' },
    ]
  },

  undergarments: {
    label: 'Undergarments',
    products: [
      { brand: 'Calvin Klein', image: 'images/undergarments/calvinclein.jpg', name: 'Calvin Klein Cotton Brief' },
      { brand: 'Lux Cozi', image: 'images/undergarments/luxcozi.jpg', name: 'Lux Cozi Trunk' },
      { brand: 'Macho', image: 'images/undergarments/macho.jpg', name: 'Macho Athletic Brief' },
      { brand: 'Printed Boxers', image: 'images/undergarments/printed.jpg', name: 'Printed Boxers' },
    ]
  },

  watches: {
    label: 'Watches',
    products: [
      { brand: 'Fashion Club', image: "images/watches/watch1.jpeg", name: 'Classic Analogue Watch' },
      { brand: 'Fashion Club', image: "images/watches/watch2.jpeg", name: 'Minimalist Leather Strap' },
      { brand: 'Fashion Club', image: "images/watches/watch3.jpeg", name: 'Sport Chronograph' },
      { brand: 'Fashion Club', image: "images/watches/watch4.jpeg", name: 'Steel Mesh Bracelet Watch' },
      { brand: 'Fashion Club', image: "images/watches/watch5.jpeg", name: 'Day-Date Luxury Watch' },
      { brand: 'Fashion Club', image: "images/watches/watch6.jpeg", name: 'Diver Automatic Watch' },
      { brand: 'Fashion Club', image: "images/watches/watch7.jpeg", name: 'Slim Dress Watch' },
      { brand: 'Fashion Club', image: "images/watches/watch8.jpeg", name: 'Pilot Chronograph Watch' },
    ]
  },

  hoodies: {
    label: 'Hoodies',
    products: [
      { brand: 'Fashion Club', image: "images/hoodies/hoodies1.jpeg", name: 'Oversized Drop Shoulder Hoodie' },
      { brand: 'Fashion Club', image: "images/hoodies/hoodies2.jpeg", name: 'Pullover Fleece Hoodie' },
      { brand: 'Fashion Club', image: "images/hoodies/hoodies3.jpeg", name: 'Zip-Up Graphic Hoodie' },
      { brand: 'Fashion Club', image: "images/hoodies/hoodies4.jpeg", name: 'Minimal Logo Hoodie' },
      { brand: 'Fashion Club', image: "images/hoodies/hoodies5.jpeg", name: 'Classic Zip Hoodie' },
    ]
  },

  loafers: {
    label: 'Loafers',
    products: [
      { brand: 'Classic', image: "images/loafers/loafer1.jpeg", name: 'Classic Penny Loafer' },
      { brand: 'Suede', image: "images/loafers/loafer2.jpeg", name: 'Suede Tassel Loafer' },
      { brand: 'Leather', image: "images/loafers/loafer3.jpeg", name: 'Leather Driving Loafer' },
      { brand: 'Casual', image: "images/loafers/loafer4.jpeg", name: 'Casual Slip-On Loafer' },
      { brand: 'Horsebit', image: "images/loafers/loafer5.jpeg", name: 'Horsebit Loafer' },
      { brand: 'Venetian', image: "images/loafers/loafer6.jpeg", name: 'Venetian Loafer' },
      { brand: 'Monk Strap', image: "images/loafers/loafer7.jpeg", name: 'Monk Strap Loafer' },
      { brand: 'Oxford', image: "images/loafers/loafer8.jpeg", name: 'Oxford Loafer' },
      { brand: 'Moccasin', image: "images/loafers/loafer9.jpeg", name: 'Moccasin Loafer' },
      { brand: 'Boat Shoe', image: "images/loafers/loafer10.jpeg", name: 'Boat Shoe Loafer' },
      { brand: 'Chelsea', image: "images/loafers/loafer11.jpeg", name: 'Chelsea Loafer' },
      { brand: 'Derby', image: "images/loafers/loafer12.jpeg", name: 'Derby Loafer' },
      { brand: 'Wingtip', image: "images/loafers/loafer13.jpeg", name: 'Wingtip Loafer' },
    ]
  }

};


/* ============================================================
   2. CUSTOM CURSOR & PROGRESS BAR
   ============================================================ */

const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');
const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('mousemove', (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Outline with a slight delay
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 500, fill: "forwards" });
});

// Cursor Hover Effects
const interactiveEls = document.querySelectorAll('a, button, .category-card, .product-card');
interactiveEls.forEach(el => {
  el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
});

// Scroll Progress
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  scrollProgress.style.width = scrolled + "%";
});


/* ============================================================
   3. NAVIGATION – SCROLL EFFECT & ACTIVE LINK
   ============================================================ */

const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveNavLink();
});

function updateActiveNavLink() {
  const sectionIds = ['home', 'products', 'offers', 'contact'];
  let currentSection = 'home';

  sectionIds.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.4) {
      currentSection = id;
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === currentSection);
  });
}


/* ============================================================
   3. HAMBURGER MENU TOGGLE
   ============================================================ */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navMenu.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});


/* ============================================================
   5. MAGNETIC BUTTONS (Utility)
   ============================================================ */

const magneticBtns = document.querySelectorAll('.btn-primary, .btn-back');

magneticBtns.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = `translate(0px, 0px)`;
  });
});


/* ============================================================
   6. CATEGORY CARD CLICKS → SHOW PRODUCT DETAILS
   ============================================================ */

const categoryCards = document.querySelectorAll('.category-card');
const productDetailsSection = document.getElementById('product-details');
const categoriesSection = document.getElementById('products');
const detailsLabel = document.getElementById('details-label');
const detailsTitle = document.getElementById('details-title');
const productsGrid = document.getElementById('products-grid');

function openCategory(categoryKey) {
  const data = PRODUCT_DATA[categoryKey];
  if (!data) return;

  detailsLabel.textContent = 'Our Collection';
  detailsTitle.textContent = data.label;

  renderProducts(data.products);

  categoriesSection.classList.add('hidden');
  productDetailsSection.classList.remove('hidden');

  scrollToSection('product-details');
}

categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    const key = card.getAttribute('data-category');
    openCategory(key);
  });
});


/* ============================================================
   6. RENDER PRODUCT CARDS
   ============================================================ */

function renderProducts(products) {
  productsGrid.innerHTML = '';

  products.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('aria-label', `${product.brand} – ${product.name}`);

    card.innerHTML = `
      <p class="product-brand">${escapeHTML(product.brand)}</p>
      <div class="product-img-wrap" data-ph="${escapeHTML(product.name)}">
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          class="product-img"
          loading="lazy"
          onerror="handleProductImgError(this)"
        />
        <div class="product-img-placeholder">
          <span class="ph-icon">👔</span>
          <span class="ph-text">${escapeHTML(product.name)}</span>
        </div>
      </div>
    `;

    productsGrid.appendChild(card);
  });
}

function handleProductImgError(imgEl) {
  imgEl.style.display = 'none';
  imgEl.closest('.product-img-wrap').classList.add('img-placeholder');
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(String(str)));
  return div.innerHTML;
}


/* ============================================================
   7. BACK BUTTON
   ============================================================ */

const btnBack = document.getElementById('btn-back');

btnBack.addEventListener('click', () => {
  productDetailsSection.classList.add('hidden');
  categoriesSection.classList.remove('hidden');
  scrollToSection('products');
});


/* ============================================================
   9. SCROLL-TRIGGERED ENTRANCE ANIMATIONS (Staggered)
   ============================================================ */

const revealElements = document.querySelectorAll('.section-header, .categories-grid, .contact-card, .offer-inner, .footer-brand');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.classList.add('reveal-on-scroll');
  revealObserver.observe(el);
});

// Category cards specifically staggered
const catCards = document.querySelectorAll('.category-card');
catCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
  revealObserver.observe(card);
});


/* ============================================================
   9. SMOOTH SCROLL HELPER
   ============================================================ */

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;
  const navHeight = navbar.getBoundingClientRect().height;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top: targetTop, behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      scrollToSection(targetId);
    }
  });
});


/* ============================================================
   10. KEYBOARD ACCESSIBILITY
   ============================================================ */

categoryCards.forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const key = card.getAttribute('data-category');
      openCategory(key);
    }
  });
});


/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  updateActiveNavLink();
});