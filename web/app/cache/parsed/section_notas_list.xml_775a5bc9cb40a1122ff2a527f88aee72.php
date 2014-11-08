<? 
/* 01-11-2014 20:42:46 */ 

return array (
  'search' => 
  array (
    0 => 
    array (
      'table' => '_group',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'String',
          'column' => '_name',
          'label' => 'Nome',
          0 => '',
        ),
      ),
    ),
  ),
  'view' => 
  array (
    0 => 
    array (
      'table' => '_group',
      'primary' => '_id',
      'paginate' => '15',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'String',
          'column' => '_name',
          'label' => 'Nome',
          0 => '',
        ),
        1 => 
        array (
          'type' => 'Boolean',
          'column' => '_chat',
          'label' => 'Sala do Chat',
          0 => '',
        ),
        2 => 
        array (
          'type' => 'Boolean',
          'column' => '_admin',
          'label' => 'Administrador',
          0 => '',
        ),
      ),
      'order' => 
      array (
        0 => 
        array (
          'id' => '_group__name',
          'invert' => 'false',
          0 => '',
        ),
      ),
      'icon' => 
      array (
        0 => 
        array (
          'action' => 'view',
          'image' => 'view.gif',
          'label' => 'Visualizar',
          'default' => 'true',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'edit',
          'image' => 'edit.gif',
          'label' => 'Editar',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'delete',
          'image' => 'delete.gif',
          'label' => 'Apagar',
          0 => '',
        ),
        3 => 
        array (
          'action' => 'permissionGroup',
          'image' => 'permission.gif',
          'label' => 'Permissões',
          0 => '',
        ),
        4 => 
        array (
          'action' => 'userGroup',
          'image' => 'group.gif',
          'label' => 'Associar Usuários',
          0 => '',
        ),
        5 => 
        array (
          'action' => 'mailGroup',
          'image' => 'reply.gif',
          'label' => 'Alertas',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>