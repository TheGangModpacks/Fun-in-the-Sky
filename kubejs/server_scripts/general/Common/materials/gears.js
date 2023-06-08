//priority: 70000

ServerEvents.recipes(event =>{
    let mold = 'immersiveengineering:mold_gear';
    let e = (id) => `emendatusenigmatica:${id}`
    const gear_ingots = {
        emendatusenigmatica: ['nickel', 'steel', 'lumium', 'signalum', 'tin', 'invar', 'osmium', 'constantan', 'lead', 'bronze', 'silver'],
        minecraft: ['iron', 'copper', 'gold'],
        botanicadds: ['gaiasteel']
    };

    for (const mod in gear_ingots) {
        for (const ingot of gear_ingots[mod]) {
            event.remove({output: `emendatusenigmatica:${ingot}_gear`})
            event.recipes.thermal.press([`emendatusenigmatica:${ingot}_gear`],[`4x ${mod}:${ingot}_ingot`, "immersiveengineering:mold_gear"]).energy(2400)
            event.recipes.immersiveengineering.metal_press(`emendatusenigmatica:${ingot}_gear`, `4x ${mod}:${ingot}_ingot`, "immersiveengineering:mold_gear").energy(2400)
        }
    }
    event.recipes.thermal.press(['pneumaticcraft:compressed_iron_gear'], ['6x pneumaticcraft:ingot_iron_compressed', 'immersiveengineering:mold_gear']).energy(2400)
    
    
    
    
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

ServerEvents.recipes(event =>{
    let mold = 'immersiveengineering:mold_gear';
    let e = (id) => `emendatusenigmatica:${id}`
    event.recipes.immersiveengineering.metal_press(e('lumium_gear'), '4x emendatusenigmatica:lumium_ingot', mold)
    event.recipes.immersiveengineering.metal_press(e('signalum_gear'), '4x emendatusenigmatica:signalum_ingot', mold)
    event.replaceInput({mod: 'thermal'}, 'thermal:press_gear_die', 'immersiveengineering:mold_gear')
    event.replaceInput({mod: 'emendatusenigmatica'}, 'thermal:press_gear_die', 'immersiveengineering:mold_gear')
    event.recipes.thermal.press(['pneumaticcraft:compressed_iron_gear'], ['6x pnumaticcraft:ingot_iron_compressed', 'immersiveengineering:mold_gear']).energy(2400)
    event.recipes.thermal.press(['emendatusenigmatica:lapis_gear'], ['12x minecraft:lapis_lazuli', 'immersiveengineering:mold_gear']).energy(2400)
    event.recipes.immersiveengineering.metal_press(e('lapis_gear'), '12x minecraft:lapis_lazuli', mold)
    
    
    
    
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
