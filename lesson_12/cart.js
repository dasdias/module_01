'use strict';

{
  const cart = {
    items: [],
    count: 0,
    set setDiscount(promocode) {
      if (typeof promocode === 'string' && promocode === 'METHED') {
        this.discount = 15;
      }
      if (typeof promocode === 'string' && promocode === 'NEWYEAR') {
        this.discount = 21;
      }
    },
    get totalPrice() {
      return this.calculateItemPrice;
    },
    get calculateItemPrice() {
      const sum = this.items.reduce(
        (acc, {price, count}) => acc + (price * count), 0);

      if (this?.discount) {
        return sum - (sum / 100 * this?.discount);
      }
      return sum;
    },
    add(nameItem, price, count = 1) {
      this.items.push({
        nameItem,
        price,
        count,
      });
      this.increaseCount(count);
      this.calculateItemPrice;
    },
    increaseCount(num) {
      this.count += num;
    },
    clear() {
      this.items = [];
      this.count = 0;
    },
    print() {
      const items = JSON.stringify(this.items);
      console.log(items);
      console.log(this.totalPrice);
    },
  };

  cart.setDiscount = 'METHED';
  cart.add('Планшет HONOR Pad X8 4/64GB', 13999);
  cart.add('Планшет Xiaomi Redmi Pad SE 4/128GB Gray', 15999, 2);
  cart.add('Планшет Samsung Galaxy Tab S9 Ultra Wi-Fi 256GB Graph', 109999);
  cart.add('Планшет Apple iPad 10.2 Wi-Fi+Cell 64GB Space Grey', 51299, 3);
  cart.add('Ноутбук игровой Lenovo IdeaPad Gaming 3 15ACH6', 79999, 2);
  cart.add('Ноутбук игровой MSI Katana 17 B13VFK-487XRU', 139999, 2);
  cart.print();
}
