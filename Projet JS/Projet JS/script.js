const btnadd=document.getElementById("btnadd");
const btndouble=document.getElementById("btndouble");
const btnafficher=document.getElementById("btnafficher");
const btntri=document.getElementById("btntri");
const btncalculer=document.getElementById("btncalculer");
const listpersons=document.getElementById("listpersons");
const listmoney=document.getElementById("listmoney");
const form=document.getElementById("form");

let noms=[];
let  argent=[];
for(let i in noms){
    const newli =document.createElement("li");
    newli.textContent = noms[i];
    newli.classList.add('list-group-item');
    listpersons.appendChild(newli);
};
for(let j in argent){
    const newli =document.createElement("li");
    newli.textContent = argent[j];
    newli.classList.add('list-group-item');
    listmoney.appendChild(newli);
};

btnadd.addEventListener("click",function(){
    
    const newform1 = document.createElement("form");
    const newlabel1 = document.createElement("label");
    const newinput1 = document.createElement("input");
    newlabel1.textContent="nom : ";
    newinput1.setAttribute("id","input1");
    newinput1.setAttribute("value","");

    newform1.appendChild(newlabel1);
    newform1.appendChild(newinput1);
    listpersons.appendChild(newform1);
   
    const newform2 = document.createElement("form");
    const newlabel2 = document.createElement("label");
    const newinput2 = document.createElement("input");
    const newbtn2 = document.createElement("button");
    newlabel2.textContent="wealth : ";
    newinput2.setAttribute("id","input2");
    newinput2.setAttribute("value","");

    newbtn2.textContent="ajouter";
    newbtn2.setAttribute("id","btnajouter");
    newform2.appendChild(newlabel2);
    newform2.appendChild(newinput2);
    newform2.appendChild(newbtn2);
  
   listmoney.appendChild(newform2);


   document.getElementById("btnajouter").addEventListener("click",function(){
    
    const inp1=document.getElementById("input1").value;
    const inp2=document.getElementById("input2").value;
    inp1="sssss";
    inp2="QQQQ";
    console.log(inp1);
    console.log(inp2);

    noms.unshift("qsd");
    argent.unshift("inp2");
    const newli =document.createElement("li");
    newli.textContent = inp1;
    newli.classList.add('list-group-item');
    listpersons.appendChild(newli);
    const newli2 =document.createElement("li");
    newli2.textContent = inp2;
    newli2.classList.add('list-group-item');
    listpersons.appendChild(newli2);
    
});

    
});



let sommetotale=0;
btncalculer.addEventListener("click",function(){
        for (i in argent){
                sommetotale+=argent[i];
        }
        const newli =document.createElement("li");
        newli.textContent = sommetotale;
        newli.classList.add('list-group-item');
        listmoney.appendChild(newli);
        const newli2 =document.createElement("li");
        newli2.textContent = "Total wealth : ";
        newli2.classList.add('list-group-item');
        listpersons.appendChild(newli2);
});
let double=0;
btndouble.addEventListener("click",function(){
listmoney.innerHTML="";
    for (i in argent){
        console.log("arg1 : "+argent[i]);
        argent[i]=argent[i]*2;
        double+=argent[i];
        console.log("doub1 : "+double);
        console.log("arg2 : "+argent[i]);
        const newli =document.createElement("li");
        newli.textContent = argent[i];
        newli.classList.add('list-group-item');
        listmoney.appendChild(newli);

        
    }

    console.log(double);
});



btnafficher.addEventListener("click",function(){
    listmoney.innerHTML="";
    for (i in argent){
          if(argent[i]>1000000){
            const newli =document.createElement("li");
            newli.textContent = argent[i];
            newli.classList.add('list-group-item');
            listmoney.appendChild(newli);
          }
    }
});
let max=0;
btntri.addEventListener("click",function(){
    listmoney.innerHTML="";
    argent.sort((a,b)=>a-b);
   argent.reverse();
    console.log(argent);
    for(i in argent){
          const newli =document.createElement("li");
          newli.textContent = argent[i];
          newli.classList.add('list-group-item');
          listmoney.appendChild(newli);}
        
});
