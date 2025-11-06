
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