let translations = {};
let currentLanguage = localStorage.getItem('language') || 'en';

function getNestedTranslation(obj, key) {
  return key.split('.').reduce((o, k) => (o || {})[k], obj);
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);

  // Update buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`lang-${lang}`)?.classList.add('active');

  // Translate
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    const translation = getNestedTranslation(translations[lang], key);
    if (translation) el.textContent = translation;
  });

  document.documentElement.lang = lang;
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId)?.classList.add('active');
  history.pushState(null, null, `#${pageId}`);
  window.scrollTo(0, 0);
}

async function loadTranslations() {
  const response = await fetch('translations.json');
  translations = await response.json();

  // ⚡️ Maintenant que JSON est chargé :
  setLanguage(currentLanguage);

  // ✅ Attache listeners seulement maintenant :
  document.getElementById('lang-en')?.addEventListener('click', () => setLanguage('en'));
  document.getElementById('lang-fr')?.addEventListener('click', () => setLanguage('fr'));

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const pageId = href.substring(1);
      showPage(pageId);
    });
  });

  const hash = window.location.hash.substring(1);
  if (hash) {
    showPage(hash);
  } else {
    showPage('home');
  }
}

// ✅ Lancement unique après DOM prêt :
//document.addEventListener('DOMContentLoaded', loadTranslations);

// 🔁 Gestion du bouton retour navigateur
window.addEventListener('popstate', () => {
  const hash = window.location.hash.substring(1);
  if (hash) showPage(hash);
  else showPage('home');
});
 // Modal functionality
    
    function closeModal(modalId) {
      document.getElementById(modalId).style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    // Lightbox functionality
    function openLightbox(imageId) {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const caption = document.getElementById('lightbox-caption');
      
      // Set image source and caption based on imageId
      // In a real implementation, you would use your actual image paths
      if (imageId === 'reddit-dashboard') {
        lightboxImg.src = 'projects/reddit-sentiment/images/reddit-dashboard.jpg';
        caption.innerHTML = 'Main dashboard showing sentiment trends';
      } else if (imageId === 'reddit-analysis') {
        lightboxImg.src = 'projects/reddit-sentiment/images/reddit-analysis.jpg';
        caption.innerHTML = 'Detailed sentiment analysis by subreddit';
      } else if (imageId === 'reddit-comparison') {
        lightboxImg.src = 'projects/reddit-sentiment/images/reddit-comparison.jpg';
        caption.innerHTML = 'Comparison of sentiment across different topics';
      }
      if (imageId === 'CYBER-dashboard') {
        lightboxImg.src = 'projects/cyberMentor/images/CyberDash.png';
        caption.innerHTML = 'Interactive Cybersecurity Monitoring Dashboard';
      } else if (imageId === 'CYBER-analysis') {
        lightboxImg.src = 'projects/cyberMentor/images/analy.png';
        caption.innerHTML = 'Log Analysis & visualization ';
      } else if (imageId === 'CYBER-comparison') {
        lightboxImg.src = 'projects/cyberMentor/images/AI.png';
        caption.innerHTML = 'Security Recommendations based on the detected attack';
      }
       if (imageId === 'esp-1') {
        lightboxImg.src = 'projects/esp/images/maquette.png';
        caption.innerHTML = 'Physical Smart Home Maquette with Integrated IoT Sensors';
      } else if (imageId === 'esp-2') {
        lightboxImg.src = 'projects/esp/images/Dash.png';
        caption.innerHTML = 'Real-Time Admin Dashboard for Home Security Monitoring';
      } else if (imageId === 'esp-3') {
        lightboxImg.src = 'projects/esp/images/analy.png';
        caption.innerHTML = 'Sensor Data Analysis & IoT System Evolution Overview';
      }
       if (imageId === 'elec-1') {
        lightboxImg.src = 'projects/elect/images/1.png';
        caption.innerHTML = 'Actual vs Predicted Electricity Consumption Graph';
      } else if (imageId === 'elec-2') {
        lightboxImg.src = 'projects/elect/images/2.png';
        caption.innerHTML = 'Residual Error Analysis for LSTM and Prophet Models';
      } else if (imageId === 'elec-3') {
        lightboxImg.src = 'projects/elect/images/3.png';
        caption.innerHTML = 'Forecast of Morocco\'s Electricity Consumption';
      }
       if (imageId === 'link-1') {
        lightboxImg.src = 'projects/linkedin/images/1.png';
        caption.innerHTML = 'Years Distribution and Frequent Words Analysis';
      } else if (imageId === 'link-2') {
        lightboxImg.src = 'projects/linkedin/images/2.png';
        caption.innerHTML = 'Pie Chart Showing Premium and Verified Users Percentage';
      } else if (imageId === 'link-3') {
        lightboxImg.src = 'projects/linkedin/images/3.png';
        caption.innerHTML = 'Visualization of Profiles Based on Selected Features';
      }
      if (imageId === 'paint-1') {
  lightboxImg.src = 'projects/paint/images/1.png';
  caption.innerHTML = 'Real-time hand tracking and virtual drawing canvas';
} else if (imageId === 'paint-2') {
  lightboxImg.src = 'projects/paint/images/2.png';
  caption.innerHTML = 'Gesture-based tool and color selection for drawing';
} else if (imageId === 'paint-3') {
  lightboxImg.src = 'projects/paint/images/3.png';
  caption.innerHTML = 'Gesture-controlled erasing of drawn lines in real time';
}

      
      lightbox.style.display = 'block';
    }
    
    function closeLightbox() {
      document.getElementById('lightbox').style.display = 'none';
    }
    
    // Close modal when clicking outside content
    window.onclick = function(event) {
      const modals = document.getElementsByClassName('modal');
      for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
          modals[i].style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      }
      
      // Close lightbox when clicking outside image
      const lightbox = document.getElementById('lightbox');
      if (event.target == lightbox) {
        closeLightbox();
      }
    }
    
    function openProject(projectPath) {
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");

  fetch(projectPath)
    .then(response => response.text())
    .then(html => {
      modalBody.innerHTML =
        `<span class="close-modal" onclick="closeModal('project-modal')">&times;</span>` +
        html;
      modal.style.display = "block";
    })
    .catch(err => {
      modalBody.innerHTML = "<p>Error loading project details.</p>";
      modal.style.display = "block";
    });
}


