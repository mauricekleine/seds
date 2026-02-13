(function() {
  "use strict";

  // SEDS founding year - DO NOT CHANGE
  // NOTE: The server-side equivalent is in app/utils/seds-years.ts.
  // If you change FOUNDING_YEAR here, update it there too.
  const FOUNDING_YEAR = 1980;

  /**
   * Calculate years since SEDS was founded
   * @returns {number} Number of years
   */
  function calculateSEDSYears() {
    const currentYear = new Date().getFullYear();
    return currentYear - FOUNDING_YEAR;
  }

  /**
   * Update all elements with data-seds-years attribute
   */
  function updateYearElements() {
    const years = calculateSEDSYears();
    const elements = document.querySelectorAll("[data-seds-years]");

    elements.forEach(function(el) {
      el.textContent = years;
    });
  }

  /**
   * Replace static year text in page content
   * Looks for patterns like "over 38 years" or "for 35 years"
   */
  function replaceStaticYearText() {
    const years = calculateSEDSYears();

    // Target elements that might contain the outdated text
    const selectors = [
      ".hero-description",
      ".hero p",
      ".about-text",
      ".intro-text",
      "[class*='description']",
      "main p",
    ];

    selectors.forEach(function(selector) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(function(el) {
        // Replace patterns like "over 38 years" or "for 35 years"
        el.innerHTML = el.innerHTML.replace(
          /(?:over|for)\s+\d+\s+years/gi,
          "over " + years + " years"
        );
      });
    });
  }

  /**
   * Create an animated counter effect
   * @param {HTMLElement} element - Target element
   * @param {number} target - Target number
   * @param {number} duration - Animation duration in ms
   */
  function animateCounter(element, target, duration) {
    duration = duration || 2000;
    var start = 0;
    var increment = target / (duration / 16);
    var timer = setInterval(function() {
      start += increment;
      element.textContent = Math.floor(start);
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      }
    }, 16);
  }

  /**
   * Initialize animated counters for elements with data-seds-years-animated
   */
  function initAnimatedCounters() {
    const elements = document.querySelectorAll("[data-seds-years-animated]");
    const years = calculateSEDSYears();

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target, years, 2000);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      elements.forEach(function(el) {
        el.textContent = "0";
        observer.observe(el);
      });
    } else {
      // Fallback for older browsers
      elements.forEach(function(el) {
        el.textContent = years;
      });
    }
  }

  /**
   * Initialize when DOM is ready
   */
  function init() {
    updateYearElements();
    replaceStaticYearText();
    initAnimatedCounters();
  }

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose function globally for manual use
  window.SEDSYears = {
    calculate: calculateSEDSYears,
    update: updateYearElements,
    animate: animateCounter,
  };
})();
