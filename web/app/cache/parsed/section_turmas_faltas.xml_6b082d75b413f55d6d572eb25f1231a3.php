<? 
/* 06-11-2014 22:40:06 */ 

return array (
  'view' => 
  array (
    0 => 
    array (
      'table' => 'public.author',
      'primary' => 'id',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'String',
          'column' => 'first_name',
          'label' => 'First Name | pt_BR: Primeiro Nome',
          0 => '',
        ),
        1 => 
        array (
          'type' => 'String',
          'column' => 'last_name',
          'label' => 'Last Name | pt_BR: Último Nome',
          0 => '',
        ),
      ),
    ),
  ),
  'form' => 
  array (
    0 => 
    array (
      'table' => 'public.author',
      'primary' => 'id',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'String',
          'column' => 'first_name',
          'label' => 'First Name | pt_BR: Primeiro Nome',
          'max-length' => '64',
          'required' => 'true',
          0 => '',
        ),
        1 => 
        array (
          'type' => 'String',
          'column' => 'last_name',
          'label' => 'Last Name | pt_BR: Último Nome',
          'max-length' => '64',
          'required' => 'true',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>