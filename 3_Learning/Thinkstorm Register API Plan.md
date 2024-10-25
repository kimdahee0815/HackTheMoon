---
dg-permalink: 3_Learning/Thinkstorm-Register-API-Plan
created-date: 2024-10-25 11:45:57 am
date: 2024-10-25
type: developing
tags:
  - developing
  - draft
aliases: 
courseName: 
---
```dataviewjs
let dgPublish = undefined;

let page = undefined;
let pages = undefined;
let file = undefined;

let developingResult = dv.pages('"3_Learning"').where(p => p.file.name.contains("Thinkstorm Register API Plan"));

if(developingResult.length != 0) {
	pages = developingResult.values;
	for(let p of pages){
		if(p.file.folder !== "3_Learning/Report/Developing"){
			file = this.app.vault.getAbstractFileByPath("3_Learning/Thinkstorm Register API Plan.md");
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
# [[Thinkstorm Register API Plan]]
>[!summary] User Story for Register process
1. Click Register button
2. Input email and password
	1. email validation check 
		1. not empty
		2. email format check
		3. not duplicated user
	2. password validation check
		1. not empty
		2. password format check
3. Onboarding process
	1. your name
	2. tell me about yourself
	3. what are you looking for?
4. Automatic Sign up


>[!question] How to apply Register function in Thinkstorm?
1. User Controller & Service createUser related functions move to Auth Controller & Service
2. Authentication add to Register in Controller
3. Solve dependency errors!

>[!bug] How to solve dependency problem in Nest.js?
1. Need to understand [[How Nest.js Modules work]] exactly!
2. check each modules and add, delete dependencies

>[!bug] How to solve data insertion problem in DB when I do e2e testing? When 'data reset' doesn't work in DB
1. Use Docker for another Test DB
2. Use Test Helper
3. Use SQLLite (In-Memory DB)
4. [[How to write Nest.js e2e Test]]

>[!question] How to solve real data insertion problem in DB when I do unit testing?
1. Understand [[How Nest.js Mocking works]]
2. [[How to write Nest.js Unit Test]]


























### Developing References
##### Developing Report
[[3_Learning/Report/Developing/2024-10-25 - Thinkstorm Register API Plan|2024-10-25 - Thinkstorm Register API Plan Report]]
[[3_Learning/Report/Developing/Daily/2024-10-25 - Developing|2024-10-25 - Developing Daily Report]]
[[3_Learning/Report/Developing/Weekly/2024-W43 - Developing|2024-W43 - Developing Weekly Report]]


