<? 
/* 06-11-2014 22:56:53 */ 

return array (
  'view' => 
  array (
    0 => 
    array (
      'table' => 'siscad.dias_aula',
      'primary' => 'id',
      'paginate' => '15',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'Date',
          'column' => 'data',
          'label' => 'Data da Aula',
          0 => '',
        ),
        1 => 
        array (
          'type' => 'Integer',
          'column' => 'quantidade_aulas',
          'label' => 'Número de aulas',
          0 => '',
        ),
      ),
      'icon' => 
      array (
        0 => 
        array (
          'section' => 'view',
          'image' => 'view.gif',
          'label' => 'Visualizar',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'edit',
          'image' => 'edit.gif',
          'label' => 'Editar',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'delete',
          'image' => 'delete.gif',
          'label' => 'Apagar',
          0 => '',
        ),
      ),
    ),
  ),
  'search' => 
  array (
    0 => 
    array (
      'table' => 'siscad.dias_aula',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'Date',
          'column' => 'data',
          'label' => 'Data da Aula',
          0 => '',
        ),
        1 => 
        array (
          'type' => 'Integer',
          'column' => 'quantidade_aulas',
          'label' => 'Número de aulas',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>