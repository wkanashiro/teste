<? 
/* 06-11-2014 22:55:29 */ 

return array (
  'view' => 
  array (
    0 => 
    array (
      'table' => 'siscad.dias_aula',
      'primary' => 'id',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'Date',
          'column' => 'data',
          'label' => 'Data da aula',
          0 => '',
        ),
      ),
    ),
  ),
  'form' => 
  array (
    0 => 
    array (
      'table' => 'siscad.dias_aula',
      'primary' => 'id',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'Date',
          'column' => 'data',
          'label' => 'Data da aula',
          'required' => 'true',
          0 => '',
        ),
        1 => 
        array (
          'type' => 'Integer',
          'column' => 'quantidade_aulas',
          'label' => 'Número de aulas',
          'required' => 'true',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>