//priority: 10
let stk = 'stacking';
ServerEvents.recipes(event =>{
    event.custom({
        type: cloche,
        input: Item.of('minecraft:sunflower'),
        render: {type: stk, block: 'minecraft:sunflower'},
        results: [
            Item.of('sunflower')
        ],
        soil: Item.of('minecraft:moss_block'),
        time: 360
    }).id('fits:cloche/plants/sunflower')
})