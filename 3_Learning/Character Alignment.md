---
dg-permalink: 3_Learning/Character-Alignment
created-date: 2024-10-25 11:30:17 am
date: 2024-10-25
type: web-surfing
tags:
  - web-surfing
aliases: 
img: "![[Utilities/Images/Pasted image 20241024091955.jpeg|100]]"
dg-publish: true
---
```dataviewjs
let dgPublish = undefined;

let page = undefined;
let pages = undefined;
let file = undefined;

let webSurfingResult = dv.pages('"3_Learning"').where(p => p.file.name.contains("Character Alignment"));

if(webSurfingResult.length != 0) {
	pages = webSurfingResult.values;
	for(let p of pages){
		if(p.file.folder !== "3_Learning/Report/Web-Surfing"){
			file = this.app.vault.getAbstractFileByPath("3_Learning/Character Alignment.md");
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
# [[Character Alignment]]
![[Utilities/Images/Pasted image 20241024091955.jpeg]]
























### Web-Surfing References
##### Web-Surfing Report
[[3_Learning/Report/Web-Surfing/2024-10-25 - Character Alignment|2024-10-25 - Character Alignment Report]]
[[3_Learning/Report/Web-Surfing/Daily/2024-10-25 - Web-Surfing|2024-10-25 - Web-Surfing Daily Report]]
[[3_Learning/Report/Web-Surfing/Weekly/2024-W43 - Web-Surfing|2024-W43 - Web-Surfing Weekly Report]]

