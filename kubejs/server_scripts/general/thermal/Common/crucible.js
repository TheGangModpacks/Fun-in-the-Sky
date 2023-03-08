ServerEvents.recipes(event =>{
	event.custom({
		type: 'thermal:crucible',
		ingredient: Item.of('bigreactors:graphite_ingot').toJson(),
		result: [ Fluid.of('kubejs:liquifacted_graphite').withAmount(144).toJson()],
		energy: 20000
	})
})