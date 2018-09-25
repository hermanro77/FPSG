var objCompleted : GameObject;

function DeductPoints(DamageAmount : int){
	GlobalScore.currentScore += 100;
	objCompleted.SetActive(true);
}
