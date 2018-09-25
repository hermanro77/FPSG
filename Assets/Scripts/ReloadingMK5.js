var reloadSound : AudioSource;
var MechanicsObject : GameObject;
var crossObject : GameObject;
var clipCount : int;
var ReserveCount : int;
var ReloadAvailable : int;

function Update(){
	clipCount = AmmoCountDisplay.loadedAmmo;
	ReserveCount = AmmoCountDisplay.currentAmmo;

	if (ReserveCount == 0){
		ReloadAvailable = 0;
	}
	else{
		ReloadAvailable = 30 - clipCount;
	}

	if (Input.GetButtonDown("Reload")){
		if (ReloadAvailable > 0){
			if (ReserveCount <= ReloadAvailable){
				AmmoCountDisplay.loadedAmmo += ReserveCount;
				AmmoCountDisplay.currentAmmo -= ReserveCount;
				ActionReload();
			}
			else{
				AmmoCountDisplay.loadedAmmo += ReloadAvailable;
				AmmoCountDisplay.currentAmmo -= ReloadAvailable;
				ActionReload();
			}
		}
		EnableScripts();
	}
} 


function EnableScripts(){
	yield WaitForSeconds(1.1);
	//this.GetComponent("MK5Anim").enabled = true;
	crossObject.SetActive(true);
	MechanicsObject.SetActive(true);

}

function ActionReload(){
	//this.GetComponent("MK5Anim").enabled = false;
	crossObject.SetActive(false);
	MechanicsObject.SetActive(false);
	reloadSound.Play();
	GetComponent.<Animation>().Play("MK5ReloadAnim");
}
