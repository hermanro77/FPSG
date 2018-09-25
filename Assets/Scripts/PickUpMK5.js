var TheDistance : float = PlayerCasting.DistanceFromTarget;
var textDisplay : GameObject;
var fakeGun : GameObject;
var realGun : GameObject;
var MK5ammoDisplay : GameObject;
var pickUpSound : AudioSource;
var objCompleted : GameObject;
var mechanics : GameObject;
var M9 : GameObject;
var M9AmmoLabel : GameObject;


function Update(){
	TheDistance = PlayerCasting.DistanceFromTarget;
}

function OnMouseOver(){
	if (TheDistance <= 1.5){
		textDisplay.GetComponent.<Text>().text = "press 'e' to pick up MK5";
	}
	if (Input.GetButtonDown("Action")){
		if (TheDistance <= 1.5){
			takeMK5();
			mechanics.SetActive(true);
			if (M9.activeSelf){
				M9.SetActive(false);
				M9AmmoLabel.SetActive(false);
				AmmoCountDisplay.currentAmmo = 0;
				AmmoCountDisplay.loadedAmmo = 0;
			}
		}
	}
}

function OnMouseExit(){
	textDisplay.GetComponent.<Text>().text = "";
}

function takeMK5(){
	transform.position = Vector3(0, -1000, 0);
	fakeGun.SetActive(false);
	realGun.SetActive(true);
	pickUpSound.Play();
	MK5ammoDisplay.SetActive(true);
	objCompleted.SetActive(true);
}
