<?
$itemId = isset($_POST['itemId']) ? $_POST['itemId'] : $itemId;

$IdTurma = 1;
//$itemId = 6;
$IdAluno = $itemId;

$db = Database::singleton();

$sth = $db->prepare("SELECT p.nome as nome_professor , t.*, d.* FROM siscad.turma as t
						join siscad.disciplina as d on t.id_disciplina = d.id
						join siscad.professor as p on t.id_professor = p.id
						where t.id =" . $IdTurma);

$sth->execute();

$turma = $sth->fetch(PDO::FETCH_OBJ);

$sth = $db->prepare("select * FROM siscad.dias_letivos WHERE id_turma =" . $IdTurma);

$sth->execute();

$dias_letivos = $sth->fetchAll(PDO::FETCH_OBJ);

$sth = $db->prepare("select * FROM siscad.aluno where id = " . $IdAluno);

$sth->execute();

$aluno = $sth->fetch(PDO::FETCH_OBJ);

//print_r($aluno);

$sth = $db->prepare("select * FROM siscad.faltas where id_turma = " . $IdTurma . "AND id_aluno = " . $IdAluno);

$sth->execute();

$faltas = $sth->fetchAll(PDO::FETCH_OBJ);

foreach ($faltas as $key => $value) {
	$array_faltas[$value->id_dias_letivos][$value->codigo_falta] = $value->tipo;
}
$form = &Form::singleton('create.xml', 'all.xml');
?>