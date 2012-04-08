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
				{name: "Код", field: "code", width: "15%", editable: true },
				{name: "Бренд", field: "brand", width: "15%", editable: true },
				{name: "Модель", field: "model", width: "15%", editable: true },
				{name: "Комплектация", field: "kit", width: "15%", editable: true },
				{name: "Год от", field: "year_from", width: "15%", editable: true },
				{name: "Год до", field: "year_to", width: "15%", editable: true }
			],
			rowsPerPage: 10,
			keepRows: 20,
			plugins: { filter: true }
		}, "grid" );

	grid.on( 'RowClick', function(){
		console.log( 'ololo', arguments );
	});

    grid.startup();

});