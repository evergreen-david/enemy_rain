class Enemy {
    enemyImage

    x_position
    y_position

    isHitImage // 0 -> alive , 45->die

    moving_function

    constructor(){
        this.enemyImage = new Image();
        this.enemyImage.src = "images/enemy.png";

        this.x_position = Math.floor(Math.random() * 755);
        this.y_position = 0;
        this.isHitImage = 0;

        this.moving_function = function () {
            this.y_position += 54;
        }
    }

    getEnemyImage(){
        return this.enemyImage;
    }

    drawImage(ctx){
        ctx.drawImage(this.enemyImage, this.isHitImage, 0, 45, 54, this.x_position, this.y_position, 45, 54 );
    }

    setEnemyPositionToY(y_value)
    {
        this.y_position += y_value;
    }

    isHit(hero_x_position)
    {
        let isHit = false;
        if( this.y_position > (545-54) )
        {
            var compare_x = 0;
            if( (hero_x_position - 45) > 0 ){
                compare_x = hero_x_position - 45;
                if( this.x_position > compare_x)
                {
                    isHit = true;
                }
            }
            else
            {
                compare_x = hero_x_position + 35;
                if( 0 < this.x_position && this.x_position < hero_x_position + 35)
                {
                    isHit = true;
                }
            }
        }
    
        if(isHit)
        {
            this.isHitImage = 45;
        }
    }
}