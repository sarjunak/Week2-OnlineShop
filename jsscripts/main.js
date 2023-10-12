var item=0;
var count=document.getElementById('badge');
document.querySelectorAll('.btnmodal').forEach(btnshp=>{
  btnshp.addEventListener('click',()=>{
    var myModal=document.getElementById("exampleModal");
    myModal.classList.remove("hide");
    item+=1;
    count.textContent=item;
  })
});

var closemdl=document.getElementById('closemodal');
closemdl.addEventListener('click',()=>{
  var myModal=document.getElementById("exampleModal");
  myModal.classList.add("hide");
  
});


var closelgnmdl=document.getElementById('closelgnmodal');
closelgnmdl.addEventListener('click',()=>{
  var myModal=document.getElementById("loginmodal");
  myModal.classList.add("hide");
  
});
var logbtn=document.getElementById("btnlogn");
logbtn.addEventListener('click',()=>{
  var lgnmdl=document.getElementById("loginmodal");
  lgnmdl.classList.remove("hide");
});
var logn=document.getElementById("lognbtn");
logn.addEventListener('click',()=>{
  var myModal=document.getElementById("loginmodal");
  var user=document.getElementById("btnlogn");
  user.style.color='Red';
  myModal.classList.add("hide");
})

document.querySelectorAll('.categorybtn').forEach(button => {
    button.addEventListener('click', () => {
        const fired_button = button.value;
        if(fired_button=="Men")
        {
           let men=document.getElementById("men");
            men.style.display='block'; 
            let women=document.getElementById("women");
            women.style.display='none';
            let kidsshoe=document.getElementById("kids");
            kidsshoe.style.display='none';
            let bags=document.getElementById("bags");
            bags.style.display='none';
        }
        else if(fired_button=="Women")
        {
           let men=document.getElementById("men");
            men.style.display='none'; 
            let kidsshoe=document.getElementById("kids");
            kidsshoe.style.display='none';
            let bags=document.getElementById("bags");
            bags.style.display='none';
            let women=document.getElementById("women");
            women.style.display='block';
        }
        else if(fired_button=="kids")
        {
           let men=document.getElementById("men");
            men.style.display='none'; 
            let women=document.getElementById("women");
            women.style.display='none';
            let bags=document.getElementById("bags");
            bags.style.display='none';
            let kidsshoe=document.getElementById("kids");
            kidsshoe.style.display='block';
        }
        else if(fired_button=="Bags")
        {
           let men=document.getElementById("men");
            men.style.display='none'; 
            let women=document.getElementById("women");
            women.style.display='none';
            let kidsshoe=document.getElementById("kids");
            kidsshoe.style.display='none';
            let bags=document.getElementById("bags");
            bags.style.display='block';
        } 
        
    });
});


