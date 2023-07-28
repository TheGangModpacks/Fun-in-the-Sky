ServerEvents.recipes(r =>{
    let slag = "immersiveengineering:slag_gravel";
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
			input: {item: slag},
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
			input: {item: slag},
			result:{item: 'exnihilosequentia:lead_pieces'}
    })
	r.remove({output: 'exnihilosequentia:silver_pieces'})
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
			input: {item: slag},
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
			input: {item: slag},
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
			input: {item: slag},
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
			input: {item: slag},
			result:{item: 'exnihilosequentia:gold_pieces'}
    })
})