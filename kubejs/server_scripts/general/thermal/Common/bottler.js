ServerEvents.recipes(event =>{
	event.remove ({ output: 'mekanism:configurator' })
	event.custom({
		type: 'thermal:bottler',
		ingredients: [
		{
			item: 'thermal:wrench'
		},
		{
			fluid: 'mekanism:oxygen',
			amount: 8000
		}
		],
		result: [
		{
			item: 'mekanism:configurator'
		}
		]
	})
})