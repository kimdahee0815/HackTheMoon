---
dg-publish: true
dg-permalink: 2_Routine/4_Yearly/Overview/facialMask
tags:
  - yearly
  - facialMask
  - overview
---
# Facial Mask
```dataviewjs
dv.span("** 😶‍🌫️ Facial-Mask **") /* optional ⏹️💤⚡⚠🧩↑↓⏳📔💾📁📝🔄📝🔀⌨️🕸️📅🔍✨ */
const calendarData = {
    year: Number(moment().format("YYYY")),  // (optional) defaults to current year
    colors: {    // (optional) defaults to green
           blueGradation:        ["#495057", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], // first entry is considered default if supplied
         greenGradation:       ["#495057","#c6e48b", "#7bc96f", "#49af5d", "#2e8840"],
        green:       ["#495057", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
        red:         ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
        orange:      ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
         pink:        ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
        pinkGradation:        ["#495057", "#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077"],
        orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"],
        yellow: ["#495057",  "#fff099", "#ffe880", "#ffd94d", "#ffca1a"], 
         violetGradation: ["#495057",  "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc"], 
         violet: ["#ce93d8", "#ba68c8", "#ab47bc", "9c27b0", "8e25aa"]
    },
    showCurrentDayBorder: true, // (optional) defaults to true
    defaultEntryIntensity: 4,   // (optional) defaults to 4
    intensityScaleStart: 10,    // (optional) defaults to lowest value passed to entries.intensity
    intensityScaleEnd: 100,     // (optional) defaults to highest value passed to entries.intensity
    entries: [],                // (required) populated in the DataviewJS loop below
}

//DataviewJS loop
for (let page of dv.pages('"2_Routine/1_Daily/Daily-Routine"').where(p => p.facialMask)) {
    //dv.span("<br>" + page.file.name) // uncomment for troubleshooting
    calendarData.entries.push({
        date: page.file.name,     // (required) Format YYYY-MM-DD
        intensity: page.facialMask, // (required) the data you want to track, will map color intensities automatically
        content: await dv.span(`[.](2_Routine/1_Daily/Beauty/${page.file.name})`),           // (optional) Add text to the date cell
        color: "violet",          // (optional) Reference from *calendarData.colors*. If no color is supplied; colors[0] is used
    })
}

renderHeatmapCalendar(this.container, calendarData)
```

