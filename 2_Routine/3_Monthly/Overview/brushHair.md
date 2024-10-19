---
dg-publish: true
dg-permalink: 2_Routine/3_Monthly/Overview/brushHair
tags:
  - monthly
  - brushHair
  - overview
---
# Brush hair
```dataviewjs
let pages = dv.pages(`"2_Routine/1_Daily/Daily-Routine"`)
const year = moment().format("YYYY")
const month = moment().format("M")
const date_pattern = 'YYYY-MM-DD'
const habits = {
	'brushHair': '🪮'
}

let data = {}
let link = {}
for (let page of pages) {
	if(dv.date(page.file.name).c.month == month){
		let date = page.file.name;
		data[date] = data[date] || '';
		link[date] = link[date] || '';

		let brushHair = page.brushHair;
	
		for (let habit in habits) {
			if(brushHair){
			data[date] += habits[habit].replace('{brushHair}', brushHair) + '\n';
			}
			
			link[date] += 
			page.hairNote.path;
		}
	}
}

let calendarData = []
for (let date in data) {
	calendarData.push({date: date, content: data[date], link: link[date]})
}
renderHabitCalendar(this.container, dv, {year, month, data: calendarData, date_pattern}) 
```
