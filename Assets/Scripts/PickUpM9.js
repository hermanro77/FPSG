var TheDistance : float = PlayerCasting.DistanceFromTarget;
var textDisplay : GameObject;
var fakeGun : GameObject;
var realGun : GameObject;
var M9ammoDisplay : GameObject;
var pickUpSound : AudioSource;
var objCompleted : GameObject;
var MK5 : GameObject;
var MK5AmmoLabel : GameObject;

function Update(){
	TheDistance = PlayerCasting.DistanceFromTarget;
}

function OnMouseOver(){
	if (TheDistance <= 1.5){
		textDisplay.GetComponent.<Text>().text = "press 'e' to pick up m9";
	}
	if (Input.GetButtonDown("Action")){
		if (TheDistance <= 1.5){
			takeM9();
			if (MK5.activeSelf){
				MK5.SetActive(false);
				MK5AmmoLabel.SetActive(false);
				AmmoCountDisplay.currentAmmo = 0;
				AmmoCountDisplay.loadedAmmo = 0;
			}
		}
	}
}

function OnMouseExit(){
	textDisplay.GetComponent.<Text>().text = "";
}

function takeM9(){
	transform.position = Vector3(0, -1000, 0);
	fakeGun.SetActive(false);
	realGun.SetActive(true);
	pickUpSound.Play();
	M9ammoDisplay.SetActive(true);
	objCompleted.SetActive(true);

}
