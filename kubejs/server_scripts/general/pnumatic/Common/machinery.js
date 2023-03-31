let MC = (id) => `minecraft:${id}`
let PN = (id) => `pneumaticcraft:${id}`
ServerEvents.recipes(event =>{
    event.shaped(Item.of(PN('pressure_chamber_interface')),
    [ ' A ', 'ABA', ' A '], { A: (PN('pressure_chamber_wall')), B: 'create:portable_storage_interface'})
})