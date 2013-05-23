#pragma strict

var explosion: GameObject;
private var horizontalSpeed:int=0;
private var verticalSpeed:int=0;
private var rotationSpeed:float=0;
var size:float=5;

function Start () {
	horizontalSpeed = Random.Range(-2.0,2.0) * 3;
	verticalSpeed = Random.Range(-2.0,2.0) * 3;
	rotationSpeed = Random.Range(-15,15);
}

function Update () {
	//calling the borders function in BorderController
	BorderController.EnableBorders(this.transform);
	var move:Vector3 = Vector3(horizontalSpeed, verticalSpeed, 0);
	
	//random movement horizontally and vertically
	transform.Translate(move * Time.deltaTime, Space.World);
	transform.Rotate(Vector3.forward * rotationSpeed * Time.deltaTime);
}

function Split(){

	Instantiate(explosion, transform.position, Quaternion.identity);
	
	if (size < 1) return;
	
	for (var counter = 0; counter < 3; counter++) {
		var asteroid:Rigidbody = Instantiate(this.rigidbody, transform.position, Quaternion.identity);
		asteroid.transform.GetComponent(AsteroidController).size = size/1.5;
		asteroid.transform.localScale = Vector3(size/1.5,size/1.5, 1);
	}
	
}