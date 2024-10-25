---
dg-permalink: 3_Learning/TypeORM
created-date: 2024-10-25 11:43:25 am
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

let webSurfingResult = dv.pages('"3_Learning"').where(p => p.file.name.contains("TypeORM"));

if(webSurfingResult.length != 0) {
	pages = webSurfingResult.values;
	for(let p of pages){
		if(p.file.folder !== "3_Learning/Report/Web-Surfing"){
			file = this.app.vault.getAbstractFileByPath("3_Learning/TypeORM.md");
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
# [[TypeORM]]
## How to apply TypeORM
### Active Record Pattern
Access DB from Model
1. Create object as a class
2. define methods inside that class
### Data Mapper Pattern
Access DB from Repository
1. Create Repository layer
2. define methods inside that repository



https://velog.io/@___pepper/Nest.js-TypeORM-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

TypeORM Entity setting for many to one, one to many
https://medium.com/crocusenergy/nestjs-typeorm-relation-transactions-bcf5c1fb9942

TypeORM Enum Type
https://velog.io/@julia/TypeORM-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%97%B0%EA%B2%B0%EA%B3%BC-%EB%AA%A8%EB%8D%B8%EB%A7%81-Enum-%ED%83%80%EC%9E%85-%EC%BB%AC%EB%9F%BC-%EB%8C%80%EC%9D%91%ED%95%98%EA%B8%B0

TypeORM Entity setting for ManyToMany 
https://velog.io/@from_numpy/%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0-%EC%88%98%EC%A0%95%EC%9D%84-%ED%86%B5%ED%95%9C-ManyToMany-%EA%B4%80%EA%B3%84-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0-feat.-NestJS-Typeorm
























### Web-Surfing References
##### Web-Surfing Report
[[3_Learning/Report/Web-Surfing/2024-10-25 - TypeORM|2024-10-25 - TypeORM Report]]
[[3_Learning/Report/Web-Surfing/Daily/2024-10-25 - Web-Surfing|2024-10-25 - Web-Surfing Daily Report]]
[[3_Learning/Report/Web-Surfing/Weekly/2024-W43 - Web-Surfing|2024-W43 - Web-Surfing Weekly Report]]

