---
dg-publish: true
dg-permalink: 3_Learning/Overview/web-surfing
tags:
  - web-surfing
  - overview
---
# Web-Surfing Overview
```dataview
Table 
img as Img,
date
From ""
where contains(tags,"web-surfing") and !contains(tags, "stuff") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```
