<? 
/* 03-11-2014 00:28:01 */ 

return array (
  'form' => 
  array (
    0 => 
    array (
      'table' => 'siscad.curso',
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
          'label' => 'Dados do curso',
          'field' => 
          array (
            0 => 
            array (
              'type' => 'String',
              'column' => 'nome',
              'label' => 'Name | pt_BR: Nome',
              'max-length' => '100',
              'required' => 'true',
              0 => '',
            ),
            1 => 
            array (
              'type' => 'String',
              'column' => 'sigla',
              'label' => 'Name | pt_BR: Sigla',
              'max-length' => '18',
              'required' => 'true',
              0 => '',
            ),
            2 => 
            array (
              'type' => 'PlainText',
              'column' => 'descricao',
              'label' => 'Name | pt_BR: Descrição',
              'max-length' => '256',
              'required' => 'true',
              0 => '',
            ),
            3 => 
            array (
              'type' => 'String',
              'column' => 'Coordenadornador',
              'label' => 'Name | pt_BR: Nome Coordenador',
              'max-length' => '100',
              'required' => 'true',
              0 => '',
            ),
            4 => 
            array (
              'type' => 'Email',
              'column' => 'email_coordenador',
              'label' => 'Name | pt_BR: Email Coordenador',
              'required' => 'true',
              0 => '',
            ),
            5 => 
            array (
              'type' => 'Integer',
              'column' => 'duracao_min',
              'label' => 'Name | pt_BR: Duração Minima(anos)',
              'required' => 'true',
              0 => '',
            ),
            6 => 
            array (
              'type' => 'Integer',
              'column' => 'duracao_max',
              'label' => 'Name | pt_BR: Duração Máxima(anos)',
              'required' => 'true',
              0 => '',
            ),
            7 => 
            array (
              'type' => 'Integer',
              'column' => 'carga_horaria_obrigatoria',
              'label' => 'Name | pt_BR: Carga Horária Obrigatória(horas)',
              'required' => 'true',
              0 => '',
            ),
            8 => 
            array (
              'type' => 'Integer',
              'column' => 'carga_horaria_optativa',
              'label' => 'Name | pt_BR: Carga Horária Optativa(horas)',
              'required' => 'true',
              0 => '',
            ),
            9 => 
            array (
              'type' => 'Date',
              'column' => 'data_criacao_curso',
              'label' => 'Birthdate | pt_BR: Data criação do curso',
              'first-year' => '1900',
              'last-year' => '[now]',
              'required' => 'true',
              0 => '',
            ),
          ),
        ),
      ),
    ),
  ),
); 
?>