<script>
(function() {
  document.addEventListener('submit', function(event) {
    if (event.target.dataset.svForm) {
      window.dataLayer.push({
        event: 'convertkit_submission',
        ck_form_id: event.target.dataset.svForm
      });
    }}, true);
})();
</script>