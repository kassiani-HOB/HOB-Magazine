let cur = 0; // Current spread index
let zoom = 1;

// Call this function whenever the page changes
function render() {
  const sp = SPREADS[cur];
  const spDiv = document.getElementById('sp');
  spDiv.innerHTML = ''; // Clear current spread
  
  document.getElementById('blabel').textContent = sp.label;
  
  // Render Left Page
  if (sp.left) {
    const pgL = document.createElement('div');
    pgL.className = 'pg pg-l';
    
    // Check if it's a video
    if (sp.leftVideo) {
      pgL.innerHTML = `<video src="videos/${sp.left}.mp4" controls autoplay muted loop></video>`;
    } else {
      pgL.innerHTML = `<img src="images/${sp.left}.jpg" alt="Magazine Page ${sp.label}">`;
    }
    spDiv.appendChild(pgL);
  }
  
  // Render Right Page
  if (sp.right) {
    const pgR = document.createElement('div');
    pgR.className = 'pg pg-r';
    
    if (sp.rightVideo) {
      pgR.innerHTML = `<video src="videos/${sp.right}.mp4" controls autoplay muted loop></video>`;
    } else {
      pgR.innerHTML = `<img src="images/${sp.right}.jpg" alt="Magazine Page ${sp.label}">`;
    }
    spDiv.appendChild(pgR);
  }

  // Update Navigation Arrows
  document.getElementById('nl').classList.toggle('off', cur === 0);
  document.getElementById('nr').classList.toggle('off', cur === SPREADS.length - 1);
  
  updateThumbnailStrip();
}

function go(dir) {
  cur += dir;
  if (cur < 0) cur = 0;
  if (cur >= SPREADS.length) cur = SPREADS.length - 1;
  render();
}

// ... (Include your other functions like toggleSB(), openPanel(), etc.)