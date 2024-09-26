# Desafio de Implementação de Aplicação com Helm, Kubernetes, Docker e AWS

Olá, todos! Hoje vou compartilhar minha experiência em um desafio de DevOps onde implementei uma aplicação completa usando Helm, Kubernetes, Docker e AWS. Vou destacar o que foi mais fácil e o que enfrentei de maiores dificuldades durante o desenvolvimento.

## Estrutura do Projeto

O projeto foi organizado nas seguintes partes principais:

mari-app/ │ ├── charts/ # Diretório com os charts do Helm │ └── my-app/ │ ├── templates/ # Manifests do Kubernetes (deployments, services, ingress, configmaps) │ ├── Chart.yaml # Metadados do chart │ └── values.yaml # Valores configuráveis do chart │ ├── Dockerfile # Arquivo para construir a imagem Docker da aplicação ├── .gitlab-ci.yml # Configuração do pipeline CI/CD ├── k8s-config/ # Configurações adicionais do Kubernetes (ConfigMaps, Secrets) │ ├── configmap.yaml │ └── secret.yaml │ └── README.md 

### Tecnologias Utilizadas

- **Helm**: Utilizado para simplificar a implantação dos recursos no Kubernetes. Os charts do Helm facilitam a configuração e a atualização do ambiente com um único comando.
  
- **Kubernetes**: Toda a aplicação foi orquestrada dentro de um cluster Kubernetes, permitindo escalar a aplicação conforme a demanda e gerenciar a infraestrutura de maneira eficiente.

- **Docker**: Utilizado para empacotar a aplicação em contêineres, garantindo portabilidade e consistência em diferentes ambientes.

- **AWS**: O cluster Kubernetes foi hospedado no Amazon EKS (Elastic Kubernetes Service), com integração a outros serviços da AWS, como IAM e VPC.

- **Pipeline CI/CD**: Automatizei o processo de build, teste e deploy utilizando um pipeline CI/CD integrado, o que possibilitou um fluxo de trabalho contínuo e simplificado.

## O que foi mais fácil?

- **Configuração do Dockerfile e Imagens**: Criar o Dockerfile foi uma das tarefas mais tranquilas, já que a padronização do Docker garante um desenvolvimento consistente.

- **Implantação com Helm**: O uso do Helm para gerenciar a implantação foi intuitivo, facilitando a criação de templates reutilizáveis e parametrizados.

- **Integração do Pipeline CI/CD**: Integrar o pipeline para automatizar o processo de build, teste e deploy foi relativamente simples, utilizando ferramentas como Jenkins e GitLab CI/CD.

## O que foi mais difícil?

- **Configuração do Cluster Kubernetes na AWS**: A configuração inicial do cluster no EKS foi desafiadora, exigindo uma série de etapas, como configuração de redes, IAM roles, e políticas de segurança.

- **Gerenciamento de Configurações com ConfigMaps e Secrets**: A separação e o gerenciamento de configurações sensíveis exigiram atenção especial para garantir a segurança da aplicação.

- **Gerenciamento de Logs e Monitoramento**: Integrar ferramentas como Prometheus para monitoramento de métricas e configurar um sistema de logging eficaz foi complexo.

- **Segurança e Controle de Acesso**: Proteger o ambiente exigiu a configuração detalhada de políticas de segurança, incluindo o uso de Network Policies no Kubernetes.

## Conclusão

Esse desafio foi uma oportunidade incrível para aplicar e aprofundar conhecimentos em DevOps e cloud computing. Os aprendizados obtidos durante o processo contribuíram significativamente para melhorar minhas habilidades na integração de diferentes tecnologias em um ambiente escalável e seguro. 

Obrigado por acompanhar minha jornada!