generator = {
    generateGoodsList() {
        let list = document.createElement("table");
        document.body.appendChild(list);

        for (let row = 0; row <= config.rows; row++) {
            let newRow = list.insertRow(row);
            for (let col = 0; col < config.cols; col++) {
                let newCell = newRow.insertCell(col);

                if (row === 0 && col >= 0) {
                    let head = ['Наименование', 'Цена', 'Количество', 'Сумма'];
                    for (let i = 0; i <= col; i++) {
                        newCell.innerHTML = head[i];
                        newCell.className = 'bold';
                    }
                } else if (col === 0 && row > 0) {
                    let result = goods.map(a => a.name);
                    for (let i = 0; i < row; i++) {
                        newCell.innerHTML = result[i];
                    }
                } else if (row > 0 && col === 2) {
                    let buttonNeg = document.createElement('button');
                    buttonNeg.type = 'button';
                    buttonNeg.className = 'buttons';
                    buttonNeg.innerText = ' - ';
                    newCell.appendChild(buttonNeg);
                    buttonNeg.addEventListener('click', decrement);

                    let form = document.createElement("input");
                    form.type = 'text';
                    form.className = 'form';
                    form.placeholder = '0';
                    newCell.appendChild(form);

                    let buttonPos = document.createElement('button');
                    buttonPos.type = 'button';
                    buttonPos.className = 'buttons';
                    buttonPos.innerText = ' + ';
                    newCell.appendChild(buttonPos);
                    buttonPos.addEventListener('click', increment);
                } else if (row > 0 && col === 1) {
                    let result = goods.map(a => a.price);
                    for (let i = 0; i < row; i++) {
                        newCell.className = 'price';
                        newCell.innerHTML = result[i] + ' рублей.';
                    }
                }
            }
        }
    },

    //1. при нажатии на "+"  в поле "количество" увеличивать число на 1, в поле "сумма" помещать сумму в рублях из расчета price * amount;
    //2. при нажатии на "-" совершать противоположное действие;
    // 3. Под таблице ввыводить строку описания состояния карзины. "В вашей карзине ...(помещать сумму всех значений 'количества') товаров на сумму ...(общая сумма из поля "сумма")"; 
}
