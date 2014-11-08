<? 
/* 03-11-2014 22:13:15 */ 

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
              'column' => 'semestre',
              'label' => 'Semestre | pt_BR: Sexo',
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
            4 => 
            array (
              'type' => 'Integer',
              'column' => 'ano',
              'label' => 'Name | pt_BR: Ano',
              'required' => 'true',
              0 => '',
            ),
            5 => 
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
            6 => 
            array (
              'type' => 'String',
              'column' => 'local',
              'label' => 'Name | pt_BR: Local',
              'max-length' => '50',
              'required' => 'true',
              'tip' => 'Ex.: Multiuso - Sala 03',
              0 => '',
            ),
            7 => 
            array (
              'type' => 'String',
              'column' => 'horario_aula',
              'label' => 'Name | pt_BR: Horarios das aulas',
              'max-length' => '50',
              'required' => 'true',
              'tip' => 'Ex.: 07:00 às 08:40 hs',
              0 => '',
            ),
            8 => 
            array (
              'type' => 'String',
              'column' => 'dias_semana',
              'label' => 'Name | pt_BR: Dias da Semana das aulas',
              'max-length' => '50',
              'required' => 'true',
              'tip' => 'Ex.: Segunda-feira, Quarta-feira e Sexta-Feira',
              0 => '',
            ),
            9 => 
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
            10 => 
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
            11 => 
            array (
              'type' => 'Boolean',
              'column' => 'ps',
              'label' => 'Type | pt_BR: Possui Prova Optativa',
              'question' => 'true',
              'required' => 'true',
              0 => '',
            ),
            12 => 
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
            13 => 
            array (
              'type' => 'Enum',
              'column' => 'quantidade_trabalho',
              'label' => 'Turno | pt_BR: Número de Trabalhos',
              'required' => 'true',
              'tip' => 'Caso não tenha, selecione \'Nenhum\'',
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
          ),
        ),
      ),
    ),
  ),
); 
?>