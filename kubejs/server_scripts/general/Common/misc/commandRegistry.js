//priority: 1000000
PlayerEvents.chat(event =>{
    event.getMessage('/kubejs reload textures');  {
        Client.reloadResourcePacks()
        event.player.tell('Loaded')
    }
}); console.warn('Loaded')