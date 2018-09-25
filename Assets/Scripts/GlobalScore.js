static var currentScore : int;
var internalScore : int;
var scoreText : GameObject;


function Update () {
	internalScore = currentScore;
	scoreText.GetComponent.<Text>().text = "" + internalScore;
}
