<? 
/* 31-10-2014 20:04:02 */ 

return array (
  'permission' => 
  array (
    0 => 
    array (
      'name' => 'SET_ADMIN',
      'label' => 'Pode definir grupos com status de Administrador, ou seja, acesso permanente a este módulo de Controle de Acesso.',
      0 => '',
    ),
  ),
  'action' => 
  array (
    0 => 
    array (
      'name' => 'list',
      'label' => 'Listar Grupos',
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
        2 => 
        array (
          'action' => 'userGroup',
          'image' => 'group.png',
          0 => '',
        ),
        3 => 
        array (
          'action' => 'typeGroup',
          'image' => 'type.png',
          0 => '',
        ),
        4 => 
        array (
          'action' => 'log',
          'image' => 'notes.png',
          0 => '',
        ),
        5 => 
        array (
          'function' => 'rss',
          0 => '',
        ),
      ),
    ),
    1 => 
    array (
      'name' => 'create',
      'label' => 'Inserir Grupo',
      'description' => '',
      'index-to' => 'view',
      0 => '
	',
    ),
    2 => 
    array (
      'name' => 'edit',
      'label' => 'Editar Grupo',
      'description' => '',
      'index-to' => 'view',
      0 => '
	',
    ),
    3 => 
    array (
      'name' => 'delete',
      'label' => 'Apagar Grupo',
      'description' => '',
      'index-to' => 'view',
      0 => '
	',
    ),
    4 => 
    array (
      'name' => 'view',
      'label' => 'Visualizar Grupo',
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
          'action' => 'delete',
          0 => '',
        ),
        3 => 
        array (
          'function' => 'print',
          0 => '',
        ),
      ),
    ),
    5 => 
    array (
      'name' => 'permissionGroup',
      'label' => 'Associar Permissões a Grupos',
      'description' => '',
      0 => '
	',
    ),
    6 => 
    array (
      'name' => 'userGroup',
      'label' => 'Associar Usuários a Grupos',
      'description' => '',
      0 => '
	',
    ),
    7 => 
    array (
      'name' => 'typeGroup',
      'label' => 'Associar Grupos a Tipos de Usuários',
      'description' => '',
      0 => '
	',
    ),
    8 => 
    array (
      'name' => 'mailGroup',
      'label' => 'Associar Alertas a Grupos',
      'description' => '',
      0 => '
	',
    ),
    9 => 
    array (
      'name' => 'log',
      'label' => 'Sistema de Log de Atividades',
      'menu' => 
      array (
        0 => 
        array (
          'function' => 'search',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'list',
          0 => '',
        ),
      ),
    ),
    10 => 
    array (
      'name' => 'logView',
      'label' => 'Visualizar Log de Atividades',
      0 => '
	',
    ),
  ),
); 
?>