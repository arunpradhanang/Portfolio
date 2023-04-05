const swup = new Swup();
// run once when page loads
if (document.readyState === 'complete') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', () => init());
  }
  
  // run after every additional navigation by swup
  swup.on('contentReplaced', init);
  swup.on('willReplaceContent', unload);