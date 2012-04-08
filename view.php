<?php
	if ( !isset($data) ){
		header( 'Location: /' );
		die;
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Ololo</title>
	<link rel="stylesheet" href="style.css" />
	<script type="text/javascript" src="dojo/dojo/dojo.js.uncompressed.js"></script>
	<script type="text/javascript" src="dojo/dijit/dijit-all.js.uncompressed.js"></script>
	<script type="text/javascript" src="app.js"></script>
</head>

<body class="claro">

<div data-dojo-type="dijit.layout.BorderContainer" id="main_layout">
	<div
		id="top"
		data-dojo-type="dijit.layout.ContentPane"
		data-dojo-props="region: 'top'">
		Ololo software
	</div>

	<div
		id="left"
		data-dojo-type="dijit.layout.ContentPane"
		data-dojo-props="region: 'left', splitter: true">
		Menu here
	</div>

	<div
		id="center"
		data-dojo-type="dijit.layout.ContentPane"
		data-dojo-props="region: 'center'">
		<div id="grid"></div>
	</div>
</div>

</body>
</html>