static var DistanceFromTarget : float;
var ToTarget : float;

function Update(){
	var Hit : RaycastHit;
	if (Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), Hit)){
		ToTarget = Hit.distance;
		DistanceFromTarget = ToTarget;
	}
}
