let input=document.querySelector("#input");
let con1=document.querySelector(".con1");
let con2=document.querySelector(".con2");
let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");


let arr1= JSON.parse(localStorage.getItem('key1'))||[];
let arr2= JSON.parse(localStorage.getItem('key2'))||[];


input.onkeydown=function (e) {
    if (e.keyCode==13&&input.value!=""){
        arr1.unshift(input.value);
        input.value="";
        update();
    }
};


function update() {
    con1.innerHTML="";
    con2.innerHTML="";
    num1.innerText=arr1.length;
    num2.innerText=arr2.length;
    arr1.forEach((v,i)=>{
        let list=document.createElement("div");
        list.className="tdlist";
        let input=document.createElement("input");
        input.setAttribute("type","checkbox");
        let span=document.createElement("span");
        span.innerText=`${v}`;
        let del=document.createElement("div");
        del.className="del";
        let cir=document.createElement("div");
        cir.innerText="_";
        cir.className="circle";
        del.appendChild(cir);
        list.appendChild(input);
        list.appendChild(span);
        list.appendChild(del);
        con1.appendChild(list);
        input.onclick=function () {
            arr2.unshift(arr1[i]);
            arr1.splice(i,1);
            update();
        };
        del.onclick=function () {
            arr1.splice(i,1);
            update();
        };
    });
    arr2.forEach((v,i)=>{
        let list=document.createElement("div");
        list.className="tdlist tdlist1";
        let input=document.createElement("input");
        input.setAttribute("type","checkbox");
        input.setAttribute("checked","checked");
        let span=document.createElement("span");
        span.innerText=`${v}`;
        let del=document.createElement("div");
        del.className="del";
        let cir=document.createElement("div");
        cir.innerText="_";
        cir.className="circle";
        del.appendChild(cir);
        list.appendChild(input);
        list.appendChild(span);
        list.appendChild(del);
        con2.appendChild(list);
        input.onclick=function () {
            arr1.unshift(arr2[i]);
            arr2.splice(i,1);
            update();
        };
        del.onclick=function () {
            arr2.splice(i,1);
            update();
        };
    });
        localStorage.setItem('key1', JSON.stringify(arr1));
        localStorage.setItem('key2', JSON.stringify(arr2));
}

update();