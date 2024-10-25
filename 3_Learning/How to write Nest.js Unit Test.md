---
dg-permalink: 3_Learning/How-to-write-Nest.js-Unit-Test
created-date: 2024-10-25 11:40:06 am
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

let webSurfingResult = dv.pages('"3_Learning"').where(p => p.file.name.contains("How to write Nest.js Unit Test"));

if(webSurfingResult.length != 0) {
	pages = webSurfingResult.values;
	for(let p of pages){
		if(p.file.folder !== "3_Learning/Report/Web-Surfing"){
			file = this.app.vault.getAbstractFileByPath("3_Learning/How to write Nest.js Unit Test.md");
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
# [[How to write Nest.js Unit Test]]
1. Controller/Service : 
	1. https://jhyeok.com/nestjs-unit-test/
	2. https://velog.io/@kisuk623/Jest%EC%99%80-Mocking%EC%9D%84-%ED%86%B5%ED%95%9C-Unit-Test
	3. Easy method! : https://medium.com/@sevicdev/testing-custom-repositories-nestjs-typeorm-3b20d4448db0
2. Repository : Using [[Nest.js TypeORM]] 
	1. https://velog.io/@lsjbh45/Nest.jsTypeORM-Repository%EC%9D%98-%EC%9D%BC%EB%B6%80%EB%A7%8C%EC%9D%84-mocking%ED%95%B4-Custom-Repository%EC%9D%98-method%EB%93%A4-test%ED%95%98%EA%B8%B0


























### Web-Surfing References
##### Web-Surfing Report
[[3_Learning/Report/Web-Surfing/2024-10-25 - How to write Nest.js Unit Test|2024-10-25 - How to write Nest.js Unit Test Report]]
[[3_Learning/Report/Web-Surfing/Daily/2024-10-25 - Web-Surfing|2024-10-25 - Web-Surfing Daily Report]]
[[3_Learning/Report/Web-Surfing/Weekly/2024-W43 - Web-Surfing|2024-W43 - Web-Surfing Weekly Report]]

