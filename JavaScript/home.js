
// Code for featured project data
let currentZoom = 100, currentPage = 1, currentPDF = '';

function openLocationMap(location) {
    if (location == 'Nimgoan Malungi') {
        window.open('https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3592.201746922758!2d74.20243457519612!3d18.700172382428583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQyJzAwLjYiTiA3NMKwMTInMTguMCJF!5e1!3m2!1sen!2sin!4v1762788095440!5m2!1sen!2sin', '_blank');
    } else if (location === 'Sanasawadi') {
        window.open('https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3593.182934832184!2d74.09911677519486!3d18.653881682465833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM5JzE0LjAiTiA3NMKwMDYnMDYuMSJF!5e1!3m2!1sen!2sin!4v1762531094522!5m2!1sen!2sin', '_blank');
    }else if(location == 'Kasari'){
        window.open('https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1162.0325808491118!2d74.19025489411202!3d18.692080553070827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e9!4m3!3m2!1d18.6487549!2d73.7444596!4m3!3m2!1d18.6918538!2d74.1920408!5e1!3m2!1sen!2sin!4v1762968353567!5m2!1sen!2sin', '_blank')
    }
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
        Contact_No: "+91 9595857072",
        images: ["img/bg-img/GD1.jpg", "img/bg-img/GD2.jpg", "img/bg-img/GD3.jpg"],
        description: "\"आदित्य सिटी\" मध्ये घराला घर, जमिनीला जमीन! सनसवाडीच्या हिरव्यागार वातावरणात, आपल्या स्वप्नांची निवासी जागा. उत्तम सोयी, विकसित परिसर आणि शहराच्या मुख्य भागाशी चांगले रस्ते संपर्क.",
        pdf: "pdf/DINGRAJWADI NA-Model.pdf",
        propertyType: "residential",
        TotalArea : "1000 Sq.Ft. to 5000 Sq.Ft.",
        Amenities : "24/7 Water Supply, Gated Community, Children's Play Area, Landscaped Gardens, Security",
        Status : "Available",
        NearbyLandmarks : "",

    },
    2: {
        name: "SaiKrupa Park",
        rate: "600 / Sq. Ft.",
        location: "Nimgoan Malungi",
        Contact_No: "+91 9595857072",
        images: ["img/NimgoanMalungi/NM1.jpg"],
        description: "\"साईकृपा पार्क\" मध्ये स्वस्त दरात उत्तम जागा! निमगाव मालुंगी येथील शांत वातावरणात आपले स्वतःचे घर बांधण्याची संधी. मूलभूत सोयी, स्वच्छ पाणीपुरवठा आणि चांगली वाहतूक सुविधा.",
        pdf: "pdf/NIMGAON991 FINAL-Model.pdf",
        propertyType: "residential",
        TotalArea : "1000 Sq.Ft. to 5000 Sq.Ft.",
        Amenities : "24/7 Water Supply, Gated Community, Children's Play Area, Landscaped Gardens, Security",
        Status : "Available",
        NearbyLandmarks : "",
    },
    3: {
        name: "Jijai Park",
        rate: "1499 / Sq. Ft.",
        location: "Sanaswadi",
        Contact_No: "+91 9595857072",
        images: ["img/bg-img/GD2.jpg"],
        description: "\"जिजाई पार्क, सनसवाडीच्या नैसर्गिक सौंदर्यात बांधण्यात आलेली ही निवासी संधी आपल्या कुटुंबासाठी परिपूर्ण आहे. आधुनिक सुविधा आणि शांत वातावरणाच्या सान्निध्यात वाढणारा एक संपूर्ण जीवनशैली अनुभव.",
        pdf: "pdf/JijaiPark.pdf",
        propertyType: "residential",
        TotalArea : "1000 Sq.Ft. to 5000 Sq.Ft.",
        Amenities : "24/7 Water Supply, Gated Community, Children's Play Area, Landscaped Gardens, Security",
        Status : "Available",
        NearbyLandmarks : "",
    },
    4: {
        name: "Aditya City 4",
        rate: "1800/ Sq. Ft.",
        location: "Sanaswadi",
        Contact_No: "+91 9595857072",
        images: ["img/bg-img/GD4.jpg", "img/bg-img/GD5.jpg", "img/bg-img/GD6.jpg"],
        description: "\"आदित्य सिटी 4\" मध्ये लक्झरी अपार्टमेंट्स आणि विला. स्विमिंग पूल, जिम, बागा आणि इतर प्रीमियम सुविधांसह उच्च दर्जाची राहणी.",
        pdf: "pdf/DINGRAJWADI NA-Model3.pdf",
        propertyType: "residential",
        TotalArea : "1000 Sq.Ft. to 5000 Sq.Ft.",
        Amenities : "24/7 Water Supply, Gated Community, Children's Play Area, Landscaped Gardens, Security",
        Status : "Available",
        NearbyLandmarks : "",
    },
    5: {
        name: "Aditya City 5",
        rate: "1800/ Sq. Ft.",
        location: "Sanaswadi",
        Contact_No: "+91 9595857072",
        images: ["img/bg-img/GD5.jpg", "img/bg-img/GD6.jpg", "img/bg-img/GD1.jpg"],
        description: "\"आदित्य सिटी 5\" हा व्यावसायिक आणि निवासी दोन्ही उद्देशांसाठी उत्तम. दुकाने, ऑफिसे आणि रहिवासी अपार्टमेंट्सचे मिश्रण. व्यवसाय आणि घर एकाच ठिकाणी.",
        pdf: "pdf/DINGRAJWADI NA-Model4.pdf"
    },
    6: {
        name: "Aditya City 6",
        rate: "1800/ Sq. Ft.",
        location: "Sanaswadi",
        Contact_No: "+91 9595857072",
        images: ["img/bg-img/GD6.jpg", "img/bg-img/GD1.jpg", "img/bg-img/GD2.jpg"],
        description: "\"आदित्य सिटी 6\" मध्ये इको-फ्रेंडली डिझाइन आणि टिकाऊ बांधकाम. ऊर्जा कार्यक्षमता, पावनापाणी संग्रहण आणि हरित क्षेत्रांसह पर्यावरणास अनुकूल रहिवासी परिसर.",
        pdf: "pdf/DINGRAJWADI NA-Model5.pdf",
        propertyType: "residential",
        TotalArea : "1000 Sq.Ft. to 5000 Sq.Ft.",
        Amenities : "24/7 Water Supply, Gated Community, Children's Play Area, Landscaped Gardens, Security",
        Status : "Available",
        NearbyLandmarks : "",
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
    document.getElementById('contactNumber').textContent = project.Contact_No;
    document.getElementById('propertyType').textContent = project.propertyType;
    document.getElementById('totalArea').textContent = project.TotalArea;
    document.getElementById('amenities').textContent = project.Amenities;
    document.getElementById('status').textContent = project.Status;
    document.getElementById('nearbyLandmarks').textContent = project.NearbyLandmarks;

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
document.addEventListener('DOMContentLoaded', function () {
    // View Details buttons
    viewDetailBtns.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            const projectId = index + 1;
            openProjectPopup(projectId);
        });
    });

    // Close popup
    closePopupBtn.addEventListener('click', closeProjectPopup);

    // Close popup when clicking outside
    projectPopup.addEventListener('click', function (e) {
        if (e.target === projectPopup) {
            closeProjectPopup();
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && projectPopup.style.display === 'flex') {
            closeProjectPopup();
        }
    });

    // Slider dots
    document.querySelectorAll('.slider-dot').forEach(dot => {
        dot.addEventListener('click', function () {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
        });
    });

    // Start auto slide
    startAutoSlide();
});











// Enquiry form function (you can implement this)
// Enquiry Form Elements
const enquiryPopup = document.getElementById('enquiryPopup');
const closeEnquiryPopupBtn = document.getElementById('closeEnquiryPopup');
const enquiryForm = document.getElementById('enquiryForm');
let currentProjectName = '';
let projectName = '';

// Open Enquiry Form
function openEnquiryForm(project) {
    projectName = project;
    currentProjectName = document.getElementById('projectName').textContent;
    document.getElementById('enquiryProjectName').textContent = projectName;
    document.getElementById('enquiryAreaName').value = projectName;

    
    // Close project popup and open enquiry popup
    closeProjectPopup();
    
    // Show enquiry popup
    enquiryPopup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    let areaName = document.getElementById('areaName');
    areaName.value = project;
    // Add animation
    setTimeout(() => {
        enquiryPopup.classList.add('active');
    }, 10);
    
    // Reset form
    resetEnquiryForm();
}

// Close Enquiry Form
function closeEnquiryForm() {
    enquiryPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
    enquiryPopup.classList.remove('active');
    resetEnquiryForm();
}

// Reset Enquiry Form
function resetEnquiryForm() {
    enquiryForm.reset();
    clearErrors();
    hideSuccessMessage();
}

// Clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
    });
    
    const errorInputs = document.querySelectorAll('.form-input.error, .form-textarea.error');
    errorInputs.forEach(input => {
        input.classList.remove('error');
    });
}

// Show error for specific field
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    field.classList.add('error');
    errorElement.textContent = message;
}

// Hide error for specific field
function hideError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId + 'Error');
    
    field.classList.remove('error');
    errorElement.textContent = '';
}

// Show success message
function showSuccessMessage() {
    let successDiv = document.querySelector('.success-message');
    if (!successDiv) {
        successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <strong>Thank You!</strong> Your enquiry has been submitted successfully. We'll contact you shortly.
        `;
        enquiryForm.parentNode.insertBefore(successDiv, enquiryForm);
    }
    successDiv.classList.add('show');
}

// Hide success message
function hideSuccessMessage() {
    const successDiv = document.querySelector('.success-message');
    if (successDiv) {
        successDiv.classList.remove('show');
    }
}

// Validation functions
function validateName(name) {
    if (!name.trim()) {
        return 'Name is required';
    }
    if (name.trim().length < 2) {
        return 'Name must be at least 2 characters long';
    }
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
        return 'Name can only contain letters and spaces';
    }
    return '';
}

function validateMobile(mobile) {
    if (!mobile.trim()) {
        return 'Mobile number is required';
    }
    if (!/^[0-9]{10}$/.test(mobile.trim())) {
        return 'Please enter a valid 10-digit mobile number';
    }
    return '';
}

function validateEmail(email) {
    if (!email.trim()) {
        return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
        return 'Please enter a valid email address';
    }
    return '';
}

function validateAddress(address) {
    if (address.trim() && address.trim().length < 10) {
        return 'Address should be at least 10 characters long';
    }
    return '';
}

// Real-time validation
document.addEventListener('DOMContentLoaded', function() {
    // Name validation
    document.getElementById('enquiryName').addEventListener('blur', function() {
        const error = validateName(this.value);
        if (error) {
            showError('enquiryName', error);
        } else {
            hideError('enquiryName');
        }
    });

    // Mobile validation
    document.getElementById('enquiryMobile').addEventListener('blur', function() {
        const error = validateMobile(this.value);
        if (error) {
            showError('enquiryMobile', error);
        } else {
            hideError('enquiryMobile');
        }
    });

    // Email validation
    document.getElementById('enquiryEmail').addEventListener('blur', function() {
        const error = validateEmail(this.value);
        if (error) {
            showError('enquiryEmail', error);
        } else {
            hideError('enquiryEmail');
        }
    });

    // Address validation
    document.getElementById('enquiryAddress').addEventListener('blur', function() {
        const error = validateAddress(this.value);
        if (error) {
            showError('enquiryAddress', error);
        } else {
            hideError('enquiryAddress');
        }
    });
});

// Event Listeners for Enquiry Form
closeEnquiryPopupBtn.addEventListener('click', closeEnquiryForm);

enquiryPopup.addEventListener('click', function(e) {
    if (e.target === enquiryPopup) {
        closeEnquiryForm();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && enquiryPopup.style.display === 'flex') {
        closeEnquiryForm();
    }
});

// Update your existing Contact Now button to use this function
function updateContactButtons() {
    const contactButtons = document.querySelectorAll('.enquiry-btn');
    contactButtons.forEach(button => {
        button.setAttribute('onclick', 'openEnquiryForm(' + data + ')');
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateContactButtons();
});

// End of Enquiry form code