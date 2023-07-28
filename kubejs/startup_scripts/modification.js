const $SoundType = Java.loadClass('net.minecraft.world.level.block.SoundType')
BlockEvents.modification(e => {
    e.modify('/^emendatusenigmatica:.*_deepslate_ore/', block => {
        block.soundType = $SoundType.DEEPSLATE
    })
})

ItemEvents.modification(e =>{
    e.modify('thermal:bitumen', item =>{
        item.fireResistant = true
    })
    e.modify('thermal:bitumen_block', item =>{
        item.fireResistant = true
    })

    //Tier Modification:
    e.modify('ae2:certus_quartz_cutting_knife', item =>{
        item.setMaxDamage(256)
    })
    e.modify('ae2:nether_quartz_cutting_knife', item =>{
        item.setMaxDamage(180)
    })
    
})