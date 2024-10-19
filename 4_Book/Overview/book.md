---
dg-publish: true
dg-permalink: 4_Book/Overview/book
tags:
  - book
  - overview
---
# book Overview
```dataview
Table 
("![|100](" + cover + ")") as Cover,
rating as Rating⭐,
author as Author, 
category as Genre,
pages,
date
From ""
where contains(tags,"book") and !contains(tags, "author") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities/Templates")
sort date desc
```

