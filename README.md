# Projeto Jack Experts

## Descrição
O Projeto Jack Experts é uma aplicação projetada para o desafio sugerido na vaga de estagio para a jack experts. A aplicação é implementada utilizando Node.js, Docker e Kubernetes, com a infraestrutura hospedada na AWS utilizando o Elastic Kubernetes Service (EKS).

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript.
- **Docker**: Contêinerização da aplicação.
- **Kubernetes**: Orquestração de contêineres.
- **AWS EKS**: Serviço de Kubernetes gerenciado pela AWS.

## Estrutura do Projeto
- `k8s/`: Contém os manifestos Kubernetes (deployment, service, ingress, etc.)
- `src/`: Código-fonte da aplicação.
- `Dockerfile`: Arquivo de configuração do Docker para construir a imagem da aplicação.

## Configuração do Cluster Kubernetes na AWS

O cluster Kubernetes está configurado para ser executado no Amazon EKS. A configuração do kubeconfig para o acesso ao cluster é a seguinte:

```yaml
apiVersion: v1
kind: Config
clusters:
- name: Projeto-Jack-Experts
  cluster:
    server: https://9AD51B6B31191769BDB7BC81E9A923F7.sk1.sa-east-1.eks.amazonaws.com
    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0t...
users:
- name: arn:aws:eks:sa-east-1:396913734918:cluster/Projeto-Jack-Experts
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1beta1
      command: aws
      args:
      - --region
      - sa-east-1
      - eks
      - get-token
      - --cluster-name
      - Projeto-Jack-Experts


#   D e s a f i o J a c k E x p e r t s  
 #   D e s a f i o J a c k E x p e r t s  
 