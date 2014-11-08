<? 
/* 02-11-2014 22:11:15 */ 

return array (
  'view' => 
  array (
    0 => 
    array (
      'table' => 'siscad.aluno',
      'primary' => 'id',
      'paginate' => '15',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'String',
          'column' => 'nome',
          'label' => 'Nome',
          0 => '',
        ),
        1 => 
        array (
          'type' => 'Date',
          'column' => 'datanascimento',
          'label' => 'Data de Nascimento',
          0 => '',
        ),
        2 => 
        array (
          'type' => 'String',
          'column' => 'idcurso',
          'label' => 'Curso',
          0 => '',
        ),
      ),
      'icon' => 
      array (
        0 => 
        array (
          'action' => 'view',
          'image' => 'view.gif',
          'label' => 'Visualizar aluno',
          'default' => 'true',
          0 => '',
        ),
        1 => 
        array (
          'action' => 'edit',
          'image' => 'edit.gif',
          'label' => 'Editar aluno',
          0 => '',
        ),
        2 => 
        array (
          'action' => 'delete',
          'image' => 'delete.gif',
          'label' => 'Apagar aluno',
          0 => '',
        ),
      ),
    ),
  ),
  'search' => 
  array (
    0 => 
    array (
      'table' => 'siscad.aluno',
      'field' => 
      array (
        0 => 
        array (
          'type' => 'String',
          'column' => 'nome',
          'label' => 'Nome',
          0 => '',
        ),
        1 => 
        array (
          'type' => 'Date',
          'column' => 'datanascimento',
          'label' => 'Data de Nascimento',
          0 => '',
        ),
        2 => 
        array (
          'type' => 'String',
          'column' => 'siscad.curso.nome',
          'label' => 'Curso',
          0 => '',
        ),
      ),
    ),
  ),
); 
?>