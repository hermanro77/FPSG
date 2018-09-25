var DamageAmount : int = 5;
var TargetDistance : float;
var AllowedRange : float = 15;
var hit : RaycastHit;
var TheBullet : GameObject;
var theBlood : GameObject;


function Update(){
	if (AmmoCountDisplay.loadedAmmo > 0){
		if (Input.GetButtonDown("Fire1")){
			var Shot : RaycastHit;
			if (Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), Shot)){
				TargetDistance = Shot.distance;
				if (TargetDistance < AllowedRange){
					Shot.transform.SendMessage("DeductPoints", DamageAmount, SendMessageOptions.DontRequireReceiver);
					if (Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit)){
						if(hit.transform.tag == "Zombie"){
							Instantiate(theBlood, hit.point, Quaternion.FromToRotation(Vector3.up, hit.normal));
						}
						else{
							Instantiate(TheBullet, hit.point, Quaternion.FromToRotation(Vector3.up, hit.normal));
						}
					}
				}
			}
		}
	}
 } 