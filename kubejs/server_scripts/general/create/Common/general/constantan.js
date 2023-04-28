let a = 'minecraft:copper_ingot';
let ab = '#forge:plates/copper';
let b = 'emendatusenigmatica:copper_plate';
let c = 'emendatusenigmatica:constantan_ingot';
let d = 'emendatusenigmatica:constantan_plate';
let e = 'minecraft:copper_block';
let f = 'emendatusenigmatica:constantan_block';

ServerEvents.recipes(event =>{
    event.replaceInput({id: 'create:crafting/kinetics/fluid_pipe'}, a, c)
    event.replaceInput({id: 'create:crafting/kinetics/fluid_pipe'}, ab, d)
    event.replaceInput({id: 'create:crafting/kinetics/fluid_pipe_vertical'}, a, c)
    event.replaceInput({id: 'create:crafting/kinetics/fluid_pipe_vertical'}, b, d)
    event.replaceInput({id: 'create:crafting/kinetics/fluid_tank'}, ab, d)
    event.replaceInput({id: 'create:crafting/kinetics/steam_whistle'}, a, c)
    event.replaceInput({id: 'create:crafting/kinetics/steam_engine'}, e, f)
    event.replaceInput({id: 'create:crafting/appliances/copper_backtank'}, a, c)
    event.replaceInput({id: 'create:crafting/appliances/copper_backtank'}, e, f)
    event.replaceInput({id: 'create:crafting/kinetics/copper_valve_handle'}, b, d)
    event.replaceInput({id: 'createaddition:crafting/capacitor_1'}, b, d)
    event.replaceInput({id: 'createaddition:crafting/capacitor_2'}, b, d)
    event.replaceInput({id: 'sliceanddice:sprinkler'}, ab, c)
    event.replaceInput({id: 'create:crafting/logistics/display_link'}, ab, c)
})