---
dg-publish: true
dg-permalink: 6_People/Overview/people
tags:
  - people
  - overview
---
# People Overview
## Social
```dataview
Table 
img as Img,
date
From ""
where contains(tags, "people") and !contains(tags, "personal") and !contains(tags, "author") and !contains(tags, "author") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```
## Personal
```dataview
Table 
img as Img,
date
From ""
where contains(tags, "people") and contains(tags, "personal") and !contains(tags, "author") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

