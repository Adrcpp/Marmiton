<?php
	require_once "database.php";

	class Category
	{	
		public function get_categories()
		{
			$db = new Database();
			$resu = $db->select("category");
			return array("result" => $resu,  "status" => 200);
		}
		
		public function get_category($id)
		{
			$db = new Database();
			$resu = $db->select("category", "idcategory=".$id);
			return array("result" => $resu,  "status" => 200);
		}
	}
	
	