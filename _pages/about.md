---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
{% include_relative includes/bio.md %}

<span class='anchor' id='-news'></span>
{% include_relative includes/news.md %}

<span class='anchor' id='-educations'></span>
{% include_relative includes/educations.md %}

<span class='anchor' id='-publications'></span>
{% include_relative includes/publications.md %}

<!-- <span class='anchor' id='-patents-and-copyrights'></span>
{% include_relative includes/patents.md %} -->

<span class='anchor' id='-honors-and-awards'></span>
{% include_relative includes/honors.md %}

<!-- <span class='anchor' id='-talks'></span>
{% include_relative includes/talks.md %} -->

<span class='anchor' id='-personal'></span>
{% include_relative includes/personal.md %}

<!-- 
# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->