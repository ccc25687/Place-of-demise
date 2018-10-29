#pragma strict
var sprite:GameObject;
private var runSpeed:float=8;
private var JumpHight:float=800;
private var body:Rigidbody2D;
private var animator:Animator;

private var jumping:boolean=false;
private var isGround:boolean=false;

function Awake () {
	animator=GetComponent.<Animator>();
	body=GetComponent.<Rigidbody2D>();
}

function FixedUpdate () {
	Move();
	Jump();
	SetJumpState();
	StateMachine();
}

//Jump
function Jump(){
	if(!isGround || body.velocity.y!=0){return;}
	if(Input.GetButtonDown("Jump")){
		body.AddForce(Vector3.up*JumpHight);
	}
}
//Move
function Move(){
	var speed:float=Input.GetAxis("Move")*runSpeed;
	body.velocity.x=speed;

	if(speed!=0){
		sprite.transform.localScale.x=Mathf.Sign(body.velocity.x)==1 ?0.7:-0.7;//body.velocity.x是前後的速度-1~1
	}
}
//Set jump state
function SetJumpState(){
	if(body.velocity.y>0.1){
		jumping=true;
		isGround=false;
	}else if(jumping){
		jumping=false;
	}
}

//state machine
function StateMachine(){
	animator.SetFloat("Speed",Mathf.Abs(body.velocity.x));
	animator.SetBool("Jumping",jumping);
	animator.SetBool("Ground",isGround);
}

function OnCollisionEnter2D(co:Collision2D){
	if(co.gameObject.tag=="Ground" && co.contacts[0].normal==Vector3.up){
		isGround=true;
	}
}