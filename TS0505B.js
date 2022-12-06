// create this file in /config/zigbee2mqtt/ and restart zigbee2mqtt
// The original of this file has been found somewhere, since I pieced this together out of a lot of things, please hit me up if you spot your code so i can credit you.
// the XXXX in line 20 has to be replaced with the "zigbee manufacturer" of one of your devices, you can find it in Zigbee2MQTTs device specific page.

const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const ota = require('zigbee-herdsman-converters/lib/ota');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const utils = require('zigbee-herdsman-converters/lib/utils');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    // Since a lot of Tuya devices use the same modelID, but use different data points
    // it's usually necessary to provide a fingerprint instead of a zigbeeModel
    fingerprint: 
        [{modelID: 'TS0505B', manufacturerName: 'XXXX'}],
        model: 'TS0505B',
        vendor: 'TuYa',
        description: 'Zigbee RGB+CCT light',
        whiteLabel: [{vendor: 'Mercator Ikuü', model: 'SMD4106W-RGB-ZB'},
            {vendor: 'TuYa', model: 'A5C-21F7-01'}, {vendor: 'Mercator Ikuü', model: 'S9E27LED9W-RGB-Z'},
            {vendor: 'Aldi', model: 'L122CB63H11A9.0W', description: 'LIGHTWAY smart home LED-lamp - bulb'},
            {vendor: 'Lidl', model: '14153706L', description: 'Livarno smart LED ceiling light'},
            {vendor: 'Luminea', model: 'LAV-301', description: 'E14, RGB, 2200-6500K, 470lm, 6W'},
        ],
        extend: extend.light_onoff_brightness_colortemp_color({colorTempRange: [153, 500]}),
        meta: {applyRedFix: true, enhancedHue: false},
};

module.exports = definition;
