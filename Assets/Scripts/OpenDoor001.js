import UnityEngine.UI;

var textDisplay : GameObject;
var distance : float = PlayerCasting.DistanceFromTarget;
var door : GameObject;
var objCompleted : GameObject;
var M9 : GameObject; 
var MK5 : GameObject;

function Update(){
	distance = PlayerCasting.DistanceFromTarget;
}

function OnMouseOver (){
	if (distance <= 1.5){
		textDisplay.GetComponent.<Text>().text = "Press 'e' to open door";
	}
	if (Input.GetButtonDown("Action")){
		if (distance <= 1.5){
			objCompleted.SetActive(true);
			if (M9.activeSelf){
				AmmoCountDisplay.loadedAmmo += 10;
			}
			if (MK5.activeSelf){
				AmmoCountDisplay.loadedAmmo += 30;
			}
			openDoor();
		}
	}

}

function OnMouseExit (){
	textDisplay.GetComponent.<Text>().text = "";
}

function openDoor(){
	door.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(1);
	door.GetComponent("Animator").enabled = false;
	yield WaitForSeconds(5);
	door.GetComponent("Animator").enabled = true;
	yield WaitForSeconds(1);
	door.GetComponent("Animator").enabled = false;
}
