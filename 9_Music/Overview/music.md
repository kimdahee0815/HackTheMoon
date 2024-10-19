---
dg-publish: true
dg-permalink: 9_Music/Overview/music
tags:
  - music
  - overview
---
# Music Overview
```dataview
Table
artists as Artists,
("![|100](" + cover-url + ")") as Cover,
album as Album,
rating as Rating⭐,
date
From ""
where contains(tags,"music") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

