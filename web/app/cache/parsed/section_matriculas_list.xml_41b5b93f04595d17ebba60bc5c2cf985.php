<? 
/* 03-11-2014 00:25:15 */ 

return array (
  'view' => 
  array (
    0 => 
    array (
      'table' => 'siscad.matricula',
      'primary' => 'id',
      'paginate' => '15',
      'field' => 
      array (
        0 => 
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
        1 => 
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
        2 => 
        array (
          'type' => 'Date',
          'column' => 'data_matricula',
          'label' => 'Data',
          0 => '',
        ),
        3 => 
        array (
          'type' => 'Integer',
          'column' => 'ano',
          'label' => 'Ano',
          0 => '',
        ),
      ),
      'icon' => 
      array (
        0 => 
        array (
          'action' => 'view',
          'image' => 'view.gif',
          'label' => 'Visualizar Matricula',
          'default' => 'true',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'edit',
          'image' => 'edit.gif',
          'label' => 'Editar Matricula',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'delete',
          'image' => 'delete.gif',
          'label' => 'Apagar Matricula',
          0 => '',
        ),
      ),
    ),
  ),
  'search' => 
  array (
    0 => 
    array (
      'table' => 'siscad.matricula',
      'field' => 
      array (
        0 => 
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
        1 => 
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
        2 => 
        array (
          'type' => 'Date',
          'column' => 'data_matricula',
          'label' => 'Data',
          0 => '',
        ),
        3 => 
        array (
          'type' => 'Integer',
          'column' => 'ano',
          'label' => 'Ano',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>