<? 
/* 03-11-2014 00:19:03 */ 

return array (
  'view' => 
  array (
    0 => 
    array (
      'table' => 'siscad.matricula',
      'primary' => 'id',
      'paginate' => '15',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'Date',
          'column' => 'data_matricula',
          'label' => 'Data',
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
          'action' => 'view',
          'image' => 'view.gif',
          'label' => 'Visualizar Matricula',
          'default' => 'true',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'edit',
          'image' => 'edit.gif',
          'label' => 'Editar Matricula',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'delete',
          'image' => 'delete.gif',
          'label' => 'Apagar Matricula',
          0 => '',
        ),
      ),
    ),
  ),
  'search' => 
  array (
    0 => 
    array (
      'table' => 'siscad.matricula',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'Date',
          'column' => 'data_matricula',
          'label' => 'Data',
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