<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Properties | SIBL Properties</title>
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/responsive.css">
<script src="data/properties.js?v=2"></script>
</head>
<body>

<header class="site-header">
<div class="container header-inner">
<a href="index.html" class="logo"><img src="images/logo/sibl-properties-logo.png" alt="SIBL Properties" class="site-logo"></a>

<button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">☰</button>

<nav class="main-nav">
<a href="index.html">Home</a>
<a href="properties.html">Properties</a>
<a href="about.html">About Me</a>
<a href="guides.html">Guides</a>
<a href="contact.html">Contact</a>
<a href="https://wa.me/2347060988611?text=Hello%20Solomon%2C%20I%20would%20like%20to%20know%20more%20about%20your%20properties." class="whatsapp-btn" target="_blank">WhatsApp Me</a>
</nav>
</div>
</header>

<section class="section">
<div class="container">

<div class="section-heading">
<h1>Available Properties</h1>
<p>Explore current property opportunities marketed through SIBL Properties.</p>
</div>

<div class="property-filters"> <select id="location-filter"><option value="">All Locations</option></select> <select id="type-filter"><option value="">All Property Types</option></select> <select id="category-filter"><option value="">All Categories</option></select> </div>

<div class="property-grid" id="all-properties"></div>

</div>
</section>

<footer class="site-footer">
<div class="container">
<p>© 2026 SIBL Properties. Property Opportunities. Personal Guidance.</p>
</div>
</footer>

<script>
const propertyContainer = document.querySelector("#all-properties");
const locationFilter = document.querySelector("#location-filter");
const typeFilter = document.querySelector("#type-filter");
const categoryFilter = document.querySelector("#category-filter");

function getPropertyTypes() {
    const types = [];
    properties.forEach(property => {
        (property.options || []).forEach(option => {
            if (option.propertyType && !types.includes(option.propertyType)) {
                types.push(option.propertyType);
            }
        });
    });
    return types.sort();
}

function getLocations() {
    return [...new Set(properties.map(property => property.location).filter(Boolean))].sort();
}

function getCategories() {
    return [...new Set(properties.map(property => property.category).filter(Boolean))].sort();
}

function fillFilter(select, values) {
    values.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });
}

fillFilter(locationFilter, getLocations());
fillFilter(typeFilter, getPropertyTypes());
fillFilter(categoryFilter, getCategories());

function renderProperties() {
    const location = locationFilter.value;
    const type = typeFilter.value;
    const category = categoryFilter.value;

    const filtered = properties.filter(property => {
        const matchesLocation = !location || property.location === location;
        const matchesCategory = !category || property.category === category;
        const matchesType = !type || (property.options || []).some(option => option.propertyType === type);

        return matchesLocation && matchesCategory && matchesType;
    });

    if (!filtered.length) {
        propertyContainer.innerHTML = "<p>No properties match your selected filters.</p>";
        return;
    }

    propertyContainer.innerHTML = filtered.map(property => {
        const options = property.options || [];

        return `
        <article class="property-card">
            <div class="property-image">${property.images && property.images.length ? `<img src="${property.images[0]}" alt="${property.name}">` : "Property Image"}</div>
            <div class="property-body">
                <h3>${property.name}</h3>
                <div class="property-location">${property.location}</div>
                <p>${property.description}</p>
                <div class="property-types"><strong>Available:</strong> ${[...new Set(options.map(option => option.propertyType).filter(Boolean))].join(" • ")}</div>
                <div class="property-price">${options.length ? "From " + options[0].shortPlan : "Price on request"}</div>
                <h4>Available Options</h4>

                ${(options.filter(option => !type || option.propertyType === type)).map(option => `
                    <div style="padding:10px 0;border-bottom:1px solid var(--border);">
                        <strong>${option.propertyType}</strong><br>
                        <span style="font-size:14px;color:var(--gray);">
                            Short Plan: ${option.shortPlan}<br>
                            Long Plan: ${option.longPlan}
                        </span>
                    </div>
                `).join("")}

                <br>
                <a href="property.html?id=${property.id}" class="btn btn-outline-dark">View Property</a> <a href="https://wa.me/2347060988611?text=Hello%20Solomon%2C%20I%20am%20interested%20in%20${encodeURIComponent(property.name)}." class="btn btn-gold" target="_blank">Enquire on WhatsApp</a>
            </div>
        </article>`;
    }).join("");
}

locationFilter.addEventListener("change", renderProperties);
typeFilter.addEventListener("change", renderProperties);
categoryFilter.addEventListener("change", renderProperties);

renderProperties();
</script>

<script>
const menuToggle=document.querySelector(".menu-toggle");
const mainNav=document.querySelector(".main-nav");

if(menuToggle&&mainNav){
menuToggle.addEventListener("click",function(){
mainNav.classList.toggle("menu-open");
const isOpen=mainNav.classList.contains("menu-open");
menuToggle.setAttribute("aria-expanded",isOpen);
menuToggle.textContent=isOpen?"✕":"☰";
});
}
</script>

</body>
</html>
