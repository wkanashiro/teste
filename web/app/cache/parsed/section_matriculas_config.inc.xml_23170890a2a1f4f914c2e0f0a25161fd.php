<? 
/* 03-11-2014 00:20:42 */ 

return array (
  'action' => 
  array (
    0 => 
    array (
      'name' => 'list',
      'label' => 'List Matriculas | pt_BR: Listar Matriculas',
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
      'label' => 'View Matricula | pt_BR: Visualizar Matricula',
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
      'label' => 'Create New Matricula | pt_BR: Criar Nova Matricula',
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
      'label' => 'Edit Matricula | pt_BR: Editar Matricula',
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
      'label' => 'Delete Matricula | pt_BR: Apagar Matricula',
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