<? 
/* 07-11-2014 18:49:26 */ 

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
          'section' => 'notas',
          'action' => 'create',
          'image' => 'form.gif',
          'label' => 'Lançar/Visualizar Notas',
          0 => '',
        ),
        1 => 
        array (
          'section' => 'faltas',
          'action' => 'list',
          'image' => 'confirm.gif',
          'label' => 'Lançar/Visualizar Faltas',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'view',
          'image' => 'view.gif',
          'label' => 'Visualizar turma',
          'default' => 'true',
          0 => '',
        ),
        3 => 
        array (
          'action' => 'edit',
          'image' => 'edit.gif',
          'label' => 'Editar turma',
          0 => '',
        ),
        4 => 
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