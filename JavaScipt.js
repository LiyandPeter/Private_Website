document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 1; // 初始化為 1，從真正的第一張圖片開始
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let isScrolling = false; // 防抖動
    
  
    function updateSlide(withTransition = true) {
      items.forEach((item, index) => {
        item.style.transition = withTransition ? 'transform 0.8s ease-in-out' : 'none';
        item.style.transform = `translateY(${(index - currentIndex) * 100}%)`;
      });
    }
  
    function handleWheel(event) {
      if (isScrolling) return; // 防抖動
  
      if (event.deltaY > 0) { // 向下滾動
        currentIndex++;
        if (currentIndex === totalItems - 1) {
          // 達到最後一張的複製品，平滑切換到第一張
          updateSlide(true);
          setTimeout(() => {
            currentIndex = 1; // 無縫跳轉到第一張
            updateSlide(false); // 取消過渡效果瞬時跳轉
          }, 800);
        } else {
          updateSlide(true);
        }
      } else { // 向上滾動
        currentIndex--;
        if (currentIndex === 0) {
          // 達到第一張的複製品，平滑切換到最後一張
          updateSlide(true);
          setTimeout(() => {
            currentIndex = totalItems - 2; // 無縫跳轉到最後一張
            updateSlide(false); // 取消過渡效果瞬時跳轉
          }, 800);
        } else {
          updateSlide(true);
        }
      }
  
      // 設置防抖動狀態
      isScrolling = true;
      setTimeout(() => {
        isScrolling = false;
      }, 800);
    }
  
    document.querySelector('.carousel').addEventListener('wheel', handleWheel);
    updateSlide(); // 初始化圖片位置
  });
//-----------------
  document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchContainer = document.getElementById('searchContainer');
    const searchIcon = document.getElementById('searchIcon');
  
    if (searchButton && searchContainer && searchIcon) {
      searchButton.addEventListener('click', function() {
        searchContainer.classList.toggle('active');
  
        if (searchContainer.classList.contains('active')) {
          searchIcon.textContent = '✖';
        } else {
          searchIcon.textContent = '🔍';
        }
      });
    }
  });