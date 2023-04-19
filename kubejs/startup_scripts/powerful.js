/*CapabilityEvents.blockEntity(event => {
	//Allows the Energy Accepter to recieve Mana as a source of energy.
	event.attach("ae2:controller",
		BotaniaCapabilityBuilder.MANA.blockEntity()
			.receiveMana((be, amount) => {
				let energy = be.getCapability(ForgeCapabilities.ENERGY).orElse(null)
				energy.receiveEnergy(amount, false)
			})
			.getCurrentMana(be => {
				let energy = be.getCapability(ForgeCapabilities.ENERGY).orElse(null)
				return energy.energyStored
			})
			.isFull(be => {
				let energy = be.getCapability(ForgeCapabilities.ENERGY).orElse(null)
				return energy.energyStored >= energy.maxEnergyStored;
			})
	)

})*/