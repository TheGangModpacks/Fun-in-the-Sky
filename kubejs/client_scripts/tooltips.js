ItemEvents.tooltip(tooltip =>{
    tooltip.addAdvanced('ars_nouveau:source_gem', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.lightPurple('Source Gem'))
        text.add(1, Text.of('Obtained by placing Lead Crystals in an Imbuement Chamber.'))
    })
    tooltip.addAdvanced('mysticalagriculture:infusion_altar', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.of('Infusion Altar'))
        text.add(1, Text.of('This block is disabled. You can craft it for decoration, but it has no function.'))
    })
    tooltip.addAdvanced('mysticalagriculture:infusion_pedestal', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.of('Infusion Pedestal'))
        text.add(1, Text.of('This block is disabled. You can craft it for decoration, but it has no function.'))
    })
    tooltip.addAdvanced('kubejs:mk1circuit', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.green('MK-1 Circuit'))
    })
    tooltip.addAdvanced('kubejs:mk2circuit', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.blue('MK-2 Circuit'))
    })
    tooltip.addAdvanced('kubejs:mk3circuit', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.gold('MK-3 Circuit'))
    })
    tooltip.addAdvanced('kubejs:mk4circuit', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.red('MK-4 Circuit'))
    })
    tooltip.addAdvanced('kubejs:mk5circuit', (item, advanced, text) =>{
        if (advanced = false) {
            text.subList(0, text.size(), - 2).clear()
        } else {
            text.subList(0, text.size()).clear()
        }
        text.add(0, Text.darkPurple('MK-5 Circuit'))
    })
})