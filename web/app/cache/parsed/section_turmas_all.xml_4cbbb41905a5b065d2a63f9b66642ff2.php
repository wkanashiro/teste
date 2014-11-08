<? 
/* 07-11-2014 17:29:02 */ 

return array (
  'form' => 
  array (
    0 => 
    array (
      'table' => 'siscad.turma',
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
          'label' => 'Dados da Turma',
          'field' => 
          array (
            0 => 
            array (
              'type' => 'String',
              'column' => 'codigo',
              'label' => 'Name | pt_BR: Código',
              'max-length' => '18',
              'required' => 'true',
              0 => '',
            ),
            1 => 
            array (
              'type' => 'Date',
              'column' => 'data_inicio',
              'label' => 'Birthdate | pt_BR: Data inicio das aulas',
              'first-year' => '1900',
              'last-year' => '[now]',
              'required' => 'true',
              0 => '',
            ),
            2 => 
            array (
              'type' => 'Date',
              'column' => 'data_fim',
              'label' => 'Birthdate | pt_BR: Data fim das aulas',
              'first-year' => '1900',
              'last-year' => '[now]',
              'required' => 'true',
              0 => '',
            ),
            3 => 
            array (
              'type' => 'Enum',
              'column' => 'quantidade_prova',
              'label' => 'Turno | pt_BR: Número de Provas',
              'required' => 'true',
              'item' => 
              array (
                0 => 
                array (
                  'value' => '1',
                  'label' => 'Uma',
                  0 => '',
                ),
                1 => 
                array (
                  'value' => '2',
                  'label' => 'Duas',
                  0 => '',
                ),
                2 => 
                array (
                  'value' => '3',
                  'label' => 'Três',
                  0 => '',
                ),
                3 => 
                array (
                  'value' => '4',
                  'label' => 'Quatro',
                  0 => '',
                ),
                4 => 
                array (
                  'value' => '5',
                  'label' => 'Cinco',
                  0 => '',
                ),
              ),
            ),
            4 => 
            array (
              'type' => 'Enum',
              'column' => 'valor_prova',
              'label' => 'Turno | pt_BR: Valor das Provas na média do Acadêmico',
              'required' => 'true',
              'help' => 'Professor deve informar a porcentagem equivalente ao valor das provas na média final do Acadêmico',
              'item' => 
              array (
                0 => 
                array (
                  'value' => '50',
                  'label' => '50%',
                  0 => '',
                ),
                1 => 
                array (
                  'value' => '55',
                  'label' => '55%',
                  0 => '',
                ),
                2 => 
                array (
                  'value' => '60',
                  'label' => '60%',
                  0 => '',
                ),
                3 => 
                array (
                  'value' => '65',
                  'label' => '65%',
                  0 => '',
                ),
                4 => 
                array (
                  'value' => '70',
                  'label' => '70%',
                  0 => '',
                ),
                5 => 
                array (
                  'value' => '75',
                  'label' => '75%',
                  0 => '',
                ),
                6 => 
                array (
                  'value' => '80',
                  'label' => '80%',
                  0 => '',
                ),
                7 => 
                array (
                  'value' => '85',
                  'label' => '85%',
                  0 => '',
                ),
                8 => 
                array (
                  'value' => '90',
                  'label' => '90%',
                  0 => '',
                ),
                9 => 
                array (
                  'value' => '95',
                  'label' => '95%',
                  0 => '',
                ),
                10 => 
                array (
                  'value' => '100',
                  'label' => '100% - Selecione essa opção caso não exista Trabalhos',
                  0 => '',
                ),
              ),
            ),
            5 => 
            array (
              'type' => 'Enum',
              'column' => 'quantidade_trabalho',
              'label' => 'Turno | pt_BR: Número de Trabalhos',
              'required' => 'true',
              'tip' => 'Caso não tenha, selecione opção Nenhum',
              'item' => 
              array (
                0 => 
                array (
                  'value' => '0',
                  'label' => 'Nenhum',
                  0 => '',
                ),
                1 => 
                array (
                  'value' => '1',
                  'label' => 'Uma',
                  0 => '',
                ),
                2 => 
                array (
                  'value' => '2',
                  'label' => 'Duas',
                  0 => '',
                ),
                3 => 
                array (
                  'value' => '3',
                  'label' => 'Três',
                  0 => '',
                ),
                4 => 
                array (
                  'value' => '4',
                  'label' => 'Quatro',
                  0 => '',
                ),
                5 => 
                array (
                  'value' => '5',
                  'label' => 'Cinco',
                  0 => '',
                ),
              ),
            ),
            6 => 
            array (
              'type' => 'Enum',
              'column' => 'valor_trabalho',
              'label' => 'Turno | pt_BR: Valor dos Trabalhos na média do Acadêmico',
              'required' => 'true',
              'help' => 'Professor deve informar a porcentagem equivalente ao valor dos trabalhos na média final do Acadêmico',
              'item' => 
              array (
                0 => 
                array (
                  'value' => '0',
                  'label' => 'Disciplina não possui Trabalhos',
                  0 => '',
                ),
                1 => 
                array (
                  'value' => '10',
                  'label' => '10%',
                  0 => '',
                ),
                2 => 
                array (
                  'value' => '15',
                  'label' => '15%',
                  0 => '',
                ),
                3 => 
                array (
                  'value' => '20',
                  'label' => '20%',
                  0 => '',
                ),
                4 => 
                array (
                  'value' => '25',
                  'label' => '25%',
                  0 => '',
                ),
                5 => 
                array (
                  'value' => '30',
                  'label' => '30%',
                  0 => '',
                ),
                6 => 
                array (
                  'value' => '35',
                  'label' => '35%',
                  0 => '',
                ),
                7 => 
                array (
                  'value' => '40',
                  'label' => '40%',
                  0 => '',
                ),
                8 => 
                array (
                  'value' => '45',
                  'label' => '45%',
                  0 => '',
                ),
                9 => 
                array (
                  'value' => '50',
                  'label' => '50%',
                  0 => '',
                ),
              ),
            ),
            7 => 
            array (
              'type' => 'Enum',
              'column' => 'semestre',
              'label' => 'Semestre | pt_BR: Semestre',
              'required' => 'true',
              'item' => 
              array (
                0 => 
                array (
                  'value' => '1Semestre',
                  'label' => '1º Semestre  | pt_BR: 1º Semestre ',
                  0 => '',
                ),
                1 => 
                array (
                  'value' => '2Semestre',
                  'label' => '2º Semestre  | pt_BR: 2º Semestre',
                  0 => '',
                ),
              ),
            ),
            8 => 
            array (
              'type' => 'Integer',
              'column' => 'ano',
              'label' => 'Name | pt_BR: Ano',
              'required' => 'true',
              0 => '',
            ),
            9 => 
            array (
              'type' => 'Enum',
              'column' => 'turno',
              'label' => 'Turno | pt_BR: Turno',
              'required' => 'true',
              'item' => 
              array (
                0 => 
                array (
                  'value' => 'Matutino',
                  'label' => 'Matutino',
                  0 => '',
                ),
                1 => 
                array (
                  'value' => 'Vespertino',
                  'label' => 'Vespertino',
                  0 => '',
                ),
                2 => 
                array (
                  'value' => 'Noturno',
                  'label' => 'Noturno',
                  0 => '',
                ),
                3 => 
                array (
                  'value' => 'Integral',
                  'label' => 'Integral',
                  0 => '',
                ),
              ),
            ),
            10 => 
            array (
              'type' => 'String',
              'column' => 'local',
              'label' => 'Name | pt_BR: Local',
              'max-length' => '50',
              'required' => 'true',
              'tip' => 'Ex.: Multiuso - Sala 03',
              0 => '',
            ),
            11 => 
            array (
              'type' => 'String',
              'column' => 'horario_aula',
              'label' => 'Name | pt_BR: Horarios das aulas',
              'max-length' => '50',
              'required' => 'true',
              'tip' => 'Ex.: 07:00 às 08:40 hs',
              0 => '',
            ),
            12 => 
            array (
              'type' => 'String',
              'column' => 'dias_semana',
              'label' => 'Name | pt_BR: Dias da Semana das aulas',
              'max-length' => '50',
              'required' => 'true',
              'tip' => 'Ex.: Segunda-feira, Quarta-feira e Sexta-Feira',
              0 => '',
            ),
            13 => 
            array (
              'type' => 'Select',
              'column' => 'id_disciplina',
              'label' => 'Type | pt_BR: Disciplina',
              'required' => 'true',
              'link-table' => 'siscad.disciplina',
              'link-column' => 'id',
              'link-view' => 'nome',
              0 => '',
            ),
            14 => 
            array (
              'type' => 'Select',
              'column' => 'id_professor',
              'label' => 'Type | pt_BR: Professor',
              'required' => 'true',
              'link-table' => 'siscad.professor',
              'link-column' => 'id',
              'link-view' => 'nome',
              0 => '',
            ),
            15 => 
            array (
              'type' => 'Boolean',
              'column' => 'ps',
              'label' => 'Type | pt_BR: Possui Prova Optativa',
              'question' => 'true',
              'required' => 'true',
              0 => '',
            ),
          ),
        ),
        1 => 
        array (
          'label' => 'Dias letivos da Turma',
          'field' => 
          array (
            0 => 
            array (
              'type' => 'Collection',
              'id' => 'id',
              'column' => 'id_turma',
              'xml-path' => 'dias_aula.xml',
              'label' => 'Dias letivos',
              0 => '',
            ),
          ),
        ),
      ),
    ),
  ),
); 
?>