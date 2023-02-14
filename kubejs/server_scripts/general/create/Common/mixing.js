ServerEvents.recipes(event =>{
	event.custom({
		type: 'create:mixing',
		ingredients: [
		{
			item: 'littlelogistics:spring'
		},
		{
			item: 'thermal:wrench'
		},
		{
			item: 'minecraft:red_dye'
		},
		{
			item: 'emendatusenigmatica:steel_ingot'
		}
		],
		results: [
		{
			item: 'littlelogistics:conductors_wrench'
		}
		]
	})
})