---
dg-permalink: 3_Learning/How-Nest.js-Modules-work
created-date: 2024-10-25 11:37:26 am
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

let webSurfingResult = dv.pages('"3_Learning"').where(p => p.file.name.contains("How Nest.js Modules work"));

if(webSurfingResult.length != 0) {
	pages = webSurfingResult.values;
	for(let p of pages){
		if(p.file.folder !== "3_Learning/Report/Web-Surfing"){
			file = this.app.vault.getAbstractFileByPath("3_Learning/How Nest.js Modules work.md");
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
# [[How Nest.js Modules work]]
>[!important-star] Basic Structure of Nest.js Modules

``` title:Nest.js-how-it-works
@Module(
{ 
	imports: [StudyModule], 
	controllers: [SubController, AppController, StudyController], 
	providers: [AppService, StudyService, ChildService, TestServiceA],
	exports: [] 
})
export class AppModule {}
```

import : only import **module** (from another module), you can use exported providers in that module
export : export **providers** that you want to use in another module
controllers : controllers from the module
providers: providers (that has @Injectable decorator) from the module. 

>[!caution] What if you write module itself into providers?
>This will cause Circular Dependency Problem!
>**Don't put moudle inside providers**

>[!tip] How to use global module?
1. Use @Global Module decorator on top of module
2. you need to export providers you want to use even if this is a global module
3. you need to put your global module into root module
4. But, You don't have to import any module since this is a global module!
























### Web-Surfing References
https://tristy.tistory.com/43
##### Web-Surfing Report
[[3_Learning/Report/Web-Surfing/2024-10-25 - How Nest.js Modules work|2024-10-25 - How Nest.js Modules work Report]]
[[3_Learning/Report/Web-Surfing/Daily/2024-10-25 - Web-Surfing|2024-10-25 - Web-Surfing Daily Report]]
[[3_Learning/Report/Web-Surfing/Weekly/2024-W43 - Web-Surfing|2024-W43 - Web-Surfing Weekly Report]]

