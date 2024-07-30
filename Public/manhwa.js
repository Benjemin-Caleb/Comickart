function scrollManhwas(direction) {
    const container = document.querySelector('.carousel-wrapper');
    const scrollAmount = 300; // Adjust the scroll amount as needed
    let newPosition;
  
    if (direction === 'prev') {
      newPosition = container.scrollLeft - scrollAmount;
    } else if (direction === 'next') {
      newPosition = container.scrollLeft + scrollAmount;
    }
  
    container.scroll({
      left: newPosition,
      behavior: 'smooth' // Smooth scroll animation
    });
  }
  