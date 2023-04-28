ServerEvents.recipes(event =>{
	event.custom({
		type: 'lychee:block_interacting',
		item_in: { item: 'air' },
		block_in: 'minecraft:grass_block',
		post: {
		type: 'drop_item', item: 'exnihilosequentia:stone_pebble',
		contextual: [{ type: 'chance', chance: 0.43 },
		{ type: 'is_sneaking', description: 'Player must be Crouching' },
		{ type: 'location', predicate: { dimension: 'overworld' }, description: 'Player must be in The Overworld' }]
		}
	})
	event.custom({
		type: 'lychee:block_interacting',
		item_in: { item: 'air' },
		block_in: 'minecraft:crimson_nylium',
		post: {
		type: 'drop_item', item: 'exnihilosequentia:netherrack_pebble',
		contextual: [{ type: 'chance', chance: 0.43 },
		{ type: 'is_sneaking', description: 'Player must be Crouching' },
		{ type: 'location', predicate: { dimension: 'the_nether' }, description: 'Player must be in The Nether' }]
		}
	})
	event.custom({
		type: 'lychee:block_interacting',
		item_in: { item: 'air' },
		block_in: 'minecraft:end_stone',
		post: {
		type: 'drop_item', item: 'exnihilosequentia:end_stone_pebble',
		contextual: [{ type: 'chance', chance: 0.43 },
		{ type: 'is_sneaking', description: 'Player must be Crouching' },
		{ type: 'location', predicate: { dimension: 'the_end' }, description: 'Player must be in The End' }]
		}
	})
	event.custom({
		type: 'lychee:block_interacting',
		item_in: { tag: 'exnihilosequentia:hammer' },
		block_in: 'minecraft:andesite',
		post: [{
		type: 'drop_item', item: 'exnihilosequentia:andesite_pebble',
		contextual: [{ type: 'chance', chance: 0.43 },
		{ type: 'is_sneaking', description: 'Player must be Crouching' },
		{ type: 'location', predicate: { dimension: 'overworld' }, description: 'Player must be in The Overworld' }]},
		{ type: 'place', block: 'air', contextual: { type: 'chance', chance: 0.02 }},
		{ type: 'damage_item', damage: 1.0, contextual: { type: 'chance', chance: 0.85 }}]
	})
})