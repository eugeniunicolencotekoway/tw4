fetch(' http://localhost:3000/professions/{varianta}/city/{city}', {
    method: 'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        name:'Forma1'
    })
}).then(res=>{
    return res.json()
})
.then(data=>console.log(data))
.catch(error=>console.log('ERROR'))
