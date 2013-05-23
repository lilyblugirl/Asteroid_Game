#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {

	if	(GUI.Button(Rect(800,500,100,25),"main menu"))
	{
		Application.LoadLevel (0);
	}
}