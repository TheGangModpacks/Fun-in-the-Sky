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
	event.remove({ output: 'mysticalagriculture:soulium_ingot' })
	event.custom({
		type: 'create:mixing',
		ingredients: [
		{
			item: 'mysticalagriculture:prosperity_ingot'
		},
		{
			item: 'mysticalagriculture:soulium_dust'
		},
		{
			item: 'mysticalagriculture:soulium_dust'
		},
		{
			item: 'mysticalagriculture:soulium_dust'
		}
		],
		results: [
		{
			item: 'mysticalagriculture:soulium_ingot'
		}
		],
		heatRequirement: 'heated'
	})
	event.remove({ output: 'mysticalagriculture:inferium_ingot' })
	event.custom({
		type: 'create:mixing',
		ingredients: [
		{
			item: 'mysticalagriculture:prosperity_ingot'
		},
		{
			item: 'mysticalagriculture:soulium_ingot'
		},
		{
			item: 'mysticalagriculture:soulium_ingot'
		},
		{
			item: 'mysticalagriculture:inferium_essence'
		},
		{
			item: 'mysticalagriculture:inferium_essence'
		},
		{
			item: 'mysticalagriculture:inferium_essence'
		},
		{
			item: 'mysticalagriculture:inferium_essence'
		},
		{
			item: 'mysticalagriculture:inferium_essence'
		},
		{
			item: 'mysticalagriculture:inferium_essence'
		}
		],
		results: [
		{
			item: 'mysticalagriculture:inferium_ingot'
		}
		],
		heatRequirement: 'heated'
	})
	event.custom({
		type: 'create:mixing',
		heatRequirement: 'heated',
		ingredients: [
		{
			amount: 1000,
			fluid: 'minecraft:lava'
		},
		Item.of('thermal:blitz_powder').toJson(),
		Item.of('thermal:blitz_powder').toJson(),
		Item.of('thermal:blitz_powder').toJson(),
		Item.of('thermal:blitz_powder').toJson()
		],
		results: [
		{
			amount: 1000,
			fluid: 'kubejs:blitz_blood'
		}
		]
	})
	    event.remove({ output: 'thermal:lightning_charge' })
		event.custom({
		type: 'create:mixing',
		heatRequirement: 'heated',
		ingredients: [
		{
			amount: 1000,
			fluid: 'kubejs:blitz_blood'
		},
		Item.of('minecraft:gunpowder').toJson(),
		Item.of('minecraft:gunpowder').toJson(),
		Item.of('minecraft:gunpowder').toJson(),
		Item.of('minecraft:charcoal').toJson(),
		Item.of('minecraft:charcoal').toJson()
		],
		results: [
		{ item: 'thermal:lightning_charge', count: 5 }
		]
	})
	event.custom({
		type: 'create:mixing',
		heatRequirement: 'heated',
		ingredients: [ Item.of('bigreactors:graphite_ingot').toJson() ],
		results: [ Fluid.of('kubejs:liquifacted_graphite').withAmount(144).toJson() ]
	})
	event.custom({
		type: 'create:mixing',
		heatRequirement: 'heated',
		ingredients: [
		Fluid.of('kubejs:liquifacted_graphite').withAmount(1000).toJson(),
		Fluid.of('industrialforegoing:sewage').withAmount(1000).toJson() ],
		results: [ Fluid.of('kubejs:raw_oil_mixture').withAmount(500).toJson() ]
	})
	event.custom({
		type: 'create:mixing',
		heatRequirement: 'heated',
		ingredients: [
		Fluid.of('kubejs:raw_oil_mixture').withAmount(1000).toJson(),
		Fluid.of('immersiveengineering:creosote').withAmount(750).toJson() ],
		results: [ Fluid.of('pneumaticcraft:oil').withAmount(450).toJson() ]
	})
})