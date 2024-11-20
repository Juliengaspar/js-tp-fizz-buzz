(
function () {
  const fizzBuzzScroll = {
    olElement: document.getElementById('fizzbuzz'), numberOfItemsToGenerate: 100, currentItemNumber: 1, init() {
      this.end = this.currentItemNumber + this.numberOfItemsToGenerate;
      document.documentElement.classList.add('js-enabled');
      this.addEventListeners();
      this.generateItems();
    }, generateItems() {
      for (; this.currentItemNumber < this.end; this.currentItemNumber++) {
        if (this.currentItemNumber % 15 === 0) {
          this.olElement.insertAdjacentHTML('beforeend', '<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
        } else if (this.currentItemNumber % 3 === 0) {
          this.olElement
              .insertAdjacentHTML('beforeend', '<li class="fizz">FI<i>zz</i></li>');
        } else if (this.currentItemNumber % 5 === 0) {
          this.olElement.insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
        } else {
          this.olElement
              .insertAdjacentHTML('beforeend', `<li>${this.currentItemNumber}</li>`);
        }
      }
      this.end += this.numberOfItemsToGenerate;
    }, addEventListeners() {
      window.addEventListener('scrollend', () => {
        this.generateItems();
      });
    },
  };

  fizzBuzzScroll.init();
})();
