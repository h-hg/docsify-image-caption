const plugin = (hook, vm) => {
  hook.init(function() {
    // add css style
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = `
.img-caption {
  color: #808080;
  font-size:0.8em;
}`;
    document.head.appendChild(style);
  });

  hook.doneEach(function() {
    const SELECTOR = '.markdown-section img:not(.emoji)';
    document.querySelectorAll(SELECTOR).forEach((element) => {
      // captionText != null length == 1: center + caption
      // captionText != null length != 1: inline-block + caption
      // captionText == null length == 1: center
      // captionText == null length != 1: nothing
      const parent = element.parentNode;
      const length = parent.childNodes.length;
      const captionText = element.getAttribute('title');
      if (captionText == null && length != 1) {
        return;
      }
      // create newElem
      let newElem = null;
      if (length == 1) {
        newElem = document.createElement('center');
      } else {
        newElem = document.createElement('div');
        newElem.style.display = 'inline-block';
        newElem.style.textAlign = 'center';
      }
      parent.replaceChild(newElem, element);
      if (captionText != null) {
        // create caption text
        const caption = document.createElement('div');
        caption.classList.add('img-caption');
        caption.innerText = captionText;
        newElem.append(element, document.createElement('br'), caption);
      } else {
        newElem.appendChild(element);
      }
    });
  });
};

export default plugin;
