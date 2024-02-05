<script>
    var index = 0;
    function change_slider(change) {
            var slides = [
    "slide-1",
    "slide-2",
    "slide-3"
    ]
    index += change;
    if (index == 3) {
        index = 0;
            }
    if (index == -1) {
        index = 2;
            }
    location.href = window.location.href.split('#')[0] + '#' + slides[index];
        };
</script>