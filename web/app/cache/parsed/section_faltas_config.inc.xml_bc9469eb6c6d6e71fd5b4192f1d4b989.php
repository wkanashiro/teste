<? 
/* 07-11-2014 18:35:11 */ 

return array (
  'action' => 
  array (
    0 => 
    array (
      'name' => 'list',
      'label' => 'List Authors | pt_BR:Listar',
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
      'name' => 'create',
      'label' => 'Create New Author | pt_BR:Criar',
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
  ),
); 
?>