<? 
/* 01-11-2014 22:33:16 */ 

return array (
  'action' => 
  array (
    0 => 
    array (
      'name' => 'list',
      'label' => 'List Authors | pt_BR: Listar Professors',
      'default' => 'true',
      'description' => '',
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
      'label' => 'View Author | pt_BR: Visualizar Professor',
      'description' => '',
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
      'name' => 'create',
      'label' => 'Create New Author | pt_BR: Criar Novo Professor',
      'description' => '',
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
      'label' => 'Edit Author | pt_BR: Editar Professor',
      'description' => '',
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
      'label' => 'Delete Author | pt_BR: Apagar Professor',
      'description' => '',
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