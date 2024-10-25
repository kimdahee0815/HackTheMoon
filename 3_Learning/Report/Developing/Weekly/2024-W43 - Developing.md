---
dg-permalink: 3_Learning/Report/Developing/Weekly/2024-W43---Developing
created-date: 2024-10-25 11:46:21 am
date: 2024-10-25
type: developing
tags:
  - developing
  - weekly-report
  - draft
aliases: 
---
```dataviewjs
let dgPublish = undefined;

let page = undefined;
let pages = undefined;
let file = undefined;

let developingResult = dv.pages('"3_Learning"').where(p => p.file.name.contains("2024-W43 - Developing"));

if(developingResult.length != 0) {
	pages = developingResult.values;
	for(let p of pages){
		if(p.file.folder === "3_Learning/Report/Developing/Weekly"){
			file = this.app.vault.getAbstractFileByPath("3_Learning/Report/Developing/Weekly/2024-W43 - Developing.md");
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
## This week
```dataview
TABLE
date
From ""
where contains(tags,"developing") and date >= 
date("2024-10-21") and date <= date("2024-10-27") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

