//priority: 2
ServerEvents.recipes(e => {
    e.forEachRecipe({ type: 'crafting_shaped', mod: 'refinedstorage' }, r => {
        e.custom({
            type: "extendedcrafting:shaped_table",
            tier: 1,
            pattern: r.json.get('pattern'),
            key: r.json.get('key'),
            result: r.json.get('result')
        }).id(r.getOrCreateId())
    })
    e.forEachRecipe({ type: 'crafting_shapeless', mod: 'refinedstorage' }, r => {
        e.custom({
            type: "extendedcrafting:shapeless_table",
            tier: 1,
            ingredients: r.json.get('ingredients'),
            result: r.json.get('result')
        }).id(r.getOrCreateId())
    })
    e.forEachRecipe({ type: 'crafting_shaped', mod: 'extradisks' }, r => {
        e.custom({
            type: "extendedcrafting:shaped_table",
            tier: 1,
            pattern: r.json.get('pattern'),
            key: r.json.get('key'),
            result: r.json.get('result')
        }).id(r.getOrCreateId())
    })
    e.forEachRecipe({ type: 'crafting_shapeless', mod: 'extradisks' }, r => {
        e.custom({
            type: "extendedcrafting:shapeless_table",
            tier: 1,
            ingredients: r.json.get('ingredients'),
            result: r.json.get('result')
        }).id(r.getOrCreateId())
    })
    e.forEachRecipe({ type: 'crafting_shaped', mod: 'rsrequestify' }, r => {
        e.custom({
            type: "extendedcrafting:shaped_table",
            tier: 1,
            pattern: r.json.get('pattern'),
            key: r.json.get('key'),
            result: r.json.get('result')
        }).id(r.getOrCreateId())
    })
})