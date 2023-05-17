const infusion_conversion_prefix = 'fits:chemicals/infuse_type/from_item/';
ServerEvents.recipes(event =>{

    event.custom({
        type: 'mekanism:infusion_conversion',
        input: { ingredient: [Item.of('industrialforegoing:tinydryrubber')]},
        output: {amount: 10, infuse_type: 'kubejs:raw_rubber'}
    }).id(`${infusion_conversion_prefix}tinydryrubber/raw_rubber`)
    event.custom({
        type: 'mekanism:infusion_conversion',
        input: { ingredient: [Item.of("industrialforegoing:dryrubber")]},
        output: {amount: 90, infuse_type: 'kubejs:raw_rubber'}
    }).id(`${infusion_conversion_prefix}dryrubber/raw_rubber`)
})