<? 
/* 03-11-2014 00:22:29 */ 

return array (
  'form' => 
  array (
    0 => 
    array (
      'table' => 'siscad.matricula',
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
          'label' => 'Dados da Matricula',
          'field' => 
          array (
            0 => 
            array (
              'type' => 'Date',
              'column' => 'data_matricula',
              'label' => 'Birthdate | pt_BR: Data Matricula',
              'first-year' => '1900',
              'last-year' => '[now]',
              'required' => 'true',
              0 => '',
            ),
            1 => 
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
            2 => 
            array (
              'type' => 'Integer',
              'column' => 'ano',
              'label' => 'Name | pt_BR: Ano',
              'required' => 'true',
              0 => '',
            ),
            3 => 
            array (
              'type' => 'Select',
              'column' => 'id_turma',
              'label' => 'Type | pt_BR: Turma',
              'required' => 'true',
              'link-table' => 'siscad.turma',
              'link-column' => 'id',
              'link-view' => 'codigo',
              0 => '',
            ),
            4 => 
            array (
              'type' => 'Select',
              'column' => 'id_aluno',
              'label' => 'Type | pt_BR: Aluno',
              'required' => 'true',
              'link-table' => 'siscad.aluno',
              'link-column' => 'id',
              'link-view' => 'nome',
              0 => '',
            ),
          ),
        ),
      ),
    ),
  ),
); 
?>