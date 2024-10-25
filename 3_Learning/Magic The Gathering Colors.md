---
dg-permalink: 3_Learning/Magic-The-Gathering-Colors
created-date: 2024-10-25 11:40:30 am
date: 2024-10-25
type: web-surfing
tags:
  - web-surfing
aliases: 
img: "![[Utilities/Images/Pasted image 20241024091610.jpeg|100]]"
dg-publish: true
---
```dataviewjs
let dgPublish = undefined;

let page = undefined;
let pages = undefined;
let file = undefined;

let webSurfingResult = dv.pages('"3_Learning"').where(p => p.file.name.contains("Magic The Gathering Colors"));

if(webSurfingResult.length != 0) {
	pages = webSurfingResult.values;
	for(let p of pages){
		if(p.file.folder !== "3_Learning/Report/Web-Surfing"){
			file = this.app.vault.getAbstractFileByPath("3_Learning/Magic The Gathering Colors.md");
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
# [[Magic The Gathering Colors]]
![[Utilities/Images/Pasted image 20241024091610.jpeg]]

white:: Peace, law, structure, selflessness, equality
blue:: knowledge, deception, caution, deliberation, perfection
black:: power, self-interest, death, sacrifice, disinhibition
red:: freedom, emotion, action, impulse, destruction
green:: nature, wildlife, connection, spirituality, tradition






















### Web-Surfing References
##### Web-Surfing Report
[[3_Learning/Report/Web-Surfing/2024-10-25 - Magic The Gathering Colors|2024-10-25 - Magic The Gathering Colors Report]]
[[3_Learning/Report/Web-Surfing/Daily/2024-10-25 - Web-Surfing|2024-10-25 - Web-Surfing Daily Report]]
[[3_Learning/Report/Web-Surfing/Weekly/2024-W43 - Web-Surfing|2024-W43 - Web-Surfing Weekly Report]]

