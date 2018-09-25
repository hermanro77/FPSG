using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ZombieFollow : MonoBehaviour {

	public float TargetDistance;
	public float allowedRange = 10;

	public float EnemySpeed;
	public int attackTrigger;

	public GameObject TheEnemy;
	public RaycastHit shot;
	public GameObject ThePlayer;

	public int isAttacking;
	public GameObject ScreenFlash;
	public AudioSource[] hurtSounds;
	public int painSound;

	// Update is called once per frame
	void Update () {
		transform.LookAt (ThePlayer.transform);
		if (Physics.Raycast (transform.position, transform.TransformDirection (Vector3.forward), out shot)) {
			TargetDistance = shot.distance;
			if (TargetDistance < allowedRange) {
				EnemySpeed = 0.01f;
				if (attackTrigger == 0) {
					TheEnemy.GetComponent<Animation> ().Play ("Walking");
					transform.position = Vector3.MoveTowards (transform.position, ThePlayer.transform.position, EnemySpeed);
				}
					
			} else {
				EnemySpeed = 0;
				TheEnemy.GetComponent<Animation> ().Play ("Idle");
			}
		}
		if (attackTrigger == 1) {
			if (isAttacking == 0){
				StartCoroutine (EnemyDamage ());
			}
			TheEnemy.GetComponent<Animation> ().Play ("Attacking");
			transform.position = Vector3.MoveTowards (transform.position, ThePlayer.transform.position, EnemySpeed);
			EnemySpeed = 0.1f;
		}
	}

	void OnTriggerEnter(){
		attackTrigger = 1;
	}
	void OnTriggerExit(){
		attackTrigger = 0;
	}

	IEnumerator EnemyDamage(){
		isAttacking = 1;
		painSound = Random.Range (0, 3);
		yield return new WaitForSeconds (0.9f);
		ScreenFlash.SetActive (true);
		GlobalHealth.PlayerHealth -= 2;
		hurtSounds [painSound].Play ();
		yield return new WaitForSeconds (0.05f);
		ScreenFlash.SetActive (false);
		yield return new WaitForSeconds (1);
		isAttacking = 0;
	}

}
