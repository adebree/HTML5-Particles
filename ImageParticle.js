
function ImageParticle( ctx, img ) {

    var STOPPED_VEL     = 0.05,     // velocity to be considerd as being stopped
        INVISIBLE_SIZE  = 0.05;      // minimal size after which considered invisible 
    
    var ctx = ctx,
        canvas = ctx.canvas,
        cWidth = canvas.width,
        cHeight = canvas.height,
        img = img;
        
    this.keepWhenstopped = false;
    
    this.fov   = 250;
    
    this.grav  = 0.98;
    
    this.bounce = 0.9;
    
    this.xDrag = 1;
    this.yDrag = 1;
    
    this.xVel  = 0;
    this.yVel  = 0;
    
    this.x     = 0;
    this.y     = 0;
    
    this.shrink = 1;

    this.img    = img;
    this.size   = 1;  
    this.alpha  = 1;  
    
    this.update = function()
    {
        this.xVel *= this.xDrag;

        this.yVel *= this.yDrag;                
        this.yVel += this.grav;


        this.x += this.xVel;
        this.y += this.yVel;        
        
        if ( this.y > cHeight && this.yVel > this.grav )
        {
            this.y = cHeight;
            this.yVel *= -this.bounce;
        }
        
        this.size *= this.shrink;
        
        this.alpha -= this.fade;
    };
    
    this.draw = function()
    {    
        // save the current canvas state
        ctx.save();     
        
		// set the alpha to the particle's alpha
		ctx.globalAlpha = this.alpha;         
    
        // move to where the particle should be
		ctx.translate( this.x, this.y );
		
		// scale it dependent on the size of the particle
        ctx.scale( this.size, this.size );
								
		// move the draw position to the center of the image
		ctx.translate( img.width * -0.5, img.width * -0.5 );
				
		// set the composition mode
		ctx.globalCompositeOperation = "light";
				
		// and draw it! 
		ctx.drawImage( img, 0, 0 );
		
		// and restore the canvas state
		ctx.restore();		
    };
    
    this.isStopped = function()
    {
        if ( this.keepWhenStopped )
        {
            return false;
        }
    
        return ( 
            this.size < INVISIBLE_SIZE || this.alpha <= 0 ||
            ( this.x < 0 || this.x > cWidth || this.y < 0 || this.y > cHeight )
        );
    }
}