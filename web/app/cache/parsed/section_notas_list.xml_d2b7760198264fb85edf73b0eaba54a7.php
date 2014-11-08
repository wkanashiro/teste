<? 
/* 04-11-2014 00:15:19 */ 

return array (
  'view' => 
  array (
    0 => 
    array (
      'table' => 'siscad.curso',
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
          'type' => 'String',
          'column' => 'sigla',
          'label' => 'Sigla',
          0 => '',
        ),
      ),
      'icon' => 
      array (
        0 => 
        array (
          'action' => 'view',
          'image' => 'view.gif',
          'label' => 'Visualizar curso',
          'default' => 'true',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'edit',
          'image' => 'edit.gif',
          'label' => 'Editar curso',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'delete',
          'image' => 'delete.gif',
          'label' => 'Apagar curso',
          0 => '',
        ),
      ),
    ),
  ),
  'search' => 
  array (
    0 => 
    array (
      'table' => 'siscad.curso',
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
          'type' => 'String',
          'column' => 'sigla',
          'label' => 'Sigla',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>