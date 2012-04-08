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
], function( parser, Store, DataGrid, Memory, ObjectStore, EnhancedGrid, Filter ){

	parser.parse( document.body );

	var store = new Store({
			data: [
				{ name: 'ololo', abb: 'OlO', test: false },
				{ name: 'trololo', abb: 'TRoL', test: true },
				{ name: 'BulBul', abb: 'BB', test: true },
				{ name: 'olol1o', abb: 'OlO', test: true },
				{ name: 'trolo32lo', abb: 'TRoL', test: false },
				{ name: 'BulBu4l', abb: 'BB', test: false },
				{ name: 'ololo5', abb: 'OlO', test: false },
				{ name: '6trololo', abb: 'TRoL', test: true },
				{ name: 'B7ulBul', abb: 'BB', test: false },
				{ name: 'ol8olo', abb: 'OlO', test: true },
				{ name: 'tro9lolo', abb: 'TRoL', test: false },
				{ name: 'BulB0ul', abb: 'BB', test: false },
				{ name: 'o-lolo', abb: 'OlO', test: true },
				{ name: 'tro9lolo', abb: 'TRoL', test: false },
				{ name: 'Bu=lBul', abb: 'BB', test: false },
				{ name: 'olol=o', abb: 'OlO', test: false },
				{ name: 'trol67olo', abb: 'TRoL', test: true },
				{ name: 'BulB85ul', abb: 'BB', test: false }
			],
			idProperty: 'name'
		}),

		grid = new EnhancedGrid({
			store: new ObjectStore({ objectStore: store }),
			query: { name: '*' },
			structure: [
				{name: "Name", field: "name", width: "50%", editable: true },
				{name: "Abbreviation", field: "abb", width: "20%", editable: true },
				{name: "Booltest", field: "test", width: "20%", editable: true, cellType: 'dojox.grid.cells.Bool' }
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