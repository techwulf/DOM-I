const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navbar = document.querySelectorAll('nav a');
navbar.forEach(
  (element, index) => 
    element.textContent = siteContent.nav[`nav-item-${index+1}`]
);
const ctaH1 = document.querySelector('section.cta h1');
ctaH1.textContent = siteContent.cta.h1;
const ctaButton = document.querySelector('section.cta button');
ctaButton.textContent = siteContent.cta.button;
const ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent.cta['img-src']);

const articleKeys = Object.keys(siteContent['main-content']);
articleKeys.splice(4,1);
const articles = document.querySelectorAll('.main-content .text-content p');
const headers = document.querySelectorAll('.main-content .text-content h4');
const artContent = articleKeys.filter(item => item.includes('content'));
const headContent = articleKeys.filter(item => item.includes('h4'));
for(let i=0;i<articles.length;i++){
  articles[i].textContent = siteContent['main-content'][artContent[i]];
  headers[i].textContent = siteContent['main-content'][headContent[i]];
}
const mcImage = siteContent['main-content']['middle-img-src'];
document.querySelector('#middle-img').src = mcImage;

const contactTitle = document.querySelector('section.contact h4');
const contactItems = document.querySelectorAll('section.contact p');
const itemKeys = Object.keys(siteContent.contact).filter(
  item => !(item.includes('h4'))
);
contactTitle.textContent = siteContent.contact['contact-h4'];
for (let i=0;i<itemKeys.length;i++){
  contactItems[i].textContent = siteContent.contact[itemKeys[i]];
}
document.querySelector('footer p').textContent = siteContent.footer.copyright;

// Add content
const navbarBase = document.querySelector('nav');
const navItemOne = document.createElement('a');
navItemOne.href = '#';
navItemOne.textContent = 'AAAAAA';
const navItemTwo = document.createElement('a');
navItemTwo.href = '#';
navItemTwo.textContent = 'AAAAAA';
navbarBase.appendChild(navItemOne);
navbarBase.appendChild(navItemTwo);
document.querySelectorAll('header nav a').forEach(
  item => item.style.color = 'green'
);