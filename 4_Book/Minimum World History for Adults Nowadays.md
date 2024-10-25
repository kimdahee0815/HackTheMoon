---
dg-permalink: 4_Book/요즘-어른을-위한-최소한의-세계사
created-date: 2024-10-24 8:47:06 am
date: 2024-10-24
type: book
tags:
  - book
  - draft
aliases: 
category: History
title: 요즘 어른을 위한 최소한의 세계사
author: 임소미
publisher: Big Fish
publishDate: 2023-09-22
pages: "348"
cover: http://books.google.com/books/content?id=tdhT0AEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
rating: 
status: <progress max=100 value=0> </progress> 0%
---
```dataviewjs
let dgPublish = undefined;

let page = undefined;
let pages = undefined;
let file = undefined;

let bookResult = dv.pages('"4_Book"').where(p => p.file.name.contains("Minimum World History for Adults Nowadays"));

if(bookResult.length != 0) {
	pages = bookResult.values;
	for(let p of pages){
		if(p.file.folder !== "4_Book/Report"){
			file = this.app.vault.getAbstractFileByPath("4_Book/Minimum World History for Adults Nowadays.md");
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
# [[Minimum World History for Adults Nowadays]]
## Cover
![cover](http://books.google.com/books/content?id=tdhT0AEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api)
## Reading Logs 
### 제 1차 세계대전
- 참호[^1]전
- 4년동안 전사자 1000만명에 이른 대규모 전쟁

#### 1차 세계대전의 발발
- 표면 : 1914.06.28 오스트리아 황태자 부부가 사라예보에서 암살된 사건
- 유럽의 정세 및 실상 : 
	- 19세기 유럽의 키워드 : 산업혁명, 제국주의, 민족주의
	- 중부유럽을 차지했던 신성로마제국이 나폴레옹에 의해 해체되면서, 이 나라들이 민족주의 정신하에 독일연방[^2]으로 다시 묶임
	- 프로이센의 [[Otto Eduard Leopold Fürst von Bismarck-Schönhausen|오토 폰 비스마르크]] 수상의 외교정책이 무산되고 ==빌헬름 2세==가 세계 최강 대영제국에 맞서는 독일제국을 만들자고 주장 => **영국과의 사이가 급격히 나빠짐**
	- 독일제국이 눈치를 보지 않아도 된다고 생각 => **러시아와 손절**
	- 1892 러-불동맹 : 독일의 폭주를 어이 없다고 생각하여 러시아와 프랑스가 손을 잡음
	- 1902 영국-일본 동맹 : 동아시아로 남하정책을 펼치는 러시아 견제를 위해 '명예로운 고립'에서 벗어남
	- 1904 영-불 협상 : 공동의 적 독일을 막기 위해 오랜 원수였던 프랑스와 손을 잡음
	- 1907 삼국협상 : 결국 나중에는 영국, 프랑스, 러시아 3개국이 협상을 맺음
	- ![[World War 1 - 2024-10-25]]
- 발칸반도 상황 :
	- 발칸반도에 위치한 세르비아(슬라브족)와 보스니아가 민족주의를 주장하며 서로 통일하고 싶어함
	- 1908 오스트리아(게르만족)가 보스니아를 식민지로 만듦 => **세르비아의 분노**
	- **1914 보스니아에서 오스트리아 황태자부부를 세르비아계 청년인 가브릴로 프린치프가 암살**
	-  **오스트리아가 동맹국 독일에 지원 요청 약속** => 1914.07.28 오스트리아가 세르비아에 전쟁 선포
	- **러시아도 세르비아를 보호하겠다며 총동원령, 독일과 프랑스도 마찬가지**













## My Summary















## Memorable Quotes










## Main Takeaway












### Book References
##### Book Report
[[4_Book/Report/2024-10-25 - Minimum World History for Adults Nowadays|2024-10-25 - Minimum World History for Adults Nowadays Report]]
[[4_Book/Report/Daily/2024-10-25 - Book|2024-10-25 - Book Daily Report]]
[[4_Book/Report/Weekly/2024-W43 - Book|2024-W43 - Book Weekly Report]]

[^1]: 참호: 수천킬로 미터 이상 파놓은 길
[^2]: 독일연방 : 오스트리아 헝가리 제국, 프로이센(독일), 이탈리아

