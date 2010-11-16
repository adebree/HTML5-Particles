// --------------------------------------------------------------------- //

var Grid = function( ctx, size )
{
    var ctx = ctx,
        visible = true;
    
    var axis = [
        new Line3D( new Point3D( -(size/2), 0, 0 ), new Point3D( (size/2), 0, 0 ), "rgba( 255, 100, 150, 0.5 )" ),
        new Line3D( new Point3D( 0, -(size/2), 0 ), new Point3D( 0, (size/2), 0 ), "rgba( 150, 255, 100, 0.5 )" ),
        new Line3D( new Point3D( 0, 0, -(size/2) ), new Point3D( 0, 0, (size/2) ), "rgba( 100, 150, 255, 0.5 )" )
    ];
    
    this.show = function( s )
    {
        visible = s;
        this.draw();
    }

    this.draw = function()
    {
        if ( !visible )
        {
            return;
        }
    
        for ( var i = 0, l = axis.length; i < l; i++ )
        {
            axis[ i ].draw( ctx, this.color );
        }
    }    
    
    this.rotateX = function( angle )
    {
        for ( var i = 0, l = axis.length; i < l; i++ )
        {
            axis[ i ].rotateX( angle );
        }
    }
    
    this.rotateY = function( angle )
    {
        for ( var i = 0, l = axis.length; i < l; i++ )
        {
            axis[ i ].rotateY( angle );
        }
    }    
    
    this.rotateZ = function( angle )
    {
        for ( var i = 0, l = axis.length; i < l; i++ )
        {
            axis[ i ].rotateZ( angle );
        }
    }    
}

// --------------------------------------------------------------------- //