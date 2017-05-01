<?php
	require_once "database.php";

	class Image
	{
		public function add_image($files, $id)
		{
			$dossier = '../assets/upload/';
			$fichier = basename($files['image']['name']);
			if(move_uploaded_file($files['image']['tmp_name'], $dossier . $fichier)) 
			{
			 	$db = new DataBase();
				$data[] = array("url" => "http://".$_SERVER['SERVER_NAME']."/marrrrrrr/assets/upload/".$fichier, "nom"=> $fichier);
				$res = $db->insert("image", $data);
				$db->update("recette", array("idimage"=>$db->_last_id), "id=".$id);
				
				return array("result" => "Image ajouter avec succes", "status" => 200);
			}
			else
			{
				return array("result" => "Erreur lors de l'upload image", "status" => 304);
			}
		}
			
		public function get_image($id)
		{
			$db = new Database();
			$resu = $db->select("image", "idimage=".$id);
			return array("result" => $resu,  "status" => 200);
		}

	}