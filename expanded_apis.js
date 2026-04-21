// =========================
// main.js — SEYRAN AI Ultimate Edition Full 2025
// Enhanced with Masonry Gallery, Full Screen, & Voice Input
// =========================

// ======== DOM ========
const chatBox = document.getElementById('chat-box');
const input = document.getElementById('input');
const sendBtn = document.getElementById('send');
const newChatBtn = document.getElementById('newChat');
const voiceBtn = document.getElementById('voice');

// ======== Voice Recognition Setup ========
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let isListening = false;

function initVoiceRecognition() {
    if (!SpeechRecognition) {
        console.warn('Speech Recognition not supported');
        if (voiceBtn) voiceBtn.disabled = true;
        return;
    }
    
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = true;
    
    recognition.onstart = () => {
        isListening = true;
        if (voiceBtn) {
            voiceBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            voiceBtn.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.6)';
        }
    };
    
    recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        input.value = transcript;
    };
    
    recognition.onend = () => {
        isListening = false;
        if (voiceBtn) {
            voiceBtn.style.background = 'rgba(56, 189, 248, 0.2)';
            voiceBtn.style.boxShadow = '0 0 0 2px rgba(56, 189, 248, 0.5)';
        }
    };
    
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        typeMessage(`Voice recognition error : ${event.error}`);
        isListening = false;
        if (voiceBtn) {
            voiceBtn.style.background = 'rgba(56, 189, 248, 0.2)';
            voiceBtn.style.boxShadow = '0 0 0 2px rgba(56, 189, 248, 0.5)';
        }
    };
}

function toggleVoice() {
    if (!recognition) {
        initVoiceRecognition();
    }
    
    if (isListening) {
        recognition.stop();
    } else {
        input.value = '';
        recognition.start();
    }
}

// ======== Lightbox Modal (Full Screen) ========
let lightboxModal = null;
let currentImageIndex = 0;
let currentImageList = [];

function initLightbox() {
    if (lightboxModal) return;
    
    lightboxModal = document.createElement('div');
    lightboxModal.id = 'lightbox-modal';
    lightboxModal.innerHTML = `
        <div class="lightbox-overlay" onclick="closeLightbox()"></div>
        <div class="lightbox-container">
            <button class="lightbox-close" onclick="closeLightbox()">✕</button>
            <button class="lightbox-prev" onclick="prevImage()">❮</button>
            <img id="lightbox-image" src="" alt="صورة مكبرة" class="lightbox-image">
            <button class="lightbox-next" onclick="nextImage()">❯</button>
            <div class="lightbox-info">
                <span id="lightbox-counter" class="lightbox-counter">1 / 1</span>
                <button class="lightbox-download" onclick="downloadImage()" title="تحميل الصورة">⬇️</button>
                <button class="lightbox-fullscreen" onclick="toggleFullscreen()" title="ملء الشاشة">⛶</button>
            </div>
        </div>
    `;
    document.body.appendChild(lightboxModal);
    addLightboxStyles();
}

function openImage(imgSrc, images) {
    initLightbox();
    currentImageList = images || [imgSrc];
    currentImageIndex = currentImageList.indexOf(imgSrc);
    if (currentImageIndex === -1) currentImageIndex = 0;
    
    lightboxModal.classList.add('active');
    updateLightboxImage();
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (lightboxModal) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function updateLightboxImage() {
    const img = document.getElementById('lightbox-image');
    const counter = document.getElementById('lightbox-counter');
    
    if (img && currentImageList[currentImageIndex]) {
        img.src = currentImageList[currentImageIndex];
        counter.textContent = `${currentImageIndex + 1} / ${currentImageList.length}`;
    }
    
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    if (prevBtn) prevBtn.disabled = currentImageIndex === 0;
    if (nextBtn) nextBtn.disabled = currentImageIndex === currentImageList.length - 1;
}

function nextImage() {
    if (currentImageIndex < currentImageList.length - 1) {
        currentImageIndex++;
        updateLightboxImage();
    }
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateLightboxImage();
    }
}

function downloadImage() {
    const link = document.createElement('a');
    link.href = currentImageList[currentImageIndex];
    link.download = `image-${currentImageIndex + 1}.jpg`;
    link.click();
}

function toggleFullscreen() {
    const img = document.getElementById('lightbox-image');
    if (img.requestFullscreen) {
        img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen();
    }
}





// =============================
// STATE
// =============================
let currentIndex = 0;
let imagesList = [];
let scale = 1;
let posX = 0;
let posY = 0;
let isDragging = false;
let startX, startY;


// =============================
// 1) STYLES
// =============================
function addLightboxStyles() {
    if (document.getElementById('lightbox-styles')) return;

    const style = document.createElement('style');
    style.id = 'lightbox-styles';

    style.innerHTML = `
        #lightbox-modal {
            display: none;
            position: fixed;
            inset: 0;
            z-index: 99999;
        }

        #lightbox-modal.active {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .lightbox-overlay {
            position: absolute;
            inset: 0;
            background:#141a2e;
        }

        .lightbox-container {
            position: relative;
            z-index: 2;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .lightbox-image {
            max-width: 100vw;
            max-height: 100vh;
            object-fit: contain;
            transform: translate(0,0) scale(1);
            transition: transform 0.15s ease;
            cursor: grab;
        }

        .lightbox-image:active {
            cursor: grabbing;
        }

        .lightbox-close {
            position: fixed;
            top: 25px;
            right: 20px;
            width: 104px;
            height: 104px;
            border-radius: 50%;
            font-size: 64px;
            color: #141a2e;
            background:white;
            border: 2px solid white;
            cursor: pointer;
            z-index: 100000;
        }

        .lightbox-counter {
            position: fixed;
            top: 20px;
            left: 20px;
            color: #141a2e;
            font-size: 32px;
            z-index: 100000;
            background:white;
            padding: 6px 12px;
            border-radius: 20px;
        }

        .nav-btn {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            font-size: 22px;
            background: rgba(0,0,0,0.5);
            color: white;
            z-index: 100000;
        }

        .prev { left: 15px; }
        .next { right: 15px; }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            grid-auto-rows: 180px;
            gap: 12px;
            padding: 12px;
        }

        .gallery-item {
            overflow: hidden;
            border-radius: 12px;
            cursor: pointer;
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.3s;
        }

        .gallery-item:hover img {
            transform: scale(1.08);
        }

        /* Scroll مسموح */
        body.lightbox-open {
            overflow: auto;
        }

        /* إخفاء كل الأزرار ما عدا الإغلاق */
        body.lightbox-open button:not(.lightbox-close) {
            display: none !important;
        }
    `;

    document.head.appendChild(style);
}


// =============================
// 2) CREATE LIGHTBOX
// =============================
function createLightbox() {
    if (document.getElementById('lightbox-modal')) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox-modal';

    lightbox.innerHTML = `
        <div class="lightbox-overlay"></div>

        <div class="lightbox-counter"></div>

        <button class="nav-btn prev">‹</button>
        <button class="nav-btn next">›</button>

        <div class="lightbox-container">
            <img class="lightbox-image" src="">
        </div>

        <button class="lightbox-close">✕</button>
    `;

    document.body.appendChild(lightbox);

    lightbox.querySelector('.lightbox-overlay').onclick = closeLightbox;
    lightbox.querySelector('.lightbox-close').onclick = closeLightbox;
    lightbox.querySelector('.prev').onclick = prevImage;
    lightbox.querySelector('.next').onclick = nextImage;

    // ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
    });

    setupZoomAndDrag();
}


// =============================
// 3) OPEN
// =============================
function openLightbox(src) {
    const modal = document.getElementById('lightbox-modal');
    const img = modal.querySelector('.lightbox-image');

    currentIndex = imagesList.indexOf(src);
    if (currentIndex === -1) currentIndex = 0;

    img.src = src;
    modal.classList.add('active');

    document.body.classList.add('lightbox-open');
    updateCounter();

    resetTransform();
}


// =============================
// 4) CLOSE
// =============================
function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const img = modal.querySelector('.lightbox-image');

    modal.classList.remove('active');
    img.src = "";

    document.body.classList.remove('lightbox-open');
}


// =============================
// 5) NAVIGATION
// =============================
function nextImage() {
    if (!imagesList.length) return;
    currentIndex = (currentIndex + 1) % imagesList.length;
    updateImage();
}

function prevImage() {
    if (!imagesList.length) return;
    currentIndex = (currentIndex - 1 + imagesList.length) % imagesList.length;
    updateImage();
}

function updateImage() {
    const modal = document.getElementById('lightbox-modal');
    const img = modal.querySelector('.lightbox-image');

    img.src = imagesList[currentIndex];
    updateCounter();
    resetTransform();
}

function updateCounter() {
    const counter = document.querySelector('.lightbox-counter');
    counter.textContent = `${currentIndex + 1} / ${imagesList.length}`;
}


// =============================
// 6) ZOOM + DRAG
// =============================
function setupZoomAndDrag() {
    const img = document.querySelector('.lightbox-image');

    img.addEventListener('wheel', (e) => {
        e.preventDefault();
        scale += e.deltaY * -0.001;
        scale = Math.min(Math.max(1, scale), 3);
        updateTransform();
    });

    img.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX - posX;
        startY = e.clientY - posY;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        posX = e.clientX - startX;
        posY = e.clientY - startY;
        updateTransform();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Touch
    img.addEventListener('touchstart', (e) => {
        const t = e.touches[0];
        isDragging = true;
        startX = t.clientX - posX;
        startY = t.clientY - posY;
    });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const t = e.touches[0];
        posX = t.clientX - startX;
        posY = t.clientY - startY;
        updateTransform();
    });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });
}


// =============================
// TRANSFORM
// =============================
function updateTransform() {
    const img = document.querySelector('.lightbox-image');
    img.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
}

function resetTransform() {
    scale = 1;
    posX = 0;
    posY = 0;
    updateTransform();
}


// =============================
// 7) ENABLE LIGHTBOX
// =============================
function enableLightbox() {
    if (window.lightboxEnabled) return;
    window.lightboxEnabled = true;

    document.addEventListener('click', (e) => {
        const img = e.target.closest('.gallery-item img');
        if (!img) return;

        openLightbox(img.src);
    });
}


// =============================
// 8) RENDER IMAGES
// =============================
function renderImages(images) {
    imagesList = images;

    const container = document.getElementById('gallery');

    container.innerHTML = images.map(img => `
        <div class="gallery-item">
            <img src="${img}">
        </div>
    `).join('');
}


// =============================
// INIT
// =============================
window.onload = () => {
    addLightboxStyles();
    createLightbox();
    enableLightbox();

    renderImages([
        "https://picsum.photos/500/300",
        "https://picsum.photos/400/500",
        "https://picsum.photos/600/400",
        "https://picsum.photos/300/300",
        "https://picsum.photos/700/500",
        "https://picsum.photos/450/600"
    ]);
};



// ======== Chat Functions ========
const botMemory = JSON.parse(localStorage.getItem('botMemory')) || {};

function saveMemory() {
    localStorage.setItem('botMemory', JSON.stringify(botMemory));
}

function safeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function similarity(a, b) {
    const longer = a.length > b.length ? a : b;
    const shorter = a.length > b.length ? b : a;
    const editDistance = getEditDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
}

function getEditDistance(a, b) {
    const costs = [];
    for (let i = 0; i <= a.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= b.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else if (j > 0) {
                let newValue = costs[j - 1];
                if (a.charAt(i - 1) !== b.charAt(j - 1)) {
                    newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                }
                costs[j - 1] = lastValue;
                lastValue = newValue;
            }
        }
        if (i > 0) costs[b.length] = lastValue;
    }
    return costs[b.length];
}

function typeMessage(text, sender = 'bot') {
    const msgDiv = document.createElement('div');
    msgDiv.style.cssText = `
        margin: 12px 0;
        background:#1b2236;
        padding: 12px 14px;
        border-radius: 12px;
        max-width: 100%;
        word-wrap: break-word;
        animation: slideIn 0.3s ease;
        font-size:40px;
        color:white;
    `;
    
    if (sender === 'user') {
        msgDiv.style.cssText += `
            background:linear-gradient(135deg,#2ec5ff,#8a5cff);

            border: 1px solid rgba(56, 189, 248, 0.5);
            color:white;
            margin-left: auto;
            text-align: right;
            font-size:40px;
        `;
    } else {
        msgDiv.style.cssText += `
            background: rgba(30, 41, 59, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #cbd5e1;
            
        `;
    }
    
    msgDiv.innerHTML = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// ======== Fetch with Fallback ========
async function fetchWithFallback(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res;
    } catch (err) {
        try {
            return await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
        } catch (err2) {
            console.error('fetchWithFallback', err, err2);
            throw err2;
        }
    }
}

async function cachedFetch(url) {
    try {
        const res = await fetchWithFallback(url);
        return await res.json();
    } catch (err) {
        console.error("cachedFetch error:", err);
        return null;
    }
}

function card(data) {
    const images = data.images || (data.img ? [data.img] : []);
    
    return `
<div style="
    background:#0f172a;
    border:1px solid rgba(255,255,255,0.08);
    border-radius:16px;
    margin:12px 0;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    overflow:hidden;
    width:100%;
">

    ${images.length > 0 ? `
        <div class="gallery-grid">
            ${images.map((img, idx) => `
                <div class="gallery-item" onclick="openImage('${img}', ${JSON.stringify(images)})">
                    <img src="${img}" alt="صورة ${idx + 1}">
                    <div class="gallery-overlay">
                        <div class="gallery-overlay-icon">🔍</div>
                    </div>
                </div>
            `).join('')}
        </div>
    ` : ''}

    <div style="padding:14px">

        ${data.title ? `
            <div style="
                font-size:40px;
                font-weight:700;
                color:#e2e8f0;
                margin-bottom:8px;
            ">
                ${data.title}
            </div>
        ` : ''}

        ${data.desc ? `
            <div style="
                font-size:28px;
                line-height:1.7;
                color:#cbd5e1;
            ">
                ${data.desc}
            </div>
        ` : ''}

        ${data.link ? `
            <a href="${data.link}" target="_blank" style="
                display:inline-block;
                margin-top:10px;
                font-size:px;
                color:#38bdf8;
                text-decoration:none;
                transition: all 0.3s ease;
            " onmouseover="this.style.color='#0ea5e9'" onmouseout="this.style.color='#38bdf8'">
                Open the link  →
            </a>
        ` : ''}

    </div>

</div>
`;
}



function chatLikeGPT(text) {
    return null;
}

// =========================
// ======== APIs قوية ✅ ========
// =========================






async function searchAnimeJikan(query) {
    try {
        const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=10`;
        const res = await fetch(url);
        const data = await res.json();
        
        if (!data.data?.length) return "❌ No anime found with that name.";
        
        return data.data.map(a => card({
            title: a.title,
            images: [a.images?.jpg?.large_image_url || a.images?.jpg?.image_url].filter(Boolean),
            desc: `🎭 Type: ${a.type || 'Unknown'}<br>
                   ⭐ Rating: ${a.score || 'Not available'}<br>
                   🔢 Episodes: ${a.episodes || 'Unknown'}<br>
                   📡 Status: ${a.status}<br>
                   🗓️ Season: ${a.season || ''} ${a.year || ''}<br>
                   🧾 Synopsis: ${safeHTML(a.synopsis || 'No description available')}`,
            link: a.url
        })).join('');
    } catch (err) {
        console.error(err);
        return "❌ Error while searching for anime.";
    }
}

async function searchMoviesAndSeries(query) {
    try {
        const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
        const res = await fetchWithFallback(url);
        const data = await res.json();
        
        if (!data.length) return "❌ No results found.";
        
        return data.slice(0, 10).map(i => {
            const s = i.show;
            return card({
                title: s.name,
                images: [s.image?.original || s.image?.medium].filter(Boolean),
                desc: `⭐ Rating: ${s.rating?.average || "Not available"}<br>
                       🎭 Genre: ${s.genres?.join(', ') || 'Unknown'}<br>
                       🌐 Language: ${s.language}<br>
                       📅 Premiere: ${s.premiered || 'Unknown'}<br>
                       📺 Network: ${s.network?.name || s.webChannel?.name || 'Unknown'}<br>
                       🧾 Summary: ${safeHTML((s.summary || "No description").replace(/<[^>]+>/g, ''))}`,
                link: s.officialSite || s.url
            });
        }).join('');
    } catch (err) {
        console.error(err);
        return "❌ Error while searching.";
    }
}

async function searchSongs(query) {
    try {
        const res = await fetchWithFallback(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=10`);
        const data = await res.json();
        
        if (!data.results?.length) return "❌ No songs found.";
        
        return data.results.map(s => card({
            title: s.trackName,
            images: [s.artworkUrl100.replace('100x100', '600x600')],
            desc: `👤 Artist: ${s.artistName}<br>
                   💿 Album: ${s.collectionName}<br>
                   📅 Year: ${new Date(s.releaseDate).getFullYear()}<br>
                   🎶 Genre: ${s.primaryGenreName}<br>
                   ${s.previewUrl ? `<audio controls src="${s.previewUrl}" style="width:100%; margin-top:10px;"></audio>` : ''}`,
            link: s.trackViewUrl
        })).join('');
    } catch (err) {
        console.error(err);
        return "❌ Error while searching for songs.";
    }
}

async function searchRecipes(query) {
    try {
        const res = await fetchWithFallback(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
        const data = await res.json();
        
        if (!data.meals?.length) return "❌ No recipes found.";
        
        return data.meals.slice(0, 5).map(m => {
            let ingredients = "";
            for (let i = 1; i <= 20; i++) {
                if (m[`strIngredient${i}`]) {
                    ingredients += `${m[`strIngredient${i}`]} (${m[`strMeasure${i}`]}), `;
                }
            }
            
            return card({
                title: m.strMeal,
                images: [m.strMealThumb],
                desc: `🍽️ Category: ${m.strCategory}<br>
                       🌍 Origin: ${m.strArea}<br>
                       🧂 Ingredients: ${ingredients.slice(0, -2)}<br><br>
                       👨‍🍳 Instructions:<br>${safeHTML(m.strInstructions)}`,
                link: m.strYoutube
            });
        }).join('');
    } catch (err) {
        console.error(err);
        return "❌ Error while searching for recipes.";
    }
}

async function searchWebdeka(query) {
    try {
        if (!query || !query.trim()) return "❌ Please enter a search query.";
        
        // 1️⃣ summary (فيه الصورة الرئيسية)
        const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
        const summaryRes = await fetch(summaryUrl);
        
        if (!summaryRes.ok) {
            const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`;
            const searchRes = await fetch(searchUrl);
            const searchData = await searchRes.json();
            
            if (searchData.query?.search?.length > 0) {
                return await searchWebdeka(searchData.query.search[0].title);
            }
            return "❌ No results found.";
        }
        
        const data = await summaryRes.json();
        
        // 🟢 الصورة الرئيسية
        const mainImage = data.originalimage?.source || data.thumbnail?.source;
        
        // 2️⃣ باقي الصور
        const imagesUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(data.title)}&prop=images&format=json&origin=*`;
        const imagesRes = await fetch(imagesUrl);
        const imagesData = await imagesRes.json();
        
        const page = Object.values(imagesData.query.pages)[0];
        let images = [];
        
        if (page.images) {
            const imageTitles = page.images
                .filter(img => img.title.endsWith('.jpg') || img.title.endsWith('.png'))
                .slice(0, 6);
            
            for (let img of imageTitles) {
                const fileUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(img.title)}&prop=imageinfo&iiprop=url&format=json&origin=*`;
                const fileRes = await fetch(fileUrl);
                const fileData = await fileRes.json();
                
                const filePage = Object.values(fileData.query.pages)[0];
                const url = filePage.imageinfo?.[0]?.url;
                
                // ❌ منع التكرار
                if (url && url !== mainImage) {
                    images.push(url);
                }
            }
        }
        
        // 🟢 نحط الصورة الرئيسية في الأول
        if (mainImage) {
            images.unshift(mainImage);
        }
        
        return card({
            title: data.title,
            images: images,
            desc: `${safeHTML(data.extract)}<br><br>
                   📅 Last updated: ${new Date(data.timestamp).toLocaleDateString('en-US')}`,
            link: data.content_urls?.desktop?.page
        });
        
    } catch (err) {
        console.error(err);
        return "❌ Error occurred.";
    }
}







function isMathExpression(text) {
    const clean = text.replace(/احسب|كم/g, "").trim();
    return clean.length > 0 && /^[0-9+\-*/().\s]+$/.test(clean);
}

// =========================
// ======== Send Message ========
async function sendMessage(){
    const text = input.value.trim();
    if(!text) return;
    typeMessage(safeHTML(text), 'user');
    input.value = '';

    if(isMathExpression(text)){
        try{
            const result = eval(text.replace(/[^0-9+\-*/().]/g, ''));
            typeMessage(`💡 Output: ${result}`);
            return;
        }catch{
            typeMessage("Calculation error ");
            return;
        }
    }

    const chatReply = seyranResponses(text);
if (chatReply) {
    typeMessage(chatReply);
    return;
}
    let found = false;
    for(let key in botMemory){
        if(similarity(text,key) > 0.4){
            typeMessage(botMemory[key]);
            found = true;
            break;
        }
    }
    if(found) return;
    
    if (text.startsWith("تعلم:")) {
        const parts = text.replace("تعلم:", "").split("=");
        if (parts.length === 2) {
            const key = parts[0].trim();
            const value = parts[1].trim();
            
            botMemory[key] = value;
            saveMemory();
            
            typeMessage("✅ تم التعلم وحفظ المعلومة!");
        } else {
            typeMessage("❌ الصيغة غلط استخدم: تعلم: سؤال = جواب");
        }
        return;
    }
    
    const movieKeywords = ["فيلم", "فلّم", "الفلم", "movie", "movies", "مسلسل", "مسلسلات", "series", "show", "أنمي", "anime", "Anime", "كرتون", "cartoon", "animation","film"];
    const songKeywords = ["اغنية", "أغنية", "اغاني", "موسيقى", "song", "music", "سماعي", "شغل اغنية"];
    const gamesKeywords = ["لعبة", "ألعاب", "game", "games", "تحميل لعبة", "ابحث لعبة"];
    const recipeKeywords = ["وصفة", "اكل", "طبخة", "طبخ", "recipe", "cook", "food", "meal", "bk"];
    const bookKeywords = ["كتاب", "كتب", "book", "books", "رواية", "novel", "اقرأ"];
    const weatherKeywords = ["طقس", "جو", "حرارة", "weather", "درجة الحرارة", "امطار"];
    const cryptoKeywords = ["بيتكوين", "bitcoin", "ethereum", "كريبتو", "crypto", "عملة"];
    const jokeKeywords = ["نكتة", "نكت", "joke", "ضحكني"];
    const adviceKeywords = ["نصيحة", "advice", "نصائح"];
    const spaceKeywords = ["فضاء", "space", "spacex", "صاروخ"];
    const countryKeywords = ["دولة", "بلد", "country", "عاصمة"];
    const webKeywords = ["ما هو", "من هو", "معلومات", "ابحث عن", "تعرفي", "تعرف", "define", "ويب ديكا", "webdeka"];

    const lowerText = text.toLowerCase();

    if (movieKeywords.some(k => lowerText.includes(k))) {
        const query = text.replace(new RegExp(movieKeywords.join('|'), 'gi'), '').trim();
        typeMessage(await searchMoviesAndSeries(query));
    } else if (songKeywords.some(k => lowerText.includes(k))) {
        const query = text.replace(new RegExp(songKeywords.join('|'), 'gi'), '').trim();
        typeMessage(await searchSongs(query));
    } else if (gamesKeywords.some(k => lowerText.includes(k))) {
        const query = text.replace(new RegExp(gamesKeywords.join('|'), 'gi'), '').trim();
        typeMessage(await searchGames(query));
    } else if (recipeKeywords.some(k => lowerText.includes(k))) {
        const query = text.replace(new RegExp(recipeKeywords.join('|'), 'gi'), '').trim();
        typeMessage(await searchRecipes(query));
    } else if (bookKeywords.some(k => lowerText.includes(k))) {
        const query = text.replace(new RegExp(bookKeywords.join('|'), 'gi'), '').trim();
        typeMessage(await books(query));
    } else if (weatherKeywords.some(k => lowerText.includes(k))) {
        typeMessage(await weather());
    } else if (cryptoKeywords.some(k => lowerText.includes(k))) {
        typeMessage(await crypto());
    } else if (jokeKeywords.some(k => lowerText.includes(k))) {
        typeMessage(await joke());
    } else if (adviceKeywords.some(k => lowerText.includes(k))) {
        typeMessage(await advice());
    } else if (spaceKeywords.some(k => lowerText.includes(k))) {
        typeMessage(await spacex());
    } else if (countryKeywords.some(k => lowerText.includes(k))) {
        const query = text.replace(new RegExp(countryKeywords.join('|'), 'gi'), '').trim();
        typeMessage(await country(query));
    } else if (webKeywords.some(k => lowerText.includes(k))) {
        const query = text.replace(new RegExp(webKeywords.join('|'), 'gi'), '').trim();
        typeMessage(await searchWebdeka(query));
    } else {
    const aiReply = seyranResponses(text);
    if (aiReply) {
        typeMessage(aiReply);
    } else {
        typeMessage(await searchWebdeka(text));
    }
}
}

// ======== Event Listeners ========
sendBtn?.addEventListener('click', sendMessage);

voiceBtn?.addEventListener('click', toggleVoice);

newChatBtn?.addEventListener('click', () => {
    chatBox.innerHTML = '';
    typeMessage("👋 HELLO");
});
// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initLightbox();
    initVoiceRecognition();
});



function kml() {
    document.getElementById('menu').style.display="none";
}

function kl() {
    document.getElementById('menu').style.display="block";
}







