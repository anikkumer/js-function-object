var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the specific property name, use not notation to get the property values
// var penCount = shoppingCart.pen;
// console.log(penCount);

// alternative System
// when you know the specific property name, use not notation to get the property values
// var penCount2 = shoppingCart['pen'];
// console.log(penCount2);

// var properties = Object.keys(shoppingCart);
// console.log(shoppingCart);
// console.log(properties);


// var properties = Object.keys(shoppingCart);
// var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);


// var propertyName = 'mouse';
// var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);


// var propertyName = 'pen';
// var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);


// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart['mouse'] = 29;
console.log(shoppingCart);

var propertyName = 'mouse';
shoppingCart[propertyName] = 88;
console.log(shoppingCart);