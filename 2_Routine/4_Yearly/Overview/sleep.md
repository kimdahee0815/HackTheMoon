---
dg-publish: true
dg-permalink: 2_Routine/4_Yearly/Overview/sleep
tags:
  - yearly
  - sleep
  - overview
---
# 
# Sleep
```dataviewjs
dv.span("** 💤 Sleep **") /* optional ⏹️💤⚡⚠🧩↑↓⏳📔💾📁📝🔄📝🔀⌨️🕸️📅🔍✨ */
const calendarData = {
    year: Number(moment().format("YYYY")),  // (optional) defaults to current year
    colors: {    // (optional) defaults to green
       blueGradation:        ["#495057","#90e0ef","#0096c7","#0077b6","#023e8a"], // first entry is considered default if supplied
       blue:        ["#495057", "#69a3ff", "#428bff", "#1872ff", "#0058e2"],
        green:       ["#495057", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
        red:         ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
        orange:      ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
        pink:        ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
        orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"],
        yellow: ["#495057",  "#fff099", "#ffe880", "#ffd94d", "#ffca1a"], 
         violetGradation: ["#e8bcf0",  "#da8ee7", "#ca5cdd", "#a000c8", "#7600bc"], 
         violet: ["#ce93d8", "#ba68c8", "#ab47bc", "9c27b0", "8e25aa"], 
         yellow: ["#495057", "#fff2cc", "#ffdf80", "#ffd24d", "#ffc61a"
        ]
    },
    showCurrentDayBorder: true, // (optional) defaults to true
    defaultEntryIntensity: 360 * 60 * 1000,   // (optional) defaults to 4
    intensityScaleStart: 360 * 60 * 1000,    // (optional) defaults to lowest value passed to entries.intensity
    intensityScaleEnd: 480 * 60 * 1000,     // (optional) defaults to highest value passed to entries.intensity
    entries: [],                // (required) populated in the DataviewJS loop below
}

//DataviewJS loop
for (let page of dv.pages('"2_Routine/1_Daily/Daily-Routine"').where(p => p.sleepTime)) {
    //dv.span("<br>" + page.file.name) // uncomment for troubleshooting
    calendarData.entries.push({
        date: page.file.name,     // (required) Format YYYY-MM-DD
        intensity: page.sleepTime, // (required) the data you want to track, will map color intensities automatically
        content: await dv.span(`[.](2_Routine/1_Daily/Health/${page.file.name})`),           // (optional) Add text to the date cell
        color: "blue",          // (optional) Reference from *calendarData.colors*. If no color is supplied; colors[0] is used
    })
}

renderHeatmapCalendar(this.container, calendarData)
```

