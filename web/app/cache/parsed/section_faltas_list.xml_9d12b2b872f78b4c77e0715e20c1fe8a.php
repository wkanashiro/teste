<? 
/* 07-11-2014 18:32:57 */ 

return array (
  'view' => 
  array (
    0 => 
    array (
      'table' => 'siscad.faltas',
      'primary' => 'id',
      'paginate' => '15',
      'icon' => 
      array (
        0 => 
        array (
          'action' => 'view',
          'image' => 'view.gif',
          'label' => 'Visualizar falta',
          'default' => 'true',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'edit',
          'image' => 'edit.gif',
          'label' => 'Editar falta',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'delete',
          'image' => 'delete.gif',
          'label' => 'Apagar falta',
          0 => '',
        ),
      ),
    ),
  ),
  'search' => 
  array (
    0 => 
    array (
      'table' => 'siscad.faltas',
      0 => '
',
    ),
  ),
); 
?>