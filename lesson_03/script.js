'use strict';

{
  const productName = "Планшет Samsung Galaxy Tab A8 10.5";
  const productQuantity = 3;
  const productCategory = "Планшеты";
  const productPrice = 25999;

  // console.log('productName: ', productName);
  // console.log('Общая сумма товара: ', productPrice * productQuantity);
}

{
  const productName = "Планшет Samsung Galaxy Tab S7";
  const productQuantity = 2;
  const productCategory = "Планшеты";
  const productPrice = 54999;

  // console.log('productName: ', productName);
  // console.log('Общая сумма товара: ', productPrice * productQuantity);
}

{
  const getProductName = prompt('Введите наименование товара: ')
  console.log('getProductName: ', typeof getProductName, getProductName);
  const getProductQuantity = prompt('Введите количество товара: ')
  console.log('getProductQuantity: ', typeof +getProductQuantity, getProductQuantity);
  const getProductCategory = prompt('Введите категорию товара: ')
  console.log('getProductCategory: ', typeof getProductCategory, getProductCategory);
  const getProductPrice = prompt('Введите цену товара: ')
  console.log('getProductPrice: ', typeof +getProductPrice.replace(' ', ''), getProductPrice.replace(' ', ''));
  console.log(`На складе ${+getProductQuantity} единицы товара "${getProductName}" на сумму ${+getProductPrice.replace(' ', '') * +getProductQuantity} руб.`)
}
