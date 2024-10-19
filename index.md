---
dg-publish: true
dg-home: true
dg-permalink: index
title: Hack The Moon
cssclasses:
  - dashboard
dg-content-classes: dashboard
---

# Projects

💼 Career

```dataview
	LIST
	FROM "1_Project"
	WHERE contains(tags, "work") 
	SORT date DESC
```

🧭 Life Explorer

```dataview
	LIST
	FROM "1_Project"
	WHERE contains(tags, "life")
	SORT date DESC
```

# Everyday Self-Development

💻 Developing

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "developing") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

📖 Books

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "book") and !contains(tags, "author") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

🎧 English

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "english") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

# Resource Notes

👩🏻‍🏫 Classes

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "class") and !contains(tags, "developing") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

💼 Work

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "work") and !contains(tags, "meeting") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

🤝 Meeting

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "meeting") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

✒️ Author

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "author") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

🧸 Stuff

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "stuff") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

🖥️ Web-Surfing

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "web-surfing") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

🧑‍🤝‍🧑People

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "people") and !contains(tags, "author") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

# Event Notes

💃 meTime

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "me-time") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

🙂 friends

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "friends") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

😍 dates

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "dates") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

👨‍👩‍👧‍👦 Family

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "family") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

🌅 Exotic Vacations

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "vacation") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

# Entertainment

🎞️ Movies/Dramas Watched

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "movie") or contains(tags, "drama") and !contains(tags, "to-watch") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

🎥 Movies/Dramas to Watch

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "to-watch") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

🎶 Music

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "music") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

▶️ Youtube

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "youtube") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")
	SORT date DESC
	LIMIT 10
```

# Vault Info

🗄️ Recent file updates

```dataview
	LIST
	from ""
	SORT file.mtime DESC
	LIMIT 10
```

🔖 Fleeting: need to check!

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "fleeting")
	SORT date DESC
	LIMIT 10
```

-   〽️ Stats
    -   File Count: `$=dv.pages('""').where(p => {return p.file.path.indexOf("Utilities") === -1 && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}).length`
    -   Daily Routines: `$=dv.pages('"2_Routine/1_Daily/Daily-Routine"').length`
    -   Daily Drawings: `$=dv.pages('"2_Routine/1_Daily/Daily-Drawing"').length`
    -   Class: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("class") && !p.tags.contains("developing") && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates"}}).length`
    -   Developing: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("developing") && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates"}}).length`
    -   English: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("english") && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates"}}).length`
    -   Web-Surfing: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("web-surfing") && !p.tags.contains("stuff") && !p.tags.contains("report") && !p.tags.contains("overview")  && p.file.folder !== "Utilities/Templates"}}).length`
    -   Work: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("work") && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates"}}).length`
    -   Youtube: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("youtube") && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates"}}).length`
    -   Book: `$=dv.pages('""').where(p => { if(p.tags !== undefined) {return p.tags.contains("book") && !p.tags.contains("author") && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates"}}).length`
    -   Event: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("event") && !p.tags.contains("meeting") && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates"}}).length`
    -   Meeting: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("meeting") && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates"}}).length`
    -   Author: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("author") && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates"}}).length`
    -   People: `$=dv.pages('""').where(p => { if(p.tags !== undefined) {return p.tags.contains("people") && !p.tags.contains("author") && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates"}}).length`
    -   Stuff: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("stuff") && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates"}}).length`
    -   Movie/Drama: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return (p.tags.contains("movie") || p.tags.contains("drama")) && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates"}}).length`
    -   Music: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("music") && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates"}}).length`
