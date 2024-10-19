---
dg-publish: true
dg-permalink: 6_People/Overview/author
tags:
  - people
  - author
  - overview
---
# Author Overview
 ```dataview
Table 
img as Img,
date
From ""
where contains(tags, "author") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```


