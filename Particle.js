function Particle( ctx, max ) {

    var ctx = ctx,
        canvas = ctx.canvas;
        
    this.max   = max;
        
    this.alpha  = 1;

    this.point;    
    
    this.color = "rgba( "+ Math.round( rand( 50, 255 ) ) +", "+ Math.round( rand( 50, 255 ) ) +","+ Math.round( rand( 50, 255 ) ) +","+ this.alpha +" )";;
    
    this.rotateX = function( angle )
    {
        this.point.rotateX( angle );
    }    
    
    this.rotateY = function( angle )
    {
        this.point.rotateY( angle );    
    }
    
    this.rotateZ = function( angle )
    {
        this.point.rotateZ( angle );    
    }
    
    
    this.draw = function()
    {
        this.point.draw( ctx, this.color, this.max );    
    };
    
}