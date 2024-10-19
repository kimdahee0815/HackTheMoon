---
dg-publish: true
dg-permalink: 8_Movie-&-Drama/Overview/drama
tags:
  - drama
  - overview
---
# Drama Overview
```dataview
Table 
("![|100](" + poster + ")") as Poster,
rating as Rating⭐,
length as EpisodeLength,
genre as Genre,
scoreImdb as Imdb⭐,
date
From ""
where contains(tags,"drama") and !contains(tags, "shadowing") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```
