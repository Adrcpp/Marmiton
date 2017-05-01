<?php
	include_once "recipe.php";
	include_once "comment.php";
	include_once "image.php";
	include_once "meta.php";
	include_once "category.php";
	
	header('Content-Type: application/json');
	
	$data = json_decode(file_get_contents("php://input"), true);

	/*
	 *  Request for Recipe
	 */
	if ($data["request"] == "add recipe")
	{
		$recipe = new Recipe(); 
		$response = $recipe->add_recipe($data["data"]);
		
		echo json_encode($response);
	}
	else if ($data["request"] == "search name")
	{
		$recipe = new Recipe(); 
		$response = $recipe->search_by_name($data["data"]);
		echo json_encode($response);
	}
	else if ($data["request"] == "get ingredients")
	{
		$recipe = new Recipe(); 
		$response = $recipe->get_ingredients($data["data"]);
		echo json_encode($response);
	}
	else if ($data["request"] == "search recette")
	{
		$recipe = new Recipe(); 
		$response = $recipe->get_recette($data["data"]);
		echo json_encode($response);
	}
	else if ($data["request"] == "search by recipe")
	{
		$recipe = new Recipe(); 
		$response = $recipe->get_recette_by_recipe($data["data"]);
		echo json_encode($response);
	}
	else if ($data["request"] == "last added")
	{
		$recipe = new Recipe(); 
		$response = $recipe->get_last_added();
		echo json_encode($response);
	}	
	else if ($data["request"] == "get best")
	{
		$recipe = new Recipe(); 
		$response = $recipe->get_best();
		echo json_encode($response);
	}
	
	/*
	 *  Request for Image
	 */
	else if (isset($_FILES['image']))
	{
		$image = new Image();
		$response = $image->add_image($_FILES, $_REQUEST['id']);
		
		echo json_encode($response);
	}
	else if ($data["request"] == "get image")
	{
		$image = new Image();
		$response = $image->get_image($data["data"]);
		
		echo json_encode($response);
	}
	
	/*
	 *  Request for Meta
	 */
	else if ($data["request"] == "get average")
	{
		$meta = new Meta(); 
		$response = $meta->get_average($data["data"]);
		echo json_encode($response);
	}
	
	/*
	 *  Request for Comment
	 */
	else if ($data["request"] == "save comment")
	{
		$comment = new Comment(); 
		$response = $comment->save_comment($data["id"], $data["data"]);
		echo json_encode($response);
	}
	else if ($data["request"] == "get comments")
	{
		$comment = new Comment(); 
		$response = $comment->get_comments($data["data"]);
		echo json_encode($response);
	}

	/*
	 *  Request for Category
	 */
	else if ($data["request"] == "get category")
	{
		$category = new Category(); 
		$response = $category->get_category($data["data"]);
		echo json_encode($response);
	}
	else if ($data["request"] == "get categories")
	{
		$category = new Category(); 
		$response = $category->get_categories();
		echo json_encode($response);
	}
	else
	{	
		echo json_encode(array("status" => 400, "report" => "Bad request"));
	}
?>