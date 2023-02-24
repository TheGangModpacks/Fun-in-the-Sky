ServerEvents.recipes(event =>{
	event.remove({ output: 'ae2:certus_quartz_crystal' })
	event.remove({id:'exnihiloae:sieve/ens_cerus_quartz'})
	event.custom({
		type: 'create:mixing',
		heatRequirement: 'superheated',
		ingredients: [
		Item.of('ae2:certus_quartz_dust').toJson(),
		Item.of('minecraft:sand').toJson(),
		Item.of('thermal:quartz_dust').toJson(),
		Fluid.of('minecraft:water').withAmount(250).toJson()
	],
		results: [
		Item.of('ae2:certus_quartz_crystal').withCount(2).toJson() ]
	})
})