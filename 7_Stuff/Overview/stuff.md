---
dg-publish: true
dg-permalink: 7_Stuff/Overview/stuff
tags:
  - stuff
  - overview
---
# Stuff Overview
```dataview
Table 
img as Img,
rating as Rating⭐,
date
From ""
where contains(tags,"stuff") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```


