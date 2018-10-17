#pragma strict

function OnTriggerEnter2D(co:Collider2D){
    if(co.gameObject.tag=="Player"){
        GetComponent.<Animator>().Play("trap2");
    }
}