---
dg-publish: true
dg-permalink: 3_Learning/Overview/youtube
tags:
  - youtube
  - overview
---
# Youtube Overview
```dataview
Table 
("![|100](" + img + ")") as Img,
date
From ""
where contains(tags,"youtube") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```


