<style type="text/css">
	.calendar_table {
    width:100%;
}
.calendar_table tr {
    margin:0;
    padding:4px;
}
</style>
<div id="idForm">
	<form id="form_<?=$form->getAssign()?>" action="" method="post">
	<div class="description">
		<div><b>Ano/Semestre: </b><?=$turma->ano . '/' . $turma->semestre?></div>
		<div><b>Disciplina: </b><?=$turma->id_disciplina . '-' . $turma->nome?> <b>  Tipo da Disciplina : </b> <?=strtoupper($turma->tipo)?></div>
		<div><b>Carga Horária : </b><?=$turma->cargahoraria . ' horas'?>&nbsp;&nbsp;&nbsp;&nbsp;<b>Turma : </b> <?=$turma->id . '/' . $turma->codigo?></div>
	</div>
	<div class="description">
	<div><b>Professor(a) : </b><?=$turma->nome_professor?></div>
	<div><b>Turma : </b> <?=$turma->id . '/' . $turma->codigo?></div>
	<div><b>Período : </b> ;<?=date("d/m/Y", strtotime($turma->data_inicio)) . ' à ' . date("d/m/Y", strtotime($turma->data_fim))?></div>
	<div><b>Dias : </b> <?=$turma->dias_semana . '/' . $turma->codigo?>&nbsp;&nbsp;&nbsp;&nbsp;<b>Horário : </b> <?=$turma->horario_aula?></div>
	</div>
<?
$description = Business::singleton()->getAction(Action::TCURRENT)->getDescription();
if (trim($description) != '') {
	echo '<div class="description">' . $description . '</div>';
}

$warning = Business::singleton()->getAction(Action::TCURRENT)->getWarning();
if (trim($warning) != '') {
	echo '<div class="warning"><b style="color: #900;">' . __('Attention!') . '</b> ' . $warning . '</div>';
}

?>
	<form id="form_<?=$form->getAssign()?>" action="" method="post">
<?if (count($alunos) == 0) {

	echo '<div class="warning"><b style="color: #900;">Não existem alunos matriculados nessa disciplina</b></div>';
} else {?>

		<input type="hidden" name="itemId" value="<?=$itemId?>" />
		<table align="center" border="0" class="calendar_table">
		<tr style="background-color: #C0C0C0">
			<td >
				<b>Alunos</b>
			</td>
<?$i = 1;while ($i <= $turma->quantidade_prova) {?>
<td>
<?="P" . $i;?>
</td>
<?$i++;}?>
			<?$j = 1;while ($j <= $turma->quantidade_trabalho) {?>
<td>
<?="T" . $j;?>
</td>
<?$j++;}?>
</td>
<?if ($turma->ps == "1") {?>
<td>
					PS
				</td>
<?}?>
<td>
				Média Prova
			</td>
			<td>
				Média Trabalho
			</td>
			<td>
				Média Final
			</td>
		</tr>

<?php
foreach ($alunos as $value):

		$provas = 0;
		$trabalhos = 0;
		$menor_nota_prova = $array_notas[$value->id]['P1'];
		?>
					<tr style="background-color: #F4F4F4;">
						<td>
							<b><?=$value->nome?></b>
						</td>



	<?$i = 1;while ($i <= $turma->quantidade_prova) {?>
						<td>
							<input type="text" id="P<?=$i?>" name="<?=$value->id?>[P<?=$i?>]" size="1;" maxlength="3" value="<?echo $array_notas[$value->id]['P' . $i];?>">
						</td>
	<?
			$menor_nota_prova = ($array_notas[$value->id]['P' . $i] < $menor_nota_prova) ? $array_notas[$value->id]['P' . $i] : $menor_nota_prova;
			$provas += $array_notas[$value->id]['P' . $i];

			?>
						<?$i++;}?>
						<?$j = 1;while ($j <= $turma->quantidade_trabalho) {?>
						<td>
							<input type="text" id="T<?=$j?>" name="<?=$value->id?>[T<?=$j?>]" size="1" maxlength="3" value="<?echo $array_notas[$value->id]['T' . $j];?>">
						</td>

	<?

			$trabalhos += $array_notas[$value->id]['T' . $j];?>
						<?$j++;}?>
	</td>
	<?if ($turma->ps == "1") {?>
						<td>
							<input type="text" id="PS>" name="<?=$value->id?>[PS]" size="1" maxlength="3" value="<?echo $array_notas[$value->id]['PS'];?>">
	<?$provas += ($array_notas[$value->id]['PS'] > $menor_nota_prova) ? $array_notas[$value->id]['PS']-$menor_nota_prova : 0;?>
	</td>
	<?}?>
	<td>
	<?=$media_provas = ($provas / $turma->quantidade_prova) / 10?>
	</td>
						<td>
	<?=$media_trabalhos = ($trabalhos / $turma->quantidade_trabalho) / 10?>
	</td>
						<td>
	<?$media_final = ($media_provas * ($turma->valor_prova / 100))+($media_trabalhos * ($turma->valor_trabalho / 100))?>
							<font color="<?=($media_final >= 6) ? 'blue' : 'red'?>"><b><?=$media_final?></b></font>
						</td>
					</tr>
	<?php endforeach?>
</table>
	</form>
<?}?>
</div>