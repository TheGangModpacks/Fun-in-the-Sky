ServerEvents.recipes(r =>{
        r.custom({
		type: sieve,
		rolls:[
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'}
		],
			input: {item: 'exnihilosequentia:dust'},
			result:{item: 'minecraft:redstone'} //Why was this minecraft:minecraft:redstone
        })
        r.custom({
		type: sieve,
		rolls:[
			{chance: 0.12, mesh: 'diamond'},
			{chance: 0.22, mesh: 'emerald'},
			{chance: 0.22, mesh: 'emerald'},
			{chance: 0.28, mesh: 'netherite'},
			{chance: 0.28, mesh: 'netherite'},
			{chance: 0.28, mesh: 'netherite'}
		],
			input: {item: 'minecraft:soul_soil'},
			result:{item: 'exnihilosequentia:gold_pieces'}
        })
        r.custom({
		type: sieve,
		rolls:[
			{chance: 0.10, mesh: 'diamond'},
			{chance: 0.15, mesh: 'emerald'},
			{chance: 0.15, mesh: 'emerald'},
			{chance: 0.20, mesh: 'netherite'},
			{chance: 0.20, mesh: 'netherite'},
			{chance: 0.20, mesh: 'netherite'}
		],
			input: {item: 'exnihilosequentia:dust'},
			result:{item: 'minecraft:blaze_powder'}
        })
        r.custom({
		type: sieve,
		rolls:[
			{chance: 0.25, mesh: 'flint'},
			{chance: 0.25, mesh: 'iron'},
			{chance: 0.30, mesh: 'diamond'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.30, mesh: 'emerald'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'},
			{chance: 0.35, mesh: 'netherite'}
		],
			input: {item: 'exnihilosequentia:dust'},
			result:{item: 'minecraft:bone_meal'}
        })
        r.custom({
                type: sieve,
                rolls:[
                        {chance: 0.04, mesh: 'flint'},
                        {chance: 0.06, mesh: 'iron'},
                        {chance: 0.08, mesh: 'diamond'},
                        {chance: 0.09, mesh: 'emerald'},
                        {chance: 0.09, mesh: 'emerald'},
                        {chance: 0.12, mesh: 'netherite'},
                        {chance: 0.12, mesh: 'netherite'},
                        {chance: 0.12, mesh: 'netherite'}
                ],
                        input: {item: 'minecraft:sand'},
                        result:{item: 'thermal:bitumen'}
        })	
})