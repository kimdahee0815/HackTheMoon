---
dg-permalink: 9_Music/The-Way
created-date: 2024-10-25 4:28:19 pm
date: 2024-10-25
type: entertainment
tags:
  - music
aliases: 
title: The Way
music-url: https://open.spotify.com/track/0S4RKPbRDA72tvKwVdXQqe
album: Yours Truly
album-release-date: 2013-01-01
album-url: https://open.spotify.com/album/6czdbbMtGbAkZ6ud2OMTcg
cover: "![Yours Truly](https://i.scdn.co/image/ab67616d00001e02ea28881e9e363244a4a2347b)"
cover-url: https://i.scdn.co/image/ab67616d00001e02ea28881e9e363244a4a2347b
artists: Ariana Grande, Mac Miller
added-at: Fri Oct 25 2024 - 오후 4:28:27
rating: ⭐⭐⭐⭐⭐⭐⭐
dg-publish: true
---
# [[The Way]]
![](https://i.scdn.co/image/ab67616d00001e02ea28881e9e363244a4a2347b)

```dataviewjs
let page = undefined;
let pages = undefined;
let file = undefined;

let musicResult = dv.pages('"9_Music"').where(p => p.file.name.contains("The Way"));

if(musicResult.length != 0) {
	pages = musicResult.values;
	for(let p of pages){
		if(p.file.folder !== "9_Music/Report"){
			file = this.app.vault.getAbstractFileByPath("9_Music/The Way.md");
			page = p;
		}
	}
}

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm["title"] = "The Way";
fm["music-url"] = "https://open.spotify.com/track/0S4RKPbRDA72tvKwVdXQqe";
fm["album"] = "Yours Truly";
fm["album-release-date"] = "2013-01-01";
fm["album-url"] = "https://open.spotify.com/album/6czdbbMtGbAkZ6ud2OMTcg";
fm["cover"] = "![Yours Truly](https://i.scdn.co/image/ab67616d00001e02ea28881e9e363244a4a2347b)";
fm["cover-url"] = "https://i.scdn.co/image/ab67616d00001e02ea28881e9e363244a4a2347b"
fm["artists"] = "Ariana Grande, Mac Miller"
fm["added-at"] = "Fri Oct 25 2024 - 오후 4:28:27"
});
```
```dataviewjs
let musicUrl = "https://open.spotify.com/track/0S4RKPbRDA72tvKwVdXQqe";
let musicId = musicUrl.slice(musicUrl.lastIndexOf("/")+1);  

await dv.el("div", "", { cls: "container-root" });
const container = document.querySelectorAll('.container-root')[0];
container.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${musicId}?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
await dv.el("div", container);		
```

```dataviewjs
let dgPublish = undefined;

let page = undefined;
let pages = undefined;
let file = undefined;

let musicResult = dv.pages('"9_Music"').where(p => p.file.name.contains("The Way"));

if(musicResult.length != 0) {
	pages = musicResult.values;
	for(let p of pages){
		if(p.file.folder !== "9_Music/Report"){
			file = this.app.vault.getAbstractFileByPath("9_Music/The Way.md");
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


### Music References
##### Music Report
[[9_Music/Report/2024-10-25 - The Way|2024-10-25 - The Way Report]]
[[9_Music/Report/Daily/2024-10-25 - Music|2024-10-25 - Music Daily Report]]
[[9_Music/Report/Weekly/2024-W43 - Music|2024-W43 - Music Weekly Report]]





