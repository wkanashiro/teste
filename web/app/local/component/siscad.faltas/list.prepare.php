<?
$itemId = isset($_POST['itemId']) ? $_POST['itemId'] : $itemId;

$db = Database::singleton();

$sth = $db->prepare("SELECT p.nome as nome_professor , t.*, d.* FROM siscad.turma as t
						join siscad.disciplina as d on t.id_disciplina = d.id
						join siscad.professor as p on t.id_professor = p.id
						where t.id =" . $itemId);

$sth->execute();

$turma = $sth->fetch(PDO::FETCH_OBJ);

$sth = $db->prepare("select * from siscad.matricula as m
						join siscad.aluno as a on m.id_aluno = a.id
						where id_turma =" . $itemId);

$sth->execute();

$alunos = $sth->fetchAll(PDO::FETCH_OBJ);

$sth = $db->prepare("select * FROM siscad.nota where id_turma = " . $itemId);

$sth->execute();

$notas = $sth->fetchAll(PDO::FETCH_OBJ);

foreach ($notas as $key => $value) {
	$array_notas[$value->id_aluno][$value->tipo] = $value->valor_real;

}

$form = &Form::singleton('create.xml', 'all.xml');

?>