

<script>
  import * as services from '../services'

  export default {
    methods: {
      checkScroll () {
        // Fetch variables
        var scrollTop = $(document).scrollTop();
        var windowHeight = $(window).height();
        var bodyHeight = $(document).height() - windowHeight;
        var scrollPercentage = (scrollTop / bodyHeight);

// if the scroll is more than 90% from the top, load more content.
        if(scrollPercentage > 0.9) {
// Load content
        }
      }
    }
  }
</script>
