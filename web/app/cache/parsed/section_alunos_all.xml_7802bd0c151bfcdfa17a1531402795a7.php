<? 
/* 02-11-2014 00:20:33 */ 

return array (
  'form' => 
  array (
    0 => 
    array (
      'table' => 'siscad.aluno',
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
          'label' => 'Dados do Acadêmico',
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
              'column' => 'nomepai',
              'label' => 'Name | pt_BR: Nome Pai',
              'max-length' => '128',
              0 => '',
            ),
            3 => 
            array (
              'type' => 'String',
              'column' => 'nomemae',
              'label' => 'Name | pt_BR: Nome Mãe',
              'max-length' => '128',
              0 => '',
            ),
            4 => 
            array (
              'type' => 'String',
              'column' => 'endereco',
              'label' => 'Adress | pt_BR: Endereço',
              'max-length' => '128',
              0 => '',
            ),
            5 => 
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
            6 => 
            array (
              'type' => 'Cpf',
              'column' => 'cpf',
              'label' => 'CPF | pt_BR: CPF',
              0 => '',
            ),
            7 => 
            array (
              'type' => 'Email',
              'column' => 'email',
              'label' => 'Email | pt_BR: Email',
              0 => '',
            ),
            8 => 
            array (
              'type' => 'Enum',
              'column' => 'curso',
              'label' => 'Curso | pt_BR: Curso',
              'item' => 
              array (
                0 => 
                array (
                  'value' => 'AS',
                  'label' => 'Análise de Sistemas  | pt_BR: Análise de Sistemas',
                  0 => '',
                ),
                1 => 
                array (
                  'value' => 'CC',
                  'label' => 'Ciência da Computação  | pt_BR: Ciência da Computação',
                  0 => '',
                ),
                2 => 
                array (
                  'value' => 'EC',
                  'label' => 'Engenharia da Computação  | pt_BR: Engenharia da Computação',
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