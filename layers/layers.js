var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NcleoUrbanoRioComprido_1 = new ol.format.GeoJSON();
var features_NcleoUrbanoRioComprido_1 = format_NcleoUrbanoRioComprido_1.readFeatures(json_NcleoUrbanoRioComprido_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NcleoUrbanoRioComprido_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NcleoUrbanoRioComprido_1.addFeatures(features_NcleoUrbanoRioComprido_1);
var lyr_NcleoUrbanoRioComprido_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NcleoUrbanoRioComprido_1, 
                style: style_NcleoUrbanoRioComprido_1,
                interactive: true,
                title: '<img src="styles/legend/NcleoUrbanoRioComprido_1.png" /> Núcleo Urbano Rio Comprido'
            });
var format_Identificaodedemandas_2 = new ol.format.GeoJSON();
var features_Identificaodedemandas_2 = format_Identificaodedemandas_2.readFeatures(json_Identificaodedemandas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Identificaodedemandas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Identificaodedemandas_2.addFeatures(features_Identificaodedemandas_2);
var lyr_Identificaodedemandas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Identificaodedemandas_2, 
                style: style_Identificaodedemandas_2,
                interactive: true,
                title: '<img src="styles/legend/Identificaodedemandas_2.png" /> Identificação de demandas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_NcleoUrbanoRioComprido_1.setVisible(true);lyr_Identificaodedemandas_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NcleoUrbanoRioComprido_1,lyr_Identificaodedemandas_2];
lyr_NcleoUrbanoRioComprido_1.set('fieldAliases', {});
lyr_Identificaodedemandas_2.set('fieldAliases', {'Locais': 'Locais', 'Figuras': 'Figuras', 'Relato': 'Relato', });
lyr_NcleoUrbanoRioComprido_1.set('fieldImages', {});
lyr_Identificaodedemandas_2.set('fieldImages', {'Locais': 'TextEdit', 'Figuras': 'ExternalResource', 'Relato': 'TextEdit', });
lyr_NcleoUrbanoRioComprido_1.set('fieldLabels', {});
lyr_Identificaodedemandas_2.set('fieldLabels', {'Locais': 'header label', 'Figuras': 'no label', 'Relato': 'header label', });
lyr_Identificaodedemandas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});