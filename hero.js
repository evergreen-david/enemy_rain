const LEFT_KEY = 37;
const RIGHT_KEY = 39;

const image_left_x = 70;
const image_right_x = 105;

class Hero {

    x_position
    heroImage

    keysDown

    which_hero_img_x

    constructor(){
        this.speed = 256; // movement in pixels per second
        this.x_position = 380; // initial x position
        this.heroImage = new Image();
        this.heroImage.src = "images/hero.png";
        this.keysDown = {};
        this.which_hero_img_x = 0;
    }

    getX(){
        return this.x_position;
    }

    getHeroImage(){
        return this.heroImage;
    }

    updatePosition(modifier, keysDown) {
        if (LEFT_KEY in keysDown) { 
            var temp_left = this.x_position - this.speed * modifier;
            if( temp_left > 0 ){
                this.x_position -= this.speed * modifier;
            }
            this.which_hero_img_x = image_left_x;
        }

        if (RIGHT_KEY in keysDown) { 
            var temp_right = this.x_position + this.speed * modifier;
            if( temp_right < 800 - 35) {
                this.x_position += this.speed * modifier;
            }
            this.which_hero_img_x = image_right_x;
        }
    }

    drawImage(ctx){
        ctx.drawImage(this.heroImage, this.which_hero_img_x, 0, 35, 54, this.x_position, 545, 35,54 );
    }
}