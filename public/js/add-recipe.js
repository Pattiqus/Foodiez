var ing_display = document.querySelector('#ingredients-display')
var ing_display = document.querySelector('#ingredients-display')
var add_ing=document.querySelector('#add-ing')
var ing_text=document.querySelector('#ing_text');
var table_data=[]
const handleformSubmit=async()=>{

    const id=Math.floor(Math.random() * 2000)
   const recipe_name = document.querySelector('#recipe_name').value.trim();
   const preperation_time=document.querySelector('#preperation_time').value.trim();
   
   
    const obj={
        id,
        recipe_name,
        preperation_time,
        ingrediants:table_data
    }

if(recipe_name &&  preperation_time && table_data.length){

      console.log(obj)
      const response = await fetch('./api/recipes', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
        alertify.set('notifier','position', 'top-right');
        alertify.success('Succefully Added to the Database');
        window.location.replace('/profile');
    } else {
        alertify.set('notifier','position', 'top-right');
        alertify.error(response.statusText);
       
    }
}

  




  

}


add_ing.addEventListener('click',()=>{
var tr=document.createElement("tr");

    const td=document.createElement('td')
    td.setAttribute('data-label','Ingredients')
    td.textContent=ing_text.value.trim();
    tr.appendChild(td)
    table_data.push({
        id: Math.floor(Math.random() * 999),
        name:ing_text.value.trim()
    })
ing_display.appendChild(tr)



})
