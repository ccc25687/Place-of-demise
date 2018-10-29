#pragma strict
private var eaten:boolean=false;

function OnTriggerEnter2D(co:Collider2D){
	if(co.tag!="Player"||eaten){return;}
	GetComponent.<Animator>().Play("CoinDamp");
	//Destroy(gameObject);
}

function die(){
	Destroy(gameObject);
}