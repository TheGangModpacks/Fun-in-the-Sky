ServerEvents.recipes(event =>{
	event.custom({
	type: sieve,
	rolls: [
	{chance: 0.1, mesh: 'iron'},
	{chance: 0.3, mesh: 'netherite'}],
	input: {item: 'minecraft:sand'},
	result: {item: 'rftoolsbase:dimensionalshard'},
	waterlogged: true })
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
			{chance: 0.02, mesh: 'flint'},
			{chance: 0.11, mesh: 'iron'},
			{chance: 0.17, mesh: 'diamond'},
			{chance: 0.27, mesh: 'emerald'},
			{chance: 0.39, mesh: 'netherite'}],
			input: {item: 'immersiveengineering:slag_gravel'},
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
			{chance: 0.13, mesh: 'iron'},
			{chance: 0.20, mesh: 'diamond'}],
			input: {item: 'immersiveengineering:slag_gravel'},
			result:{item: 'emendatusenigmatica:salt_dust'}})
})