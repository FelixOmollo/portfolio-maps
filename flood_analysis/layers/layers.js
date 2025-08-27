var wms_layers = [];


        var lyr_CartoDBDarkMatter_0 = new ol.layer.Tile({
            'title': 'CartoDB DarkMatter',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_CartoDBPositron_1 = new ol.layer.Tile({
            'title': 'CartoDB Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_camp_boundaries_Ethiopia_2 = new ol.format.GeoJSON();
var features_camp_boundaries_Ethiopia_2 = format_camp_boundaries_Ethiopia_2.readFeatures(json_camp_boundaries_Ethiopia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_camp_boundaries_Ethiopia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_camp_boundaries_Ethiopia_2.addFeatures(features_camp_boundaries_Ethiopia_2);
var lyr_camp_boundaries_Ethiopia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_camp_boundaries_Ethiopia_2, 
                style: style_camp_boundaries_Ethiopia_2,
                popuplayertitle: 'camp_boundaries_Ethiopia',
                interactive: true,
                title: '<img src="styles/legend/camp_boundaries_Ethiopia_2.png" /> camp_boundaries_Ethiopia'
            });
var format_Safeunaffectedbuildings_3 = new ol.format.GeoJSON();
var features_Safeunaffectedbuildings_3 = format_Safeunaffectedbuildings_3.readFeatures(json_Safeunaffectedbuildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Safeunaffectedbuildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Safeunaffectedbuildings_3.addFeatures(features_Safeunaffectedbuildings_3);
var lyr_Safeunaffectedbuildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Safeunaffectedbuildings_3, 
                style: style_Safeunaffectedbuildings_3,
                popuplayertitle: 'Safe (unaffected buildings)',
                interactive: true,
                title: '<img src="styles/legend/Safeunaffectedbuildings_3.png" /> Safe (unaffected buildings)'
            });
var format_Affectedbuildings_4 = new ol.format.GeoJSON();
var features_Affectedbuildings_4 = format_Affectedbuildings_4.readFeatures(json_Affectedbuildings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Affectedbuildings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Affectedbuildings_4.addFeatures(features_Affectedbuildings_4);
var lyr_Affectedbuildings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Affectedbuildings_4, 
                style: style_Affectedbuildings_4,
                popuplayertitle: 'Affected buildings',
                interactive: true,
    title: 'Affected buildings<br />\
    <img src="styles/legend/Affectedbuildings_4_0.png" /> Low Risk<br />\
    <img src="styles/legend/Affectedbuildings_4_1.png" /> Medium Risk<br />\
    <img src="styles/legend/Affectedbuildings_4_2.png" /> High Risk<br />\
    <img src="styles/legend/Affectedbuildings_4_3.png" /> Very High Risk<br />' });

lyr_CartoDBDarkMatter_0.setVisible(true);lyr_CartoDBPositron_1.setVisible(true);lyr_camp_boundaries_Ethiopia_2.setVisible(true);lyr_Safeunaffectedbuildings_3.setVisible(true);lyr_Affectedbuildings_4.setVisible(true);
var layersList = [lyr_CartoDBDarkMatter_0,lyr_CartoDBPositron_1,lyr_camp_boundaries_Ethiopia_2,lyr_Safeunaffectedbuildings_3,lyr_Affectedbuildings_4];
lyr_camp_boundaries_Ethiopia_2.set('fieldAliases', {'Camp Name': 'Camp Name', 'Year': 'Year', 'Population': 'Population', 'Pop Year': 'Pop Year', 'Region': 'Region', 'Origin': 'Origin', 'Area_m2': 'Area_m2', });
lyr_Safeunaffectedbuildings_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Affectedbuildings_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'riskmax': 'riskmax', });
lyr_camp_boundaries_Ethiopia_2.set('fieldImages', {'Camp Name': 'TextEdit', 'Year': 'TextEdit', 'Population': 'TextEdit', 'Pop Year': 'TextEdit', 'Region': 'TextEdit', 'Origin': 'TextEdit', 'Area_m2': 'TextEdit', });
lyr_Safeunaffectedbuildings_3.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Affectedbuildings_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'riskmax': 'TextEdit', });
lyr_camp_boundaries_Ethiopia_2.set('fieldLabels', {'Camp Name': 'inline label - always visible', 'Year': 'inline label - visible with data', 'Population': 'inline label - always visible', 'Pop Year': 'no label', 'Region': 'no label', 'Origin': 'no label', 'Area_m2': 'no label', });
lyr_Safeunaffectedbuildings_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'inline label - always visible', });
lyr_Affectedbuildings_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', 'riskmax': 'no label', });
lyr_Affectedbuildings_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});