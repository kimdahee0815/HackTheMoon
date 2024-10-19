---
dg-publish: true
dg-permalink: 2_Routine/3_Monthly/Overview/cleaningHouse
tags:
  - monthly
  - cleaningHouse
  - overview
---
# Morning Cleaning House
```dataviewjs
let pages = dv.pages(`"2_Routine/1_Daily/Daily-Routine"`)
const year = moment().format("YYYY")
const month = moment().format("M")
const date_pattern = 'YYYY-MM-DD'
const habits = {
	'morningCleaningHouse': '🧹'
}

let data = {}
let link = {}
for (let page of pages) {
	if(dv.date(page.file.name).c.month == month){
		let date = page.file.name;
		data[date] = data[date] || '';
		link[date] = link[date] || '';

		let morningCleaningHouse = page.morningCleaningHouse;
	
		for (let habit in habits) {
			if(morningCleaningHouse){
			data[date] += habits[habit].replace('{morningCleaningHouse}', morningCleaningHouse) + '\n';
			}

			link[date] += 
			page.morningCleaningHouseNote.path;
		}
	}
}

let calendarData = []
for (let date in data) {
	calendarData.push({date: date, content: data[date], link: link[date]})
}
renderHabitCalendar(this.container, dv, {year, month, data: calendarData, date_pattern}) 
```


# Evening Cleaning House
```dataviewjs
let pages = dv.pages(`"2_Routine/1_Daily/Daily-Routine"`)
const year = moment().format("YYYY")
const month = moment().format("M")
const date_pattern = 'YYYY-MM-DD'
const habits = {
	'eveningCleaningHouse': '🧹'
}

let data = {}
let link = {}
for (let page of pages) {
	if(dv.date(page.file.name).c.month == month){
		let date = page.file.name;
		data[date] = data[date] || '';
		link[date] = link[date] || '';

		let eveningCleaningHouse = page.eveningCleaningHouse;
	
		for (let habit in habits) {
			if(eveningCleaningHouse){
			data[date] += habits[habit].replace('{eveningCleaningHouse}', eveningCleaningHouse) + '\n';
			}
			
			link[date] += 
			page.eveningCleaningHouseNote.path;
		}
	}
}

let calendarData = []
for (let date in data) {
	calendarData.push({date: date, content: data[date], link: link[date]})
}
renderHabitCalendar(this.container, dv, {year, month, data: calendarData, date_pattern}) 
```