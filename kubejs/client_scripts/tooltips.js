ItemEvents.tooltip(tooltip =>{
    tooltip.addAdvanced('ars_nouveau:source_gem', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.of('Source Gem'))
        text.add(1, Text.of('Obtained by placing Lead Crystals in an Imbuement Chamber.'))
    })
})