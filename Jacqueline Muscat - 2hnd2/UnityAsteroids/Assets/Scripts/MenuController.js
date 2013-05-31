#pragma strict

var guiSkin:GUISkin;
var nameInput:boolean = false;
var MenuMusic:GameObject;


function Start () {

}

function Update () {

}


function OnGUI()
{
	GUI.skin = guiSkin;
	
	var x = (Screen.width - 100)/2;
	
	if (!nameInput) 
	{
		if (GUI.Button(Rect(x,300,100,40),"New Game"))
		{
			nameInput = true;
		  
		} 
	} 
	
	else 
	{
		GUI.Label(Rect(x,300,100,40), "Name:");
		PlayerController.playerName = GUI.TextField(Rect(x+75,300,100,40), PlayerController.playerName);
		
		if (GUI.Button(Rect(x, 400, 100, 40), "OK")) 
		{
			Application.LoadLevel(1);
		}
		if (GUI.Button(Rect(x+125, 400, 100, 40), "Back")) 
		{
			nameInput = false;
		}
	}

	
}


