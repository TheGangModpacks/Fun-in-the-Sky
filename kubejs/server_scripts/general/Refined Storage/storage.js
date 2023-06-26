//priority: 1
ServerEvents.recipes(event =>{
    event.remove({output: /^refinedstorage:.*_storage_part/})
    event.remove({output: /^extradisks:.*_storage_part/})
    let storagei = 'fits:basic_table/refinedstorage/';
    let housing = 'fits:basic_table/refinedstorage/housing/';
    let extstoragei = 'fits:basic_table/extradisks/';
    let exthousing = 'fits:basic_table/extradisks/housing/';

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDC",
          "ACA"
        ],
        "tier": 1,
        "key": {
          "A": {"item": "emendatusenigmatica:silicon_gem"},
          "B": {"item": "refinedstorage:quartz_enriched_iron"},
          "C": {"item": "botania:mana_glass"},
          "D": {"item": "emendatusenigmatica:bronze_ingot"}
        },
        "result": {
          "item": "refinedstorage:1k_storage_part"
        }
      }).id(`${storagei}1k_part`)

      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDC",
          "ACA"
        ],
        "tier": 1,
        "key": {
          "A": {"item": "emendatusenigmatica:silicon_gem"},
          "B": {"item": "refinedstorage:quartz_enriched_iron"},
          "C": {"item": "refinedstorage:1k_storage_part"},
          "D": {"item": "emendatusenigmatica:brass_ingot"}
        },
        "result": {
          "item": "refinedstorage:4k_storage_part"
        }
      }).id(`${storagei}4k_part`)

      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDC",
          "ACA"
        ],
        "tier": 1,
        "key": {
          "A": {"item": "emendatusenigmatica:silicon_gem"},
          "B": {"item": "refinedstorage:quartz_enriched_iron"},
          "C": {"item": "refinedstorage:4k_storage_part"},
          "D": {"item": "emendatusenigmatica:uranium_ingot"}
        },
        "result": {
          "item": "refinedstorage:16k_storage_part"
        }
      }).id(`${storagei}16k_part`)

      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABABA",
          "BCDCB",
          "ADCDA",
          "BCDCB",
          "ABABA"
        ],
        "tier": 2,
        "key": {
          "A": {"item": "emendatusenigmatica:silicon_gem"},
          "B": {"item": "emendatusenigmatica:black_iron_plate"},
          "C": {"item": "mekanism:enriched_diamond"},
          "D": {"item": "refinedstorage:16k_storage_part"}
        },
        "result": {
          "item": "refinedstorage:64k_storage_part"
        }
      }).id(`${storagei}64k_part`)

      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBA",
          "BDEDB",
          "CEDEC",
          "BDEDB",
          "ABCBA"
        ],
        "tier": 2,
        "key": {
          "A": {"item": "emendatusenigmatica:silicon_gem"},
          "B": {"item": "emendatusenigmatica:black_iron_plate"},
          "D": {"item": "emendatusenigmatica:signalum_ingot"},
          "C": {"item": "extradisks:withering_processor"},
          "E": {"item": "refinedstorage:64k_storage_part"}
        },
        "result": {
          "item": "extradisks:256k_storage_part"
        }
      }).id(`${extstoragei}256k_part`)

      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBA",
          "BDEDB",
          "CEDEC",
          "BDEDB",
          "ABCBA"
        ],
        "tier": 2,
        "key": {
          "A": {"item": "emendatusenigmatica:silicon_gem"},
          "B": {"item": "emendatusenigmatica:black_iron_plate"},
          "D": {"item": "emendatusenigmatica:lumium_ingot"},
          "C": {"item": "extradisks:withering_processor"},
          "E": {"item": "extradisks:256k_storage_part"}
        },
        "result": {
          "item": "extradisks:1024k_storage_part"
        }
      }).id(`${extstoragei}1024k_part`)

      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBA",
          "BDEDB",
          "CEDEC",
          "BDEDB",
          "ABCBA"
        ],
        "tier": 2,
        "key": {
          "A": {"item": "emendatusenigmatica:silicon_gem"},
          "B": {"item": "emendatusenigmatica:black_iron_plate"},
          "D": {"item": "extendedcrafting:ender_ingot"},
          "C": {"item": "extradisks:withering_processor"},
          "E": {"item": "extradisks:1024k_storage_part"}
        },
        "result": {
          "item": "extradisks:4096k_storage_part"
        }
      }).id(`${extstoragei}4096k_part`)

      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBA",
          "BDEDB",
          "CEDEC",
          "BDEDB",
          "ABCBA"
        ],
        "tier": 2,
        "key": {
          "A": {"item": "emendatusenigmatica:silicon_gem"},
          "B": {"item": "emendatusenigmatica:black_iron_plate"},
          "D": {"item": "emendatusenigmatica:diamond_gear"},
          "C": {"item": "extradisks:withering_processor"},
          "E": {"item": "extradisks:4096k_storage_part"}
        },
        "result": {
          "item": "extradisks:16384k_storage_part"
        }
      }).id(`${extstoragei}16384k_part`)

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABABABA",
      "BACDCAB",
      "ACCECCA",
      "BDEFEDB",
      "ACCECCA",
      "BACDCAB",
      "ABABABA"
   ],
   "tier": 3,
   "key": {
    "A": {"item": "emendatusenigmatica:black_iron_plate"},
    "B": {"item": "extradisks:withering_processor"},
    "C": {"item": "industrialforegoing:pink_slime_ingot"},
    "D": {"item": "extradisks:16384k_storage_part"},
    "E": {"item": "mysticalagriculture:imperium_ingot"},
    "F": {"item": "kubejs:archaic_pink_gold_ingot"}
  },
  "result": {
    "item": "extradisks:65536k_storage_part"
  }
}).id(`${extstoragei}65536k_storage_part`)

event.remove({output: /refinedstorage:.*_storage_disk/})
event.remove({output: /extradisks:.*_storage_disk/})
event.remove({output: /refinedstorage:.*_storage_housing/})
event.remove({id: 'refinedstorage:storage_housing'})
event.remove({id: 'extradisks:advanced_storage_housing'})

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABA",
      "ACB",
      "CAA"
    ],
    "tier": 1,
    "key": {
      "A": {
        "item": "refinedstorage:quartz_enriched_iron"
      },
      "B": {
        "item": "minecraft:redstone"
      },
      "C": {
        "item": "pneumaticcraft:transistor"
      }
    },
    "result": {
      "item": "refinedstorage:storage_housing"
    }
  }).id('fits:basic_table/refinedstorage/housing')

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAA",
      "BCB",
      "BBB"
    ],
    "tier": 1,
    "key": {
      "A": {
        "item": "emendatusenigmatica:black_iron_plate"
      },
      "B": {
        "item": "botania:terrasteel_ingot"
      },
      "C": {
        "item": "refinedstorage:storage_housing"
      }
    },
    "result": {
      "item": "extradisks:advanced_storage_housing"
    }
  }).id('fits:basic_table/extradisks/housing')

  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "tier": 1,
    "ingredients": [
      {
        "item": "refinedstorage:storage_housing"
      },
      {
        "item": "refinedstorage:1k_storage_part"
      }
    ],
    "result": {
      "item": "refinedstorage:1k_storage_disk"
    }
  }).id('fits:basic_table/refinedstorage/1k_disk')
  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "tier": 1,
    "ingredients": [
      {
        "item": "refinedstorage:storage_housing"
      },
      {
        "item": "refinedstorage:4k_storage_part"
      }
    ],
    "result": {
      "item": "refinedstorage:4k_storage_disk"
    }
  }).id('fits:basic_table/refinedstorage/4k_disk')
  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "tier": 1,
    "ingredients": [
      {
        "item": "refinedstorage:storage_housing"
      },
      {
        "item": "refinedstorage:16k_storage_part"
      }
    ],
    "result": {
      "item": "refinedstorage:16k_storage_disk"
    }
  }).id('fits:basic_table/refinedstorage/16k_disk')
  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "tier": 1,
    "ingredients": [
      {
        "item": "refinedstorage:storage_housing"
      },
      {
        "item": "refinedstorage:64k_storage_part"
      }
    ],
    "result": {
      "item": "refinedstorage:64k_storage_disk"
    }
  }).id('fits:basic_table/refinedstorage/64k_disk')

  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "tier": 1,
    "ingredients": [
      {
        "item": "extradisks:advanced_storage_housing"
      },
      {
        "item": "extradisks:256k_storage_part"
      }
    ],
    "result": {
      "item": "extradisks:256k_storage_disk"
    }
  }).id('fits:basic_table/refinedstorage/256k_disk')
  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "tier": 1,
    "ingredients": [
      {
        "item": "extradisks:advanced_storage_housing"
      },
      {
        "item": "extradisks:1024k_storage_part"
      }
    ],
    "result": {
      "item": "extradisks:1024k_storage_disk"
    }
  }).id('fits:basic_table/refinedstorage/1024k_disk')
  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "tier": 1,
    "ingredients": [
      {
        "item": "extradisks:advanced_storage_housing"
      },
      {
        "item": "extradisks:4096k_storage_part"
      }
    ],
    "result": {
      "item": "extradisks:4096k_storage_disk"
    }
  }).id('fits:basic_table/refinedstorage/4096k_disk')
  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "tier": 1,
    "ingredients": [
      {
        "item": "extradisks:advanced_storage_housing"
      },
      {
        "item": "extradisks:16384k_storage_part"
      }
    ],
    "result": {
      "item": "extradisks:16384k_storage_disk"
    }
  }).id('fits:basic_table/refinedstorage/16384k_disk')
  event.custom({
    "type": "extendedcrafting:shapeless_table",
    "tier": 1,
    "ingredients": [
      {
        "item": "extradisks:advanced_storage_housing"
      },
      {
        "item": "extradisks:65536k_storage_part"
      }
    ],
    "result": {
      "item": "extradisks:65536k_storage_disk"
    }
  }).id('fits:basic_table/refinedstorage/65536k_disk')
})