ServerEvents.recipes(r =>{
    let moon = 'ad_astra:moon_sand';
    r.remove({ output: 'exnihilosequentia:uranium_pieces', type: 'exnihilosequentia:sieve' })
    r.remove({ output: 'exnihilomekanism:osmium_pieces', type: 'exnihilosequentia:sieve' })
    r.remove({ output: 'emendatusenigmatica:fluorite_gem', type: 'exnihilosequentia:sieve' })
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
			input: {item: moon},
			result:{item: 'exnihilomekanism:osmium_pieces'}
    })
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
			input: {item: moon},
			result:{item: 'exnihilosequentia:uranium_pieces'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 1.0, mesh: 'flint'},
			{chance: 1.0, mesh: 'iron'},
			{chance: 1.0, mesh: 'diamond'},
			{chance: 1.0, mesh: 'emerald'},
			{chance: 1.0, mesh: 'emerald'},
			{chance: 1.0, mesh: 'netherite'},
			{chance: 1.0, mesh: 'netherite'},
			{chance: 1.0, mesh: 'netherite'}
		],
			input: {item: moon},
			result:{item: 'exnihilosequentia:iron_pieces'}
    })
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
			input: {item: moon},
			result:{item: 'exnihilosequentia:lead_pieces'}
    })
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
			input: {item: moon},
			result:{item: 'exnihilosequentia:silver_pieces'}
    })
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
			input: {item: moon},
			result:{item: 'exnihilosequentia:copper_pieces'}
    })
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
			input: {item: moon},
			result:{item: 'exnihilosequentia:nickel_pieces'}
    })
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
			input: {item: moon},
			result:{item: 'exnihilosequentia:gold_pieces'}
    })
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
			input: {item: moon},
			result:{item: 'emendatusenigmatica:fluorite_gem'},
			waterlogged: true
        })
})