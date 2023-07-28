ServerEvents.recipes(event =>{
	event.remove({ id: 'create:compacting/blaze_cake' })
	event.shaped ( Item.of('create:blaze_cake_base', 3), [
	'ADA',
	'ABA',
	'CCC' ], {
		A: 'minecraft:wheat',
		B: 'emendatusenigmatica:silicon_gem',
		C: 'create:cinder_flour',
		D: '#forge:eggs' })
})