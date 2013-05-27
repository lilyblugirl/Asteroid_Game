#pragma strict

static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;


static function Set () {

	//calculate borders
	//leftmost border
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	
	
	//rightmost border.  The X position of the right most border RELATIVE to the center.
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
	//topmost border.  The Y position of the top most border RELATIVE to the center.
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
	
	//bottommost border.  The Y position of the bottom most border RELATIVE to the center.
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
	
}

static function EnableBorders(object:Transform)
{

	//if the object leaves the screen to the left
	if (object.position.x < leftmost)
	{
		object.position.x = rightmost;
	}

	//if object leaves the screen to the right
	if (object.position.x > rightmost)
	{
		object.position.x = leftmost;
	}
	
	//if object leaves the screen to the top
	if (object.position.y > topmost)
	{
		object.position.y = bottommost;
	}
	
	//if object leaves the screen off the bottom
	if (object.position.y < bottommost)
	{
		object.position.y = topmost;
	}
	
}
