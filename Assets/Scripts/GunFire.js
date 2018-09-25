var muzzleflash : GameObject;


function Update () {
	if (AmmoCountDisplay.loadedAmmo > 0){
		if (Input.GetButtonDown("Fire1")) {
			var gunsound : AudioSource = GetComponent.<AudioSource>();
			gunsound.Play();
			muzzleflash.SetActive(true);
			muzzleflashOff();
			GetComponent.<Animation>().Play("GunShot"); 
			AmmoCountDisplay.loadedAmmo -= 1;
		}
	}
}

function muzzleflashOff(){
	yield WaitForSeconds(0.1);
	muzzleflash.SetActive(false);
}