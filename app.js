/**
 * @author Marenin Alex
 * April 2012
 */

require([
	'dojo/parser',
	'./store.js',
    "dojox/grid/DataGrid",
	"dojo/store/Memory",
	"dojo/data/ObjectStore",
    "dojox/grid/EnhancedGrid",
	"dojox/grid/enhanced/plugins/Filter",
	'dojo/domReady!'
], function( parser, Store, DataGrid, Memory, ObjectStore, EnhancedGrid ){

	parser.parse( document.body );

	var store = new Store({
			data: this.cars,
			idProperty: 'code'
		}),

		grid = new EnhancedGrid({
			store: new ObjectStore({ objectStore: store }),
			query: { name: '*' },
			structure: [
				{name: "Code", field: "code", width: "15%", editable: true },
				{name: "Brand", field: "brand", width: "15%", editable: true },
				{name: "Model", field: "model", width: "15%", editable: true },
				{name: "Kit", field: "kit", width: "15%", editable: true },
				{name: "From", field: "year_from", width: "15%", editable: true },
				{name: "To", field: "year_to", width: "15%", editable: true }
			],
			plugins: { filter: true }
		}, "grid" );

	grid.on( 'RowClick', function(){
		console.log( 'ololo', arguments );
	});

    grid.startup();

	setTimeout( function(){
		dijit.byId('main_layout').resize();
		console.log( 'resize' );
	}, 1000 );
    grid.startup();

});