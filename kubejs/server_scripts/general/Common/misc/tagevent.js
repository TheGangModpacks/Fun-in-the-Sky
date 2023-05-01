//priority: 10
let Ex = (id) => `exnihilosequentia:${id}`
let EE = (id) => `emendatusenigmatica:${id}`
let TS = (id) => `thermal:${id}`
let IE = (id) => `immersiveengineering:${id}`
let MK = (id) => `mekanism:${id}`
ServerEvents.tags('item', event => {
event.add('quests:buzzsaw', 'immersiveengineering:sawblade')
event.add('quests:buzzsaw', 'immersiveengineering:rockcutter')
event.add('forge:silicon', 'emendatusenigmatica:silicon_gem')
event.add('custom:other_pebbles', Ex('andesite_pebble'))
event.add('custom:other_pebbles', Ex('basalt_pebble'))
event.add('custom:other_pebbles', Ex('blackstone_pebble'))
event.add('custom:other_pebbles', Ex('calcite_pebble'))
event.add('custom:other_pebbles', Ex('dripstone_pebble'))
event.add('custom:other_pebbles', Ex('granite_pebble'))
event.add('custom:other_pebbles', Ex('deepslate_pebble'))
event.add('custom:other_pebbles', Ex('diorite_pebble'))
event.add('custom:other_pebbles', Ex('tuff_pebble'))
event.add('forge:salt', IE('dust_saltpeter'))
event.remove('forge:saltpeter', IE('dust_saltpeter'))
event.add('forge:salt', TS('niter_dust'))
event.add('forge:gems/salt', TS('niter'))
event.remove('forge:gems/niter', TS('niter'))
event.remove('forge:dusts/niter', TS('niter_dust'))
const mkt = "custom:mekanism_tiered_ingredients";
event.add(mkt, '/^mekanism:.*_factory/')
event.add(mkt, '/^mekanism:.*_chemical_tank/')
event.add(mkt, '/^mekanism:.*_fluid_tank/')
event.add(mkt, '/^mekanism:.*_installer/')
event.add('forge:gems/niter', EE('salt_gem'))
event.add('forge:gems/saltpeter', EE('salt_gem'))
event.add('forge:dusts/saltpeter', EE('salt_dust'))
event.add('forge:dusts/niter', EE('salt_dust'))
event.remove('twilightforest:portal/activator', 'minecraft:diamond')
event.add('twilightforest:portal/activator', "pneumaticcraft:printed_circuit_board")
event.add('forge:armor/leather', '/^minecraft:.*_leather_/')
event.add('forge:slates/black_iron', 'extendedcrafting:black_iron_slate')
})
ServerEvents.tags('fluid', event =>{
	event.removeAll('minecraft:water')
	event.add('minecraft:water', 'minecraft:water')
})
ServerEvents.recipes(event => {
    event.remove({output: '#custom:disabled'})
	console.log('Excecute Order 66');
})