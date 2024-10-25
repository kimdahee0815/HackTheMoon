---
dg-permalink: 8_Movie-&-Drama/Report/Movie-&-Drama/2024-10-25---The-Platform
created-date: 2024-10-25 3:11:51 pm
date: 2024-10-25
type: entertainment
tags:
  - movie
  - entertainment
  - drama
  - report
aliases: 
dg-publish: true
---
```dataviewjs
let dgPublish = undefined;
let tags = undefined;

let curPage = undefined;
let page = undefined;
let pages = undefined;
let file = undefined;

let movieResult = dv.pages('"8_Movie & Drama"').where(p => p.file.name.contains("The Platform"));

if(movieResult.length != 0) {
	pages = movieResult.values;
	for(let p of pages){
		if(p.file.folder === "8_Movie & Drama/Report/Movie & Drama"){
			file = this.app.vault.getAbstractFileByPath("8_Movie & Drama/Report/Movie & Drama/2024-10-25 - The Platform.md");
			curPage = p;
		}else{
			page = p;
		}
	}
	
	tags = [...page.tags]
	for(let t of curPage.tags){
		if(page.tags.indexOf(t) === -1){
			 tags = [...tags, t]
		}
	}
	if(!tags.contains("draft")){
		dgPublish = true;
	}
}

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm["dg-publish"] = dgPublish;
fm["tags"] = tags
});
```
## Movie/Drama Overview
[[8_Movie & Drama/Overview/movie|Movie Overview]]
[[8_Movie & Drama/Overview/drama|Drama Overview]]

## Movie/Drama Report
![[Utilities/Images/Pasted image 20241025151725.jpeg]]
![[Utilities/Images/Pasted image 20241025151737.jpeg]]

