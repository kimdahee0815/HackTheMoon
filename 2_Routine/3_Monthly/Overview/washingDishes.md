---
dg-publish: true
dg-permalink: 2_Routine/3_Monthly/Overview/washingDishes
tags:
  - monthly
  - washingDishes
  - overview
---
# Morning Washing Dishes
```dataviewjs
let pages = dv.pages(`"2_Routine/1_Daily/Daily-Routine"`)
const year = moment().format("YYYY")
const month = moment().format("M")
const date_pattern = 'YYYY-MM-DD'
const habits = {
	'morningWashingDishes': '🧽'
}

let data = {}
let link = {}
for (let page of pages) {
	if(dv.date(page.file.name).c.month == month){
		let date = page.file.name;
		data[date] = data[date] || '';
		link[date] = link[date] || '';

		let morningWashingDishes = page.morningWashingDishes;
	
		for (let habit in habits) {
			if(morningWashingDishes){
			data[date] += habits[habit].replace('{morningWashingDishes}', morningWashingDishes) + '\n';
			}
			
			link[date] += 
			page.morningWashingDishesNote.path;
		}
	}
}

let calendarData = []
for (let date in data) {
	calendarData.push({date: date, content: data[date], link: link[date]})
}
renderHabitCalendar(this.container, dv, {year, month, data: calendarData, date_pattern}) 
```

# Afternoon Washing Dishes
```dataviewjs
let pages = dv.pages(`"2_Routine/1_Daily/Daily-Routine"`)
const year = moment().format("YYYY")
const month = moment().format("M")
const date_pattern = 'YYYY-MM-DD'
const habits = {
	'afternoonWashingDishes': '🧽'
}

let data = {}
let link = {}
for (let page of pages) {
	if(dv.date(page.file.name).c.month == month){
		let date = page.file.name;
		data[date] = data[date] || '';
		link[date] = link[date] || '';

		let afternoonWashingDishes = page.afternoonWashingDishes;
	
		for (let habit in habits) {
			if(afternoonWashingDishes){
			data[date] += habits[habit].replace('{afternoonWashingDishes}', afternoonWashingDishes) + '\n';
			}
			
			link[date] += 
			page.afternoonWashingDishesNote.path;
		}
	}
}

let calendarData = []
for (let date in data) {
	calendarData.push({date: date, content: data[date], link: link[date]})
}
renderHabitCalendar(this.container, dv, {year, month, data: calendarData, date_pattern}) 
```

# Evening Washing Dishes
```dataviewjs
let pages = dv.pages(`"2_Routine/1_Daily/Daily-Routine"`)
const year = moment().format("YYYY")
const month = moment().format("M")
const date_pattern = 'YYYY-MM-DD'
const habits = {
	'eveningWashingDishes': '🧽'
}

let data = {}
let link = {}
for (let page of pages) {
	if(dv.date(page.file.name).c.month == month){
		let date = page.file.name;
		data[date] = data[date] || '';
		link[date] = link[date] || '';

		let eveningWashingDishes = page.eveningWashingDishes;
	
		for (let habit in habits) {
			if(eveningWashingDishes){
			data[date] += habits[habit].replace('{eveningWashingDishes}', eveningWashingDishes) + '\n';
			}
			
			link[date] += 
			page.eveningWashingDishesNote.path;
		}
	}
}

let calendarData = []
for (let date in data) {
	calendarData.push({date: date, content: data[date], link: link[date]})
}
renderHabitCalendar(this.container, dv, {year, month, data: calendarData, date_pattern}) 
```