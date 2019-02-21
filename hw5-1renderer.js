let renderer = {
    render() {
        let table = this.generateTable();
        document.body.insertAdjacentHTML('afterbegin', table);
    },

    generateTable() {
        let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        let numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
        let board = '';
        
        for (let i = 0; i < 1; i++) {
            board += '<tr class="with_letters">';
            for (let j = 0; j < letters.length; j++) {
                board += '<td>'+ letters[j] + '</td>';
            }
            board += '</tr>';
        }

        for(let y = 0; y < numbers.length; y++) {
            board += '<tr>';
            for(let x = 0; x < numbers.length; x++) {
                
                board += '<td></td>';
            }
            
                board += '<td class="with_numbers">' + numbers[y] + '</td>' + '</tr>';
    
        }
        
        return '<table><tbody>' + board + '</tbody></table>';
    },
}
