---
dg-publish: true
dg-permalink: 2_Routine/3_Monthly/Overview/coffee
tags:
  - monthly
  - coffee
  - overview
---
# Coffee
```dataviewjs
let pages = dv.pages(`"2_Routine/1_Daily/Daily-Routine"`)
const year = moment().format("YYYY")
const month = moment().format("M")
const date_pattern = 'YYYY-MM-DD'
const habits = {
	'coffee': '☕'
}

let data = {}
let link = {}
for (let page of pages) {
	if(dv.date(page.file.name).c.month == month){
		let date = page.file.name;
		data[date] = data[date] || '';
		link[date] = link[date] || '';

		let coffee = page.coffee;
	
		for (let habit in habits) {
			if(coffee){
			data[date] += habits[habit].replace('{coffee}', coffee) + '\n';
			}
			
			link[date] += 
			page.coffeeNote.path;
		}
	}
}

let calendarData = []
for (let date in data) {
	calendarData.push({date: date, content: data[date], link: link[date]})
}
renderHabitCalendar(this.container, dv, {year, month, data: calendarData, date_pattern}) 
```
