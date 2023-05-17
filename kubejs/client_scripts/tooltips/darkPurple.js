ItemEvents.tooltip(tooltip =>{
    
    tooltip.addAdvanced('kubejs:archaic_pink_gold_ingot', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.darkPurple('Archaic Pink Gold Ingot'))
    })
})