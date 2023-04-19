let cop = 'minecraft:copper_ingot';
let copp = 'emendatusenigmatica:copper_plate';
let con = 'emendatusenigmatica:constantan_ingot';
let conp = 'emendatusenigmatica:constantan_plate';

let ids = ['create:crafting/kinetics/fluid_pipe', 'create:crafting/kinetics/fluid_pipe_vertical'];

ServerEvents.recipes(event =>{
    event.replaceInput({id: ids}, cop, con)
})