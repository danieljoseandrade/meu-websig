var size = 0;
var placement = 'point';

var style_Identificaodedemandas_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.7;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Locais") !== null) {
        labelText = String(feature.get("Locais"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,128,53,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(26,255,1,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
