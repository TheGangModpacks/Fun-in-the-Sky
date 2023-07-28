//priority: 2
let AE_MODS = ['ae2', 'ae2things', 'ae2additions', 'appmek']
ServerEvents.recipes(e => {
    AE_MODS.forEach(m => {
        e.forEachRecipe({ mod: m, type: 'crafting_shaped' }, r => {
            Object.keys(JSON.parse(r.json.get('key'))).forEach(i => {
                let item = r.json.get('key').get(i).get(Object.keys(JSON.parse(r.json).key[i])[0])
                if (Object.keys(JSON.parse(r.json).key[i])[0] == 'tag') item = `#${item}`.replace(/"/g, '')
                if (item.toString().includes('iron_ingot') || item.toString() == '#forge:ingots/iron') r.json.get('key').add(i, Item.of('powah:steel_energized').toJson())
            })
            e.custom({
                type: 'extendedcrafting:shaped_table',
                tier: 1,
                pattern: r.json.get('pattern'),
                key: r.json.get('key'),
                result: r.json.get('result')
            }).id(r.getOrCreateId())
        })
        e.forEachRecipe({ mod: m, type: 'crafting_shapeless' }, r => {
            for (let i = 0; i < r.json.get('ingredients').size(); i++) {
                let item = r.json.get('ingredients').get(i).get(Object.keys(JSON.parse(r.json).ingredients[i])[0])
                if (Object.keys(JSON.parse(r.json).ingredients[i])[0] == 'tag') item = `#${item}`.replace(/"/g, '')
                if (item.toString().includes('iron_ingot') || item.toString() == '#forge:ingots/iron') r.json.get('ingredients').set(i, Item.of('powah:steel_energized').toJson())
            }
            e.custom({
                type: 'extendedcrafting:shapeless_table',
                tier: 1,
                ingredients: r.json.get('ingredients'),
                result: r.json.get('result')
            }).id(r.getOrCreateId())
        })
    })
})