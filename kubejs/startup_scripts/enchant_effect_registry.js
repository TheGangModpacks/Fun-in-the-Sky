StartupEvents.registry("enchantment", event => {
    event.create("fluix_aspect")
        .postAttack(
            (user, target, level) => {
                if (target.living) {
                    target.potionEffects.add("ae2:fluix_poisoning", 20 * 5, 1)
                }
            })
        .undiscoverable()
        .maxLevel(2)
        .weapon()
    })
StartupEvents.registry('mob_effect', event =>{
    event.create('ae2:fluix_poisoning')
    .color(0x4E3C95)
    .modifyAttribute("minecraft:generic.max_health", 'health_max', -0.5, 'addition')
    .effectTick((entity, amplifier) =>{
        if (entity.attack() && entity.getHealth() > 6) { 
            entity.setHealth(entity.minecraftEntity.getHealth() - 1)
        }
    })
})