#pragma strict

/*static var score:int=0;
static var health:int=100;
static var shotsHit:int=0;
static var shotsFired:int=0;
static var shotsMissed:int=0;
static var playerName:String="";
*/

//this declares a materials array.
var colours:Material[];

var normalSpeed:int;
var turboSpeed:int;
//game is not over yet. 
var gameover:boolean=false;

//this is the slot for the laser prefab
var laserprefab:Rigidbody;

//start time initialized to float and set to zero
var startTime:float=0.0;
var currentTime:float=0.0;
var elapsedTime:int=0;

var style:GUISkin;

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag=="asteroid")
	{
		//reduce 1% health
		health--;
		//turn the space ship red
		renderer.sharedMaterial = colours[1];
		
	}
	
}

function OnTriggerExit()
{
	//back to green
	renderer.sharedMaterial = colours[0];
}


function Start () {
	
	BorderController.Set();
	
	//the time the player started playing
	startTime=Time.time;
	//set the material to the first element in the colours array
	renderer.sharedMaterial = colours[0];
	//now the space ship is green
	
	switch (Application.loadedLevelName.ToString())
	{
		case "mainScene":
		score = 0;
		break;
		case "Level 2":
		score = 0;
		break;
		case "Level3":
		score = 0;
		break;
		case "Level 4":
		score = 0;
		break;
		case "Level 5":
		score = 0;
		break;
	
	}
}

function Update () {
	currentTime = Time.time;

	
	//il-hin li ghadda nahdmuh hekk:
	//kill the game after sixty seconds
	
	if(health <= 0)
	{
		gameover=true;
	}
	
	if (elapsedTime < 60)
	{
		elapsedTime = currentTime - startTime;
		//enable borders using the borders function in BorderController
		BorderController.EnableBorders(transform);
		//rotation of the cube
		transform.Rotate(Vector3.forward * -180 * Input.GetAxis("Horizontal") * Time.deltaTime);
	
		//fire is the left ctrl key
		if(Input.GetKeyDown(KeyCode.LeftControl))
		{
			//create a laser at the position of the space ship.
			Instantiate(laserprefab,transform.position,transform.rotation);
			shotsFired++;
			shotsMissed = shotsFired-shotsHit;
		}
	
		//speed / turbo speed
		if (Input.GetKey(KeyCode.Space))
		{
			transform.Translate(Vector3.up * turboSpeed * Input.GetAxis("Vertical") * Time.deltaTime);
		}
		else
		{
			//if not holding space bar
			transform.Translate(Vector3.up * normalSpeed * Input.GetAxis("Vertical") * Time.deltaTime);
		}
		
	} else {
		//the game has finished
		gameover=true;
		//game over
	//	print("game over");
	}

	var asteroids:int;
	
	asteroids = GameObject.FindGameObjectsWithTag("asteroid").Length;
	
	if (asteroids == 0)
	{
		if (Application.loadedLevel < 6)
			Application.LoadLevel(Application.loadedLevel + 1);
	}



}

function OnGUI()
{
	
	
	GUI.skin = style;
	GUI.color = Color.white;
	GUI.Label(Rect(10,10,100,50),"Name: " +playerName);
	GUI.Label(Rect(120,10,100,50),"Elapsed Time: "+elapsedTime);
	GUI.Label(Rect(230,10,100,50),"Score: "+score);
	GUI.Label(Rect(340,10,100,50),"Health: "+health);
	GUI.Label(Rect(Screen.width-330,10,100,50),"Shots Fired: "+shotsFired);
	GUI.Label(Rect(Screen.width-220,10,100,50),"Shots Hit: "+shotsHit);
	GUI.Label(Rect(Screen.width-110,10,100,50),"Shots Missed: "+shotsMissed);
	if(gameover==true)
	{
		GUI.Label(Rect(200,200,150,50),"GAME OVER");
	}
}

