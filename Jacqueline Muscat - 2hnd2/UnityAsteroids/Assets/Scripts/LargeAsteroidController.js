#pragma strict

var explosion: GameObject;
private var horizontalSpeed:int=0;
private var verticalSpeed:int=0;
var size:float=5;

function Start () {
	horizontalSpeed = Random.Range(-2,2);
	verticalSpeed = Random.Range(-2,2);
}

function Update () {
	//calling the borders function in BorderController
	BorderController.EnableBorders(this.transform);
	//random movement horizontally and vertically
	transform.Translate(Vector3.right * horizontalSpeed * Time.deltaTime);
	transform.Translate(Vector3.up * verticalSpeed * Time.deltaTime);	
}

function Split(){

	Instantiate(explosion, transform.position, Quaternion.identity);
	
	if (size < 1) return;
	
	for (var counter = 0; counter < 5; counter++) {
		var asteroid:Rigidbody = Instantiate(this.rigidbody, transform.position, Quaternion.identity);
		asteroid.transform.GetComponent(LargeAsteroidController).size=size/2;
		asteroid.transform.localScale = Vector3(size/2,size/2, 1);
	}
	
}