require("dotenv").config();
const { globSync } = require("glob");
const settings = require("../../helpers/constants");

const allSettings = settings.ALL_NOTE_SETTINGS;

module.exports = {
  eleventyComputed: {
    layout: (data) => {
      if ((data.tags.indexOf("gardenEntry") != -1) && (document.body.classList.contains('theme-dark'))) {
        return "layouts/index.njk";
      }else if((data.tags.indexOf("gardenEntry") != -1) && (document.body.classList.contains('theme-light'))){
        return "layouts/lightthemeindex.njk";
      }
      return "layouts/note.njk";
    },
    permalink: (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return "/";
      }
      return data.permalink || undefined;
    },
    settings: (data) => {
      const noteSettings = {};
      allSettings.forEach((setting) => {
        let noteSetting = data[setting];
        let globalSetting = process.env[setting];

        let settingValue =
          noteSetting || (globalSetting === "true" && noteSetting !== false);
        noteSettings[setting] = settingValue;
      });
      return noteSettings;
    },
  },
};
