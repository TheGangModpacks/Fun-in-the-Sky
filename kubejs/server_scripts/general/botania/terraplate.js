ServerEvents.recipes(event => {
	event.remove({ output: 'botania:terra_plate' })

	event.recipes.botania.runic_altar('botania:terra_plate',
		[
			'botania:rune_wrath',
			'botania:rune_envy',
			'botania:rune_water',
			'botania:rune_mana',
			'botania:rune_fire',
			'botania:rune_air',
			'botania:rune_earth',
			'pneumaticcraft:advanced_pressure_tube',
			'rftoolsbase:machine_base',
			'botania:manasteel_block',
			'botania:manasteel_block',
			'botania:green_petal_block'
		], 80000)
})