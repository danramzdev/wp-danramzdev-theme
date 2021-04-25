<?php

function add_theme_scripts() {
  // Styles
  wp_enqueue_style("style", get_stylesheet_uri());

  // Scripts
  wp_enqueue_script("main", get_template_directory_uri() . "/dist/main.js", array('jquery'), "1.0", true);
}

add_action('wp_enqueue_scripts', 'add_theme_scripts');

// Register Theme Features
function danramzdev_theme_features() {
  // Add theme support for Featured Images
  add_theme_support('post-thumbnails');

  // Set custom thumbnail dimensions
  set_post_thumbnail_size(1500, 1200, true);

  // Add theme support for HTML5 Semantic Markup
  add_theme_support('html5', array());

  // Add theme support for document Title tag
  add_theme_support('title-tag');
}

add_action('after_setup_theme', 'danramzdev_theme_features');
