<? 
/* 31-10-2014 20:09:44 */ 

return array (
  'form' => 
  array (
    0 => 
    array (
      'table' => '_group',
      'primary' => '_id',
      'go-to' => 
      array (
        0 => 
        array (
          'flag' => 'success',
          'action' => '[default]',
          0 => '',
        ),
        1 => 
        array (
          'flag' => 'fail',
          'action' => '[same]',
          0 => '',
        ),
      ),
      'field' => 
      array (
        0 => 
        array (
          'type' => 'String',
          'column' => '_name',
          'label' => 'Nome',
          'required' => 'true',
          'max-length' => '32',
          'help' => 'Nome do Grupo de Usuários.',
          0 => '',
        ),
        1 => 
        array (
          'type' => 'String',
          'column' => '_description',
          'label' => 'Descrição',
          'help' => 'Uma breve descrição sobre o grupo e sua função.',
          0 => '',
        ),
        2 => 
        array (
          'type' => 'Boolean',
          'column' => '_admin',
          'label' => 'Administrador',
          'restrict' => 'SET_ADMIN',
          'help' => 'Se esta opção for marcada os usuários deste grupo sempre terão acesso às alguma seções especiais de configuração da aplicação.',
          0 => '',
        ),
        3 => 
        array (
          'type' => 'Boolean',
          'column' => '_chat',
          'label' => 'Sala do Chat',
          'help' => 'Esta opção faz com que sempre seja criada uma sala no chat para os usuários deste grupo (e apenas para eles).',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>