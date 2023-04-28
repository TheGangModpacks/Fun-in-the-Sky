ServerEvents.recipes(event =>{
	event.remove({ id: 'thermal:machines/crystallizer/crystallizer_niter' })
	event.custom({
		type: 'thermal:crystallizer',
		ingredients: [ Fluid.of('minecraft:water').withAmount(500).toJson(), Item.of('emendatusenigmatica:salt_dust').toJson() ],
		result: [ Item.of('emendatusenigmatica:salt_gem').toJson() ]
	})
})