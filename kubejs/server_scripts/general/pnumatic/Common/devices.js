let MC = (id) => `minecraft:${id}`
let PN = (id) => `pneumaticcraft:${id}`
ServerEvents.recipes(event =>{
    event.remove({ output: (PN('pressure_tube'))})
    event.shaped(Item.of(PN('pressure_tube'), 6),
    [ 'AAA', 'BBB', 'AAA'], { A: (PN('ingot_iron_compressed')), B: (MC('iron_ingot'))})
})