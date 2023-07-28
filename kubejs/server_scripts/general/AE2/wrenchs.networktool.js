//priority: 1
ServerEvents.recipes(event =>{
	event.remove({ output: 'ae2:certus_quartz_wrench' })
	event.remove({ output: 'ae2:nether_quartz_wrench' })
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: {
			item: 'immersiveengineering:hammer'
		},
		loops: 2,
		results: [
		{
			chance: 100.0,
			item: 'ae2:certus_quartz_wrench'
		}
		],
		sequence: [
		{
			type: 'create:deploying',
			ingredients: [
			{
				item: 'kubejs:incomplete_certus_wrench'
			},
			{
				item: 'ae2:certus_quartz_crystal'
			}
			],
			results: [
			{
				item: 'kubejs:incomplete_certus_wrench'
			}
			]
		},
		{
			type: 'create:filling',
			ingredients: [
			{
				item: 'kubejs:incomplete_certus_wrench'
			},
			{
				amount: 1000,
				fluid: 'thermal:redstone',
				nbt: {}
			}
			],
			results: [
			{
				item: 'kubejs:incomplete_certus_wrench'
			}
			]
		},
		{
			type: 'create:pressing',
			ingredients: [
			{
				item: 'kubejs:incomplete_certus_wrench'
			}
		],
		results: [
		{
			item: 'kubejs:incomplete_certus_wrench'
		}
		]
		}
		],
		transitionalItem: {
			item: 'kubejs:incomplete_certus_wrench'
		}
	})
	event.custom({
		type: 'create:sequenced_assembly',
		ingredient: {
			item: 'immersiveengineering:hammer'
		},
		loops: 2,
		results: [
		{
			chance: 100.0,
			item: 'ae2:nether_quartz_wrench'
		}
		],
		sequence: [
		{
			type: 'create:deploying',
			ingredients: [
			{
				item: 'kubejs:incomplete_quartz_wrench'
			},
			{
				item: 'minecraft:quartz'
			}
			],
			results: [
			{
				item: 'kubejs:incomplete_quartz_wrench'
			}
			]
		},
		{
			type: 'create:filling',
			ingredients: [
			{
				item: 'kubejs:incomplete_quartz_wrench'
			},
			{
				amount: 1000,
				fluid: 'thermal:redstone',
				nbt: {}
			}
			],
			results: [
			{
				item: 'kubejs:incomplete_quartz_wrench'
			}
			]
		},
		{
			type: 'create:pressing',
			ingredients: [
			{
				item: 'kubejs:incomplete_quartz_wrench'
			}
		],
		results: [
		{
			item: 'kubejs:incomplete_quartz_wrench'
		}
		]
		}
		],
		transitionalItem: {
			item: 'kubejs:incomplete_quartz_wrench'
		}
	})
})