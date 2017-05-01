<?php
	require_once "database.php";

	class Recipe
	{
		public function search_by_name($data)
		{
			$db = new DataBase();
			$resu = $db->select("recette", "name LIKE '%".$data."%'");
			return array("result" => $resu, "status" => 200);
		}
		
		public function add_recipe($data)
		{
			if(!$this->recipe_validator($data["ingredients"]))
			{
				$now = (new DateTime())->format('Y-m-d H:i:s');
				$arr[] = array( 'name'=> $data['name'], 
								'email'=>$data['email'], 
								'author'=>$data['author'],
								'added'=>$now, 
								'idcategory'=>$data['category']);
								
				$db = new Database();
				
				//Dabord push la recette pour avoir l'id 
				$db->insert("recette", $arr);
				$arr2["ingredients"] = $data["ingredients"];
				$id = (int) $db->_last_id;
				
				for($i = 0; $i < count($arr2["ingredients"]); ++$i)
					$arr2["ingredients"][$i]["idRecette"] = $id;
				
				$db->insert("ingredient", $arr2["ingredients"]);
				
				return array("id" => $id, "result" => "Votre recette est validee et ajoutee sur le site.", "status" => 200);
			}
			return array("result" => "Votre recette ressemble trop a une recette deja presente sur le site.", "status" => 304);
		}
		
		public function get_recette($id)
		{
			$db = new Database();
			$resu = $db->select("recette", "id=".$id );
			return array("result" => $resu, "status" => 200);
		}
		
		private function recipe_validator($form)
		{
			$db = new Database();
			$resu = $db->select("recette", "", "id",'','','' , PDO::FETCH_COLUMN);
			
			// on a recuperer les id de toutes les recette
			// il faut iterer sur chaque id faire le select .. comparer si resul > 85 return false!
			foreach ($resu as $value)
			{
				$liste = $db->select("ingredient", "idRecette=" . $value);
				if($this->is_same_recipe($form, $liste))
					return true;
			}
			return false;
		}
		
		private function is_same_recipe($form, $liste)
		{
			$pourcent = 0;
			$count = 0;
			$total = count($form) * 4;
			foreach($form as $array)
			{
				foreach($liste as $comp)
				{
					if(strtoupper ($array["nom"]) == strtoupper ($comp["nom"]))
					{
						$count++;
						if($array["type"] == $comp["type"])
						 {
							$count++;
							if($array["unite"] == $comp["unite"])
							{
								$count++;
								if($array["quantite"] == $comp["quantite"]){
									$count++;
								}
							}
						}
					}
				}
			}
			$pourcent = (($count * 100) / $total);
			//echo json_encode(array("result" => $pourcent ,"total"=>$total, "count"=> $count)). "\n";
			return (($pourcent >= 85 ? true : false));
		}
		
		public function get_recette_by_recipe($data)
		{
			$recipes = explode(' ', $data);
			$result = array();
			$db = new Database();
			foreach($recipes as $recipe)
			{
				$result[] = $db->select("ingredient", "nom='".$recipe."'");
			}
			$res = array();
			foreach($result as $rec)
			{
				foreach($rec as $recipe)
				{
					$quer = $db->select("recette", "id='".$recipe['idRecette']."'");
					$res[] = $quer[0];
				}
			}
			return array("result" => $res, "first"=>$result, "status" => 200);
		}
	
		public function get_ingredients($id)
		{
			$db = new Database();
			$resu = $db->select("ingredient", "idrecette=".$id);
			return array("result" => $resu,  "status" => 200);
		}

		public function get_last_added()
		{
			$db = new Database();
			$resu = $db->select("recette", '', '*', 'id DESC', 4);
			return array("result" => $resu,  "status" => 200);
		}
		
		public function get_best()
		{
			$db = new Database();
			$resu = $db->select("meta group by idrecette", '', 'AVG(note), idrecette, COUNT(note)', 'idrecette DESC', 4);
			$i = 0;
			foreach($resu as $res)
			{
				$arr[] = $db->select("recette", "id='". $res["idrecette"]."'");
				$arr2[] = $arr[$i][0];
				$arr2[$i]["average"] = round($resu[$i]["AVG(note)"], 1);
				$arr2[$i]["nbvote"] = $resu[$i]["COUNT(note)"];
				++$i;
			}
			return array("result" => $arr2 ,  "status" => 200);
		}
	}	