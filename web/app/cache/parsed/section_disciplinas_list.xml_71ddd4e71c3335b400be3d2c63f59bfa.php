<? 
/* 02-11-2014 00:59:32 */ 

return array (
  'view' => 
  array (
    0 => 
    array (
      'table' => 'siscad.disciplina',
      'primary' => 'id',
      'paginate' => '15',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'String',
          'column' => 'nome',
          'label' => 'Nome',
          0 => '',
        ),
      ),
      'icon' => 
      array (
        0 => 
        array (
          'action' => 'view',
          'image' => 'view.gif',
          'label' => 'Visualizar disciplina',
          'default' => 'true',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'edit',
          'image' => 'edit.gif',
          'label' => 'Editar disciplina',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'delete',
          'image' => 'delete.gif',
          'label' => 'Apagar disciplina',
          0 => '',
        ),
      ),
    ),
  ),
  'search' => 
  array (
    0 => 
    array (
      'table' => 'siscad.disciplina',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'String',
          'column' => 'nome',
          'label' => 'Nome',
          0 => '',
        ),
        1 => 
        array (
          'type' => 'Date',
          'column' => 'datanascimento',
          'label' => 'Data de Nascimento',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>