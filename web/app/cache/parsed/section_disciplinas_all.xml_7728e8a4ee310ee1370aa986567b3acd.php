<? 
/* 02-11-2014 01:03:56 */ 

return array (
  'form' => 
  array (
    0 => 
    array (
      'table' => 'siscad.disciplina',
      'primary' => 'id',
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
      'group' => 
      array (
        0 => 
        array (
          'label' => 'Dados da Disciplina',
          'field' => 
          array (
            0 => 
            array (
              'type' => 'String',
              'column' => 'nome',
              'label' => 'Name | pt_BR: Nome',
              'max-length' => '128',
              0 => '',
            ),
            1 => 
            array (
              'type' => 'String',
              'column' => 'codigo',
              'label' => 'Código | pt_BR: Código',
              'max-length' => '10',
              0 => '',
            ),
            2 => 
            array (
              'type' => 'String',
              'column' => 'descricao',
              'label' => 'Descrição | pt_BR: Descrição',
              'max-length' => '100',
              0 => '',
            ),
            3 => 
            array (
              'type' => 'Integer',
              'column' => 'cargahoraria',
              'label' => 'Carga Horária(hs) | pt_BR: Carga Horária(hs)',
              'max-length' => '5',
              0 => '',
            ),
            4 => 
            array (
              'type' => 'Enum',
              'column' => 'tipo',
              'label' => 'Sexo | pt_BR: Sexo',
              'item' => 
              array (
                0 => 
                array (
                  'value' => 'obrigatoria',
                  'label' => 'Obrigatória  | pt_BR: Obrigatória',
                  0 => '',
                ),
                1 => 
                array (
                  'value' => 'optativa',
                  'label' => 'Optativa | pt_BR: Optativa',
                  0 => '',
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  ),
); 
?>