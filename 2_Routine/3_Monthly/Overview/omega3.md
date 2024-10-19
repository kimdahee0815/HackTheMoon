---
dg-publish: true
dg-permalink: 2_Routine/3_Monthly/Overview/omega3
tags:
  - monthly
  - omega3
  - overview
---
# Omega3
```dataviewjs
let pages = dv.pages(`"2_Routine/1_Daily/Daily-Routine"`)
const year = moment().format("YYYY")
const month = moment().format("M")
const date_pattern = 'YYYY-MM-DD'
const habits = {
	'omega3': '💊'
}

let data = {}
let link = {}
for (let page of pages) {
	if(dv.date(page.file.name).c.month == month){
		let date = page.file.name;
		data[date] = data[date] || '';
		link[date] = link[date] || '';

		let omega3 = page.omega3;
	
		for (let habit in habits) {
			if(omega3){
			data[date] += habits[habit].replace('{omega3}', omega3) + '\n';
			}
			
			link[date] += 
			page.omega3Note.path;
		}
	}
}

let calendarData = []
for (let date in data) {
	calendarData.push({date: date, content: data[date], link: link[date]})
}
renderHabitCalendar(this.container, dv, {year, month, data: calendarData, date_pattern}) 
```

