---
dg-publish: true
dg-permalink: 2_Routine/4_Yearly/Overview/washingDishes
tags:
  - yearly
  - washingDishes
  - overview
---
# Morning Washing Dishes
```dataviewjs
dv.span("** 🧽 Morning Washing Dishes **") /* optional ⏹️💤⚡⚠🧩↑↓⏳📔💾📁📝🔄📝🔀⌨️🕸️📅🔍✨ */
const calendarData = {
    year: Number(moment().format("YYYY")),  // (optional) defaults to current year
    colors: {    // (optional) defaults to green
         blueGradation:        ["#cfe2fc", "#9fc6f9", "#6ea9f7", "#3e8df4", "#2980f2"], // first entry is considered default if supplied
        green:       ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
        red:         ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
        orange:      ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
        pink:        ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
        orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"],
        yellow: ["#fff9e6", "#fff2cc", "#ffdf80", "#ffd24d", "#ffc61a"
        ]
    },
    showCurrentDayBorder: true, // (optional) defaults to true
    defaultEntryIntensity: 4,   // (optional) defaults to 4
    intensityScaleStart: 0,    // (optional) defaults to lowest value passed to entries.intensity
    intensityScaleEnd: 15,     // (optional) defaults to highest value passed to entries.intensity
    entries: [],                // (required) populated in the DataviewJS loop below
}

//DataviewJS loop
for (let page of dv.pages('"2_Routine/1_Daily/Daily-Routine"').where(p => p.morningWashingDishes)) {
    //dv.span("<br>" + page.file.name) // uncomment for troubleshooting
    calendarData.entries.push({
        date: page.file.name,     // (required) Format YYYY-MM-DD
        intensity: page.morningWashingDishes, // (required) the data you want to track, will map color intensities automatically
        content: await dv.span(`[.](2_Routine/1_Daily/Chores/${page.file.name})`),           // (optional) Add text to the date cell
        color: "orangeToRed",          // (optional) Reference from *calendarData.colors*. If no color is supplied; colors[0] is used
    })
}

renderHeatmapCalendar(this.container, calendarData)
```

# Afternoon Washing Dishes
```dataviewjs
dv.span("** 🧽 Afternoon Washing Dishes **") /* optional ⏹️💤⚡⚠🧩↑↓⏳📔💾📁📝🔄📝🔀⌨️🕸️📅🔍✨ */
const calendarData = {
    year: Number(moment().format("YYYY")),  // (optional) defaults to current year
    colors: {    // (optional) defaults to green
         blueGradation:        ["#cfe2fc", "#9fc6f9", "#6ea9f7", "#3e8df4", "#2980f2"], // first entry is considered default if supplied
        green:       ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
        red:         ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
        orange:      ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
        pink:        ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
        orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"],
         yellow: ["#fff9e6", "#fff2cc", "#ffdf80", "#ffd24d", "#ffc61a"
        ]
    },
    showCurrentDayBorder: true, // (optional) defaults to true
    defaultEntryIntensity: 4,   // (optional) defaults to 4
    intensityScaleStart: 0,    // (optional) defaults to lowest value passed to entries.intensity
    intensityScaleEnd: 15,     // (optional) defaults to highest value passed to entries.intensity
    entries: [],                // (required) populated in the DataviewJS loop below
}

//DataviewJS loop
for (let page of dv.pages('"2_Routine/1_Daily/Daily-Routine"').where(p => p.afternoonWashingDishes)) {
    //dv.span("<br>" + page.file.name) // uncomment for troubleshooting
    calendarData.entries.push({
        date: page.file.name,     // (required) Format YYYY-MM-DD
        intensity: page.afternoonWashingDishes, // (required) the data you want to track, will map color intensities automatically
        content: await dv.span(`[.](2_Routine/1_Daily/Chores/${page.file.name})`),           // (optional) Add text to the date cell
        color: "orangeToRed",          // (optional) Reference from *calendarData.colors*. If no color is supplied; colors[0] is used
    })
}

renderHeatmapCalendar(this.container, calendarData)
```

# Evening Washing Dishes
```dataviewjs
dv.span("** 🧽 Evening Washing Dishes **") /* optional ⏹️💤⚡⚠🧩↑↓⏳📔💾📁📝🔄📝🔀⌨️🕸️📅🔍✨ */
const calendarData = {
    year: Number(moment().format("YYYY")),  // (optional) defaults to current year
    colors: {    // (optional) defaults to green
        blueGradation:        ["#cfe2fc", "#9fc6f9", "#6ea9f7", "#3e8df4", "#2980f2"], // first entry is considered default if supplied
        green:       ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
        red:         ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
        orange:      ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
        pink:        ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
        orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"], 
         yellow: ["#fff9e6", "#fff2cc", "#ffdf80", "#ffd24d", "#ffc61a"
        ]
    },
    showCurrentDayBorder: true, // (optional) defaults to true
    defaultEntryIntensity: 4,   // (optional) defaults to 4
    intensityScaleStart: 0,    // (optional) defaults to lowest value passed to entries.intensity
    intensityScaleEnd: 15,     // (optional) defaults to highest value passed to entries.intensity
    entries: [],                // (required) populated in the DataviewJS loop below
}

//DataviewJS loop
for (let page of dv.pages('"2_Routine/1_Daily/Daily-Routine"').where(p => p.eveningWashingDishes)) {
    //dv.span("<br>" + page.file.name) // uncomment for troubleshooting
    calendarData.entries.push({
        date: page.file.name,     // (required) Format YYYY-MM-DD
        intensity: page.eveningWashingDishes, // (required) the data you want to track, will map color intensities automatically
        content: await dv.span(`[.](2_Routine/1_Daily/Chores/${page.file.name})`),           // (optional) Add text to the date cell
        color: "orangeToRed",          // (optional) Reference from *calendarData.colors*. If no color is supplied; colors[0] is used
    })
}

renderHeatmapCalendar(this.container, calendarData)
```

 
