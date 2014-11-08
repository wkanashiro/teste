<? 
/* 01-11-2014 20:35:26 */ 

return array (
  'search' => 
  array (
    0 => 
    array (
      'table' => '_user',
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
      'table' => '_user',
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
          'type' => 'String',
          'column' => '_email',
          'label' => 'E-mail',
          0 => '',
        ),
        2 => 
        array (
          'type' => 'Phone',
          'column' => 'phone',
          'label' => 'Telefone',
          0 => '',
        ),
        3 => 
        array (
          'type' => 'Phone',
          'column' => 'mobile',
          'label' => 'Celular',
          0 => '',
        ),
      ),
      'icon' => 
      array (
        0 => 
        array (
          'action' => 'view',
          'image' => 'view.gif',
          'label' => 'Visualizar Dados do Usuário',
          'default' => 'true',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'edit',
          'image' => 'edit.gif',
          'label' => 'Editar Dados do Usuário',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'delete',
          'image' => 'delete.gif',
          'label' => 'Apagar Usuário',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>