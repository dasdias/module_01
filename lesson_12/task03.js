'use strict';

{
  const rectangle = {
    setwidth: 5,
    setheight: 5,
    set width(val) {
      if (typeof val === 'number') {
        this.setwidth = val;
      }
    },
    set height(val) {
      if (typeof val === 'number') {
        this.setheight = val;
      }
    },
    get area() {
      return `${this.setwidth * this.setheight}см`;
    },
    get perimeter() {
      return `${(this.setwidth + this.setheight) * 2}см`;
    },
  };

  rectangle.width = 10;
  rectangle.height = 10;
  console.log('rectangle.perimeter: ', rectangle.perimeter);
  console.log('rectangle.area: ', rectangle.area);
}
