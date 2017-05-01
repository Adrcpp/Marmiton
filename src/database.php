<?php

class Database
{
	/**
	 * @var PDO Object $_link 
	 */
	protected $_link;
	
    /**
	 * @var array() $_result 
	 */
    protected $_result;
	
	/**
	 * @var int $_last_id
	 */
    public $_last_id;
	
    /**
	 * Connect to database via pdo. Singleton, 
	 * only one connection possible at a time.
	 *
	 * @return : pdo Object
	 */
	public function connect()
	{
		$host = '127.0.0.1';
		$db   = 'marmiton';
		$user = 'root';
		$pass = 'adradr';
		$charset = 'utf8';
		if ($this->_link == NULL) {
		
			$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
			$opt = [
				PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
				PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
				PDO::ATTR_EMULATE_PREPARES   => false,
			];
			$this->_link = new PDO($dsn, $user, $pass, $opt);
		}
		return ($this->_link );
	}
	
	/**
     * Select method
	 *
	 * @var $table (sting), $where (string), $fields (string), $order (string), $limit (int), $offset (int), $fetch (int)
	 */
	public function select($table, $where = "", $fields = '*', $order = '', $limit = null, $offset = null, $fetch = null)
	{
		$query = 'SELECT ' . $fields . ' FROM ' . $table
	   . (($where) ? ' WHERE ' . $where : '')
	   . (($order) ? ' ORDER BY ' . $order : '')
	   . (($limit) ? ' LIMIT ' . $limit : '')
	   . (($offset && $limit) ? ' OFFSET ' . $offset : '');
		//echo json_encode($query );
	    $this->connect();
		$sth= $this->_link->prepare($query);
		$sth->execute();
		
		$result = (($fetch) ? $sth->fetchAll($fetch): $sth->fetchAll());
		//echo json_encode($result);
		return ($result);
	}

	/**
     * Execute the specified query
	 *
	 * @var $query (string)
     */
    public function query($query)
    {
        if (!is_string($query) || empty($query)) 
            throw new InvalidArgumentException("The specified query is not valid.");
		try 
		{
			$this->connect();
			$this->_link->beginTransaction();
			$pdo = $this->_link->prepare($sql);
			$this->_link->execute($query);
			$this->lastInsertId();
			
		} catch (PDOException $e) {
			echo 'Échec de la query : ' . $e->getMessage();
			exit;
        }
		$this->commit();
       // return $this->_result; 
    }
	
	/**
     * Insert method
	 *
	 * @var $dbname (sting), $data (array)
	 *
	 */
	public function insert($dbname, $data)
	 {
		$insert_values = array();
		$datafields = array_keys($data[0]);
		foreach($data as $d)
		{
			$question_marks[] = '('  . $this->prepare_query('?', sizeof($d)) . ')';
			$insert_values = array_merge($insert_values, array_values($d));
		}

		$sql = "INSERT INTO $dbname (" . implode(",", $datafields ) . ") VALUES " . implode(',', $question_marks);
		$this->connect();

		//echo json_encode($sql). json_encode($insert_values). json_encode($this->_last_id);

		$pdo = $this->_link->prepare($sql);
		try 
		{
			$pdo->execute($insert_values);
		} catch (PDOException $e){
			echo $e->getMessage();
			echo json_encode($sql). json_encode($insert_values). json_encode($this->_last_id);
		}
		$this->_last_id = $this->_link->lastInsertId();
	}
	
	/**
     * prepare query
	 *
	 * @var $dbname, 
	 *
	 */
	private function prepare_query($text, $count = 0, $separator = ","){
		$result = array();
		if($count > 0)
		{
			for($x = 0; $x < $count; ++$x)
				$result[] = $text;
		}
		return implode($separator, $result);
	}
	
	
	public function update($table, array $data, $where = '')
    {
        $set = array();
        foreach ($data as $field => $value) {
            $set[] = $field . '=' . $this->quoteValue($value);
        }
        $set = implode(',', $set);
        $query = 'UPDATE ' . $table . ' SET ' . $set 
               . (($where) ? ' WHERE ' . $where : '');
			   
		$this->connect();
		//echo json_encode($query);
		$pdo = $this->_link->query($query);
		$this->_last_id = $this->_link->lastInsertId();
    }
	
	public function quoteValue($value)
    {
        if ($value === null) {
            $value = ‘NULL’;
        }
        else if (!is_numeric($value)) {
            $value = "'" .$value. "'";
        }
        return $value;
    }
	
	/**
     * Close automatically the database connection when the instance of the class is destroyed
     */ 
    public function __destruct()
    {
        $this->_link = null;
    }
	
	
}