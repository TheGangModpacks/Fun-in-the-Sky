ServerEvents.recipes(r =>{
	r.remove({output: 'exnihilosequentia:zinc_pieces'})
	r.custom({
		type: sieve,
		rolls:[
			{chance: 0.05, mesh: 'flint'},
			{chance: 0.13, mesh: 'iron'},
			{chance: 0.20, mesh: 'diamond'},
			{chance: 0.29, mesh: 'emerald'},
			{chance: 0.42, mesh: 'netherite'}],
			input: {item: 'immersiveengineering:slag_gravel'},
			result:{item: 'exnihilosequentia:zinc_pieces'}})
	r.remove({output: 'exnihilosequentia:lead_pieces'})
	r.custom({
			type: sieve,
			rolls:[
				{chance: 0.02, mesh: 'flint'}],
				input: {item: 'minecraft:gravel'},
				result:{item: 'exnihilosequentia:lead_pieces'}})
	r.remove({output: 'exnihilosequentia:tin_pieces'})
	r.custom({
		type: sieve,
		rolls:[
			{chance: 0.08, mesh: 'flint'},
			{chance: 0.16, mesh: 'iron'},
			{chance: 0.28, mesh: 'diamond'},
			{chance: 0.36, mesh: 'emerald'},
			{chance: 0.46, mesh: 'netherite'}],
			input: {item: 'immersiveengineering:slag_gravel'},
			result:{item: 'exnihilosequentia:tin_pieces'}})
	r.remove({output: 'exnihilosequentia:aluminum_pieces'})
	r.custom({
		type: sieve,
		rolls:[
			{chance: 0.05, mesh: 'flint'},
			{chance: 0.10, mesh: 'iron'},
			{chance: 0.14, mesh: 'diamond'},
			{chance: 0.26, mesh: 'emerald'},
			{chance: 0.38, mesh: 'netherite'}],
			input: {item: 'immersiveengineering:slag_gravel'},
			result:{item: 'exnihilosequentia:aluminum_pieces'}})
	r.remove({output: 'emendatusenigmatica:salt_dust'})
	r.custom({
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
	r.custom({
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
			waterlogged: true
	})
	r.custom({
		type: sieve,
		rolls:[
			{chance: 0.10, mesh: 'string'}
		],
			input: {item: 'minecraft:moss_block'},
			result:{item: 'minecraft:spore_blossom'}
    })
	r.custom({
		type: sieve,
		rolls:[
			{chance: 0.10, mesh: 'string'}
		],
			input: {item: 'minecraft:moss_block'},
			result:{item: 'minecraft:hanging_roots'}
    })
	r.custom({
		type: sieve,
		rolls:[
			{chance: 0.05, mesh: 'string'}
		],
			input: {item: 'minecraft:moss_block'},
			result:{item: 'minecraft:big_dripleaf'}
    })
	r.custom({
		type: sieve,
		rolls:[
			{chance: 0.05, mesh: 'string'}
		],
			input: {item: 'minecraft:moss_block'},
			result:{item: 'minecraft:lily_pad'}
    })
	r.custom({
		type: sieve,
		rolls:[
			{chance: 0.10, mesh: 'string'}
		],
			input: {item: 'minecraft:moss_block'},
			result:{item: 'minecraft:vine'}
    })
	r.custom({
		type: sieve,
		rolls:[
			{chance: 0.03, mesh: 'string'}
		],
			input: {item: 'minecraft:moss_block'},
			result:{item: 'minecraft:azalea'}
    })
	r.custom({
		type: sieve,
		rolls:[
			{chance: 0.05, mesh: 'string'}
		],
			input: {item: 'minecraft:moss_block'},
			result:{item: 'minecraft:glow_berries'}
    })
	r.custom({
		type: sieve,
		rolls:[
			{chance: 0.10, mesh: 'string'}
		],
			input: {item: 'minecraft:moss_block'},
			result:{item: 'minecraft:hanging_roots'}
    })
})