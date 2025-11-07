
// Code for featured project data
let currentZoom = 100, currentPage = 1, currentPDF = '';

function openLocationMap() {
    window.open('https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3592.201746922758!2d74.20243457519612!3d18.700172382428583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQyJzAwLjYiTiA3NMKwMTInMTguMCJF!5e1!3m2!1sen!2sin!4v1762355804326!5m2!1sen!2sin', '_blank');
}

function openPDFModal(pdfPath, title) {
    currentPDF = pdfPath;
    document.getElementById('pdfTitle').textContent = title + ' - Project Brochure';
    currentZoom = 100; currentPage = 1;
    updateZoom(); updatePageInfo();
    document.getElementById('pdfViewer').src = pdfPath;
    document.getElementById('pdfModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePDFModal() {
    document.getElementById('pdfViewer').src = '';
    document.getElementById('pdfModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function zoomIn() { if (currentZoom < 200) { currentZoom += 10; updateZoom(); } }
function zoomOut() { if (currentZoom > 50) { currentZoom -= 10; updateZoom(); } }
function updateZoom() {
    document.getElementById('pdfViewer').style.transform = `scale(${currentZoom / 100})`;
    document.getElementById('zoomLevel').textContent = `${currentZoom}%`;
}

function previousPage() { if (currentPage > 1) { currentPage--; updatePageInfo(); } }
function nextPage() { currentPage++; updatePageInfo(); }
function updatePageInfo() { document.getElementById('currentPage').textContent = currentPage; }

function downloadPDF() {
    const link = document.createElement('a');
    link.href = currentPDF;
    link.download = currentPDF.split('/').pop();
    link.click();
}

document.getElementById('pdfModal').addEventListener('click', function (e) {
    if (e.target === this) closePDFModal();
});

document.addEventListener('keydown', function (e) {
    const pdfModal = document.getElementById('pdfModal');
    if (pdfModal.style.display === 'flex') {
        if (e.key === 'Escape') closePDFModal();
        if (e.key === '+' || e.key === '=') zoomIn();
        if (e.key === '-') zoomOut();
        if (e.key === 'ArrowRight') nextPage();
        if (e.key === 'ArrowLeft') previousPage();
    }
});

// code for the View Details 
// Project Data
const projects = {
    1: {
        name: "Aditya City",
        rate: "1800/ Sq. Ft.",
        location: "Sanasawadi",
        images: ["img/bg-img/GD1.jpg", "img/bg-img/GD2.jpg", "img/bg-img/GD3.jpg"],
        description: "\"आदित्य सिटी\" मध्ये घराला घर, जमिनीला जमीन! सनसवाडीच्या हिरव्यागार वातावरणात, आपल्या स्वप्नांची निवासी जागा. उत्तम सोयी, विकसित परिसर आणि शहराच्या मुख्य भागाशी चांगले रस्ते संपर्क.",
        pdf: "pdf/DINGRAJWADI NA-Model.pdf"
    },
    2: {
        name: "SaiKrupa Park", 
        rate: "600 / Sq. Ft.",
        location: "Nimgoan Malungi",
        images: ["img/bg-img/GD4.jpg", "img/bg-img/GD5.jpg", "img/bg-img/GD6.jpg"],
        description: "\"साईकृपा पार्क\" मध्ये स्वस्त दरात उत्तम जागा! निमगाव मालुंगी येथील शांत वातावरणात आपले स्वतःचे घर बांधण्याची संधी. मूलभूत सोयी, स्वच्छ पाणीपुरवठा आणि चांगली वाहतूक सुविधा.",
        pdf: "pdf/NIMGAON991 FINAL-Model.pdf"
    },
    3: {
        name: "Aditya City 3",
        rate: "1800/ Sq. Ft.",
        location: "Sanaswadi",
        images: ["img/bg-img/GD3.jpg", "img/bg-img/GD1.jpg", "img/bg-img/GD2.jpg"],
        description: "\"आदित्य सिटी 3\" हा आदित्य सिटीचा नवीन टप्पा. अधिक सोयी, अधिक सुविधा आणि अधिक आरामदायी जीवनशैली. पूर्ण विकसित रहिवासी परिसर आणि आधुनिक सुविधांसह.",
        pdf: "pdf/DINGRAJWADI NA-Model2.pdf"
    },
    4: {
        name: "Aditya City 4",
        rate: "1800/ Sq. Ft.",
        location: "Sanaswadi",
        images: ["img/bg-img/GD4.jpg", "img/bg-img/GD5.jpg", "img/bg-img/GD6.jpg"],
        description: "\"आदित्य सिटी 4\" मध्ये लक्झरी अपार्टमेंट्स आणि विला. स्विमिंग पूल, जिम, बागा आणि इतर प्रीमियम सुविधांसह उच्च दर्जाची राहणी.",
        pdf: "pdf/DINGRAJWADI NA-Model3.pdf"
    },
    5: {
        name: "Aditya City 5",
        rate: "1800/ Sq. Ft.",
        location: "Sanaswadi",
        images: ["img/bg-img/GD5.jpg", "img/bg-img/GD6.jpg", "img/bg-img/GD1.jpg"],
        description: "\"आदित्य सिटी 5\" हा व्यावसायिक आणि निवासी दोन्ही उद्देशांसाठी उत्तम. दुकाने, ऑफिसे आणि रहिवासी अपार्टमेंट्सचे मिश्रण. व्यवसाय आणि घर एकाच ठिकाणी.",
        pdf: "pdf/DINGRAJWADI NA-Model4.pdf"
    },
    6: {
        name: "Aditya City 6",
        rate: "1800/ Sq. Ft.",
        location: "Sanaswadi",
        images: ["img/bg-img/GD6.jpg", "img/bg-img/GD1.jpg", "img/bg-img/GD2.jpg"],
        description: "\"आदित्य सिटी 6\" मध्ये इको-फ्रेंडली डिझाइन आणि टिकाऊ बांधकाम. ऊर्जा कार्यक्षमता, पावनापाणी संग्रहण आणि हरित क्षेत्रांसह पर्यावरणास अनुकूल रहिवासी परिसर.",
        pdf: "pdf/DINGRAJWADI NA-Model5.pdf"
    }
};

// DOM Elements
const projectPopup = document.getElementById('projectPopup');
const closePopupBtn = document.getElementById('closePopup');
const viewDetailBtns = document.querySelectorAll('.view-details-btn');

// Current slide state
let currentSlide = 0;

// Open popup function
function openProjectPopup(projectId) {
    const project = projects[projectId];
    if (!project) return;
    
    // Update popup content
    document.getElementById('projectName').textContent = project.name;
    document.getElementById('projectRate').textContent = project.rate;
    document.getElementById('projectLocation').textContent = project.location;
    document.getElementById('projectDescription').textContent = project.description;
    
    // Update PDF button
    const pdfBtn = document.getElementById('projectPdfBtn');
    pdfBtn.setAttribute('onclick', `openPDFModal('${project.pdf}', '${project.name}')`);
    
    // Load and display images
    const images = project.images;
    for (let i = 0; i < 3; i++) {
        const imgElement = document.getElementById(`projectImage${i + 1}`);
        const dotElement = document.querySelector(`.slider-dot[data-slide="${i}"]`);
        
        if (images[i]) {
            imgElement.src = images[i];
            imgElement.style.display = i === 0 ? 'block' : 'none';
            if (dotElement) {
                dotElement.classList.toggle('active', i === 0);
                dotElement.style.display = 'block';
            }
        } else {
            imgElement.style.display = 'none';
            if (dotElement) {
                dotElement.style.display = 'none';
            }
        }
    }
    
    // Reset slider
    currentSlide = 0;
    showSlide(0);
    
    // Show popup
    projectPopup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Add animation class
    setTimeout(() => {
        projectPopup.classList.add('active');
    }, 10);
}

// Close popup function
function closeProjectPopup() {
    projectPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
    projectPopup.classList.remove('active');
}

// Image slider functions
function showSlide(slideIndex) {
    const images = document.querySelectorAll('.project-image');
    const dots = document.querySelectorAll('.slider-dot');
    
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (images[slideIndex]) {
        images[slideIndex].classList.add('active');
    }
    if (dots[slideIndex]) {
        dots[slideIndex].classList.add('active');
    }
    
    currentSlide = slideIndex;
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.project-image').length;
    const nextSlide = (currentSlide + 1) % totalSlides;
    showSlide(nextSlide);
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.project-image').length;
    const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(prevSlide);
}

// Auto slide every 5 seconds
function startAutoSlide() {
    setInterval(nextSlide, 5000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // View Details buttons
    viewDetailBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const projectId = index + 1;
            openProjectPopup(projectId);
        });
    });
    
    // Close popup
    closePopupBtn.addEventListener('click', closeProjectPopup);
    
    // Close popup when clicking outside
    projectPopup.addEventListener('click', function(e) {
        if (e.target === projectPopup) {
            closeProjectPopup();
        }
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectPopup.style.display === 'flex') {
            closeProjectPopup();
        }
    });
    
    // Slider dots
    document.querySelectorAll('.slider-dot').forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
        });
    });
    
    // Start auto slide
    startAutoSlide();
});

// Enquiry form function (you can implement this)
function openEnquiryForm() {
    alert('Enquiry form will open here! You can integrate your enquiry system.');
    // You can implement a modal form or redirect to contact page
}

// Update your existing buttons to use data attributes
// Add this to your HTML buttons:
// data-project="1", data-project="2", etc.