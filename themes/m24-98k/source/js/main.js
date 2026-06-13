// M24!98K! Theme JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }
  
  // Search Modal
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.querySelector('.search-btn');
  const searchModal = document.getElementById('search-modal');
  const searchClose = document.querySelector('.search-close');
  const searchResults = document.getElementById('search-results');
  
  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', function() {
      const query = searchInput.value.trim();
      if (query) {
        searchModal.classList.add('active');
        performSearch(query);
      }
    });
    
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          searchModal.classList.add('active');
          performSearch(query);
        }
      }
    });
    
    searchClose.addEventListener('click', function() {
      searchModal.classList.remove('active');
    });
    
    searchModal.addEventListener('click', function(e) {
      if (e.target === searchModal) {
        searchModal.classList.remove('active');
      }
    });
  }
  
  // Escape key to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchModal) {
      searchModal.classList.remove('active');
    }
  });
});

// Search Function
function performSearch(query) {
  const searchResults = document.getElementById('search-results');
  
  if (!searchResults) return;
  
  // Load search.xml
  fetch('/search.xml')
    .then(response => response.text())
    .then(xmlText => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      
      const entries = xmlDoc.querySelectorAll('entry');
      let results = [];
      
      entries.forEach(entry => {
        const title = entry.querySelector('title').textContent;
        const content = entry.querySelector('content').textContent;
        const url = entry.querySelector('url').textContent;
        
        if (title.toLowerCase().includes(query.toLowerCase()) ||
            content.toLowerCase().includes(query.toLowerCase())) {
          results.push({
            title: title,
            url: url,
            excerpt: content.substring(0, 200) + '...'
          });
        }
      });
      
      displayResults(results, query);
    })
    .catch(error => {
      searchResults.innerHTML = '<p>搜索出错，请稍后再试。</p>';
    });
}

function displayResults(results, query) {
  const searchResults = document.getElementById('search-results');
  
  if (results.length === 0) {
    searchResults.innerHTML = '<p>未找到与 "' + query + '" 相关的文章。</p>';
    return;
  }
  
  let html = '<ul class="search-results-list">';
  results.forEach(result => {
    html += '<li class="search-result-item">';
    html += '<a href="' + result.url + '">';
    html += '<h4>' + result.title + '</h4>';
    html += '<p>' + result.excerpt + '</p>';
    html += '</a>';
    html += '</li>';
  });
  html += '</ul>';
  
  searchResults.innerHTML = html;
}