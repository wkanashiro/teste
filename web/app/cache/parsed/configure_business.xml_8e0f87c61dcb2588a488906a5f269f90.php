<? 
/* 01-11-2014 20:24:53 */ 

return array (
  'section' => 
  array (
    0 => 
    array (
      'label' => 'Home | pt_BR: Página Inicial',
      'name' => 'home',
      'component' => 'global.home',
      'default' => 'true',
      0 => '',
    ),
    1 => 
    array (
      'label' => 'Base of Files | pt_BR: Banco de Arquivos',
      'name' => 'archive',
      'component' => 'global.archive',
      0 => '',
    ),
    2 => 
    array (
      'label' => 'Access Control | pt_BR: Controle de Acesso',
      'name' => 'access',
      'component' => 'global.group',
      'admin' => 'true',
      0 => '',
    ),
    3 => 
    array (
      'label' => 'Managers Users | pt_BR: Usuários Gestores',
      'name' => 'manager',
      'component' => 'global.userPrivate',
      'father' => 'access',
      0 => '',
    ),
    4 => 
    array (
      'label' => 'Siscad | pt_BR: Siscad',
      'name' => 'Siscad',
      'component' => 'local/component/siscad.generic/',
      'father' => 'Siscad',
      0 => '',
    ),
  ),
); 
?>