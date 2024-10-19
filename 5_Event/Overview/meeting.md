---
dg-publish: true
dg-permalink: 5_Event/Overview/meeting
tags:
  - event
  - meeting
  - overview
---
# Meeting Overview
```dataview
Table 
summary as Summary,
img as Img,
rating as Rating⭐,
date
From ""
where contains(tags,"meeting") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

