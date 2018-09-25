var objCompleted : GameObject;

function DeductPoints(DamageAmount : int){
	GlobalScore.currentScore += 25;
	objCompleted.SetActive(true);
}
