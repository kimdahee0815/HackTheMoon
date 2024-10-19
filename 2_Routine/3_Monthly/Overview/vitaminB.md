---
dg-publish: false
dg-permalink: 2_Routine/3_Monthly/Overview/vitaminB
tags:
  - monthly
  - vitaminB
  - overview
---
# vitaminB
```dataviewjs
let pages = dv.pages(`"2_Routine/1_Daily/Daily-Routine"`)
const year = moment().format("YYYY")
const month = moment().format("M")
const date_pattern = 'YYYY-MM-DD'
const habits = {
	'pantotin': '🩵'
}

let data = {}
let link = {}
for (let page of pages) {
	if(dv.date(page.file.name).c.month == month){
		let date = page.file.name;
		data[date] = data[date] || '';
		link[date] = link[date] || '';

		let vitaminB = page.vitaminB;
	
		for (let habit in habits) {
			if(vitaminB){
			data[date] += habits[habit].replace('{vitaminB}', vitaminB) + '\n';
			}
			
			link[date] += 
			page.pantotinNote.path;
		}
	}
}

let calendarData = []
for (let date in data) {
	calendarData.push({date: date, content: data[date], link: link[date]})
}
renderHabitCalendar(this.container, dv, {year, month, data: calendarData, date_pattern}) 
```