<? 
/* 07-11-2014 17:57:41 */ 

return array (
  'section' => 
  array (
    0 => 
    array (
      'label' => 'Home | pt_BR: Página Inicial',
      'name' => 'home',
      'component' => 'global.home',
      'default' => 'true',
      0 => '',
    ),
    1 => 
    array (
      'label' => 'Base of Files | pt_BR: Banco de Arquivos',
      'name' => 'archive',
      'component' => 'global.archive',
      0 => '',
    ),
    2 => 
    array (
      'label' => 'Access Control | pt_BR: Controle de Acesso',
      'name' => 'access',
      'component' => 'global.group',
      'admin' => 'true',
      0 => '',
    ),
    3 => 
    array (
      'label' => 'Managers Users | pt_BR: Usuários Gestores',
      'name' => 'manager',
      'component' => 'global.userPrivate',
      'father' => 'access',
      0 => '',
    ),
    4 => 
    array (
      'label' => 'Siscad | pt_BR: Siscad',
      'name' => 'siscad',
      0 => '',
    ),
    5 => 
    array (
      'label' => 'Cadastrar Professor | pt_BR: Professores',
      'name' => 'professores',
      'component' => 'global.generic',
      'father' => 'siscad',
      0 => '',
    ),
    6 => 
    array (
      'label' => 'Cadastrar Alunos | pt_BR: Alunos',
      'name' => 'alunos',
      'component' => 'global.generic',
      'father' => 'siscad',
      0 => '',
    ),
    7 => 
    array (
      'label' => 'Cadastrar Disciplinas | pt_BR:Disciplinas',
      'name' => 'disciplinas',
      'component' => 'global.generic',
      'father' => 'siscad',
      0 => '',
    ),
    8 => 
    array (
      'label' => 'Cadastrar Curso | pt_BR:Cursos',
      'name' => 'cursos',
      'component' => 'global.generic',
      'father' => 'siscad',
      0 => '',
    ),
    9 => 
    array (
      'label' => 'Cadastrar Turma | pt_BR:Turmas(Disciplinas) ',
      'name' => 'turmas',
      'component' => 'global.generic',
      'father' => 'siscad',
      0 => '',
    ),
    10 => 
    array (
      'label' => 'Matricular Aluno | pt_BR: Matricula Aluno',
      'name' => 'matriculas',
      'component' => 'global.generic',
      'father' => 'siscad',
      0 => '',
    ),
    11 => 
    array (
      'label' => 'Lançar Notas | pt_BR: Lançar Notas',
      'name' => 'notas',
      'component' => 'local/component/siscad.notas/',
      'father' => 'siscad',
      0 => '',
    ),
    12 => 
    array (
      'label' => 'Lançar Faltas | pt_BR: Lançar Faltas',
      'name' => 'faltas',
      'component' => 'global.generic',
      'father' => 'siscad',
      0 => '',
    ),
  ),
); 
?>