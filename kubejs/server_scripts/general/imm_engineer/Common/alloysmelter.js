ServerEvents.recipes(event =>{
	event.custom({
		type: 'immersiveengineering:alloy',
		input0: Item.of('emendatusenigmatica:steel_ingot').toJson(),
		input1: { tag: 'minecraft:leaves', count: 3 },
	result: { base_ingredient: { tag: 'forge:ingots/steeleaf' }, count: 1 }, time: 200 })
})