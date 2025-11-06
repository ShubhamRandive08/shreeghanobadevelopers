// Property data categorized by type
    const properties = {
        newest: [
            {
                id: 1,
                title: "Modern Villa in Los Angeles",
                location: "Upper Road 3411, no.34 CA",
                price: "$945,679",
                description: "Brand new modern villa with panoramic views, spacious interiors and luxury amenities.",
                image: "img/bg-img/GD1.jpg",
                bathrooms: 2,
                garage: 2,
                space: "120 sq ft",
                tag: "new"
            },
            {
                id: 2,
                title: "Luxury Apartment in Beverly Hills",
                location: "Rodeo Drive 123, Beverly Hills",
                price: "$1,250,000",
                description: "Newly built luxury apartment with high-end finishes and premium location.",
                image: "img/bg-img/GD22.jpg",
                bathrooms: 3,
                garage: 2,
                space: "180 sq ft",
                tag: "new"
            },
            {
                id: 3,
                title: "Contemporary Home in Santa Monica",
                location: "Ocean Avenue 567, Santa Monica",
                price: "$1,100,000",
                description: "Just listed contemporary home with open floor plan and energy-efficient features.",
                image: "img/bg-img/GD2.jpg",
                bathrooms: 3,
                garage: 2,
                space: "190 sq ft",
                tag: "new"
            },
            {
                id: 4,
                title: "Modern Townhouse in West Hollywood",
                location: "Sunset Boulevard 456, West Hollywood",
                price: "$1,550,000",
                description: "New construction modern townhouse with rooftop terrace and designer finishes.",
                image: "img/bg-img/GD3.jpg",
                bathrooms: 4,
                garage: 2,
                space: "210 sq ft",
                tag: "new"
            },
            {
                id: 5,
                title: "Hillside Retreat in Topanga",
                location: "Topanga Canyon Road 789, Topanga",
                price: "$1,850,000",
                description: "Newly built hillside retreat with stunning canyon views and modern design.",
                image: "img/bg-img/GD4.jpg",
                bathrooms: 3,
                garage: 2,
                space: "240 sq ft",
                tag: "new"
            },
            {
                id: 6,
                title: "Urban Loft in Arts District",
                location: "3rd Street 456, Arts District",
                price: "$1,350,000",
                description: "Newly converted industrial loft with exposed brick and high ceilings.",
                image: "img/bg-img/GD5.jpg",
                bathrooms: 2,
                garage: 1,
                space: "160 sq ft",
                tag: "new"
            }
        ],
        completed: [
            {
                id: 7,
                title: "Modern House in Malibu",
                location: "Coastal Highway 456, Malibu",
                price: "$875,000",
                description: "Recently completed modern house with ocean views and contemporary design.",
                image: "img/bg-img/GD6.jpg",
                bathrooms: 4,
                garage: 3,
                space: "220 sq ft",
                tag: "completed"
            },
            {
                id: 8,
                title: "Townhouse in Downtown LA",
                location: "Main Street 101, Downtown LA",
                price: "$750,000",
                description: "Recently completed townhouse in the heart of downtown with modern amenities.",
                image: "img/bg-img/GD8.jpg",
                bathrooms: 2,
                garage: 1,
                space: "140 sq ft",
                tag: "completed"
            },
            {
                id: 9,
                title: "Family Home in Pasadena",
                location: "Green Street 303, Pasadena",
                price: "$950,000",
                description: "Recently completed family home with spacious backyard and modern kitchen.",
                image: "img/bg-img/GD9.jpg",
                bathrooms: 3,
                garage: 2,
                space: "200 sq ft",
                tag: "completed"
            },
            {
                id: 10,
                title: "Luxury Condo in Beverly Hills",
                location: "Wilshire Boulevard 789, Beverly Hills",
                price: "$2,100,000",
                description: "Newly completed luxury condo with premium amenities and concierge service.",
                image: "img/bg-img/GD10.jpg",
                bathrooms: 3,
                garage: 2,
                space: "180 sq ft",
                tag: "completed"
            },
            {
                id: 11,
                title: "Mediterranean Villa in Hancock Park",
                location: "Rossmore Avenue 123, Hancock Park",
                price: "$3,750,000",
                description: "Recently completed Mediterranean villa with original details and modern updates.",
                image: "img/bg-img/GD11.jpg",
                bathrooms: 5,
                garage: 3,
                space: "380 sq ft",
                tag: "completed"
            },
            {
                id: 12,
                title: "Mid-Century Modern in Palm Springs",
                location: "North Palm Canyon Drive 567, Palm Springs",
                price: "$1,950,000",
                description: "Recently completed mid-century modern home with mountain views and pool.",
                image: "img/bg-img/GD12.jpg",
                bathrooms: 4,
                garage: 2,
                space: "280 sq ft",
                tag: "completed"
            }
        ],
        featured: [
            {
                id: 13,
                title: "Luxury Villa in Hollywood Hills",
                location: "Hillside Avenue 789, Hollywood",
                price: "$2,350,000",
                description: "Featured luxury villa with infinity pool, home theater and smart home system.",
                image: "img/bg-img/GD13.jpg",
                bathrooms: 5,
                garage: 4,
                space: "350 sq ft",
                tag: "featured"
            },
            {
                id: 14,
                title: "Penthouse in Century City",
                location: "Avenue of Stars 202, Century City",
                price: "$3,200,000",
                description: "Featured penthouse with panoramic city views, private terrace and luxury finishes.",
                image: "img/bg-img/GD14.jpg",
                bathrooms: 4,
                garage: 3,
                space: "280 sq ft",
                tag: "featured"
            },
            {
                id: 15,
                title: "Oceanfront Estate in Malibu",
                location: "Pacific Coast Highway 123, Malibu",
                price: "$5,750,000",
                description: "Exclusive featured property with private beach access and stunning ocean views.",
                image: "img/bg-img/GD15.jpg",
                bathrooms: 6,
                garage: 4,
                space: "450 sq ft",
                tag: "featured"
            },
            {
                id: 16,
                title: "Architectural Masterpiece in Bel Air",
                location: "Bel Air Road 456, Bel Air",
                price: "$8,500,000",
                description: "Award-winning architectural home featured in design magazines.",
                image: "img/bg-img/GD16.jpg",
                bathrooms: 7,
                garage: 5,
                space: "520 sq ft",
                tag: "featured"
            },
            {
                id: 17,
                title: "Beach Bungalow in Venice",
                location: "Speedway 234, Venice Beach",
                price: "$2,850,000",
                description: "Featured charming beach bungalow steps from the ocean with rooftop deck.",
                image: "img/bg-img/GD17.jpg",
                bathrooms: 3,
                garage: 1,
                space: "180 sq ft",
                tag: "featured"
            },
            {
                id: 18,
                title: "Modern Farmhouse in Silver Lake",
                location: "Micheltorena Street 345, Silver Lake",
                price: "$2,150,000",
                description: "Featured contemporary farmhouse with pool and city views in trendy neighborhood.",
                image: "img/bg-img/GD18.jpg",
                bathrooms: 4,
                garage: 2,
                space: "260 sq ft",
                tag: "featured"
            }
        ]
    };

    // Initialize the application
    function init() {
        // Load properties for each category
        loadProperties('newest', properties.newest);
        loadProperties('completed', properties.completed);
        loadProperties('featured', properties.featured);
        
        // Setup navigation for each row
        setupRowNavigation('newest');
        setupRowNavigation('completed');
        setupRowNavigation('featured');
    }

    // Load properties into a specific row
    function loadProperties(category, propertyList) {
        const container = document.getElementById(`${category}Properties`);
        
        propertyList.forEach(property => {
            const propertyElement = createPropertyElement(property);
            container.appendChild(propertyElement);
        });
    }

    // Create property element
    function createPropertyElement(property) {
        const propertyDiv = document.createElement('div');
        propertyDiv.className = 'single-featured-property';
        
        propertyDiv.innerHTML = `
            <div class="property-thumb">
                <img src="${property.image}" alt="${property.title}">
                <div class="tag ${property.tag}">
                    <span>${property.tag === 'new' ? 'New' : property.tag === 'completed' ? 'Completed' : 'Featured'}</span>
                </div>
                <div class="list-price">
                    <p class="price-highlight">${property.price}</p>
                </div>
            </div>
            <div class="property-content">
                <h5>${property.title}</h5>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                <p>${property.description}</p>
                <div class="property-meta-data">
                    <div class="bathroom">
                        <i class="fas fa-bath"></i>
                        <span>${property.bathrooms}</span>
                    </div>
                    <div class="garage">
                        <i class="fas fa-car"></i>
                        <span>${property.garage}</span>
                    </div>
                    <div class="space">
                        <i class="fas fa-vector-square"></i>
                        <span>${property.space}</span>
                    </div>
                </div>
            </div>
        `;
        
        return propertyDiv;
    }

    // Setup navigation for a specific row
    function setupRowNavigation(category) {
        const scrollContainer = document.getElementById(`${category}Properties`);
        const prevBtn = document.getElementById(`${category}Prev`);
        const nextBtn = document.getElementById(`${category}Next`);
        
        const scrollAmount = 320; // Width of property card + gap
        
        prevBtn.addEventListener('click', () => {
            scrollContainer.scrollLeft -= scrollAmount;
        });
        
        nextBtn.addEventListener('click', () => {
            scrollContainer.scrollLeft += scrollAmount;
        });
        
        // Update button states based on scroll position
        scrollContainer.addEventListener('scroll', () => {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
            
            // Enable/disable previous button
            prevBtn.disabled = scrollLeft === 0;
            
            // Enable/disable next button
            nextBtn.disabled = scrollLeft >= scrollWidth - clientWidth - 10;
        });
        
        // Initial button state
        prevBtn.disabled = true;
    }

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', init);