using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HealthMonitor : MonoBehaviour {

	public GameObject[] Healths;
	public int CurrentHealth;


	// Update is called once per frame
	void Update () {
		CurrentHealth = GlobalHealth.PlayerHealth;
		int num = CurrentHealth / 2;
		if (CurrentHealth < 10) {
			if (Healths [num].transform.localScale.y <= 0.0f) {
				Healths [num].SetActive (false);
			} else {
				Healths [num].transform.localScale -= new Vector3 (0, 0.05f, 0);
			}
		}
	}
}
