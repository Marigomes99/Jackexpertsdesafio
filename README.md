# Desafio: Aplicação simples com página HTML customizável, definida via Helm e hospedada em um cluster Kubernetes aws. 

Este repositório contém a implementação de um desafio DevOps, onde foi desenvolvida uma aplicação web simples usando Docker, Kubernetes, Helm e AWS. O objetivo é fornecer uma aplicação configurável via Helm e hospedada em um cluster Kubernetes, com suporte a CI/CD e outras práticas recomendadas de DevOps.
## Estrutura do Projeto

mari-app/
├── charts/                # Diretório com os charts do Helm
├── controllers/           # Controladores de lógica de negócio
│   ├── pagecontroller.js  # Controlador para lidar com rotas de página
│   └── renderpage.js      # Função para renderizar páginas HTML
├── routes/                # Rotas da aplicação
│   └── index.js           # Definição das rotas principais
├── tests/                 # Testes automatizados
│   └── apptest.js         # Testes de integração e unitários
└── my-app/
    ├── templates/         # Manifests do Kubernetes (deployments, services, ingress, configmaps)
    ├── Chart.yaml         # Metadados do chart
    └── values.yaml        # Valores configuráveis do chart
├── public/                # Diretório para arquivos estáticos
│   ├── index.html         # Página inicial da aplicação
│   ├── style.css          # Arquivo de estilo da aplicação
│   └── imagem.png         # Imagem utilizada na interface da aplicação
├── .dockerignore          # Arquivo para excluir itens do build Docker
├── .env                   # Variáveis de ambiente
├── .ebextensions/         # Configurações para Elastic Beanstalk (AWS)
├── Dockerfile             # Arquivo para construir a imagem Docker da aplicação
├── .gitlab-ci.yml         # Configuração do pipeline CI/CD
├── k8s-config/            # Configurações adicionais do Kubernetes (ConfigMaps, Secrets)
│   ├── configmap.yaml
│   └── secret.yaml
├── package.json           # Definições de dependências e scripts do Node.js
├── package-lock.json      # Versões exatas das dependências instaladas
└── README.md              # Documentação do projeto

Tecnologias Utilizadas
Helm: Utilizado para gerenciar a implantação de recursos no Kubernetes. O chart Helm define todos os objetos necessários para a aplicação.
Kubernetes: Orquestração de contêineres, permitindo escalar a aplicação conforme a demanda e gerenciar a infraestrutura.
Docker: Utilizado para empacotar a aplicação em contêineres, garantindo portabilidade e consistência.
AWS EKS: Cluster Kubernetes hospedado no Amazon EKS (Elastic Kubernetes Service), com integração a outros serviços da AWS.
CI/CD Pipeline: Implementado com .gitlab-ci.yml para automatizar o processo de build, teste e deploy da aplicação.
Requisitos
Docker
Kubernetes
Helm
AWS CLI e kubectl configurados
Git
Node.js (para desenvolvimento local) 
Configuração e Implantação
1. Clonar o Repositório
bash
Copiar código
git clone https://github.com/Marigomes99/DesafioJackExperts.git
cd DesafioJackExperts/mari-app
2. Construir a Imagem Docker
bash
Copiar código
docker build -t marigomes99/desafio-jackexperts .
3. Publicar a Imagem no Docker Hub
bash
Copiar código
docker push marigomes99/desafio-jackexperts
4. Configuração do Cluster Kubernetes
Certifique-se de que o cluster Kubernetes está configurado e você tem acesso a ele via kubectl. Adicione os repositórios do Helm necessários:

bash
Copiar código
helm repo add stable https://charts.helm.sh/stable
helm repo update
5. Implantar a Aplicação com Helm
bash
Copiar código
helm install my-app ./charts/my-app
6. Acessar a Aplicação
O Helm configurará um serviço do tipo LoadBalancer ou Ingress, dependendo da configuração. Acesse a URL do serviço para visualizar a aplicação.

7. Pipeline CI/CD
Este projeto possui um pipeline CI/CD definido no arquivo .gitlab-ci.yml. Para ativar o pipeline, você deve configurar as variáveis do GitLab para integração com o Docker Hub e o Kubernetes. As etapas incluem:

Build da imagem Docker
Push para o Docker Hub
Deploy no cluster Kubernetes
Configurações
Variáveis de Ambiente
O arquivo .env contém variáveis de ambiente que podem ser usadas para configurar a aplicação:

PORT: Porta onde a aplicação irá rodar.
NODE_ENV: Ambiente (development, production).
DB_HOST: Endereço do banco de dados, se aplicável.
Configurações do Helm
O arquivo values.yaml permite personalizar as seguintes opções:

replicaCount: Número de réplicas do pod.
image.repository: Repositório da imagem Docker.
image.tag: Tag da imagem Docker.
service.type: Tipo de serviço Kubernetes (ClusterIP, NodePort, LoadBalancer).
ingress.enabled: Habilitar/desabilitar o Ingress.
configMap: Configurações específicas da aplicação.
ConfigMaps e Secrets
Os arquivos em k8s-config/configmap.yaml e k8s-config/secret.yaml são usados para armazenar configurações não sensíveis e sensíveis da aplicação, respectivamente. Certifique-se de atualizar esses arquivos conforme necessário.

Testes
Os testes estão localizados na pasta tests/ e podem ser executados com o comando:

bash
Copiar código
npm test
Monitoramento e Logs
Para monitorar a aplicação, você pode utilizar ferramentas como:

Prometheus: Monitoramento de métricas.
Grafana: Visualização de métricas.
EFK Stack (Elasticsearch, Fluentd, Kibana): Centralização de logs.
Conclusão
Este projeto demonstra o uso de tecnologias modernas de DevOps, como Docker, Kubernetes, Helm e AWS, para criar uma aplicação escalável e configurável. Sinta-se à vontade para explorar o código e contribuir com melhorias!

Licença
Este projeto está licenciado sob a MIT License.
