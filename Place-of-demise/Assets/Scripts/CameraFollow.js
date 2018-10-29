#pragma strict

private var range:Vector2=Vector2(-6,125);//min /max
var target:Transform;

function Update(){
	transform.position.x=target.position.x;
	transform.position.x=Mathf.Clamp(transform.position.x,range.x,range.y);
}