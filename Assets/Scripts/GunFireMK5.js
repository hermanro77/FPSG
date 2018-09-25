var MK5Sound : AudioSource;
var TheMK5 : GameObject;
var muzzleFlash : GameObject;
var ammoCount : int;
var firing : int;

var UpCours : GameObject;
var DownCours : GameObject;
var RightCours : GameObject;
var LeftCours : GameObject;

function Update(){
	ammoCount = AmmoCountDisplay.loadedAmmo;
	if (Input.GetButton("Fire1")) {
		if (ammoCount >= 1){
			if (firing == 0){
				MK5Shot();	
			}
		}
	}
}

function MK5Shot(){
	firing = 1;
	UpCours.GetComponent("Animator").enabled = true;
	DownCours.GetComponent("Animator").enabled = true;
	RightCours.GetComponent("Animator").enabled = true;
	LeftCours.GetComponent("Animator").enabled = true;
	
	MK5Sound.Play();
	AmmoCountDisplay.loadedAmmo -= 1;
	TheMK5.GetComponent.<Animation>().Play("MK5Anim");
	muzzleFlash.SetActive(true);
	yield WaitForSeconds(0.1);
	muzzleFlash.SetActive(false);

	UpCours.GetComponent("Animator").enabled = false;
	DownCours.GetComponent("Animator").enabled = false;
	RightCours.GetComponent("Animator").enabled = false;
	LeftCours.GetComponent("Animator").enabled = false;
	firing = 0;
}