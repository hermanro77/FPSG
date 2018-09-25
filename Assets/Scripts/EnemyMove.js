var TheEnemy : GameObject;
var ThePlayer : GameObject;
var EnemySpeed : float;
var moveTrigger : int;

function Update(){
	if (moveTrigger == 1){
		EnemySpeed = 0.03;
		transform.position = Vector3.MoveTowards(transform.position, ThePlayer.transform.position, EnemySpeed);
	}
}
