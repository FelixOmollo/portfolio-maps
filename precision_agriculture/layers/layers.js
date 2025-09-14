var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_NormalizedDifferenceVegetationIndexNDVI_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Normalized Difference Vegetation Index - NDVI<br />\
    <img src="styles/legend/NormalizedDifferenceVegetationIndexNDVI_1_0.png" /> Very sparse vegetation<br />\
    <img src="styles/legend/NormalizedDifferenceVegetationIndexNDVI_1_1.png" /> Moderate vegetation cover<br />\
    <img src="styles/legend/NormalizedDifferenceVegetationIndexNDVI_1_2.png" /> Good vegetation cover<br />\
    <img src="styles/legend/NormalizedDifferenceVegetationIndexNDVI_1_3.png" /> Very dense vegetation<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NormalizedDifferenceVegetationIndexNDVI_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [749342.527491, 6820254.917740, 749804.356247, 6821004.590816]
        })
    });
var lyr_NormalizedDifferenceRedEdgeIndexNDRE_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Normalized Difference Red Edge Index - NDRE<br />\
    <img src="styles/legend/NormalizedDifferenceRedEdgeIndexNDRE_2_0.png" /> Low health / stressed<br />\
    <img src="styles/legend/NormalizedDifferenceRedEdgeIndexNDRE_2_1.png" /> Moderate health<br />\
    <img src="styles/legend/NormalizedDifferenceRedEdgeIndexNDRE_2_2.png" /> Good health<br />\
    <img src="styles/legend/NormalizedDifferenceRedEdgeIndexNDRE_2_3.png" /> Very good / vigorous health<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NormalizedDifferenceRedEdgeIndexNDRE_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [749342.527491, 6820254.917740, 749804.356247, 6821004.590816]
        })
    });
var format_NDRE_Statistics_3 = new ol.format.GeoJSON();
var features_NDRE_Statistics_3 = format_NDRE_Statistics_3.readFeatures(json_NDRE_Statistics_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDRE_Statistics_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDRE_Statistics_3.addFeatures(features_NDRE_Statistics_3);
var lyr_NDRE_Statistics_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDRE_Statistics_3, 
                style: style_NDRE_Statistics_3,
                popuplayertitle: 'NDRE_Statistics',
                interactive: true,
    title: 'NDRE_Statistics<br />\
    <img src="styles/legend/NDRE_Statistics_3_0.png" /> Very Low Health<br />\
    <img src="styles/legend/NDRE_Statistics_3_1.png" /> Low Health<br />\
    <img src="styles/legend/NDRE_Statistics_3_2.png" /> Moderate Health<br />\
    <img src="styles/legend/NDRE_Statistics_3_3.png" /> High Health<br />\
    <img src="styles/legend/NDRE_Statistics_3_4.png" /> Very High Health<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_NormalizedDifferenceVegetationIndexNDVI_1.setVisible(true);lyr_NormalizedDifferenceRedEdgeIndexNDRE_2.setVisible(true);lyr_NDRE_Statistics_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NormalizedDifferenceVegetationIndexNDVI_1,lyr_NormalizedDifferenceRedEdgeIndexNDRE_2,lyr_NDRE_Statistics_3];
lyr_NDRE_Statistics_3.set('fieldAliases', {'variety': 'variety', '_NDRE_mean': '_NDRE_mean', '_NDRE_medi': '_NDRE_medi', '_NDRE_min': '_NDRE_min', '_NDRE_max': '_NDRE_max', });
lyr_NDRE_Statistics_3.set('fieldImages', {'variety': 'TextEdit', '_NDRE_mean': 'TextEdit', '_NDRE_medi': 'TextEdit', '_NDRE_min': 'TextEdit', '_NDRE_max': 'TextEdit', });
lyr_NDRE_Statistics_3.set('fieldLabels', {'variety': 'no label', '_NDRE_mean': 'no label', '_NDRE_medi': 'no label', '_NDRE_min': 'no label', '_NDRE_max': 'no label', });
lyr_NDRE_Statistics_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});