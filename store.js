/**
 * @author Marenin Alex
 * March 2012
 */

define([
	'dojo/_base/declare',
	'dojo/store/Memory'
], function( declare, Memory ){

	return declare( 'Store', Memory, {

		put: function(){
			console.log( arguments );
			return this.inherited( arguments );
		}
	});
});