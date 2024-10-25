---
dg-permalink: 8_Movie-&-Drama/Report/Movie-&-Drama/Weekly/2024-W43---Movie-&-Drama
created-date: 2024-10-25 2:42:43 pm
date: 2024-10-25
type: entertainment
tags:
  - movie
  - drama
  - weekly-report
aliases:
---
```dataviewjs
let dgPublish = undefined;

let page = undefined;
let pages = undefined;
let file = undefined;

let movieResult = dv.pages('"8_Movie & Drama"').where(p => p.file.name.contains("2024-W43 - Movie & Drama"));

if(movieResult.length != 0) {
	pages = movieResult.values;
	for(let p of pages){
		if(p.file.folder === "8_Movie & Drama/Report/Movie & Drama/Weekly"){
			file = this.app.vault.getAbstractFileByPath("8_Movie & Drama/Report/Movie & Drama/Weekly/2024-W43 - Movie & Drama.md");
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
## Movie 
#### This week
```dataview
TABLE
("![|100](" + poster + ")") as Cover,
rating as Rating⭐,
date
From ""
where contains(tags,"movie") and date >= 
date("2024-10-21") and date <= date("2024-10-27") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

## Drama
#### This week
```dataview
TABLE
("![|100](" + poster + ")") as Cover,
date
From ""
where contains(tags,"drama") and date >= 
date("2024-10-21") and date <= date("2024-10-27") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

