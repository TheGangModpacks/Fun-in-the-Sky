//priority: 70000

ServerEvents.recipes(event =>{
    let mold = 'immersiveengineering:mold_gear';
    let e = (id) => `emendatusenigmatica:${id}`
    event.recipes.immersiveengineering.metal_press(e('lumium_gear'), '4x emendatusenigmatica:lumium_ingot', mold)
    event.recipes.immersiveengineering.metal_press(e('signalum_gear'), '4x emendatusenigmatica:signalum_ingot', mold)
    event.replaceInput({mod: 'thermal'}, 'thermal:press_gear_die', 'immersiveengineering:mold_gear')
    event.replaceInput({mod: 'emendatusenigmatica'}, 'thermal:press_gear_die', 'immersiveengineering:mold_gear')
    event.recipes.thermal.press(['pneumaticcraft:compressed_iron_gear'], ['6x pnumaticcraft:ingot_iron_compressed', 'immersiveengineering:mold_gear']).energy(2400)
    
    
    
    
    event.recipes.botania.runic_altar(ee('elementium_gear'), [
        'botania:elementium_ingot',
        'botania:elementium_ingot',
        'botania:elementium_ingot',
        'botania:elementium_ingot',
         ee('invar_nugget')], 20000)
    event.recipes.botania.runic_altar(ee('manasteel_gear'), [
        'botania:manasteel_ingot',
        'botania:manasteel_ingot',
        'botania:manasteel_ingot',
        'botania:manasteel_ingot',
         ee('invar_nugget')], 20000)
    event.recipes.botania.runic_altar(ee('terrasteel_gear'), [
        'botania:terrasteel_ingot',
        'botania:terrasteel_ingot',
        'botania:terrasteel_ingot',
        'botania:terrasteel_ingot',
         ee('invar_nugget')], 20000)
})