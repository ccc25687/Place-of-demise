#pragma strict

function Update () {
	Invoke("WaitAndGo",5);
}

function WaitAndGo(){
	Application.LoadLevel(2);
}
