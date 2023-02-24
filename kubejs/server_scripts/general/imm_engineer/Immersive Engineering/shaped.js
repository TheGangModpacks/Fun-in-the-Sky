ServerEvents.recipes(event =>{
	event.remove({ output: 'immersiveengineering:hammer' })
	event.shaped( Item.of('immersiveengineering:hammer'), [
	' AB',
	' CA',
	'C  ' ],
	{
		A: 'kubejs:leaded_iron',
		B: 'minecraft:string',
		C: 'emendatusenigmatica:nickel_rod'
	})
})