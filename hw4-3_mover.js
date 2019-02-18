let mover = {
    getNextPoint(direction) {
        let nextPoint = {
            x: player.x,
            y: player.y
        }

        switch (direction) {
            case '2':
                if (player.y == 0) {
                    nextPoint.y;
                } else {
                    nextPoint.y--;
                }
                break;
            case '6':
                if (player.x == 9) {
                    nextPoint.x;
                } else {
                    nextPoint.x++;
                }
                break;
            case '8':
                if (player.y == 9) {
                    nextPoint.y;
                } else {
                    nextPoint.y++;
                }
                break;
            case '4':
                if (player.x == 0) {
                    nextPoint.x;
                } else {
                    nextPoint.x--;
                }
                break;
            case '3':
                if (player.y == 0 || player.x == 9) {
                    nextPoint.x;
                    nextPoint.y;
                } else {
                    nextPoint.x++;
                    nextPoint.y--;
                }
                break;
            case '1':
                if (player.x == 0 || player.y == 0) {
                    nextPoint.x;
                    nextPoint.y;
                } else {
                    nextPoint.x--;
                    nextPoint.y--;
                }
                break;
            case '7':
                if (player.x == 0 || player.y == 9) {
                    nextPoint.x;
                    nextPoint.y;
                } else {
                    nextPoint.x--;
                    nextPoint.y++;
                }
                break;
            case '9':
                if (player.x == 9 || player.y == 9) {
                    nextPoint.x;
                    nextPoint.y;
                } else {
                    nextPoint.x++;
                    nextPoint.y++;
                }
                break;
        }
        return nextPoint;
    }
};
