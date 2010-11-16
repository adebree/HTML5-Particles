// --------------------------------------------------------------------- //

var Point3D = function( x, y, z )
{
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.rotateX = function( angle )
    {       
        var cosRX = Math.cos( angle * TO_RADIANS );
        var sinRX = Math.sin( angle * TO_RADIANS );
        
        var tempz = this.z;
        var tempy = this.y; 
        
        this.y = ( tempy *  cosRX ) + ( tempz * sinRX );
        this.z = ( tempy * -sinRX ) + ( tempz * cosRX );
    }    
    

    this.rotateY = function( angle )
    {
        var cosRY = Math.cos( angle * TO_RADIANS );
        var sinRY = Math.sin( angle * TO_RADIANS );
        
        var tempz = this.z; 
        var tempx = this.x; 
        
        this.x = ( tempx *  cosRY ) + ( tempz * sinRY );
        this.z = ( tempx * -sinRY ) + ( tempz * cosRY );
    }    
    
    this.rotateZ = function( angle )
    {
        var cosRZ = Math.cos( angle * TO_RADIANS );
        var sinRZ = Math.sin( angle * TO_RADIANS );
        
        var tempy = this.y; 
        var tempx = this.x; 
        
        this.x = ( tempx *  cosRZ ) + ( tempy * sinRZ );
        this.y = ( tempx * -sinRZ ) + ( tempy * cosRZ );
    }        
    
    this.draw = function( ctx, color, max )
    {
        var size = Math.pow( -1*this.z + max, 3 ) / 30000000;
    
        var scale = FOV / ( FOV + this.z );
        
        var x2d = this.x * scale;
        var y2d = this.y * scale;      
        
        ctx.fillStyle = color;
        
        ctx.beginPath();
        ctx.arc( x2d, y2d, size, 0, Math.PI*2, true );
        ctx.closePath();
        
        ctx.fill();                    
    }
    
}

// --------------------------------------------------------------------- //

