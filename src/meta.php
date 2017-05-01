<?php
	require_once "database.php";

	class Meta
	{
		public function get_average($id)
		{
			$db = new Database();
			$resu = $db->select("meta", "idrecette=".$id, "AVG(note)");
			$count = $db->select("meta", "idrecette=".$id, "COUNT(note)");

			return array("result" => array("count" => $count[0]["COUNT(note)"], 
			"average" => round($resu[0]["AVG(note)"], 1)),  "status" => 200);
		}
	}