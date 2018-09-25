var ThisGameObject : GameObject;
var AmmoPickUpSound : AudioSource;

function OnTriggerEnter(col : Collider){
	if (AmmoCountDisplay.loadedAmmo == 0){
		AmmoCountDisplay.loadedAmmo += 10;
	}
	else{
		AmmoCountDisplay.currentAmmo += 10;
	}
	ThisGameObject.SetActive(false);
	AmmoPickUpSound.Play();

}
	
