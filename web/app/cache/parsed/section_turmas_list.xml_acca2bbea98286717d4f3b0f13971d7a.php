<? 
/* 02-11-2014 23:07:20 */ 

return array (
  'view' => 
  array (
    0 => 
    array (
      'table' => 'siscad.turma',
      'primary' => 'id',
      'paginate' => '15',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'String',
          'column' => 'codigo',
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
      'icon' => 
      array (
        0 => 
        array (
          'action' => 'view',
          'image' => 'view.gif',
          'label' => 'Visualizar turma',
          'default' => 'true',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'edit',
          'image' => 'edit.gif',
          'label' => 'Editar turma',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'delete',
          'image' => 'delete.gif',
          'label' => 'Apagar turma',
          0 => '',
        ),
      ),
    ),
  ),
  'search' => 
  array (
    0 => 
    array (
      'table' => 'siscad.turma',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'String',
          'column' => 'codigo',
          'label' => 'Nome',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>