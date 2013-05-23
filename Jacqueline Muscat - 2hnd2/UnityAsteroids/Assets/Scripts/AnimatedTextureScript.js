// rewritten from http://wiki.unity3d.com/index.php?title=Animating_Tiled_texture

#pragma strict

// the number of columns and rows in the sheet
var uvAnimationTileY:int = 0;
var uvAnimationTileX:int = 0;

var framesPerSecond:float = 10.0f;

private var framesOffset:int;

function Start() {
	framesOffset = Random.Range(0, uvAnimationTileX * uvAnimationTileY);
}

function Update() {
	// get the index
	var index:int = (Time.time * framesPerSecond) + framesOffset;
	
	// repeat when all frames are exhausted
	index = index % (uvAnimationTileX * uvAnimationTileY);
	
	// the size of every tile
	var size:Vector2 = Vector2(1.0f / uvAnimationTileX, 1.0f / uvAnimationTileY);
	
	// split into horizontal and vertical index;
	var uIndex:float = index % uvAnimationTileX;
	var vIndex:float = index / uvAnimationTileX;
	
	// build the offset
	// v coordinate is the bottom of the image in opengl so we need to invert
	var offset:Vector2 = Vector2(uIndex * size.x, 1.0 - size.y - vIndex * size.y);
	
	renderer.material.SetTextureOffset("_MainTex", offset);
	renderer.material.SetTextureScale("_MainTex", size);
}