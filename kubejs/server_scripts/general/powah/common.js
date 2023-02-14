ServerEvents.recipes(event =>{
event.remove({ output: 'powah:wrench' })
event.custom({
	type: 'powah:energizing',
	ingredients: [
	{
		item: 'pneumaticcraft:pneumatic_wrench'
	},
	{
		item: 'powah:dielectric_paste'
	},
	{
		item: 'powah:dielectric_paste'
	},
	{
		item: 'powah:dielectric_paste'
	},
	{
		item: 'powah:capacitor_basic_large'
	}
	],
	energy: "5000",
	result: {
		item: 'powah:wrench'
	}
})
})