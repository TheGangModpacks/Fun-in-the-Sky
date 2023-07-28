ServerEvents.recipes(r => {
    r.custom({
        type: sieve,
        rolls:[
            {chance: 0.04, mesh: 'iron'},
            {chance: 0.06, mesh: 'diamond'},
            {chance: 0.10, mesh: 'emerald'},
            {chance: 0.15, mesh: 'netherite'}
        ],
            input: {item: 'minecraft:grass_block'},
            result:{item: 'hexerei:mandrake_flower'}
    })
    r.custom({
        type: sieve,
        rolls:[
            {chance: 0.04, mesh: 'iron'},
            {chance: 0.06, mesh: 'diamond'},
            {chance: 0.10, mesh: 'emerald'},
            {chance: 0.15, mesh: 'netherite'}
        ],
            input: {item: 'minecraft:grass_block'},
            result:{item: 'hexerei:belladonna_flower'}
    })
    r.custom({
        type: sieve,
        rolls:[
            {chance: 0.04, mesh: 'iron'},
            {chance: 0.06, mesh: 'diamond'},
            {chance: 0.10, mesh: 'emerald'},
            {chance: 0.15, mesh: 'netherite'}
        ],
            input: {item: 'minecraft:grass_block'},
            result:{item: 'hexerei:mugwort_bush'}
    })
    r.custom({
        type: sieve,
        rolls:[
            {chance: 0.04, mesh: 'iron'},
            {chance: 0.06, mesh: 'diamond'},
            {chance: 0.10, mesh: 'emerald'},
            {chance: 0.15, mesh: 'netherite'}
        ],
            input: {item: 'minecraft:grass_block'},
            result:{item: 'hexerei:yellow_dock_bush'}
    })
    r.custom({
        type: sieve,
        rolls:[
            {chance: 0.04, mesh: 'iron'},
            {chance: 0.06, mesh: 'diamond'},
            {chance: 0.10, mesh: 'emerald'},
            {chance: 0.15, mesh: 'netherite'}
        ],
            input: {item: 'minecraft:grass_block'},
            result:{item: 'hexerei:sage_seed'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.05, mesh: 'iron'},
			{chance: 0.10, mesh: 'diamond'},
			{chance: 0.15, mesh: 'emerald'},
			{chance: 0.20, mesh: 'netherite'}
		],
			input: Item.of('#minecraft:leaves'),
			result:{item: 'hexerei:willow_sapling'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.05, mesh: 'iron'},
			{chance: 0.10, mesh: 'diamond'},
			{chance: 0.15, mesh: 'emerald'},
			{chance: 0.20, mesh: 'netherite'}
		],
			input: Item.of('#minecraft:leaves'),
			result:{item: 'hexerei:witch_hazel_sapling'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.10, mesh: 'emerald'},
			{chance: 0.20, mesh: 'netherite'}
		],
			input: Item.of('#minecraft:leaves'),
			result:{item: 'hexerei:mahogany_sapling'}
    })
})