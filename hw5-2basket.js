let basketGeneration = {
    generate() {
        let empty = this.generateEmptyBasket();
        document.body.insertAdjacentHTML('afterbegin', empty);

        let list = this.generateFullList();
        document.body.insertAdjacentHTML('afterbegin', list);
    },

    generateEmptyBasket() {
        empty = 'Ваша карзина пуста';
        return empty;
    },

    generateFullList() {
        list = '';
        for (let i = 0; i < basket.goodlist.length; i++) {
            list += '<li> ' + JSON.stringify(basket.goodlist[i].name) + '\n' + JSON.stringify(basket.goodlist[i].price) + ' рублей. ' + '\n' + JSON.stringify(basket.goodlist[i].amount) + ' шт.' + ' </li>';
        }
        list += '<hr><br> Всего в вашей карзине ' + basket.countTotalNumber() + ' товара. На сумму: ' + basket.countTotalPrice()  + ' рублей.';
        return '<ul>' + list + '</ul>';
    },
}



