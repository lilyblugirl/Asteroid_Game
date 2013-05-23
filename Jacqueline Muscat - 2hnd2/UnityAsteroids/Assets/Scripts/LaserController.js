

var laserspeed:int;

function Start () {

}

function Update () {
	//all the laser needs is forward motion
	transform.Translate(Vector3.up * laserspeed * Time.deltaTime);

}

//when the laser exits the scene
function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function OnTriggerEnter(other:Collider)
{
	//is the other object an asteroid? 
	if (other.gameObject.tag == "asteroid")
	{
		//destroy the laser
		Destroy(this.gameObject);

		other.GetComponent(AsteroidController).Split();
		//destroy the asteroid
		Destroy(other.gameObject);
		
		//increment the score
		PlayerController.score+=10;
		PlayerController.shotsHit++;
		//aGenerator.splitasteroids(5); 
	
		
	}
	//is the other object...a powerup? 
	if (other.gameObject.tag == "powerup")
	{
		//destroy the laser
		Destroy(this.gameObject);
		//destroy the asteroid
		Destroy(other.gameObject);
		//increment the health if the health is less than 100
		if (PlayerController.health < 100)
		{
		PlayerController.health++;
		}
		
		var player:GameObject;
		//get the player on screen
		player = GameObject.FindGameObjectWithTag("spaceship");
		
		var playerScript:PlayerController;
		
		playerScript = player.GetComponent("PlayerController");
		
		//turns the player blue
		player.renderer.sharedMaterial = playerScript.colours[2];		
	}
	

}
