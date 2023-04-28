ServerEvents.recipes(event =>{
	event.remove({ output: 'botania:terra_plate' })
	event.custom({
		type: 'botania:runic_altar',
		ingredients: [
		{
			item: 'botania:rune_wrath'
		},
		{
			item: 'botania:rune_envy'
		},
		{
			item: 'botania:rune_water'
		},
		{
            item: 'botania:rune_mana'
		},
		{
            item: 'botania:rune_fire'
		},
		{
			item: 'botania:rune_air'
		},
		{
			item: 'botania:rune_earth'
		},
		{
			item: 'pneumaticcraft:advanced_pressure_tube'
		},
		{
			item: 'rftoolsbase:machine_base'
		},
		{
			item: 'botania:manasteel_block'
		},
		{
			item: 'botania:manasteel_block'
		},
		{
			item: 'botania:green_petal_block'
		}
		],
		mana: 80000,
		output: {
			count: 1,
			item: 'botania:terra_plate'
		}
	})
})