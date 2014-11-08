<? 
/* 01-11-2014 20:34:21 */ 

return array (
  'permission' => 
  array (
    0 => 
    array (
      'name' => '_VIEW_ALL_',
      'label' => 'Pode visualizar todos os empréstimos.',
      0 => '',
    ),
  ),
  'action' => 
  array (
    0 => 
    array (
      'name' => 'list',
      'label' => 'Listar Empréstimo',
      'default' => 'true',
      'menu' => 
      array (
        0 => 
        array (
          'action' => 'create',
          0 => '',
        ),
        1 => 
        array (
          'function' => 'search',
          0 => '',
        ),
      ),
    ),
    1 => 
    array (
      'name' => 'view',
      'label' => 'Visualizar Empréstimo',
      'menu' => 
      array (
        0 => 
        array (
          'action' => 'list',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'edit',
          0 => '',
        ),
        2 => 
        array (
          'function' => 'print',
          0 => '',
        ),
      ),
    ),
    2 => 
    array (
      'menu' => 
      array (
        0 => 
        array (
          'function' => 'save',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'list',
          'image' => 'close.png',
          0 => '',
        ),
      ),
    ),
    3 => 
    array (
      'name' => 'edit',
      'label' => 'Editar Empréstimo',
      'menu' => 
      array (
        0 => 
        array (
          'function' => 'save',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'list',
          'image' => 'close.png',
          0 => '',
        ),
      ),
    ),
    4 => 
    array (
      'name' => 'delete',
      'label' => 'Apagar Empréstimo',
      'menu' => 
      array (
        0 => 
        array (
          'function' => 'delete',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'list',
          'image' => 'close.png',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>