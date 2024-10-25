---
dg-permalink: 3_Learning/Database-Persistence
created-date: 2024-10-25 11:33:28 am
date: 2024-10-25
type: web-surfing
tags:
  - web-surfing
  - draft
aliases: 
img: 
---
```dataviewjs
let dgPublish = undefined;

let page = undefined;
let pages = undefined;
let file = undefined;

let webSurfingResult = dv.pages('"3_Learning"').where(p => p.file.name.contains("Database Persistence"));

if(webSurfingResult.length != 0) {
	pages = webSurfingResult.values;
	for(let p of pages){
		if(p.file.folder !== "3_Learning/Report/Web-Surfing"){
			file = this.app.vault.getAbstractFileByPath("3_Learning/Database Persistence.md");
			page = p;
		}
	}
	if(!page.tags.contains("draft")){
		dgPublish = true;
	}
}

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm["dg-publish"] = dgPublish;
});
```
# [[Database Persistence]]
## What is Data Persistence?
1. Data won't go away even if the program which created data ends
2. Data which doesn't have persistence will disappear, since it only exists in memory!

### Object Persistence
1. You can give persistence by saving data from your memory into relational database or object database!
2. Example
	1. JDBC (Java)
	2. Spring JDBC (JdbcTemplate)
	3. Persistence Framework (Hibernate, MyBatis)

### Persistence Layer
In the program architecture, (for example, controller - service - repository ...) if a layer gives data a persistence, then this is called Persistence Layer.
For example, you can use JDBC!
But nowadays people use Persistence Framework much more
### Persistence Framework (Not complicated like JDBC)
- SQL Mapper
- ORM





























### Web-Surfing References
##### Web-Surfing Report
[[3_Learning/Report/Web-Surfing/2024-10-25 - Database Persistence|2024-10-25 - Database Persistence Report]]
[[3_Learning/Report/Web-Surfing/Daily/2024-10-25 - Web-Surfing|2024-10-25 - Web-Surfing Daily Report]]
[[3_Learning/Report/Web-Surfing/Weekly/2024-W43 - Web-Surfing|2024-W43 - Web-Surfing Weekly Report]]

