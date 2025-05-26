---
layout: page
title: study
permalink: /study/
description: A collection of notes and exercise solutions on topics I'm learning.
nav: true
nav_order: 4
---

<div class="study-grid">
  {% assign sorted_studies = site.study | sort: "order" %}
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {% for entry in sorted_studies %}
    <div class="col">
      <a href="{{ entry.url | relative_url }}" class="text-decoration-none text-dark">
        <div class="card h-100 shadow-sm">
          {% if entry.thumbnail %}
          <img src="{{ '/assets/img/study/' | append: entry.thumbnail | relative_url }}" class="card-img-top" alt="{{ entry.title }}">
          {% endif %}
          <div class="card-body">
            <h5 class="card-title">{{ entry.title }}</h5>
            {% if entry.description %}
            <p class="card-text">{{ entry.description }}</p>
            {% endif %}
          </div>
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
</div>






