class Man{
    constructor(direction){
        this.direction = 'down'
        this.x = 0
        this.y = 0
        this.passout = 0;
    }
    moveUp (map){
        let x = this.x
        let y = this.y
        this.direction = 'up'
	  //upper block
        let b = map[x - 1][y]
        switch (b) {
		 //bull||bull&house
            case MAP_CODE.bull:
            case MAP_CODE.boxedBull:
                if (map[x - 2][y] != MAP_CODE.wall && map[x - 2][y] != MAP_CODE.bull && map[x - 2][y] != MAP_CODE.boxedBull){
                    this.x--

			    //current standing position is house
                    if (map[x][y] == MAP_CODE.manBall){
                        map[x][y] = MAP_CODE.house
                    } else {
                        map[x][y] = MAP_CODE.block
                    }
			   //empty block change to man
			   //empty block is house
                    if (map[x - 1][y] == MAP_CODE.house || map[x - 1][y] == MAP_CODE.boxedBull){
                        map[x - 1][y] = MAP_CODE.manBall
                    } else {
                        map[x - 1][y] = MAP_CODE.man
                    }
			   //bull's position used to be a house
                    if (map[x - 2][y] == MAP_CODE.house){
                        map[x - 2][y] = MAP_CODE.boxedBull
                    }else if(map[x-2][y] == MAP_CODE.trap)
                    {
                        map[x-1][y] = MAP_CODE.man
                    } 
                    else {
                        map[x - 2][y] = MAP_CODE.bull
                    }
                }
            // wall
            case MAP_CODE.wall:
                break;
            // block
            case MAP_CODE.block:
                this.x--
                
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x - 1][y] = MAP_CODE.man
                break;
            // house
            case MAP_CODE.house:
                this.x--
                
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x - 1][y] = MAP_CODE.manBall
                break;
            case MAP_CODE.trap:
                map[x][y] = MAP_CODE.block
                map[x-1][y] = MAP_CODE.mantrap
                this.x--;
                this.passout = 1
                alert('Dead! X_X')
                break;
            default:
                alert('moveUp error!')
                break;
        }
		
    }
    moveDown (map){
        let x = this.x
        let y = this.y
        this.direction = 'down'
	   //lower block
        let b = map[x + 1][y]
        switch (b) {
		//bull || house and bull
            case MAP_CODE.bull:
            case MAP_CODE.boxedBull:
                if (map[x + 2][y] != MAP_CODE.wall && map[x + 2][y] != MAP_CODE.bull && map[x + 2][y] != MAP_CODE.boxedBull){
                    this.x++
                    
			//current position has house
                    if (map[x][y] == MAP_CODE.manBall){
                        map[x][y] = MAP_CODE.house
                    } else {
                        map[x][y] = MAP_CODE.block
                    }
			//empty position change to man
			//empty position is house
                    if (map[x + 1][y] == MAP_CODE.house || map[x + 1][y] == MAP_CODE.boxedBull){
                        map[x + 1][y] = MAP_CODE.manBall
                    } else {
                        map[x + 1][y] = MAP_CODE.man
                    }
			//Bull's position used to be a house
                    if (map[x + 2][y] == MAP_CODE.house){
                        map[x + 2][y] = MAP_CODE.boxedBull
                    }else if(map[x+2][y] == MAP_CODE.trap)
                    {
                        map[x+1][y] = MAP_CODE.man
                    } 
                    else {
                        map[x + 2][y] = MAP_CODE.bull
                    }
                }
            // wall
            case MAP_CODE.wall:
                break;
            // block
            case MAP_CODE.block:
                this.x++
                
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x + 1][y] = MAP_CODE.man
                break;
            // house
            case MAP_CODE.house:
                this.x++
                
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x + 1][y] = MAP_CODE.manBall
                break;
            case MAP_CODE.trap:
                map[x][y] = MAP_CODE.block
                map[x+1][y] = MAP_CODE.mantrap
                this.x++;
                this.passout = 1
                alert('Dead! X_X')
                break;
            default:
                alert('moveUp error!')
                break;
        }

    }
    moveLeft (map){
        let x = this.x
        let y = this.y
	//left block
        let b = map[x][y - 1]
        this.direction = 'left'
        switch (b) {

            case MAP_CODE.bull:
            case MAP_CODE.boxedBull:
                if (map[x][y - 2] != MAP_CODE.wall && map[x][y - 2] != MAP_CODE.bull && map[x][y - 2] != MAP_CODE.boxedBull){
                    this.y--
                    
                    if (map[x][y] == MAP_CODE.manBall){
                        map[x][y] = MAP_CODE.house
                    } else {
                        map[x][y] = MAP_CODE.block
                    }

                    if (map[x][y - 1] == MAP_CODE.house || map[x][y - 1] == MAP_CODE.boxedBull){
                        map[x][y - 1] = MAP_CODE.manBall
                    } else {
                        map[x][y - 1] = MAP_CODE.man
                    }

                    if (map[x][y - 2] == MAP_CODE.house){
                        map[x][y - 2] = MAP_CODE.boxedBull
                    }else if(map[x][y - 2] == MAP_CODE.trap)
                    {
                        map[x][y-1] = MAP_CODE.man
                    } 
                    else {
                        map[x][y - 2] = MAP_CODE.bull
                    }
                }
            // wall
            case MAP_CODE.wall:
                break;
            // block
            case MAP_CODE.block:
                this.y--
                
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x][y - 1] = MAP_CODE.man
                break;
            // house
            case MAP_CODE.house:
                this.y--
                
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x][y - 1] = MAP_CODE.manBall
                break;
            case MAP_CODE.trap:
                map[x][y] = MAP_CODE.block
                map[x][y-1] = MAP_CODE.mantrap
                this.y--;
                this.passout = 1
                alert('Dead! X_X')
                break;
            default:
                alert('moveUp error!')
                break;
        }
        // log(map)
    }
    moveRight (map){
        let x = this.x
        let y = this.y
        //right block
        let b = map[x][y + 1]
        this.direction = 'right'
        switch (b) {
		// bull || bull and house
            case MAP_CODE.bull:
            case MAP_CODE.boxedBull:
                if (map[x][y + 2] != MAP_CODE.wall && map[x][y + 2] != MAP_CODE.bull && map[x][y + 2] != MAP_CODE.boxedBull){
                    this.y++
                    
			//current position has house
                    if (map[x][y] == MAP_CODE.manBall){
                        map[x][y] = MAP_CODE.house
                    } else {
                        map[x][y] = MAP_CODE.block
                    }
			//empty position change to man
			//empty position is house 
                    if (map[x][y + 1] == MAP_CODE.house || map[x][y + 1] == MAP_CODE.boxedBull){
                        map[x][y + 1] = MAP_CODE.manBall
                    } else {
                        map[x][y + 1] = MAP_CODE.man
                    }
			//The position where bull move to
			// is used to be a house
                    if (map[x][y + 2] == MAP_CODE.house){
                        map[x][y + 2] = MAP_CODE.boxedBull
                    } else if(map[x][y + 2] == MAP_CODE.trap)
                    {
                        map[x][y+1] = MAP_CODE.man
                    }
                    else{
                        map[x][y + 2] = MAP_CODE.bull
                    }
                }
            // wall
            case MAP_CODE.wall:
                break;
            // block
            case MAP_CODE.block:
                this.y++
                
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x][y + 1] = MAP_CODE.man
                break;
            // house
            case MAP_CODE.house:
                this.y++
                
                if (map[x][y] == MAP_CODE.manBall){
                    map[x][y] = MAP_CODE.house
                } else {
                    map[x][y] = MAP_CODE.block
                }
                map[x][y + 1] = MAP_CODE.manBall
                break;
            case MAP_CODE.trap:
                map[x][y] = MAP_CODE.block
                map[x][y+1] = MAP_CODE.mantrap
                this.y++;
                this.passout = 1
                alert('Dead! X_X')
                break;
            default:
                alert('moveRight error!')
                break;
        }

    }
}