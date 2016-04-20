<script src="<%= HtmlUtil.escape(PortalUtil.getStaticResourceURL(request, themeDisplay.getPathThemeJavaScript() + "/vendor/angular.js")) %>" type="text/javascript"></script>

<script type="text/javascript">
  window.appName = "AngularMainApplication";
  window.MainApp = {};
</script>

<script src="<%= HtmlUtil.escape(PortalUtil.getStaticResourceURL(request, themeDisplay.getPathThemeJavaScript() + "/app.js")) %>" type="text/javascript"></script>

<script type="text/javascript">
  angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
  });
</script>
