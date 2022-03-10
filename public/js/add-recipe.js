var ing_display = document.querySelector('#ingredients-display')
var ing_display = document.querySelector('#ingredients-display')
var add_ing=document.querySelector('#add-ing')
var ing_text=document.querySelector('#ing_text');

const handleformSubmit=async()=>{

    
   const recipe_name = document.querySelector('#recipe_name').value.trim();
   const preperation_time=document.querySelector('#preperation_time').value.trim();
   
   
    const obj={
        recipe_name,
        preperation_time
    }

    console.log(obj)
}


add_ing.addEventListener('click',()=>{
var tr=document.createElement("tr");
const td1=document.createElement('td')
    td1.setAttribute('data-label','ID')
    td1.textContent=Math.floor(Math.random() * 999)
    const td2=document.createElement('td')
    td2.setAttribute('data-label','Ingredients')
    td2.textContent=ing_text.value.trim();
    tr.append(td1,td2)
ing_display.appendChild(tr)



})
