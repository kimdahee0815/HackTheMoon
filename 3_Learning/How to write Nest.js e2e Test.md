---
dg-permalink: 3_Learning/How-to-write-Nest.js-e2e-Test
created-date: 2024-10-25 11:39:32 am
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

let webSurfingResult = dv.pages('"3_Learning"').where(p => p.file.name.contains("How to write Nest.js e2e Test"));

if(webSurfingResult.length != 0) {
	pages = webSurfingResult.values;
	for(let p of pages){
		if(p.file.folder !== "3_Learning/Report/Web-Surfing"){
			file = this.app.vault.getAbstractFileByPath("3_Learning/How to write Nest.js e2e Test.md");
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
# [[How to write Nest.js e2e Test]]
https://puleugo.tistory.com/114

Mysql e2e test environment setup using Docker Container and prisma
https://iot624.tistory.com/200

docker
[[Docker]]
























### Web-Surfing References
##### Web-Surfing Report
[[3_Learning/Report/Web-Surfing/2024-10-25 - How to write Nest.js e2e Test|2024-10-25 - How to write Nest.js e2e Test Report]]
[[3_Learning/Report/Web-Surfing/Daily/2024-10-25 - Web-Surfing|2024-10-25 - Web-Surfing Daily Report]]
[[3_Learning/Report/Web-Surfing/Weekly/2024-W43 - Web-Surfing|2024-W43 - Web-Surfing Weekly Report]]

