<? 
/* 01-11-2014 17:44:53 */ 

return array (
  'search' => 
  array (
    0 => 
    array (
      'table' => 'log',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'String',
          'column' => 'user_name',
          'label' => 'Autor',
          0 => '',
        ),
        1 => 
        array (
          'type' => 'String',
          'column' => 'section_name',
          'label' => 'Seção',
          0 => '',
        ),
        2 => 
        array (
          'type' => 'String',
          'column' => 'action_name',
          'label' => 'Ação',
          0 => '',
        ),
        3 => 
        array (
          'type' => 'String',
          'column' => 'message',
          'label' => 'Conteúdo',
          0 => '',
        ),
        4 => 
        array (
          'type' => 'String',
          'column' => 'ip',
          'label' => 'IP',
          0 => '',
        ),
      ),
    ),
  ),
  'view' => 
  array (
    0 => 
    array (
      'table' => 'log',
      'primary' => 'id',
      'paginate' => '50',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'String',
          'column' => 'user_name',
          'label' => 'Usuário',
          0 => '',
        ),
        1 => 
        array (
          'type' => 'Date',
          'column' => 'date',
          'label' => 'Data',
          'show-time' => 'true',
          'id' => '_DATE_',
          0 => '',
        ),
      ),
      'order' => 
      array (
        0 => 
        array (
          'id' => '_DATE_',
          'invert' => 'true',
          0 => '',
        ),
      ),
      'icon' => 
      array (
        0 => 
        array (
          'function' => '[ajax]',
          'action' => 'logView',
          'image' => 'view.gif',
          'label' => 'Visualizar Log',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>