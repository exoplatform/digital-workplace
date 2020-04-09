<%
	String itemsLimit = System.getProperty("exo.dw.page.snapshot.itemsLimit", "10");
%>

<div class="VuetifyApp">
    <div id="digital-workplace-tasks">
    	<script>
	   		require(['SHARED/digitalWorkplaceTasksBundle'], function(tasksApp) {
				tasksApp.init('<%=itemsLimit%>');
			});
	   	</script>
    </div>
</div>