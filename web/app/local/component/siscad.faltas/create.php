<?
$Nfalta = 0;
$presencas = 0;
?>
<style type="text/css">
	.calendar_table {
    width:100%;
}
.calendar_table tr {
    margin:0;
    padding:4px;
}
</style>
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script type="text/javascript">
$(document).ready(function() {
$('.nota').click(function(){

  	value = this.value;

  	if(this.value == "" || this.value == "F" )
  		this.value = "P";
  	else
  		this.value = "F";

  });
});
</script>
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
<div id="idForm">

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
	<div class="description">
	<div><b>Aluno(a) : </b><?=$aluno->nome?></div>
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
<?if (count($dias_letivos) == 0) {

	echo '<div class="warning"><b style="color: #900;">Não existem dias letivos cadastrado nessa disciplina</b></div>';
} else {?>

<input type="hidden" name="itemId" value="<?=$itemId?>" />
<input type="hidden" name="idTurma" value="<?=$IdTurma?>" />
<table align="center" border="0" class="calendar_table">
<tr style="background-color: #C0C0C0">
<td colspan="5">Data</td>
</tr>
<?php foreach ($dias_letivos as $value):?>
		<tr style="background-color: #F4F4F4;">
			<td>
				<b><?=date("d/m/Y", strtotime($value->data))?></b>
			</td>
<?$i = 1;while ($i <= $value->quantidade_aulas) {?>
			<td>
				<input type="text" id="F<?=$i?>" name="<?=$value->id?>[F<?=$i?>]" size="1;" maxlength="3" value="<?echo $array_faltas[$value->id]['F' . $i];?>" class="nota">
<?

	($array_faltas[$value->id]['F' . $i] == "F") ? $Nfalta++ : $presencas++;
	?>
</td>
<?$i++;}?>
</tr>
<?php endforeach?>
</table>
</form>
<div style="align:right">

<b>Total Faltas : <font color="red"><?=$Nfalta?></font> </b>

<b>Total Presença :  <font color="blue"><?=$presencas?></font></b>

</div>
<?}?>
</div>