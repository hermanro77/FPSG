var UpCours : GameObject;
var DownCours : GameObject;
var RightCours : GameObject;
var LeftCours : GameObject;

function Update(){
	if (AmmoCountDisplay.loadedAmmo > 0){
		if (Input.GetButtonDown("Fire1")){
			UpCours.GetComponent("Animator").enabled = true;
			DownCours.GetComponent("Animator").enabled = true;
			RightCours.GetComponent("Animator").enabled = true;
			LeftCours.GetComponent("Animator").enabled = true;
			WaitingAnim();
		}
	}
}

function WaitingAnim(){
	yield WaitForSeconds(0.1);
	UpCours.GetComponent("Animator").enabled = false;
	DownCours.GetComponent("Animator").enabled = false;
	RightCours.GetComponent("Animator").enabled = false;
	LeftCours.GetComponent("Animator").enabled = false;
}