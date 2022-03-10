const handleformSubmit=async()=>{

    
    const recipe_name = document.querySelector('#recipe_name').value.trim();
   const preperation_time=document.querySelector('#preperation_time').value.trim();
   
   
    const obj={
        recipe_name,
        preperation_time
    }

    console.log(obj)
}