function Particle( ctx ) {

    var STOPPED_VEL = 0.05; // velocity to be considerd as being stopped
    
    var ctx = ctx,
        canvas = ctx.canvas,
        cWidth = canvas.width,
        cHeight = canvas.height;
        
    this.keepWhenstopped = false;
    
    this.fov   = 250;
    
    this.grav  = 0.98;
    
    this.bounce = 0.9;
    
    this.xDrag = 1;
    this.yDrag = 1;
    this.zDrag = 1;
    
    this.xVel  = 0;
    this.yVel  = 0;
    this.zVel  = 0;
    
    this.x     = 0;
    this.y     = 0;
    this.z     = 0; 
    
    this.color = "rgb( "+ parseInt( Math.random() * 200 + 55 ) +", "+ parseInt( Math.random() * 200 + 55 ) +","+ parseInt(  Math.random() * 200 + 55 ) +" )";;
    this.lineWidth = 3;
    
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
    };
    
    this.draw = function()
    {
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.color;
        
        var scale = this.fov / ( this.fov + this.z );
        
        var x2d = this.x * scale;
        var y2d = this.y * scale;

        ctx.beginPath();
        ctx.moveTo( x2d, y2d );
        ctx.lineTo( x2d + this.lineWidth, y2d );
        
        ctx.stroke();
    };
    
    this.isStopped = function()
    {
        if ( this.keepWhenStopped )
        {
            return false;
        }
    
        return ( 
            ( this.xVel < STOPPED_VEL && this.xVel > -STOPPED_VEL && this.yVel < STOPPED_VEL && this.yVel > -STOPPED_VEL ) ||
            ( this.x < 0 || this.x > cWidth || this.y < 0 || this.y > cHeight )
        );
    }
}