ServerEvents.recipes(event =>{
    event.custom({
        type: 'lychee:random_block_ticking',
        block_in: 'kubejs:liquifacted_tar',
        post: [
            {type: 'place', block: 'thermal:tar_block'}
        ]
    })
})