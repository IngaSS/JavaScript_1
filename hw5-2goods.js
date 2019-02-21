let goods = [
    {
        name: 'лампа',
        price: 1200,
        amount: 4,
        putToBasket() {
           basket.goodlist.push(this);
        }
    },
    {
        name: 'диван',
        price: 25000, 
        amount: 1,
        putToBasket() {
           basket.goodlist.push(this);
        }
    },
    {
         name: 'тумба', 
         price: 4500, 
         amount: 2,
         putToBasket() {
           basket.goodlist.push(this);
        }
    },
    { 
        name: 'зеркало', 
        price: 5000, 
        amount: 4,
        putToBasket() {
           basket.goodlist.push(this);
        }
    },
    { 
        name: 'шкаф', 
        price: 35000, 
        amount: 1,
        putToBasket() {
           basket.goodlist.push(this);
        }
    },
    { 
        name: 'туалетный столик', 
        price: 7000, 
        amount: 2,
        putToBasket() {
           basket.goodlist.push(this);
        }
    },
    { 
        name: 'пуфик', 
        price: 2000, 
        amount: 2,
        putToBasket() {
           basket.goodlist.push(this);
        }
    }
]

console.log(goods);
goods.forEach(function(item, i) {
    if (i % 2 == 0) {
        item.putToBasket();
    } else {
        item.putToBasket();
        item.putToBasket();
    }
});

