const induction_prefix = 'fits:materals/processing/induction_alloy/'
ServerEvents.recipes(event =>{
    event.recipes.thermal.smelter('2x emendatusenigmatica:signar_ingot', ['3x emendatusenigmatica:signalum_ingot', '2x emendatusenigmatica:invar_ingot', '2x emendatusenigmatica:brass_ingot'])
    .id(`${induction_prefix}signar_ingot`)
    event.recipes.thermal.smelter('2x emendatusenigmatica:signar_dust', ['3x emendatusenigmatica:signalum_dust', '2x emendatusenigmatica:invar_dust', '2x emendatusenigmatica:brass_dust'])
    .id(`${induction_prefix}signar_dust`)
    event.recipes.thermal.smelter('2x emendatusenigmatica:black_iron_ingot', ['3x emendatusenigmatica:signar_ingot', '6x minecraft:iron_ingot', '3x emendatusenigmatica:tin_ingot'])
    .id(`${induction_prefix}black_iron_ingot`)
    event.custom({
        type: induction,
        ingredients: [
            {item: "emendatusenigmatica:aluminum_ingot"},
            {item: "emendatusenigmatica:signar_ingot"},
            {item: "emendatusenigmatica:calcium_ingot"}
        ],
        result:{item: 'emendatusenigmatica:trio_exopherilium_base_dust'},
        energy: 90000
    }).id(`${induction_prefix}trio_exopherilium_base_dust`)
})