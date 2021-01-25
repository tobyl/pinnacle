---
layout: default
title: Resources
permalink: /resources
slug: resources
---

<main class="container">
  {% include sidebar.html %}
  <section>
    {% for post in site.posts %}
      <article id="post-113" class="post-113 post type-post status-publish format-standard hentry category-uncategorized">
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt }} …<a href="{{ post.url }}">View Article</a></p>
      </article>
    {% endfor %}
  </section>

  {% include social_footer.html %}
</main>