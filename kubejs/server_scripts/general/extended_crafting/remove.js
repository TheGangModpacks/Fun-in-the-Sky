//priority: 1
ServerEvents.recipes(r =>{
    r.remove({mod: 'extendedcrafting', not: [{id: 'extendedcrafting:singularity'}, {id: 'extendedcrafting:handheld_table'}]})
})