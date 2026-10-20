// Function to load HTML components dynamically with cache-busting
async function loadComponent(placeholderId, filePath) {
    try {
        const freshPath = filePath + '?v=' + new Date().getTime();
        const response = await fetch(freshPath);
        if (!response.ok) {
            throw new Error(`Failed to load ${filePath}`);
        }
        const htmlData = await response.text();
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            placeholder.innerHTML = htmlData;
        }
    } catch (error) {
        console.error("Component loading error:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Load Global Components
    loadComponent("header-placeholder", "./component/header/header.html");
    loadComponent("navbar-placeholder", "./component/navbar/navbar.html");
    loadComponent("sidebar-placeholder", "./component/sidebar/sidebar.html");
    // 2. Load Row 1 Components
    loadComponent("profile-card-placeholder", "./component/cards/profile-card/profile-card.html");
  
    
    // 3. Assistant Toggle Logic
    setTimeout(() => {
        const toggleBtn = document.getElementById("toggle-assistant-btn");
        const closeBtn = document.getElementById("close-assistant-btn");
        const assistantPanel = document.getElementById("assistant-panel");

        if (toggleBtn && assistantPanel) {
            toggleBtn.addEventListener("click", () => {
                assistantPanel.classList.toggle("open");
            });
        }

        if (closeBtn && assistantPanel) {
            closeBtn.addEventListener("click", () => {
                assistantPanel.classList.remove("open");
            });
        }
    }, 500); 
});