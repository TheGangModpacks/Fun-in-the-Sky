const $SoundType = Java.loadClass('net.minecraft.world.level.block.SoundType')
BlockEvents.modification(e => {
    e.modify('/^emendatusenigmatica:.*_deepslate_ore/', block => {
        block.soundType = $SoundType.DEEPSLATE
    })
})