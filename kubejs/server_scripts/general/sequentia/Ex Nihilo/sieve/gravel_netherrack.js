ServerEvents.recipes(r =>{
    //Lead
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.05, mesh: 'flint'},
			{chance: 0.10, mesh: 'iron'},
			{chance: 0.20, mesh: 'diamond'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'}
		],
			input: {item: 'minecraft:gravel'},
			result:{item: 'exnihilosequentia:lead_pieces'}
    })
    //Copper
    r.remove({output: 'exnihilosequentia:copper_pieces'})
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.05, mesh: 'flint'},
			{chance: 0.10, mesh: 'iron'},
			{chance: 0.20, mesh: 'diamond'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'}
		],
			input: {item: 'minecraft:gravel'},
			result:{item: 'exnihilosequentia:copper_pieces'}
    })
    //Nickel
    r.remove({output: 'exnihilosequentia:nickel_pieces'})
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.05, mesh: 'flint'},
			{chance: 0.10, mesh: 'iron'},
			{chance: 0.20, mesh: 'diamond'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'}
		],
			input: {item: 'minecraft:gravel'},
			result:{item: 'exnihilosequentia:nickel_pieces'}
    })
    //Lapis
    r.remove({output: 'minecraft:lapis_lazuli'})
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.10, mesh: 'iron'},
			{chance: 0.20, mesh: 'diamond'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'}
		],
			input: {item: 'minecraft:gravel'},
			result:{item: 'minecraft:lapis_lazuli'}
    })
    //Flint
    r.remove({output: 'minecraft:flint'})
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.20, mesh: 'string'},
			{chance: 0.25, mesh: 'flint'},
			{chance: 0.25, mesh: 'iron'},
			{chance: 0.25, mesh: 'diamond'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'}
		],
			input: {item: 'minecraft:gravel'},
			result:{item: 'minecraft:flint'}
    })
    //Iron
    r.remove({ output: 'exnihilosequentia:iron_pieces', type: 'exnihilosequentia:sieve' })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 1.0, mesh: 'flint'},
			{chance: 1.0, mesh: 'iron'},
			{chance: 1.0, mesh: 'diamond'},
			{chance: 1.0, mesh: 'emerald'},
			{chance: 1.0, mesh: 'emerald'},
			{chance: 1.0, mesh: 'netherite'},
			{chance: 1.0, mesh: 'netherite'}
		],
			input: {item: 'minecraft:gravel'},
			result:{item: 'exnihilosequentia:iron_pieces'}
    })
    //Gold
    r.remove({output: 'exnihilosequentia:gold_pieces'})
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.05, mesh: 'flint'},
			{chance: 0.10, mesh: 'iron'},
			{chance: 0.20, mesh: 'diamond'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'}
		],
			input: {item: 'minecraft:gravel'},
			result:{item: 'exnihilosequentia:gold_pieces'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.25, mesh: 'flint'},
			{chance: 0.30, mesh: 'iron'},
			{chance: 0.30, mesh: 'diamond'},
			{chance: 0.35, mesh: 'emerald'},
			{chance: 0.35, mesh: 'emerald'},
			{chance: 0.40, mesh: 'netherite'},
			{chance: 0.40, mesh: 'netherite'},
			{chance: 0.40, mesh: 'netherite'}
		],
			input: {item: 'exnihilosequentia:crushed_netherrack'},
			result:{item: 'exnihilosequentia:gold_pieces'}
    })
    //Diamond
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.024, mesh: 'emerald'},
			{chance: 0.024, mesh: 'emerald'},
			{chance: 0.032, mesh: 'netherite'},
			{chance: 0.032, mesh: 'netherite'},
			{chance: 0.032, mesh: 'netherite'}
		],
			input: {item: 'minecraft:gravel'},
			result:{item: 'minecraft:diamond'}
    })
    //Emerald
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.02, mesh: 'emerald'},
			{chance: 0.02, mesh: 'emerald'},
			{chance: 0.05, mesh: 'netherite'},
			{chance: 0.05, mesh: 'netherite'},
			{chance: 0.05, mesh: 'netherite'}
		],
			input: {item: 'minecraft:gravel'},
			result:{item: 'minecraft:emerald'}
    })
    //Coal
    r.remove({output: 'minecraft:coal', type: 'exnihilosequentia:sieve'})
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.12, mesh: 'flint'},
			{chance: 0.15, mesh: 'iron'},
			{chance: 0.17, mesh: 'diamond'},
			{chance: 0.21, mesh: 'emerald'},
			{chance: 0.21, mesh: 'emerald'},
			{chance: 0.23, mesh: 'netherite'},
			{chance: 0.23, mesh: 'netherite'},
			{chance: 0.23, mesh: 'netherite'}
		],
			input: {item: 'minecraft:gravel'},
			result:{item: 'minecraft:coal'}
    })
})