//priority: 1
ServerEvents.recipes(event =>{
let EX = (id) => `extendedgears:${id}`
let EXL = (id) => `extendedgears:large_${id}`
let CR = (id) => `create:${id}`
let CRL = (id) => `create:large_${id}`
let MC = (id) => `minecraft:${id}`
let EE = (id) => `emendatusenigmatica:${id}`
event.remove({ output: (CR('andesite_alloy'))})
event.remove({ output: '#extendedgears:cogwheel'})
event.replaceInput({}, 'extendedgears:copper_cogwheel', 'extendedgears:iron_cogwheel')
event.replaceInput({}, 'extendedgears:large_copper_cogwheel', 'extendedgears:large_iron_cogwheel')
event.replaceInput([
    { id: 'create:crafting/kinetics/mechanical_crafter'},
    {id: 'create:crafting/kinetics/sequenced_gearshift'}],
     'extendedgears:iron_cogwheel', 'extendedgears:steel_cogwheel')
//Cogwheels
event.shaped(Item.of(EX('copper_cogwheel', ), 4),
[ 'AAA', 'ABA', 'AAA'],{ A: (MC('copper_ingot')), B: (CR('andesite_alloy'))})
event.shaped(Item.of(EX('iron_cogwheel')),
[ 'AAA', 'ABA', 'AAA'],{ A: (MC('iron_ingot')), B: (EX('copper_cogwheel'))})
event.shaped(Item.of(EX('steel_cogwheel', 2)),
[ 'A A', 'ABA', 'A A'],{ A: (EE('steel_ingot')), B: (EX('iron_cogwheel'))})
//Large Cogwheels
event.shaped(Item.of(EXL('copper_cogwheel', 2)),
[ 'A A', ' B ', 'A A'],{ A: (MC('copper_ingot')), B: (EX('copper_cogwheel'))})
event.shaped(Item.of(EXL('iron_cogwheel')),
[ 'A A', ' B ', 'A A'],{ A: (MC('iron_ingot')), B: (EX('large_copper_cogwheel'))})
event.shaped(Item.of(EXL('steel_cogwheel')),
[ 'A A', ' B ', 'A A'],{ A: (EE('steel_ingot')), B: (EX('steel_cogwheel'))})
event.shaped(Item.of(CRL('cogwheel', 4)),
[ 'A A', ' B ', 'A A'],{ A: (MC('spruce_planks')), B: (CR('cogwheel'))})
event.shaped(Item.of(EXL('birch_cogwheel', 4)),
[ 'A A', ' B ', 'A A'],{ A: (MC('birch_planks')), B: (EX('birch_cogwheel'))})
event.shaped(Item.of(EXL('jungle_cogwheel', 4)),
[ 'A A', ' B ', 'A A'],{ A: (MC('jungle_planks')), B: (EX('jungle_cogwheel'))})
event.shaped(Item.of(EXL('dark_oak_cogwheel', 4)),
[ 'A A', ' B ', 'A A'],{ A: (MC('dark_oak_planks')), B: (EX('dark_oak_cogwheel'))})
event.shaped(Item.of(EXL('mangrove_cogwheel', 4)),
[ 'A A', ' B ', 'A A'],{ A: (MC('mangrove_planks')), B: (EX('mangrove_cogwheel'))})
event.shaped(Item.of(EXL('oak_cogwheel', 4)),
[ 'A A', ' B ', 'A A'],{ A: (MC('oak_planks')), B: (EX('oak_cogwheel'))})
event.shaped(Item.of(EXL('acacia_cogwheel', 4)),
[ 'A A', ' B ', 'A A'],{ A: (MC('acacia_planks')), B: (EX('acacia_cogwheel'))})
event.shaped(Item.of(EXL('warped_cogwheel', 4)),
[ 'A A', ' B ', 'A A'],{ A: (MC('warped_planks')), B: (EX('warped_cogwheel'))})
event.shaped(Item.of(EXL('crimson_cogwheel', 4)),
[ 'A A', ' B ', 'A A'],{ A: (MC('crimson_planks')), B: (EX('crimson_cogwheel'))})
//Wooden Cogs
event.shaped(Item.of(CR('cogwheel', 4)),
[ ' A ', ' B ', ' A '],{ A: (MC('spruce_planks')), B: (EX('copper_cogwheel'))})
event.shaped(Item.of(EX('birch_cogwheel', 4)),
[ ' A ', ' B ', ' A '],{ A: (MC('birch_planks')), B: (EX('copper_cogwheel'))})
event.shaped(Item.of(EX('mangrove_cogwheel', 4)),
[ ' A ', ' B ', ' A '],{ A: (MC('mangrove_planks')), B: (EX('copper_cogwheel'))})
event.shaped(Item.of(EX('oak_cogwheel', 4)),
[ ' A ', ' B ', ' A '],{ A: (MC('oak_planks')), B: (EX('copper_cogwheel'))})
event.shaped(Item.of(EX('dark_oak_cogwheel', 4)),
[ ' A ', ' B ', ' A '],{ A: (MC('dark_oak_planks')), B: (EX('copper_cogwheel'))})
event.shaped(Item.of(EX('acacia_cogwheel', 4)),
[ ' A ', ' B ', ' A '],{ A: (MC('acacia_planks')), B: (EX('copper_cogwheel'))})
event.shaped(Item.of(EX('jungle_cogwheel', 4)),
[ ' A ', ' B ', ' A '],{ A: (MC('jungle_planks')), B: (EX('copper_cogwheel'))})
event.shaped(Item.of(EX('warped_cogwheel', 4)),
[ ' A ', ' B ', ' A '],{ A: (MC('warped_planks')), B: (EX('copper_cogwheel'))})
event.shaped(Item.of(EX('crimson_cogwheel', 4)),
[ ' A ', ' B ', ' A '],{ A: (MC('crimson_planks')), B: (EX('copper_cogwheel'))})
})