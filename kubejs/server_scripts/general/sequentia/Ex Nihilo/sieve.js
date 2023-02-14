ServerEvents.recipes(event =>{
	event.custom({
	type: 'exnihilosequentia:sieve',
	rolls: [
	{
		chance: 0.1,
		mesh: 'iron'
	},
	{
		chance: 0.3,
		mesh: 'netherite'
	}
	],
	input: {
		item: 'minecraft:sand'
	},
	result: {
		item: 'rftoolsbase:dimensionalshard'
	},
	waterlogged: true
	})
})