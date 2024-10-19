---
tags:
  - monthly
  - weight
  - overview
---
# Weight
```dataviewjs
let pages = dv.pages(`"2_Routine/1_Daily/Daily-Routine"`)
const year = moment().format("YYYY")
const month = moment().format("M")
const date_pattern = 'YYYY-MM-DD'
const habits = {
	'weight': '🕛 {weight} kg'
}

let data = {}
let link = {}
for (let page of pages) {
	if(dv.date(page.file.name).c.month == month){
		let date = page.file.name;
		data[date] = data[date] || '';
		link[date] = link[date] || '';

		let weight = 0
		if(page.weight){
			weight = page.weight;
		}
	
		for (let habit in habits) {
			data[date] += habits[habit].replace('{weight}', weight) + '\n';
			link[date] += 
			page.weightNote.path;
		}
	}
}

let calendarData = []
for (let date in data) {
	calendarData.push({date: date, content: data[date], link: link[date]})
}
renderHabitCalendar(this.container, dv, {year, month, data: calendarData, date_pattern}) 
```