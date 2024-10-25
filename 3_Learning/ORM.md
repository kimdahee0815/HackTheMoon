---
dg-permalink: 3_Learning/ORM
created-date: 2024-10-25 11:42:33 am
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

let webSurfingResult = dv.pages('"3_Learning"').where(p => p.file.name.contains("ORM"));

if(webSurfingResult.length != 0) {
	pages = webSurfingResult.values;
	for(let p of pages){
		if(p.file.folder !== "3_Learning/Report/Web-Surfing"){
			file = this.app.vault.getAbstractFileByPath("3_Learning/ORM.md");
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
# [[ORM]]
## What is ORM?
Object-Relational Mapping
Automatic mapping data between **object** and **relational database**
## Is there a reason to use ORM?
1.	Object-Oriented programming uses ==class==
2.	Relational database uses ==table==
3.	You can't just put data from your class into table! Since they have different structure 🙄
4.	So here comes ORM 😀
5.	Using ORM makes it easy to create SQL automatically and put data into table
6.	you can deal with database data through object while you are coding (meaning.. you don't have to log in to your database and insert data!)

## ORM's another name
Persistant API 
	1. [[Database Persistence]]
























### Web-Surfing References
##### Web-Surfing Report
[[3_Learning/Report/Web-Surfing/2024-10-25 - ORM|2024-10-25 - ORM Report]]
[[3_Learning/Report/Web-Surfing/Daily/2024-10-25 - Web-Surfing|2024-10-25 - Web-Surfing Daily Report]]
[[3_Learning/Report/Web-Surfing/Weekly/2024-W43 - Web-Surfing|2024-W43 - Web-Surfing Weekly Report]]

