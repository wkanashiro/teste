
Titan Framework: Ambiente de Desenvolvimento
============================================

Para iniciar o desenvolvimento com o Titan, exporte (utilizando o Subversion) esta pasta e suas subpastas em um diretório qualquer do seu sistema operacional. Por exmeplo:

svn export https://svn.cnpgc.embrapa.br/titan/instance C:\Projetos\meu_projeto\

Instale em seu sistema operacional o VirtualBox e o VirtualBox Extension Pack:

https://www.virtualbox.org/wiki/Downloads

Em seguida, faça download e instale o Vagrant:

http://www.vagrantup.com/downloads.html

Feito isso, a base-box para o Titan deve ser carregada em seu sistema para ser utilizada nos diversos projetos implementados com o framework. Basta abrir o command (cmd.exe) e dar o comando:

C:\> vagrant box add TitanBox 'http://titan.cnpgc.embrapa.br/Titan.box'

A box têm aproximadamente 550 MB, então pode demorar um pouco. Outra forma de carregar a box é fazendo o download pelo seu gerenciador preferido e passar, no último parâmetro, o caminho para o arquivo 'Titan.box' em seu sistema de arquivos.

Pronto, agora acesse a pasta 'box' de seu projeto e dê o comando:

C:\Projetos\meu_projeto\box> vagrant up

A máquina virtual irá iniciar em background. Ela roda um sistema Debian Wheezy 64 bits com Apache 2.2, PHP 5.4 e PostgreSQL 9.1.

A VM possui todos os recursos recomendados para o Titan já instalados e já têm o CORE embutido. Neste caso o CORE está na pasta "/var/www/titan".

Os diretórios da sua instância serão mapeados dentro deste sistema Linux da seguinte forma:

C:\Projetos\meu_projeto\
|- app	> /var/www/app
|- box	> /vagrant
|- db	> /var/lib/postgresql/db

Além disso, por padrão as seguintes portas serão mapeadas:
- A porta 80 (Apache) da guest para a 8090 do host;
- A porta 5432 (PostgreSQL) da guest para a 5431 do host; e
- A porta 22 (SSH) da guest para a 2222 do host.

Assim, a máquina virtual ficará acessível por SSH. Como a porta do SSH está mapeada para o host, basta abrir seu cliente SSH e conectar em "localhost" ou "127.0.0.1" na porta "2222". Os usuários disponíveis são:

- login "root" com senha "vagrant"; e
- login "vagrant" com senha "vagrant".

Caso tenha um cliente SSH de linha de comando instalado e acessível pelo path, outra forma de acessar o shell da VM é simplesmente executar o seguinte comando:

C:\Projetos\meu_projeto\box> vagrant ssh

Pronto, todos os arquivos colocados na pasta "app" do seu projeto serão sincronizados na VM e estarão disponíveis pelo navegador em "http://localhost:8090/". A mesma lógica é aplicada ao PostgreSQL ("localhost" na porta "5431").

O banco de dados da instância deve agora ser importado para o ambiente:

C:\Projetos\meu_projeto\box> vagrant ssh
$ sudo su - postgres
$ createdb -E utf8 -O titan nome-do-db
$ psql -d nome-do-db -U titan < db/last.sql

Repare que já existe um usuário denominado 'titan' (com senha 'titan') criado no PostgreSQL.

Caso tenha dúvidas, recomenda-se a leitura da documentação do Titan disponível em:

http://cloud.cnpgc.embrapa.br/titan/documentacao/
