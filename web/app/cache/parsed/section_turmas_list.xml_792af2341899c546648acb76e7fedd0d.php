<? 
/* 03-11-2014 22:50:50 */ 

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
          'type' => 'Integer',
          'column' => 'ano',
          'label' => 'Ano',
          0 => '',
        ),
      ),
      'icon' => 
      array (
        0 => 
        array (
          'section' => 'siscad.notas',
          'action' => 'view',
          'image' => 'form.gif',
          'label' => 'Lançar/Visualizar Notas',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'view',
          'image' => 'view.gif',
          'label' => 'Visualizar turma',
          'default' => 'true',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'edit',
          'image' => 'edit.gif',
          'label' => 'Editar turma',
          0 => '',
        ),
        3 => 
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
        1 => 
        array (
          'type' => 'Integer',
          'column' => 'ano',
          'label' => 'Ano',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>