<? 
/* 04-11-2014 00:16:47 */ 

return array (
  'action' => 
  array (
    0 => 
    array (
      'name' => 'list',
      'label' => 'List Authors | pt_BR: Listar Turmas',
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
      'label' => 'View Author | pt_BR: Visualizar Turma',
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
          'action' => 'list',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'edit',
          0 => '',
        ),
        3 => 
        array (
          'function' => 'print',
          0 => '',
        ),
      ),
    ),
    2 => 
    array (
      'name' => 'view',
      'label' => 'Create New Author | pt_BR: lançar Nota',
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
      'name' => 'create',
      'label' => 'Create New Author | pt_BR: Criar Novo Turma',
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
      'name' => 'edit',
      'label' => 'Edit Author | pt_BR: Editar Turma',
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
    5 => 
    array (
      'name' => 'delete',
      'label' => 'Delete Author | pt_BR: Apagar Turma',
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