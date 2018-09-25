var ThisGameObject : GameObject;
var AmmoPickUpSound : AudioSource;

function OnTriggerEnter(col : Collider){
	if (AmmoCountDisplay.loadedAmmo == 0){
		AmmoCountDisplay.loadedAmmo += 30;
	}
	else{
		AmmoCountDisplay.currentAmmo += 30;
	}
	ThisGameObject.SetActive(false);
	AmmoPickUpSound.Play();

}
	
