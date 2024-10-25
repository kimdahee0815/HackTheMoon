---
dg-permalink: 8_Movie-&-Drama/Report/Movie-&-Drama/Daily/2024-10-25---Movie-&-Drama
created-date: 2024-10-25 2:40:37 pm
date: 2024-10-25
type: entertainment
tags:
  - movie
  - drama
  - daily-report
aliases:
---
```dataviewjs
let dgPublish = undefined;

let page = undefined;
let pages = undefined;
let file = undefined;

let movieResult = dv.pages('"8_Movie & Drama"').where(p => p.file.name.contains("2024-10-25 - Movie & Drama"));

if(movieResult.length != 0) {
	pages = movieResult.values;
	for(let p of pages){
		if(p.file.folder === "8_Movie & Drama/Report/Movie & Drama/Daily"){
			file = this.app.vault.getAbstractFileByPath("8_Movie & Drama/Report/Movie & Drama/Daily/2024-10-25 - Movie & Drama.md");
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
#### Today
```dataview
TABLE
("![|100](" + poster + ")") as Cover,
rating as Rating⭐,
date
From ""
where contains(tags,"movie") and date = date("2024-10-25") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

## Drama
#### Today
```dataview
TABLE
("![|100](" + poster + ")") as Cover,
date
From ""
where contains(tags,"drama") and date = date("2024-10-25") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

