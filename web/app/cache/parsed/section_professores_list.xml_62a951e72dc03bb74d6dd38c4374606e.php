<? 
/* 01-11-2014 22:43:24 */ 

return array (
  'view' => 
  array (
    0 => 
    array (
      'table' => 'siscad.Professor',
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
          'label' => 'Visualizar Professor',
          'default' => 'true',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'edit',
          'image' => 'edit.gif',
          'label' => 'Editar Professor',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'delete',
          'image' => 'delete.gif',
          'label' => 'Apagar Professor',
          0 => '',
        ),
      ),
    ),
  ),
  'search' => 
  array (
    0 => 
    array (
      'table' => 'siscad.Professor',
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