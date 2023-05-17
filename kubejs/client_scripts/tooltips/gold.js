ItemEvents.tooltip(tooltip =>{
    
    tooltip.addAdvanced('kubejs:archaic_gold_block', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.gold('Archaic Gold Block'))
    })
    tooltip.addAdvanced('kubejs:archaic_gold_ingot', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.gold('Archaic Gold Ingot'))
    })
})