ServerEvents.recipes(r =>{
    r.remove({output: '#custom:other_pebbles'})
    r.remove({output: 'exnihilosequentia:stone_pebble'})
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.70, mesh: 'string'},
			{chance: 0.50, mesh: 'string'},
			{chance: 0.20, mesh: 'string'}
		],
			input: {item: 'minecraft:dirt'},
			result:{item: 'exnihilosequentia:granite_pebble'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.70, mesh: 'string'},
			{chance: 0.50, mesh: 'string'},
			{chance: 0.20, mesh: 'string'}
		],
			input: {item: 'minecraft:dirt'},
			result:{item: 'exnihilosequentia:diorite_pebble'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.70, mesh: 'string'},
			{chance: 0.50, mesh: 'string'},
			{chance: 0.20, mesh: 'string'}
		],
			input: {item: 'minecraft:dirt'},
			result:{item: 'exnihilosequentia:deepslate_pebble'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.70, mesh: 'string'},
			{chance: 0.50, mesh: 'string'},
			{chance: 0.20, mesh: 'string'}
		],
			input: {item: 'minecraft:dirt'},
			result:{item: 'exnihilosequentia:blackstone_pebble'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.70, mesh: 'string'},
			{chance: 0.50, mesh: 'string'},
			{chance: 0.20, mesh: 'string'}
		],
			input: {item: 'minecraft:dirt'},
			result:{item: 'exnihilosequentia:andesite_pebble'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.70, mesh: 'string'},
			{chance: 0.50, mesh: 'string'},
			{chance: 0.20, mesh: 'string'}
		],
			input: {item: 'minecraft:dirt'},
			result:{item: 'exnihilosequentia:basalt_pebble'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.70, mesh: 'string'},
			{chance: 0.50, mesh: 'string'},
			{chance: 0.20, mesh: 'string'}
		],
			input: {item: 'minecraft:dirt'},
			result:{item: 'exnihilosequentia:tuff_pebble'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.70, mesh: 'string'},
			{chance: 0.50, mesh: 'string'},
			{chance: 0.20, mesh: 'string'}
		],
			input: {item: 'minecraft:dirt'},
			result:{item: 'exnihilosequentia:dripstone_pebble'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.70, mesh: 'string'},
			{chance: 0.50, mesh: 'string'},
			{chance: 0.20, mesh: 'string'}
		],
			input: {item: 'minecraft:dirt'},
			result:{item: 'exnihilosequentia:calcite_pebble'}
    })
    r.custom({
		type: sieve,
		rolls:[
			{chance: 0.70, mesh: 'string'},
			{chance: 0.50, mesh: 'string'},
			{chance: 0.20, mesh: 'string'}
		],
			input: {item: 'minecraft:dirt'},
			result:{item: 'exnihilosequentia:stone_pebble'}
    })
})