var EnemyHealth : int = 10;
var Zombie : GameObject;

function DeductPoints(DamageAmount : int){
	EnemyHealth -= DamageAmount;
}

function Update(){
	if (EnemyHealth <= 0){
		this.GetComponent("ZombieFollow").enabled = false;
		Zombie.GetComponent.<Animation>().Play("Dying");
		EndZombie();
	}
}

function EndZombie(){
	yield WaitForSeconds(3);
	Destroy(gameObject);
}