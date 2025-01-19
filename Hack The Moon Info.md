---
dg-publish: true
dg-permalink: Hack-The-Moon-Info
cssclasses:
  - dashboard
dg-content-classes: dashboard
---

# Myself
😎 Myself

```dataview
	LIST
	FROM "0_Myself"
	WHERE !contains(tags, "idea") and !contains(tags,"question") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
```

💡 Ideas

```dataview
	LIST
	FROM "0_Myself"
	WHERE contains(tags, "idea") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
```

❓ Questions

```dataview
	LIST
	FROM "0_Myself"
	WHERE contains(tags, "question") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
```

# Projects
💼 Career

```dataview
	LIST
	FROM "1_Project"
	WHERE contains(tags, "career") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
```

🧭 Life Explorer

```dataview
	LIST
	FROM "1_Project"
	WHERE contains(tags, "life")  and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
```

# Everyday Self-Development

💻 Developing

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "developing") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")  and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

📖 Books

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "book") and !contains(tags, "author") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")  and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

🎧 English

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "english") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

🌍 Spanish

```dataview
	LIST
	FROM ""
	WHERE contains(tags, "spanish") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```
# Resource Notes

👩🏻‍🏫 Classes

```dataview
	LIST
	FROM "3_Learning"
	WHERE contains(tags, "class") and !contains(tags, "spanish") and !contains(tags, "developing") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")  and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

💼 Career

```dataview
	LIST
	FROM "3_Learning"
	WHERE contains(tags, "career") and !contains(tags, "meeting") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview")  and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

🤝 Meeting

```dataview
	LIST
	FROM "5_Event"
	WHERE contains(tags, "meeting") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(file.folder, "src") and !contains(file.folder, "dist") and !contains(tags, "overview") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

✒️ Author

```dataview
	LIST
	FROM "6_People"
	WHERE contains(tags, "author") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(file.folder, "src") and !contains(file.folder, "dist") and !contains(tags, "overview") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

🧸 Stuff

```dataview
	LIST
	FROM "7_Stuff"
	WHERE contains(tags, "stuff") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

🖥️ Web-Surfing

```dataview
	LIST
	FROM "3_Learning"
	WHERE contains(tags, "web-surfing") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

👤People

```dataview
	LIST
	FROM "6_People"
	WHERE contains(tags, "people") and !contains(tags, "author") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

# Event Notes

💃 meTime

```dataview
	LIST
	FROM "5_Event"
	WHERE contains(tags, "meTime") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

🙂 friends

```dataview
	LIST
	FROM "5_Event"
	WHERE contains(tags, "friends") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

😍 dates

```dataview
	LIST
	FROM "5_Event"
	WHERE contains(tags, "dates") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

👨‍👩‍👧‍👦 Family

```dataview
	LIST
	FROM "5_Event"
	WHERE contains(tags, "family") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

🌅 Exotic Vacations

```dataview
	LIST
	FROM "5_Event"
	WHERE contains(tags, "vacation") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

# Entertainment

🎞️ Movies/Dramas Watched

```dataview
	LIST
	FROM "8_Movie & Drama"
	WHERE contains(tags, "movie") or contains(tags, "drama") and !contains(tags, "to-watch") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

🎥 Movies/Dramas to Watch

```dataview
	LIST
	FROM "8_Movie & Drama"
	WHERE contains(tags, "to-watch") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

🎶 Music

```dataview
	LIST
	FROM "9_Music"
	WHERE contains(tags, "music") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

▶️ Youtube

```dataview
	LIST
	FROM "3_Learning"
	WHERE contains(tags, "youtube") and !contains(tags, "english") and !contains(tags, "stretching") and !contains(tags, "workout") and file.folder != "Utilities/Templates" and !contains(tags, "report") and !contains(tags, "overview") and !contains(file.folder, "src") and !contains(file.folder, "dist") and dg-publish = true
	SORT date DESC
	LIMIT 10
```

# Vault Info

🗄️ Recent file updates

```dataview
	LIST
	from "0_Myself" or "1_Project" or "2_Routine" or "3_Learning" or "4_Book" or "5_Event" or "6_People" or "7_Stuff" or "8_Movie & Drama" or "9_Music"
	SORT file.mtime DESC
	where dg-publish = true  and !contains(file.folder, "src") and !contains(file.folder, "dist")
	LIMIT 10
```

🔖 Draft: need to check!

```dataview
	LIST
	FROM "0_Myself" or "1_Project" or "2_Routine" or "3_Learning" or "4_Book" or "5_Event" or "6_People" or "7_Stuff" or "8_Movie & Drama" or "9_Music"
	WHERE contains(tags, "draft") and file.folder != "Utilities/Templates"  and !contains(file.folder, "src") and !contains(file.folder, "dist")
	SORT date DESC
```

-   〽️ Stats
    -   File Count: `$=dv.pages('""').where(p => {return p.file.path.indexOf("Utilities") === -1 && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}).length`
    -   Daily Routines: `$=dv.pages('"2_Routine/1_Daily/Daily-Routine"').where(p => {return p.file.path.indexOf("Utilities") === -1 && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}).length`
    -   Daily Drawings: `$=dv.pages('"2_Routine/1_Daily/Daily-Drawing"').where(p => {return p.file.path.indexOf("Utilities") === -1 && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}).length`
    -   Myself: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("myself") && !p.tags.contains("report") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   Class: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("class") && !p.tags.contains("developing") && !p.tags.contains("report") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   Developing: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("developing") && !p.tags.contains("report") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   English: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("english") && !p.tags.contains("report") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   Web-Surfing: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("web-surfing") && !p.tags.contains("stuff") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("report") && !p.tags.contains("overview")  && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   Career: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("career") && !p.tags.contains("plan") && !p.tags.contains("report") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   Youtube: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("youtube") && !p.tags.contains("english") && !p.tags.contains("workout") && !p.tags.contains("stretching") && !p.tags.contains("report") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   Book: `$=dv.pages('""').where(p => { if(p.tags !== undefined) {return p.tags.contains("book") && !p.tags.contains("author") && !p.tags.contains("report") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   Event: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("event") && !p.tags.contains("meeting") && !p.tags.contains("report") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   Meeting: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("meeting") && !p.tags.contains("report") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   Author: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("author") && !p.tags.contains("report") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   People: `$=dv.pages('""').where(p => { if(p.tags !== undefined) {return p.tags.contains("people") && !p.tags.contains("author") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   Stuff: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("stuff") && !p.tags.contains("report") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   Movie/Drama: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return (p.tags.contains("movie") || p.tags.contains("drama")) && !p.tags.contains("report") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
    -   Music: `$=dv.pages('""').where(p => {if(p.tags !== undefined) {return p.tags.contains("music") && !p.tags.contains("report") && !p.tags.contains("daily-report")  && !p.tags.contains("weekly-report") && !p.tags.contains("overview") && p.file.folder !== "Utilities/Templates" && p.file.path.indexOf("node_modules") === -1 && p.file.path.indexOf("src") === -1 && p.file.path.indexOf("dist") === -1}}).length`
