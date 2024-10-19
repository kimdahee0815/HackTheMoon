---
dg-publish: true
dg-permalink: 8_Movie-&-Drama/Overview/movie
tags:
  - movie
  - overview
---
# Movie Overview
```dataview
Table 
("![|100](" + poster + ")") as Poster,
rating as Rating⭐,
length as Length,
genre as Genre,
scoreImdb as Imdb⭐,
date
From ""
where contains(tags,"movie") and !contains(tags, "shadowing") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

