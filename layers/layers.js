ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([911066.806447, 6232703.337984, 914347.639781, 6234403.021317]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 0.609000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Area_1 = new ol.format.GeoJSON();
var features_Area_1 = format_Area_1.readFeatures(json_Area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Area_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_1.addFeatures(features_Area_1);
var lyr_Area_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_1, 
                style: style_Area_1,
                popuplayertitle: 'Area',
                interactive: false,
    title: 'Area<br />\
    <img src="styles/legend/Area_1_0.png" /> Mer<br />\
    <img src="styles/legend/Area_1_1.png" /> Terre<br />' });
var format_Building_2 = new ol.format.GeoJSON();
var features_Building_2 = format_Building_2.readFeatures(json_Building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_2.addFeatures(features_Building_2);
var lyr_Building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_2, 
                style: style_Building_2,
                popuplayertitle: 'Building',
                interactive: false,
                title: '<img src="styles/legend/Building_2.png" /> Building'
            });
var format_Roads_3 = new ol.format.GeoJSON();
var features_Roads_3 = format_Roads_3.readFeatures(json_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_3.addFeatures(features_Roads_3);
var lyr_Roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_3, 
                style: style_Roads_3,
                popuplayertitle: 'Roads',
                interactive: false,
                title: '<img src="styles/legend/Roads_3.png" /> Roads'
            });
var format_Parking_4 = new ol.format.GeoJSON();
var features_Parking_4 = format_Parking_4.readFeatures(json_Parking_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Parking_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parking_4.addFeatures(features_Parking_4);
var lyr_Parking_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parking_4, 
                style: style_Parking_4,
                popuplayertitle: 'Parking',
                interactive: false,
                title: '<img src="styles/legend/Parking_4.png" /> Parking'
            });
var format_Parkingpoints_5 = new ol.format.GeoJSON();
var features_Parkingpoints_5 = format_Parkingpoints_5.readFeatures(json_Parkingpoints_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Parkingpoints_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkingpoints_5.addFeatures(features_Parkingpoints_5);
var lyr_Parkingpoints_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parkingpoints_5, 
                style: style_Parkingpoints_5,
                popuplayertitle: 'Parking points',
                interactive: false,
    title: 'Parking points<br />\
    <img src="styles/legend/Parkingpoints_5_0.png" /> Moto<br />\
    <img src="styles/legend/Parkingpoints_5_1.png" /> Voiture<br />\
    <img src="styles/legend/Parkingpoints_5_2.png" /> Voiture Elec<br />' });
var format_Pompier_6 = new ol.format.GeoJSON();
var features_Pompier_6 = format_Pompier_6.readFeatures(json_Pompier_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Pompier_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pompier_6.addFeatures(features_Pompier_6);
var lyr_Pompier_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pompier_6, 
                style: style_Pompier_6,
                popuplayertitle: 'Pompier',
                interactive: true,
                title: '<img src="styles/legend/Pompier_6.png" /> Pompier'
            });
var format_YachtingVillage_7 = new ol.format.GeoJSON();
var features_YachtingVillage_7 = format_YachtingVillage_7.readFeatures(json_YachtingVillage_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_YachtingVillage_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YachtingVillage_7.addFeatures(features_YachtingVillage_7);
var lyr_YachtingVillage_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YachtingVillage_7, 
                style: style_YachtingVillage_7,
                popuplayertitle: 'Yachting Village',
                interactive: true,
                title: '<img src="styles/legend/YachtingVillage_7.png" /> Yachting Village'
            });
var format_PaintCabin_8 = new ol.format.GeoJSON();
var features_PaintCabin_8 = format_PaintCabin_8.readFeatures(json_PaintCabin_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_PaintCabin_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaintCabin_8.addFeatures(features_PaintCabin_8);
var lyr_PaintCabin_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaintCabin_8, 
                style: style_PaintCabin_8,
                popuplayertitle: 'Paint Cabin',
                interactive: false,
                title: '<img src="styles/legend/PaintCabin_8.png" /> Paint Cabin'
            });
var format_Nef_9 = new ol.format.GeoJSON();
var features_Nef_9 = format_Nef_9.readFeatures(json_Nef_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Nef_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nef_9.addFeatures(features_Nef_9);
var lyr_Nef_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nef_9, 
                style: style_Nef_9,
                popuplayertitle: 'Nef',
                interactive: false,
                title: '<img src="styles/legend/Nef_9.png" /> Nef'
            });
var format_HardstandingArea_10 = new ol.format.GeoJSON();
var features_HardstandingArea_10 = format_HardstandingArea_10.readFeatures(json_HardstandingArea_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_HardstandingArea_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HardstandingArea_10.addFeatures(features_HardstandingArea_10);
var lyr_HardstandingArea_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HardstandingArea_10, 
                style: style_HardstandingArea_10,
                popuplayertitle: 'Hardstanding Area',
                interactive: true,
                title: '<img src="styles/legend/HardstandingArea_10.png" /> Hardstanding Area'
            });
var format_Drydock_11 = new ol.format.GeoJSON();
var features_Drydock_11 = format_Drydock_11.readFeatures(json_Drydock_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Drydock_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drydock_11.addFeatures(features_Drydock_11);
var lyr_Drydock_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drydock_11, 
                style: style_Drydock_11,
                popuplayertitle: 'Dry dock',
                interactive: false,
                title: '<img src="styles/legend/Drydock_11.png" /> Dry dock'
            });
var format_AfloatArea_12 = new ol.format.GeoJSON();
var features_AfloatArea_12 = format_AfloatArea_12.readFeatures(json_AfloatArea_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_AfloatArea_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AfloatArea_12.addFeatures(features_AfloatArea_12);
var lyr_AfloatArea_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AfloatArea_12, 
                style: style_AfloatArea_12,
                popuplayertitle: 'Afloat Area',
                interactive: true,
    title: 'Afloat Area<br />\
    <img src="styles/legend/AfloatArea_12_0.png" /> MarinaVieux Port<br />\
    <img src="styles/legend/AfloatArea_12_1.png" /> Quais industriels - Port de La Ciotat<br />' });
var format_gantry_crane_13 = new ol.format.GeoJSON();
var features_gantry_crane_13 = format_gantry_crane_13.readFeatures(json_gantry_crane_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_gantry_crane_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gantry_crane_13.addFeatures(features_gantry_crane_13);
var lyr_gantry_crane_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gantry_crane_13, 
                style: style_gantry_crane_13,
                popuplayertitle: 'gantry_crane',
                interactive: false,
                title: '<img src="styles/legend/gantry_crane_13.png" /> gantry_crane'
            });
var format_Stationnementbateaux_14 = new ol.format.GeoJSON();
var features_Stationnementbateaux_14 = format_Stationnementbateaux_14.readFeatures(json_Stationnementbateaux_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Stationnementbateaux_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stationnementbateaux_14.addFeatures(features_Stationnementbateaux_14);
var lyr_Stationnementbateaux_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stationnementbateaux_14, 
                style: style_Stationnementbateaux_14,
                popuplayertitle: 'Stationnement bateaux',
                interactive: false,
                title: '<img src="styles/legend/Stationnementbateaux_14.png" /> Stationnement bateaux'
            });
var format_Liftingequipment_15 = new ol.format.GeoJSON();
var features_Liftingequipment_15 = format_Liftingequipment_15.readFeatures(json_Liftingequipment_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Liftingequipment_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Liftingequipment_15.addFeatures(features_Liftingequipment_15);
var lyr_Liftingequipment_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Liftingequipment_15, 
                style: style_Liftingequipment_15,
                popuplayertitle: 'Lifting equipment',
                interactive: true,
    title: 'Lifting equipment<br />\
    <img src="styles/legend/Liftingequipment_15_0.png" /> 2000 T<br />\
    <img src="styles/legend/Liftingequipment_15_1.png" /> 300 T<br />\
    <img src="styles/legend/Liftingequipment_15_2.png" /> 4300 T<br />\
    <img src="styles/legend/Liftingequipment_15_3.png" /> Gantry Cranes<br />\
    <img src="styles/legend/Liftingequipment_15_4.png" /> Historical Cranes<br />' });
var group_LCSFacilities = new ol.layer.Group({
                                layers: [lyr_Pompier_6,lyr_YachtingVillage_7,lyr_PaintCabin_8,lyr_Nef_9,lyr_HardstandingArea_10,lyr_Drydock_11,lyr_AfloatArea_12,],
                                fold: 'open',
                                title: ''});
var group_Gantrycrane = new ol.layer.Group({
                                layers: [lyr_gantry_crane_13,],
                                fold: 'open',
                                title: ''});
var group_Parking = new ol.layer.Group({
                                layers: [lyr_Parking_4,lyr_Parkingpoints_5,],
                                fold: 'open',
                                title: ''});
var group_0Fonddecarte = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_Area_1,lyr_Building_2,lyr_Roads_3,],
                                fold: 'close',
                                title: ''});

lyr_OSMStandard_0.setVisible(true);lyr_Area_1.setVisible(true);lyr_Building_2.setVisible(true);lyr_Roads_3.setVisible(true);lyr_Parking_4.setVisible(true);lyr_Parkingpoints_5.setVisible(true);lyr_Pompier_6.setVisible(true);lyr_YachtingVillage_7.setVisible(true);lyr_PaintCabin_8.setVisible(true);lyr_Nef_9.setVisible(true);lyr_HardstandingArea_10.setVisible(true);lyr_Drydock_11.setVisible(true);lyr_AfloatArea_12.setVisible(true);lyr_gantry_crane_13.setVisible(true);lyr_Stationnementbateaux_14.setVisible(false);lyr_Liftingequipment_15.setVisible(false);
var layersList = [group_0Fonddecarte,group_Parking,group_LCSFacilities,group_Gantrycrane,lyr_Stationnementbateaux_14,lyr_Liftingequipment_15];
lyr_Area_1.set('fieldAliases', {'id': 'id', 'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_Building_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Roads_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Parking_4.set('fieldAliases', {'id': 'id', 'Parking': 'Parking', });
lyr_Parkingpoints_5.set('fieldAliases', {'id': 'id', 'Parking': 'Parking', });
lyr_Pompier_6.set('fieldAliases', {'Text': 'Text', 'Url': 'Url', });
lyr_YachtingVillage_7.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_PaintCabin_8.set('fieldAliases', {'Zone': 'Zone', });
lyr_Nef_9.set('fieldAliases', {'Zone': 'Zone', });
lyr_HardstandingArea_10.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_Drydock_11.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_AfloatArea_12.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_gantry_crane_13.set('fieldAliases', {'id': 'id', });
lyr_Stationnementbateaux_14.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Liftingequipment_15.set('fieldAliases', {'Text': 'Text', 'Url': 'Url', });
lyr_Area_1.set('fieldImages', {'id': 'TextEdit', 'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_Building_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Roads_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Parking_4.set('fieldImages', {'id': 'TextEdit', 'Parking': 'TextEdit', });
lyr_Parkingpoints_5.set('fieldImages', {'id': 'TextEdit', 'Parking': 'TextEdit', });
lyr_Pompier_6.set('fieldImages', {'Text': 'TextEdit', 'Url': 'TextEdit', });
lyr_YachtingVillage_7.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_PaintCabin_8.set('fieldImages', {'Zone': 'TextEdit', });
lyr_Nef_9.set('fieldImages', {'Zone': 'TextEdit', });
lyr_HardstandingArea_10.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_Drydock_11.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_AfloatArea_12.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_gantry_crane_13.set('fieldImages', {'id': 'TextEdit', });
lyr_Stationnementbateaux_14.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Liftingequipment_15.set('fieldImages', {'Text': 'TextEdit', 'Url': 'TextEdit', });
lyr_Area_1.set('fieldLabels', {'id': 'no label', 'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', });
lyr_Building_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Roads_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Parking_4.set('fieldLabels', {'id': 'no label', 'Parking': 'no label', });
lyr_Parkingpoints_5.set('fieldLabels', {'id': 'hidden field', 'Parking': 'no label', });
lyr_Pompier_6.set('fieldLabels', {'Text': 'no label', 'Url': 'no label', });
lyr_YachtingVillage_7.set('fieldLabels', {'Zone': 'no label', 'Url': 'no label', });
lyr_PaintCabin_8.set('fieldLabels', {'Zone': 'no label', });
lyr_Nef_9.set('fieldLabels', {'Zone': 'no label', });
lyr_HardstandingArea_10.set('fieldLabels', {'Zone': 'inline label - visible with data', 'Url': 'no label', });
lyr_Drydock_11.set('fieldLabels', {'Zone': 'inline label - visible with data', 'Url': 'no label', });
lyr_AfloatArea_12.set('fieldLabels', {'Zone': 'no label', 'Url': 'no label', });
lyr_gantry_crane_13.set('fieldLabels', {'id': 'no label', });
lyr_Stationnementbateaux_14.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Liftingequipment_15.set('fieldLabels', {'Text': 'no label', 'Url': 'no label', });
lyr_Liftingequipment_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});