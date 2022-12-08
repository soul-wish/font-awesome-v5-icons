const got = require('got');
const YAML = require('yamljs');
const oPick = require('object.pick');
const backupList = require('./data/icons.json');

const convertToArray = (data) => {
    const iconsData = {
        icons: [],
    };
    Object.keys(data).map((iconName) => {
        if (iconName === 'infinity') {
            data[iconName].label = `${data[iconName].label}`;
        }
        return iconsData.icons.push({
            name: iconName,
            ...data[iconName],
        });
    });
    return iconsData;
};

const getIcons = () => got('https://raw.githubusercontent.com/FortAwesome/Font-Awesome/5.x/metadata/icons.yml')
    .then(response => YAML.parse(response.body))
    .then(iconsObject => convertToArray(iconsObject))
    .then(data => data.icons)
    .catch(() => backupList.icons);

const cleanUpObject = (data, fields) => data.map(icon => oPick(icon, fields));

module.exports.getList = getIcons;

module.exports.getListByKeys = fields => new Promise((resolve) => {
    getIcons()
        .then(data => resolve(cleanUpObject(data, fields)))
        .catch(() => resolve(cleanUpObject(backupList.icons, fields)));
});
