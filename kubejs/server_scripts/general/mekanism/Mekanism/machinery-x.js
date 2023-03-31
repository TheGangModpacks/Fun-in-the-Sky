const filled = 'compactcrafting:filled';
const hollow = 'compactcrafting:hollow';
const mixed = 'compactcrafting:mixed';
const block = 'compactcrafting:block';
ServerEvents.recipes(event =>{
    event.remove({ output: 'mekanism:metallurgic_infuser'})
    event.custom({
        type: 'compactcrafting:miniaturization',
        recipeSize: 6,
        layers: [
            {type: mixed, pattern:[
                ['C', 'C', 'C', 'C', 'C'],
                ['C', 'C', 'C', 'C', 'C'],
                ['C', 'C', 'C', 'C', 'C'],
            ]},
            {type: mixed, pattern:[
                ['C', 'C', 'C', 'C', 'C'],
                ['C', 'D', 'D', 'D', 'C'],
                ['C', 'D', 'D', 'D', 'C'],
                ['C', 'H', 'H', 'H', 'C'],
                ['C', 'C', 'C', 'C', 'C'],
            ]},
            {type: mixed, pattern:[
                ['C', 'H', 'H', 'H', 'C'],
                ['H', 'D', 'H', 'D', 'H'],
                ['H', 'J', 'E', 'J', 'H'],
                ['H', 'D', 'H', 'D', 'H'],
                ['C', 'H', 'H', 'H', 'C'],
            ]},
            {type: mixed, pattern:[
                ['C', 'C', 'C', 'C', 'C'],
                ['C', 'D', 'G', 'D', 'C'],
                ['K', 'G', 'F', 'G', 'K'],
                ['C', 'D', 'G', 'D', 'C'],
                ['C', 'C', 'C', 'C', 'C'],
            ]},
            {type: mixed, pattern:[
                ['C', 'B', 'B', 'B', 'C'],
                ['B', 'D', 'D', 'D', 'B'],
                ['B', 'D', 'E', 'D', 'B'],
                ['B', 'D', 'D', 'D', 'B'],
                ['C', 'B', 'L', 'B', 'C'],
            ]},
            {type: mixed, pattern:[
                ['C', 'C', 'C', 'C', 'C'],
                ['C', 'C', 'C', 'C', 'C'],
                ['C', 'C', 'A', 'C', 'C'],
                ['C', 'C', 'C', 'C', 'C'],
                ['C', 'C', 'C', 'C', 'C'],
            ]},
        ],
        catalyst: {id: 'pneumaticcraft:capacitor', Count: 1},
        components:{
            A: {type: block, block: 'minecraft:stone'},
            B: {type: block, block: 'immersiveengineering:slag_glass'},
            C: {type: block, block: 'compactmachines:wall'},
            D: {type: block, block: 'immersiveengineering:steel_fence'},
            E: {type: block, block: 'mekanism:basic_chemical_tank'},
            F: {type: block, block: 'mekanism:steel_casing'},
            G: {type: block, block: 'powah:energized_steel_block'},
            H: {type: block, block: 'immersiveengineering:sheetmetal_steel'},
            J: {type: block, block: 'immersiveengineering:coil_lv'},
            K: {type: block, block: 'pneumaticcraft:pressure_chamber_interface'},
            L: {type: block, block: 'pneumaticcraft:pressure_chamber_valve'}
        },
        outputs: [{id: 'mekanism:metallurgic_infuser', Count: 1}]
    })
    event.recipes.botania.orechid({item: 'minecraft:dirt', chance: 0.45}, "minecraft:stone", 15)
})