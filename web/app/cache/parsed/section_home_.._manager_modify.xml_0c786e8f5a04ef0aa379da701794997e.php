<? 
/* 01-11-2014 21:07:53 */ 

return array (
  'form' => 
  array (
    0 => 
    array (
      'table' => '_user',
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
        2 => 
        array (
          'flag' => 'cancel',
          'action' => '[default]',
          0 => '',
        ),
      ),
      'group' => 
      array (
        0 => 
        array (
          'label' => 'Dados Pessoais',
          'field' => 
          array (
            0 => 
            array (
              'type' => 'String',
              'column' => '_name',
              'label' => 'Nome',
              'required' => 'true',
              'help' => 'Preencha corretamente seu nome completo.',
              0 => '',
            ),
            1 => 
            array (
              'type' => 'String',
              'column' => '_login',
              'label' => 'Login',
              'read-only' => 'true',
              0 => '',
            ),
            2 => 
            array (
              'type' => 'String',
              'column' => '_email',
              'label' => 'E-mail',
              'required' => 'true',
              'help' => 'O e-mail do usuário é fundamental para o envio de senha e outros avisos.',
              0 => '',
            ),
            3 => 
            array (
              'type' => 'File',
              'column' => 'photo',
              'label' => 'Foto',
              'owner-only' => 'true',
              'mime-type' => 
              array (
                0 => 'image/jpeg',
                1 => 'image/gif',
                2 => 'image/pjpeg',
                3 => 'image/png',
                4 => 'image/x-bitmap',
                5 => 'image/photoshop',
                6 => 'image/bmp',
              ),
            ),
            4 => 
            array (
              'type' => 'Date',
              'column' => 'birth_date',
              'label' => 'Data de Nascimento',
              'first-year' => '1900',
              0 => '',
            ),
            5 => 
            array (
              'type' => 'Phone',
              'column' => 'phone',
              'label' => 'Telefone',
              0 => '',
            ),
            6 => 
            array (
              'type' => 'Phone',
              'column' => 'mobile',
              'label' => 'Celular',
              0 => '',
            ),
            7 => 
            array (
              'type' => 'String',
              'column' => 'url',
              'label' => 'Página Pessoal',
              'value' => 'http://',
              0 => '',
            ),
          ),
        ),
        1 => 
        array (
          'label' => 'Endereço',
          'field' => 
          array (
            0 => 
            array (
              'type' => 'String',
              'column' => 'street',
              'label' => 'Logradouro',
              0 => '',
            ),
            1 => 
            array (
              'type' => 'Integer',
              'column' => 'number',
              'label' => 'Número',
              0 => '',
            ),
            2 => 
            array (
              'type' => 'String',
              'column' => 'quarter',
              'label' => 'Bairro',
              0 => '',
            ),
            3 => 
            array (
              'type' => 'String',
              'column' => 'complement',
              'label' => 'Complemento',
              0 => '',
            ),
            4 => 
            array (
              'type' => 'Cep',
              'column' => 'cep',
              'label' => 'CEP',
              0 => '',
            ),
            5 => 
            array (
              'type' => 'State',
              'column' => 'state',
              'label' => 'Estado',
              'city-id' => '_CITY_',
              0 => '',
            ),
            6 => 
            array (
              'type' => 'City',
              'column' => 'city',
              'label' => 'Município',
              'id' => '_CITY_',
              0 => '',
            ),
          ),
        ),
        2 => 
        array (
          'label' => 'Preferências',
          'field' => 
          array (
            0 => 
            array (
              'type' => 'Enum',
              'column' => '_language',
              'label' => 'Idioma',
              'item' => 
              array (
                0 => 
                array (
                  'value' => 'pt_BR',
                  'label' => 'Português',
                  0 => '',
                ),
                1 => 
                array (
                  'value' => 'en_US',
                  'label' => 'English',
                  0 => '',
                ),
                2 => 
                array (
                  'value' => 'es_ES',
                  'label' => 'Español',
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