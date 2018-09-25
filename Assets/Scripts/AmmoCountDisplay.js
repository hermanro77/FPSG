import UnityEngine.UI;

static var currentAmmo : int;
var internalAmmo : int;
var AmmoDisplay : GameObject;

static var loadedAmmo : int;
var internalLoaded : int;
var LoadedAmmoDisplay : GameObject; 

function Update(){
	internalAmmo = currentAmmo;
	internalLoaded = loadedAmmo;
	AmmoDisplay.GetComponent.<Text>().text = "" + internalAmmo;
	LoadedAmmoDisplay.GetComponent.<Text>().text = "" + internalLoaded;
}
