ServerEvents.recipes(event =>{
    event.custom({
        type: burn,
        item_in: {item: 'create:scoria'},
        post: [
            {type: 'drop_item', item: 'create:scorchia'}
        ]
    }).id('fits:burning/create/scorchia')
    event.smoking('create:scorchia', 'create:scoria').id('fits:smelting/create/scorchia')
    event.shaped("4x create:cut_scorchia_bricks", ['aa', 'aa'], {a: 'create:scorchia'}).id('fits:shaped/create/cut_scorchia_bricks')
})