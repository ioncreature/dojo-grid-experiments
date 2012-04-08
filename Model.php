<?php
/**
 * @author Marenin Alex
 *         March 2012
 */

class Model {

	protected $handle;

	public function __construct(){
		$this->handle = mysql_connect( 'localhost', 'root', 'root' );
		if ( !$this->handle )
			die( mysql_error($this->handle) );
		mysql_select_db( 'starline', $this->handle );
	}


	public function __destruct(){
		mysql_close( $this->handle );
	}


	public function query( $sql ){
		$handle = mysql_query( $sql, $this->handle );
		if ( !$handle )
			die( mysql_error($this->handle) );
		$res = array();
		while ( $row = mysql_fetch_assoc($handle) )
			$res[] = $row;
		return $res;
	}


	public function getCars(){
		return $this->query( "SELECT * FROM cars" );
	}

}
