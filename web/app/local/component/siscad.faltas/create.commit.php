<?
$array_faltas = $_POST;

$idAluno = $_POST['itemId'];
$idTurma = $_POST["idTurma"];

unset($array_faltas['itemId']);
unset($array_faltas['idTurma']);

$db = Database::singleton();
$form = &Form::singleton('create.xml', 'all.xml');
try {

	foreach ($array_faltas as $id_dias_letivo => $dia) {

		$array_faltas_aluno[$id_dias_letivo] = $dia;

		foreach ($array_faltas_aluno[$id_dias_letivo] as $falta => $tipoFalta) {

			$sth = $db->prepare("SELECT * FROM siscad.faltas where id_aluno = " . $idAluno . " AND id_turma = " . $idTurma . " AND codigo_falta = '" . $falta . "' AND id_dias_letivos ='" . $id_dias_letivo . "'");

			$sth->execute();

			if ($faltaExiste = $sth->fetch()) {
				if ($tipoFalta != "") {
					$db->beginTransaction();
					$stmt = $db->prepare('UPDATE siscad.faltas SET
										tipo = :tipo
									  WHERE id = :id_falta');

					$stmt->bindValue(':tipo', $tipoFalta);
					$stmt->bindValue(':id_falta', $faltaExiste['id']);

					$stmt->execute();
					$db->commit();
				}
			} else {//echo "Não Existe";

				if ($tipoFalta != "") {
					$db->beginTransaction();
					$stmt = $db->prepare(
						'INSERT INTO
						siscad.faltas (tipo,id_aluno,id_turma,id_dias_letivos,codigo_falta )
						VALUES (:tipo,:idAluno,:id_turma,:id_dias,:codigo_falta)'
					);

					$stmt->bindValue(':tipo', $tipoFalta);
					$stmt->bindValue(':idAluno', $idAluno);
					$stmt->bindValue(':id_turma', $idTurma);
					$stmt->bindValue(':id_dias', $id_dias_letivo);
					$stmt->bindValue(':codigo_falta', $falta);

					$stmt->execute();

					$db->commit();
				}
			}
		}
	}
	$message->addMessage("Lançamento de faltas efetuado com sucesso.");
	header('Location: ' . $_SERVER['PHP_SELF'] . '?target=body&toSection=' . $section->getName() . '&toAction=' . 'create' . '&itemId=' . $itemId);
} catch (PDOException $e) {
	var_dump($e);
	$message->addWarning($e->getMessage());
	$db->rolback();
} catch (Exception $e) {
	var_dump($e);
	$message->addWarning($e->getMessage());
	$db->rolback();
}

/*$array_faltas_aluno[$idFalta] = $value;

foreach ($array_faltas_aluno[$idFalta] as $falta => $valorFalta) {

$db->beginTransaction();

$sth = $db->prepare("SELECT * FROM siscad.faltas where id_aluno = " . $idAluno . " AND id_turma = " . $idTurma . " AND id_dias_letivos ='" . $idFalta . "'");

$sth->execute();

if ($nota = $sth->fetch()) {

$stmt = $db->prepare('UPDATE siscad.faltas SET
tipo = :tipo
WHERE id = :id_falta'
);

$stmt->bindValue(':valor', $valorFalta);
$stmt->bindValue(':id_falta', $nota['id']);

$stmt->execute();
$db->commit();
} else {//echo "Não Existe";

$stmt = $db->prepare(
'INSERT INTO
siscad.faltas (tipo, id_dias_letivos,id_aluno, id_turma )
VALUES (:tipo,:id_dias_letivos,:id_aluno,:id_turma)'
);

$stmt->bindValue(':tipo', $valorFalta);

$stmt->bindValue(':id_dias_letivos', "P");
$stmt->bindValue(':id_aluno', $idFalta);
$stmt->bindValue(':id_turma', $itemId);

$stmt->execute();
$db->commit();

}
}
}
$message->addMessage("Lançamento de faltas efetuado com sucesso.");
$action = $form->goToAction('success');
header('Location: ' . $_SERVER['PHP_SELF'] . '?target=body&toSection=' . $section->getName() . '&toAction=' . 'create' . '&itemId=' . $itemId);
} catch (PDOException $e) {
var_dump($e);
$message->addWarning($e->getMessage());
$db->rolback();
} catch (Exception $e) {
var_dump($e);
$message->addWarning($e->getMessage());
$db->rolback();
}
Log::singleton()->add('CREATE', $form->getResume($itemId));
 */?>