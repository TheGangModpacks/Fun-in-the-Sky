FTBQuestsEvents.customReward('1FDC327172E88F63', event => {
	 event.server.scheduleInTicks(10, se => {
        se.server.runCommand('/ playsound immersiveengineering:assembler ambient event.player.name.string')
    })
})