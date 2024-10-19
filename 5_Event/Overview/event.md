---
dg-publish: true
dg-permalink: 5_Event/Overview/event
tags:
  - event
  - overview
---
# Event Overview
```dataview
Table 
img as Img,
rating as Rating⭐,
date
From ""
where contains(tags,"event") and !contains(tags, "meeting") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

