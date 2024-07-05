StartupEvents.registry('item', registry => {
    registry.create('thermal:tar_ingot').texture('kubejs:item/tar_ingot')
    registry.create('botania:manasteel_plate').texture('kubejs:item/manasteel_plate')
    registry.create('thermal:steel_plate').texture('kubejs:item/steel_plate')
    registry.create('mekanism:enriched_emerald').texture('kubejs:item/enriched_emerald')
    registry.create('mekanism:alloy_resplendecente').texture('kubejs:item/alloy_resplendencente')
    registry.create('mekanism:resplendecente_control_circuit').texture('kubejs:item/resplendencente_control_circuit')
    registry.create('industrialforegoing:meat_ingot').texture('kubejs:item/meat_ingot')
    registry.create('industrialforegoing:mixed_ingot').texture('kubejs:item/mixed_ingot')
    registry.create('skyxps1').texture('kubejs:item/skyxps1')
 })


StartupEvents.registry('block', block => { 
    block.create('botania:mana_casing')
    block.create('hostilenetworks:network_casing')
})

StartupEvents.registry('fluid', fluid => { 
    fluid.create('life_essence')
    .bucketColor('#C31212')
    .displayName('Life Essence')
    .stillTexture('kubejs:block/life_essence_still')
    .flowingTexture('kubejs:block/life_essence_flow')
})
 Platform.mods.kubejs.name = 'SkyXP'

 