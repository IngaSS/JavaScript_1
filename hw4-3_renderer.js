/**
 * Объект отрисовки карты
 */


let renderer = {
    map: '',
    /**
     * Метод отрисовки карты 
     */
    render() {
        
        for(let i = 0; i < config.nRows; i++) {
            for(let j = 0; j < config.nColemns; j++) {
                if (player.x == j && player.y == i) {
                    this.map += 'o';
                } else {
                    this.map += 'x';
                }

            }
            this.map += '\n';
        }
        

        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = '';
    }
};
