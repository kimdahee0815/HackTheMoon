---
dg-permalink: 3_Learning/Report/Web-Surfing/Daily/2024-10-25---Web-Surfing
created-date: 2024-10-25 11:32:51 am
date: 2024-10-25
type: web-surfing
tags:
  - web-surfing
  - daily-report
  - draft
aliases: 
---
```dataviewjs
let dgPublish = undefined;

let page = undefined;
let pages = undefined;
let file = undefined;

let webSurfingResult = dv.pages('"3_Learning"').where(p => p.file.name.contains("2024-10-25 - Web-Surfing"));

if(webSurfingResult.length != 0) {
	pages = webSurfingResult.values;
	for(let p of pages){
		if(p.file.folder === "3_Learning/Report/Web-Surfing/Daily"){
			file = this.app.vault.getAbstractFileByPath("3_Learning/Report/Web-Surfing/Daily/2024-10-25 - Web-Surfing.md");
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
## Today
```dataview
TABLE
img as Img,
date
From ""
where contains(tags,"web-surfing") and date = date("2024-10-25") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

