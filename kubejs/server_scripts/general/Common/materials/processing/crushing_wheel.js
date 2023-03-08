let EE = (id) => `emendatusenigmatica:${id}`
let ER = (id) => `emendatusenigmatica:raw_${id}`
let MC = (id) => `minecraft:${id}`
const CR = 'create:crushing';
ServerEvents.recipes(event =>{
	event.custom({
		type: 'create:crushing',
		ingredients: [{tag: 'forge:ores/niter'}],
		processingTime: 400,
		results: [
		Item.of(EE('salt_dust')).withCount(2).toJson(),
		Item.of(EE('salt_dust')).withChance(0.45).toJson(),
		Item.of(MC('cobblestone')).withChance(0.10).toJson()
		]
	})
	event.custom({
		type: 'create:crushing',
		ingredients: [{tag: 'forge:ores/tin'}],
		processingTime: 400,
		results: [
		Item.of(ER('tin')).withCount(2).toJson(),
		Item.of(ER('tin')).withChance(0.45).toJson(),
		Item.of(MC('cobblestone')).withChance(0.10).toJson()
		]
	})
	event.custom({
		type: 'create:crushing',
		ingredients: [{tag: 'forge:ores/nickel'}],
		processingTime: 400,
		results: [
		Item.of(ER('nickel')).withCount(2).toJson(),
		Item.of(ER('nickel')).withChance(0.45).toJson(),
		Item.of(MC('cobblestone')).withChance(0.10).toJson()
		]
	})
	event.custom({
		type: 'create:crushing',
		ingredients: [{tag: 'forge:ores/osmium'}],
		processingTime: 400,
		results: [
		Item.of(ER('osmium')).withCount(2).toJson(),
		Item.of(ER('osmium')).withChance(0.45).toJson(),
		Item.of(MC('cobblestone')).withChance(0.10).toJson()
		]
	})
	event.custom({
		type: 'create:crushing',
		ingredients: [{tag: 'forge:ores/aluminum'}],
		processingTime: 400,
		results: [
		Item.of(ER('aluminum')).withCount(2).toJson(),
		Item.of(ER('aluminum')).withChance(0.45).toJson(),
		Item.of(MC('cobblestone')).withChance(0.10).toJson()
		]
	})
	event.custom({
		type: 'create:crushing',
		ingredients: [{tag: 'forge:ores/lead'}],
		processingTime: 400,
		results: [
		Item.of(ER('lead')).withCount(2).toJson(),
		Item.of(ER('lead')).withChance(0.45).toJson(),
		Item.of(MC('cobblestone')).withChance(0.10).toJson()
		]
	})
	event.custom({
		type: 'create:crushing',
		ingredients: [{tag: 'forge:ores/silver'}],
		processingTime: 400,
		results: [
		Item.of(ER('silver')).withCount(2).toJson(),
		Item.of(ER('silver')).withChance(0.45).toJson(),
		Item.of(MC('cobblestone')).withChance(0.10).toJson()
		]
	})
	event.custom({
		type: 'create:crushing',
		ingredients: [{tag: 'forge:ores/uranium'}],
		processingTime: 400,
		results: [
		Item.of(ER('uranium')).withCount(2).toJson(),
		Item.of(ER('uranium')).withChance(0.45).toJson(),
		Item.of(MC('cobblestone')).withChance(0.10).toJson()
		]
	})
	event.custom({
		type: 'create:crushing',
		ingredients: [{tag: 'forge:ores/zinc'}],
		processingTime: 400,
		results: [
		Item.of(ER('zinc')).withCount(2).toJson(),
		Item.of(ER('zinc')).withChance(0.45).toJson(),
		Item.of(MC('cobblestone')).withChance(0.10).toJson()
		]
	})
})