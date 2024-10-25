---
dg-permalink: 3_Learning/Docker
created-date: 2024-10-25 11:34:54 am
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

let webSurfingResult = dv.pages('"3_Learning"').where(p => p.file.name.contains("Docker"));

if(webSurfingResult.length != 0) {
	pages = webSurfingResult.values;
	for(let p of pages){
		if(p.file.folder !== "3_Learning/Report/Web-Surfing"){
			file = this.app.vault.getAbstractFileByPath("3_Learning/Docker.md");
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
# [[Docker]]
### What is Docker?

### What is DockerFile?
사용자가 이미지를 어셈블하기 위해 호출할 수 있는 명령이 포함된 간단한 텍스트 파일
### What is Docker Compose?
다중 컨테이너 Docker 애플리케이션을 정의하고 실행하기 위한 도구
- docker-compose 에 build 명령을 추가하면 Docker Compose는 DockerFile을 이용한다
























### Web-Surfing References
##### Web-Surfing Report
[[3_Learning/Report/Web-Surfing/2024-10-25 - docker|2024-10-25 - Docker Report]]
[[3_Learning/Report/Web-Surfing/Daily/2024-10-25 - Web-Surfing|2024-10-25 - Web-Surfing Daily Report]]
[[3_Learning/Report/Web-Surfing/Weekly/2024-W43 - Web-Surfing|2024-W43 - Web-Surfing Weekly Report]]

