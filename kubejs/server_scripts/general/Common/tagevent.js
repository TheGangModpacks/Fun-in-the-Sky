let Ex = (id) => `exnihilosequentia:${id}`
let EE = (id) => `emendatusenigmatica:${id}`
let TS = (id) => `thermal:${id}`
let IE = (id) => `immersiveengineering:${id}`
ServerEvents.tags('item', event => {
	//Sawblade tag for custom quest reward.
event.add('quests:buzzsaw', 'immersiveengineering:sawblade')
event.add('quests:buzzsaw', 'immersiveengineering:rockcutter')
event.add('forge:silicon', 'emendatusenigmatica:silicon_gem') //Adds this tag to allow AU to unify EE.
event.add('forge:ingots/leaded_iron', 'kubejs:leaded_iron')
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
})