ServerEvents.recipes(event =>{
	event.remove({output: 'exnihilosequentia:zinc_pieces'})
	event.custom({
		type: sieve,
		rolls:[
			{chance: 0.05, mesh: 'flint'},
			{chance: 0.13, mesh: 'iron'},
			{chance: 0.20, mesh: 'diamond'},
			{chance: 0.29, mesh: 'emerald'},
			{chance: 0.42, mesh: 'netherite'}],
			input: {item: 'immersiveengineering:slag_gravel'},
			result:{item: 'exnihilosequentia:zinc_pieces'}})
	event.remove({output: 'exnihilosequentia:lead_pieces'})
	event.custom({
			type: sieve,
			rolls:[
				{chance: 0.02, mesh: 'flint'}],
				input: {item: 'minecraft:gravel'},
				result:{item: 'exnihilosequentia:lead_pieces'}})
	event.remove({output: 'exnihilosequentia:tin_pieces'})
	event.custom({
		type: sieve,
		rolls:[
			{chance: 0.08, mesh: 'flint'},
			{chance: 0.16, mesh: 'iron'},
			{chance: 0.28, mesh: 'diamond'},
			{chance: 0.36, mesh: 'emerald'},
			{chance: 0.46, mesh: 'netherite'}],
			input: {item: 'immersiveengineering:slag_gravel'},
			result:{item: 'exnihilosequentia:tin_pieces'}})
	event.remove({output: 'exnihilosequentia:aluminum_pieces'})
	event.custom({
		type: sieve,
		rolls:[
			{chance: 0.05, mesh: 'flint'},
			{chance: 0.10, mesh: 'iron'},
			{chance: 0.14, mesh: 'diamond'},
			{chance: 0.26, mesh: 'emerald'},
			{chance: 0.38, mesh: 'netherite'}],
			input: {item: 'immersiveengineering:slag_gravel'},
			result:{item: 'exnihilosequentia:aluminum_pieces'}})
	event.remove({output: 'emendatusenigmatica:salt_dust'})
	event.custom({
		type: sieve,
		rolls:[
			{chance: 0.10, mesh: 'iron'},
			{chance: 0.20, mesh: 'diamond'},
			{chance: 0.25, mesh: 'emerald'},
			{chance: 0.25, mesh: 'emerald'},
			{chance: 0.30, mesh: 'netherite'},
			{chance: 0.30, mesh: 'netherite'},
			{chance: 0.30, mesh: 'netherite'}
		],
			input: {item: 'immersiveengineering:slag_gravel'},
			result:{item: 'emendatusenigmatica:salt_dust'}})
				event.remove({output: 'emendatusenigmatica:salt_dust'})
	event.custom({
		type: sieve,
		rolls:[
			{chance: 0.10, mesh: 'string'},
			{chance: 0.20, mesh: 'flint'},
			{chance: 0.30, mesh: 'iron'},
			{chance: 0.40, mesh: 'diamond'},
			{chance: 0.50, mesh: 'emerald'},
			{chance: 0.55, mesh: 'netherite'},
			{chance: 0.55, mesh: 'netherite'},
		],
			input: {item: '#minecraft:sand'},
			result:{item: 'minecraft:kelp'},
			waterlogged: true})
			event.recipes.exnihilosequentia.sieve('minecraft:moss_block', 'minecraft:spore_blossom')
			.addRoll(0.10, 'string')
			event.recipes.exnihilosequentia.sieve('minecraft:moss_block', 'minecraft:hanging_roots')
			.addRoll(0.10, 'string')
			event.recipes.exnihilosequentia.sieve('minecraft:moss_block', 'minecraft:big_dripleaf')
			.addRoll(0.05, 'string')
			event.recipes.exnihilosequentia.sieve('minecraft:moss_block', 'minecraft:lily_pad')
			.addRoll(0.05, 'string')
			event.recipes.exnihilosequentia.sieve('minecraft:moss_block', 'minecraft:vine')
			.addRoll(0.10, 'string')
			event.recipes.exnihilosequentia.sieve('minecraft:moss_block', 'minecraft:azalea')
			.addRoll(0.03, 'string')
			event.recipes.exnihilosequentia.sieve('minecraft:moss_block', 'minecraft:glow_berries')
			.addRoll(0.05, 'string')
})