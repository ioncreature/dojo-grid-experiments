<?php
/**
 * @author Marenin Alex
 *         March 2012
 */

// MODEL
require 'Model.php';
$model = new Model();
$cars = $model->getCars();


// VIEW
$data = array(
	'cars' => $cars
);
include 'view.php';