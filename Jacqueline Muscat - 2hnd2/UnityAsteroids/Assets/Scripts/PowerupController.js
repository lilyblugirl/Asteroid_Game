#pragma strict




function Start () {
	transform.position.y = Random.Range(BorderController.topmost,BorderController.bottommost);
}

/*function Update () {
	BorderController.EnableBorders(this.transform);
	//move the powerup horizontally to the right at a fixed speed
	transform.Translate(Vector3.right * 5 * Time.deltaTime);
}
*/