<?php

/**
 * The template for displaying all single posts
 */

get_header();

while (have_posts()) :
  the_post();
?>

  Page

<?php

endwhile;

get_footer();
