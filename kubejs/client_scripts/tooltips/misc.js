ItemEvents.tooltip(tooltip =>{
    
    tooltip.addAdvanced('cobblefordays:tier_2', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.gray('Cobble Gen Tier 1'))
    })
    tooltip.addAdvanced('cobblefordays:tier_3', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.white('Cobble Gen Tier 2'))
    })
    tooltip.addAdvanced('cobblefordays:tier_4', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.yellow('Cobble Gen Tier 3'))
    })
    tooltip.addAdvanced('cobblefordays:tier_5', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.blue('Cobble Gen Tier 4'))
    })
})