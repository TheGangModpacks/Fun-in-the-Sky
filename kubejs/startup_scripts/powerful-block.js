CapabilityEvents.blockEntity(event => {
	//Allows the Energy Accepter to recieve Mana as a source of energy.
	/*event.attach("ae2:controller",
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
	)*/
	
	
		// Load the java class used at here
		let $AbstractFurnaceBlock = Java.loadClass("net.minecraft.world.level.block.AbstractFurnaceBlock")
			event.attach("furnace", CapabilityBuilder.FLUID.customBlockEntity()
				.getCapacity(be => 1)
				.getFluid(be => {
					let { level, blockPos } = be
					let block = level.getBlockState(blockPos)
					if (!block.getValue($AbstractFurnaceBlock.LIT)) return Fluid.of('kubejs:carbon_dioxide_liquid', 0)
					return Fluid.of("kubejs:carbon_dioxide_liquid", 1)
				})
				.onDrain((be, stack, simulate) => {
					if (stack.id != "kubejs:carbon_dioxide_liquid") return 0
					let { level, blockPos } = be
					let block = level.getBlockState(blockPos)
					if (!block.getValue($AbstractFurnaceBlock.LIT)) return 0
					return 1
				})
			)
			/*event.attach("thermal:machine_smelter", CapabilityBuilder.FLUID.customBlockEntity()
			.getCapacity(be => 4000)
			.getFluid(be => {
				let { level, blockPos } = be
				let block = level.getBlockState(blockPos)
				if (!block.getValue($AbstractFurnaceBlock.LIT)) return Fluid.of('kubejs:carbon_dioxide_liquid', 0)
				return Fluid.of(be.getCapability(CapabilityBuilder.FLUID).getFluid().id, be.getCapability(CapabilityBuilder.FLUID).getFluid().amount)
			})
			.onFill((be, stack, simulate) => {
				if (stack.amount > 4000 || stack.id != 'kubejs:lithium_peroxide_liquid') return 0
				let { level, blockPos } = be
				let block = level.getBlockState(blockPos)
				if (block.getValue($AbstractFurnaceBlock.LIT)) return 0
				return stack.amount
			})
		)*/
})