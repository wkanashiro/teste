<? 
/* 31-10-2014 20:04:02 */ 

return array (
  'directive' => 
  array (
    0 => 
    array (
      'name' => '_NEED_UPDATE_AFTER_DAYS_',
      'value' => '0',
      0 => '',
    ),
  ),
  'action' => 
  array (
    0 => 
    array (
      'name' => 'home',
      'label' => 'Monitor do Sistema',
      'default' => 'true',
      'menu' => 
      array (
        0 => 
        array (
          'function' => 'search',
          'image' => 'create.png',
          'label' => 'Adicionar Feed RSS',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'profile',
          'image' => 'personal.png',
          0 => '',
        ),
      ),
    ),
    1 => 
    array (
      'name' => 'profile',
      'label' => 'Dados Pessoais',
      'menu' => 
      array (
        0 => 
        array (
          'function' => 'search',
          'image' => 'permission.png',
          'label' => 'Mudar Senha',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'personal',
          'image' => 'edit.png',
          0 => '',
        ),
      ),
    ),
    2 => 
    array (
      'name' => 'personal',
      'label' => 'Editar Dados Pessoais',
      'description' => '',
      'menu' => 
      array (
        0 => 
        array (
          'function' => 'search',
          'image' => 'permission.png',
          'label' => 'Mudar Senha',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>