#pragma strict
var asteroidprefab:Rigidbody;

//function that generates any number of asteroids
function createasteroids(numberofasteroids:int)
{
	BorderController.Set();
	
	var counter:int=0;
	var xpos:int=0;
	var ypos:int=0;
	var zpos:int=1;
	
	for(counter=0;counter<numberofasteroids;counter++)
	{	
		xpos = Random.Range(BorderController.leftmost,BorderController.rightmost);
		ypos = Random.Range(BorderController.bottommost,BorderController.topmost);
		
		var asteroid:Rigidbody = Instantiate(asteroidprefab,Vector3(xpos,ypos,zpos),Quaternion.identity);
		asteroid.GetComponent(AsteroidController).size = 1;
	}

}

function Start () {
	
	switch (Application.loadedLevelName.ToString())
	{
		case "mainScene":
		createasteroids(3);
		break;
		
		case "Level 2":
		createasteroids(5);
		break;
		case "Level3":
		createasteroids(7);
		break;
		case "Level 4":
		createasteroids(10);
		break;
		case "Level 5":
		createasteroids(20);
		break;
	
	}
	
	//yield WaitForSeconds(5);
	//createasteroids(5);
	//yield WaitForSeconds(5);
	//createasteroids(5);
}

function Update () {

}