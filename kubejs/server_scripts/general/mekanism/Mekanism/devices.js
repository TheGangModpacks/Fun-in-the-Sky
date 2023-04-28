ServerEvents.recipes(event =>{
    //Tank recipes
    event.remove({ output: 'mekanism:basic_fluid_tank'})
    event.remove({ output: 'mekanism:advanced_fluid_tank'})
    event.remove({ output: 'mekanism:elite_fluid_tank'})
    event.remove({ output: 'mekanism:ultimate_fluid_tank'})
    event.remove({ output: 'mekanism:basic_chemical_tank'})
    event.remove({ output: 'mekanism:advanced_chemical_tank'})
    event.remove({ output: 'mekanism:elite_chemical_tank'})
    event.remove({ output: 'mekanism:ultimate_chemical_tank'})
    event.shaped(Item.of('mekanism:basic_fluid_tank'),
    [ 'ABA', 'BCB', 'ABA'],
    { B: 'emendatusenigmatica:steel_ingot',
      A: 'exnihilosequentia:porcelain_clay',
      C: 'ae2:quartz_vibrant_glass'})

    event.shaped(Item.of('mekanism:basic_chemical_tank'),
    [ 'ABA', 'BCB', 'ABA'],
    { B: 'emendatusenigmatica:osmium_ingot',
      A: 'ae2:fluix_dust',
      C: 'appmek:chemical_cell_housing'})
})