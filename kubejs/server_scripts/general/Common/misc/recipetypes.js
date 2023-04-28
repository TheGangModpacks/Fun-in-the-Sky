//priority 69
//This file provides recipe types with less typing
//Create:
const cutting = 'createCutting'
const millstone = 'createMilling';
const basin = 'createBasin';
const mech_mixer = 'createMixing';
const compacting = 'createCompacting';
const mech_press = 'createPressing';
const sand_polish = 'createSandpaperPolishing';
const water_fan = 'createSplashing';
const soul_flame_fan = 'createHaunting';
const fire_fan = 'createSmoking';
const lava_fan = 'createBlasting';
const deployer = 'createDeploying';
const spout = 'createFilling';
const drain = 'createEmptying';
const mech_crafter = 'createMechanicalCrafting';
const sequenced_assembly = 'createSequencedAssembly';
//Mekanism:
const mek_crusher = 'mekanism:crushing';
const enrichment_chamber = 'mekanism:enriching';
const chem_infuser = 'mekanism:chemical_infusing';
const combiner = 'mekanism:combining';
const electrolytic_separator = 'mekanism:separating';
const chem_washer = 'mekanism:washing';
const evaporation = 'mekanism:evaporating';
const neutron_activator = 'mekanism:activating';
const isotopic = 'mekanism:centrifuging';
const mek_crystalizer = 'mekanism:crystallizing';
const mek_dissolution_chamber = 'mekanism:dissolution';
const osmium_compressor = 'mekanism:compressing';
const purification_chamber = 'mekanism:purifying';
const injection_chamber = 'mekanism:injecting';
const nucleosynthesizer = 'mekanism:nucleosynthesizing';
const energy_convert = 'mekanism:energy_conversion';
const gas_convert = 'mekanism:gas_conversion';
const chemical_oxidizer = 'mekanism:oxidizing';
const pigment_extract = 'mekanism:pigment_extracting';
const pigment_mix = 'mnekanism:pigment_mixing';
const metallurgic_infuser = 'mekanism:metallurgic_infusing';
const painting = 'mekanism:painting';
const prc = 'mekanism:reaction';
const rotary_condensentrator = 'mekanism:rotary';
const precision_sawmill = 'mekanism:sawing';
//Compact Crafting
const miniturization = 'compactcrafting:miniaturization';
//Farmer's Delight
const cooking_pot = 'farmersdelight:cooking';
const cutting_board = 'farmersdelight:cutting';
//Mekanism Fission Recipe Addon
const fission = 'mekanism:fission';
const fluid_coolant = 'mekanism:fluid_coolant';
const gas_coolant = 'mekanism:gas_coolant';
//Extended Crafting
const combination = 'extendedcrafting:combination';
const extended_table = 'extendedcrafting:table';
const quantum_compressor = 'extendedcrafting:compressor';
const ender_crafter = 'extendedcrafting:ender_crafter';
const flux_crafter = 'extendedcrafting:flux_crafter';
//Ad Astra
const compressor = 'ad_astra:compressing';
const space_station = 'ad_astra:space_station'; //The hell does this do?
const nasa_workbench = 'ad_astra:nasa_workbench';
const fuel_conversion = 'ad_astra:fuel_conversion';
const oxygen_conversion = 'ad_astra:oxygen_conversion';
const cryo_conversion = 'ad_astra:cryo_fuel_conversion';
//Ex Nihilo Sequentia
const compost = 'exnihilosequentia:compost';
const sieve = 'exnihilosequentia:sieve';
const crook = 'exnihilosequentia:crook';
const seq_crucible = 'exnihilosequentia:crucible';
const fluid_item = 'exnihilosequentia:fluid_item';
const fluid_on_top = 'exnihilosequentia:fluid_on_top';
const fluid_transform = 'exnihilosequentia:fluid_transform';
const hammer = 'exnihilosequentia:hammer';
const seq_heat = 'exnihilosequentia:heat'; //Currently doesn't work via Kjs, use Datapack.
//Immersive Engineering
const alloy_furnace = 'immersiveengineering:alloy';
const arc_furnace = 'immersiveengineering:arc_furnace';
const blast_furnace_fuel = 'immersiveengineering:blast_furnace_fuel';
const blast_furnace = 'immersiveengineering:blast_furnace';
const blueprint = 'immersiveengineering:blueprint';
const bottling_machine = 'immersiveengineering:bottling_machine';
const fertilizer = 'immersiveengineering:fertilizer';
const cloche = 'immersiveengineering:cloche';
const coke_oven = 'immersiveengineering:coke_oven';
const ie_crusher = 'immersiveengineering:crusher';
const fermenter = 'immersiveengineering:fermenter';
const metal_press = 'immersiveengineering:metal_press';
const ie_mixer = 'immersiveengineering:mixer';
const ie_refinery = 'immersiveengineering:refinery';
const ie_sawmill = 'immersiveengineering:sawmill';
const squeexer = 'immersiveengineering:squeezer';
const generator_fuel = 'immersiveengineering:generator_fuel';
const thermoelectric_source = 'immersiveengineering:thermoelectric_source';
//Thermal Series
const thermalsawmill = 'thermal.sawmill';
const pulverizer = 'thermal.pulverizer';
const pulver_recycle = 'thermal.pulverizer_recycle';
const induction = `thermal:smelter`;
const induction_recycle = 'thermal.smelter_recycle';
const phytogenic = 'thermal.insolator';
const centrifugal = 'thermal.centrifuge';
const multiservo = 'thermal.press';
const crucible = 'thermal.crucible';
const chiller = 'thermal.chiller';
const fractionating = 'thermal.refinery';
const pyrolyzer = 'thermal:pyrolyzer';
const encapsulator = 'thermal.bottler';
const igneous = 'thermal:rock_gen';
const thermal_crystalizer = 'thermal:crystalizer';
const thermal_crystalizer_catalytst = 'thermal.crystalizer_catalyst';
const induction_catalyst = 'thermal:smelter.catalyst';
const phytogenic_catalyst = 'thermal:insolator.catalyst';
const alchemical = 'thermal.brewer';
//Powah!
const energizing_orb = 'powah:energizing';
//Industrial Foregoing
const industrial_dissolution_chamber = 'industrial_foregoing:dissolution_chamber';
const fluid_extractor = 'industrialforegoing:fluid_extractor';
const laser_drill_ore = 'industrialforegoing:laser_drill_ore';
const laser_drill_fluid = 'industrialforegoing:laser_drill_fluid';
const stonework = 'industrialforegoing:stonework_generate';
const industrial_crusher = 'industrialforegoing:crusher';
//Botania
const mana_pool = 'botania.mana_infusion';
const elven = 'botania.elven_trade';
const daisy = 'botania.pure_daisy';
const brew = 'botania.brew';
const apothecary = 'botania.petal_apothecary';
const runic_altar = 'botania.runic_altar';
const terraplate = 'botania.terra_plate';
const orechid = 'botania.orechid';
const ignem = 'botania.orechid_ignem';
const marimorphosis = 'botania.marimorphosis';
//Lychee Tweaker
const burn = 'lychee:item_burning';
const inside = 'lychee:item_inside';
const interact = 'lychee:block_interacting';
const click = 'lychee:block_clicking';
const anvil = 'lychee:anvil_crafting';
const anvil_crush = 'lychee:block_crushing';
const lightning = 'lychee:lightning_channeling';
const item_explode = 'lychee:item_exploding';
const block_explode = 'lychee:block_exploding';
const block_ticking = 'lychee:random_block_ticking';
const dripstone = 'lychee:dripstone_dripping';
//Pneumaticcraft
const amadron = 'pneumaticcraft:amadron';
const assembly_laser = 'pneumaticcraft:assembly_laser';
const assembly_drill = 'pneumaticcraft:assembly_drill';
const assembly_drill_laser = 'pneumaticcraft:assembly_drill_laser';
const heat_prop = 'pneumaticcraft:heat_properties';
const fluid_mixer = 'pneumaticcraft:fluid_mixer';
const fuel_quality = 'pneumaticcraft:fuel_quality';
const heat_frame_cool = 'pneumaticcraft:heat_frame_cooling';
const pressure_chamber = 'pneumaticcraft:pressure_chamber';
const thermo_plant = 'pneumaticcraft:thermo_plant';