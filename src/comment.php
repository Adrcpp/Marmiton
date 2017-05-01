<?php
	require_once "database.php";

	class Comment
	{
		public function save_comment($id, $data)
		{
			$db = new Database();
			$datas[] = array("comment"=>$data["commentaire"], 
							 "note"=>$data["note"], 
							 "name"=>$data["pseudo"], 
							 "idrecette"=>$id);
			$resu = $db->insert("meta", $datas);
			return array("result" => $resu,  "status" => 200);
		}
		
		public function get_comments($id)
		{
			$db = new Database();
			$resu = $db->select("meta", 'idrecette='.$id);
			return array("result" => $resu,  "status" => 200);
		}	
	}