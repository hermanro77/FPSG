var objCompleted : GameObject;

function DeductPoints(DamageAmount : int){
	GlobalScore.currentScore += 50;
	objCompleted.SetActive(true);
}
