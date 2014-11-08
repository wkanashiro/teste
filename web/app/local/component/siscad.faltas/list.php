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
<div id="idList">
<table>
	<tr>
		<td class="cTableHeader" colspan="3">Alunos</td>
	</tr>
	<tr>
<?

$backColor = 'FFFFFF';
foreach ($alunos as $key => $value) {?>
<tr id="_ITEM_3" class="cTableItem" style="display:;">
<td class="standard">
<a href="titan.php?target=body&amp;toSection=faltas&amp;toAction=create&amp;itemId=<?=$value->id_aluno?>&amp;IdTurma=<?=$value->id_turma?>&amp;fatherId=3">
<?=$value->nome?>
</a>
	</td>
	<td class="standard">
	2014
	</td>
	<td class="icon" nowrap="nowrap">

&nbsp;<a href="titan.php?target=body&amp;toSection=faltas&amp;toAction=create&amp;itemId=<?=$value->id_aluno?>&amp;IdTurma=<?=$value->id_turma?>&amp;fatherId=3">
<img src="titan.php?target=loadFile&amp;file=interface/icon/confirm.gif" border="0" title="Lançar/Visualizar Faltas" alt="Lançar/Visualizar Faltas">
</a>&nbsp;

			</tr>
<?}?>
</table>
</div>
<div id="idResult"><b><?=count($alunos)?></b> <?=__('Items Found')?></div>

