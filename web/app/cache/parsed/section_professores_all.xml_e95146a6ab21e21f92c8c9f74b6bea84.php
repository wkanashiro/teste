<? 
/* 01-11-2014 23:49:15 */ 

return array (
  'form' => 
  array (
    0 => 
    array (
      'table' => 'siscad.professor',
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
          'label' => 'Dados do Professor',
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
              'type' => 'Date',
              'column' => 'datanascimento',
              'label' => 'Birthdate | pt_BR: Data de Nascimento',
              'first-year' => '1900',
              'last-year' => '[now]',
              0 => '',
            ),
            2 => 
            array (
              'type' => 'String',
              'column' => 'escolaridade',
              'label' => 'Escolaridade | pt_BR: Escolaridade',
              'max-length' => '100',
              0 => '',
            ),
            3 => 
            array (
              'type' => 'String',
              'column' => 'endereco',
              'label' => 'Adress | pt_BR: Endereço',
              'max-length' => '100',
              0 => '',
            ),
            4 => 
            array (
              'type' => 'Enum',
              'column' => 'sexo',
              'label' => 'Sexo | pt_BR: Sexo',
              'item' => 
              array (
                0 => 
                array (
                  'value' => 'Feminino',
                  'label' => 'Feminino  | pt_BR: Feminino',
                  0 => '',
                ),
                1 => 
                array (
                  'value' => 'Masculino',
                  'label' => 'Masculino | pt_BR: Masculino',
                  0 => '',
                ),
              ),
            ),
            5 => 
            array (
              'type' => 'Cpf',
              'column' => 'cpf',
              'label' => 'CPF | pt_BR: CPF',
              0 => '',
            ),
            6 => 
            array (
              'type' => 'Email',
              'column' => 'email',
              'label' => 'Email | pt_BR: Email',
              0 => '',
            ),
          ),
        ),
      ),
    ),
  ),
); 
?>