let basket = {
    goodlist: [],

    countTotalPrice() {
        var priceSum = 0;
        for (i in this.goodlist) {
            let finalPrice = this.goodlist[i].price * this.goodlist[i].amount;
            priceSum += finalPrice;
        } 
        return priceSum;
    },

    countTotalNumber() {
        let totalNum = 0;
        for (i in this.goodlist) {
            totalNum += this.goodlist[i].amount;
        }
        return totalNum;
    }
}
