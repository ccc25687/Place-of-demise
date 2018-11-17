﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public abstract class Character : MonoBehaviour {

	[SerializeField]
	private float speed;
	protected Vector2 direction;
	private Animator animator;

	void Start () {
		animator = GetComponent<Animator> ();
	}

	protected virtual void Update () {
		Move ();
	}

	public void Move(){
		transform.Translate (direction*speed*Time.deltaTime);
		AnimateMovement (direction);
	}

	public void AnimateMovement(Vector2 direction){
		animator.SetFloat ("x", direction.x);
		animator.SetFloat ("y", direction.y);
	}
}
