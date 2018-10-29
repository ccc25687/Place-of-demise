using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Sprites;

public class hp : MonoBehaviour {

	public GameObject[] image;//生命的圖片
	public float superTime;//無敵時間

	private Animator hurt_animator;//受傷害動畫
	private BoxCollider2D collider2d;//傷害的碰撞器
	private SpriteRenderer sprite_falsh;//玩家圖片
	public float speed;//閃爍平率
	private bool damage;//傷害的狀態
	private float time_i;//計時
	private int life;//生命
	void Start(){
		damage=false;
		life = 3;
		collider2d=GetComponent<BoxCollider2D> ();
		hurt_animator = GameObject.Find ("player").GetComponent<Animator> ();
		sprite_falsh = GameObject.Find ("player-climb-4").GetComponent<SpriteRenderer> ();
	}

	void Update(){
		falsh_time ();
	}

	void OnTriggerEnter2D(Collider2D co){
		if (co.gameObject.tag == "monster") {
			collider2d.enabled = false;//關掉hurt碰撞器
			life -= 1;
			life = Mathf.Clamp (life,0, 3);
			life_image ();
			hurt_animator.Play ("hurt");
			StartCoroutine (falsh_animator ());//呼叫執行緒
		}
	}


	IEnumerator falsh_animator(){
		damage = true;
		yield return new WaitForSeconds (superTime);//結束無敵時間為superTime,結束後往下執行
		damage=false;
		collider2d.enabled = true;
	}

	void falsh_time (){
		if (damage) {
			time_i += Time.deltaTime;
			if (time_i % speed < speed/2f) {
				sprite_falsh.color = Color.clear;
			} else {
				sprite_falsh.color = Color.white;
			}
		} else {
			time_i= 0f;
			sprite_falsh.color =Color.white;
		}
	}

	void life_image(){
		if (life == 3) {
			for(int i=0;i<=life;i++)
				image[i].SetActive (true);
		}
		if (life == 2) {
			for(int i=0;i<=life;i++)
				image[i].SetActive (true);
			image [3].SetActive (false);
		}
		if (life == 1) {
			for(int i=0;i<=life;i++)
				image[i].SetActive (true);
			image [2].SetActive (false);
			image [3].SetActive (false);
		}
		if (life == 0) {
			image [1].SetActive (false);
			image [2].SetActive (false);
			image [3].SetActive (false);
		}
	}
}
