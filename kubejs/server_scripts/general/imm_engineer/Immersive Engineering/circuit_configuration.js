ServerEvents.recipes(event =>{
    event.remove({output: 'immersiveengineering:component_iron'})
    event.remove({output: 'immersiveengineering:component_steel'})
    event.custom({
        type: 'immersiveengineering:blueprint'
    })
})