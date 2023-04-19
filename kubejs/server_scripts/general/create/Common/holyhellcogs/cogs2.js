ServerEvents.tags('item', event =>{
    event.add('cogs:spruce', /^create:.*cogwheel/)
    event.add('cogs:spruce', /^extendedgears:.*_spruce/)
})








ServerEvents.recipes(event =>{
    // List of materials that can be stonecut into each other
    const materials = ['#cogs:spruce'];

    // Loop through the materials and add a stonecutting recipe for each combination
    materials.forEach(input => {
        materials.forEach(output => {
            if (input !== output) {
                event.stonecutting(input, output);
            }
        });
    });
});