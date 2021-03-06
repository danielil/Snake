/**
 * Daniel Sebastian Iliescu, http://dansil.net
 * MIT License (MIT), http://opensource.org/licenses/MIT
 */

class Food extends Tile
{
	constructor()
	{
		const coordinate =
		{
			x: 0,
			y: 0
		};
		const foodColor = "#FFA200";

		super( coordinate, foodColor );

		this.__horizontalRange = 0;
		this.__verticalRange = 0;
	}

	/**
	 * Initializes the positional ranges of the food tile.
	 */
	initialize( horizontalRange, verticalRange )
	{
		this.__horizontalRange = horizontalRange;
		this.__verticalRange = verticalRange;
	}

	/**
	 * Generates a new coordinate for the food tile.
	 */
	generate()
	{
		this.coordinate.x = this.__computeNormalizedPosition( this.__horizontalRange );
		this.coordinate.y = this.__computeNormalizedPosition( this.__verticalRange );
	}

	/**
	 * Returns a random coordinate within the specified positional range.
	 */
	__computeNormalizedPosition( range )
	{
		const position = Math.floor( Math.random() * range );

		return position * this.size;
	}
}