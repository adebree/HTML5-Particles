var Line3D = function( startPoint3D, stopPoint3D, color )
{
    this.startPoint3D = startPoint3D;
    this.stopPoint3D  = stopPoint3D;    
    
    this.color = color; 	    
    
    this.rotateX = function( angle )
    {
        this.startPoint3D.rotateX( angle );
        this.stopPoint3D.rotateX( angle );        
    }
    
    this.rotateY = function( angle )
    {
        this.startPoint3D.rotateY( angle );
        this.stopPoint3D.rotateY( angle );        
    }    
    
    this.rotateZ = function( angle )
    {
        this.startPoint3D.rotateZ( angle );
        this.stopPoint3D.rotateZ( angle );        
    }        
    
    this.draw = function( ctx, color )
    {
        // Start
        //
        var startScale = FOV / ( FOV + this.startPoint3D.z );
        
        var startX2D = this.startPoint3D.x * startScale;
        var startY2D = this.startPoint3D.y * startScale;    
        
        // Stop
        //
        var stopScale = FOV / ( FOV + this.stopPoint3D.z );
        
        var stopX2D = this.stopPoint3D.x * stopScale;
        var stopY2D = this.stopPoint3D.y * stopScale;    
        
        // Start actual drawing
        //
        ctx.lineWidth = 1; 
        ctx.strokeStyle = color !== undefined ? color : this.color;        
        
        ctx.beginPath();
        ctx.moveTo( startX2D, startY2D ); 
        ctx.lineTo( stopX2D, stopY2D ); 
        ctx.stroke();                  
    }    
}

