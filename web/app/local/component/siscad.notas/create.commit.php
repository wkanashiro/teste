<?

$array_notas = $_POST;
unset($array_notas['itemId']);

$db = Database::singleton();
$form = &Form::singleton('create.xml', 'all.xml');
try {

	foreach ($array_notas as $idAluno => $value) {

		$array_notas_aluno[$idAluno] = $value;

		foreach ($array_notas_aluno[$idAluno] as $tipoProva => $valorProva) {

			$db->beginTransaction();

			$sth = $db->prepare("SELECT * FROM siscad.nota where id_aluno = " . $idAluno . " AND id_turma = " . $itemId . " AND tipo ='" . $tipoProva . "'");

			$sth->execute();

			if ($nota = $sth->fetch()) {

				$stmt = $db->prepare('UPDATE siscad.nota SET
			    	 					  valor_real = :valor,
			    	 					  valor_equivalente = :valor_equivalente
			    	 					  WHERE id = :id_nota'
				);
				$valorProva = (!var_dump(isset($valorProva))) ? $valorProva : 0;

				$stmt->bindValue(':valor', $valorProva);
				$stmt->bindValue(':valor_equivalente', 0);

				$stmt->bindValue(':id_nota', $nota['id']);

				$stmt->execute();
				$db->commit();
			} else {//echo "Não Existe";

				$stmt = $db->prepare(
					'INSERT INTO
				        siscad.nota (valor_real, valor_equivalente, tipo, id_aluno, id_turma )
				        VALUES (:valor,:valor_equivalente,:tipo,:id_aluno,:id_turma)'
				);
				$valorProva = (!var_dump(isset($valorProva))) ? $valorProva : 0;

				$stmt->bindValue(':valor', $valorProva);
				$stmt->bindValue(':valor_equivalente', 0);
				$stmt->bindValue(':tipo', $tipoProva);
				$stmt->bindValue(':id_aluno', $idAluno);
				$stmt->bindValue(':id_turma', $itemId);

				$stmt->execute();
				$db->commit();

			}
		}
	}
	$message->addMessage("Lançamento de notas efetuado com sucesso.");
	//$action = $form->goToAction ('success');
	header('Location: ' . $_SERVER['PHP_SELF'] . '?target=body&toSection=' . $section->getName() . '&toAction=' . 'create' . '&itemId=' . $itemId);
}

 catch (PDOException $e) {
	$message->addWarning($e->getMessage());
	$db->rolback();
}
 catch (Exception $e) {
	$message->addWarning($e->getMessage());
	$db->rolback();
}
Log::singleton()->add('CREATE', $form->getResume($itemId));
?>