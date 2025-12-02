# 🎨 Design Patterns em TypeScript

Implementações completas dos 23 padrões de projeto do livro _Design
Patterns -- GoF_, utilizando TypeScript, organizadas em um monorepo
modular.\
Cada padrão possui documentação própria, testes, exemplos de uso e
implementação isolada.

---

## 1. 🎯 Objetivo

Este repositório foi criado com o propósito de:

- Aprofundar o estudo de **padrões de projeto (Design Patterns)**\
- Implementá-los utilizando **TypeScript**\
- Documentar teoria + prática\
- Criar exemplos claros e reutilizáveis\
- Desenvolver um **monorepo organizado e escalável**\
- Facilitar revisões, consultas e aprendizado contínuo

---

## 2. 🤔 Motivação

Entender padrões de projeto melhora:

- Organização do código\
- Flexibilidade e escalabilidade\
- Reutilização de soluções elegantes\
- Arquitetura e modelagem\
- Comunicação entre desenvolvedores\
- Preparação para entrevistas e desafios técnicos

Este repositório funciona como:

✔ material de estudo\
✔ laboratório de experimentação\
✔ portfólio técnico\
✔ referência para projetos futuros

---

## 3. 💡 Abordagem

### Cada padrão é tratado como um **microprojeto independente**.

Cada pasta dentro de `patterns/` contém:

- Seu próprio `package.json`\

- `tsconfig.json` isolado\

- Estrutura independente de pastas:

      src/
        pattern/
        domain/
        client/
      test/
      README.md

- Testes automatizados com **Vitest**\

- Documentação completa do padrão\

- Exemplos reais e práticos

O monorepo utiliza **npm workspaces** para gerenciamento centralizado.

---

## 4. 🏗 Estrutura Geral do Repositório

    design-patterns-typescript/
    ├─ package.json              # Workspaces do monorepo
    ├─ tsconfig.base.json        # Config base compartilhada
    ├─ README.md                 # Visão geral do projeto
    └─ patterns/
       ├─ strategy/
       │  ├─ package.json
       │  ├─ tsconfig.json
       │  ├─ README.md
       │  ├─ src/
       │  │  ├─ domain/
       │  │  │  └─ Order.ts
       │  │  ├─ pattern/
       │  │  │  ├─ ShippingStrategy.ts
       │  │  │  ├─ NormalShipping.ts
       │  │  │  └· ExpressShipping.ts
       │  │  └─ client/
       │  │     └─ index.ts
       │  └─ test/
       │     └─ pattern.spec.ts
       └─ (observer/, command/, state/, singleton/ ...)

---

## 5. 🧩 Implementação

### Como funciona:

- Cada padrão tem seu próprio ambiente isolado\
- Cada implementação é totalmente independente\
- Há um README detalhado dentro de cada pasta explicando:
  - Teoria\
  - Estrutura\
  - Diagrama\
  - Implementação\
  - Exemplo\
  - Testes\
  - Reflexão

### Tecnologias usadas:

- TypeScript\
- Node.js\
- ts-node\
- Vitest\
- npm workspaces

---

## 6. 💻 Como Executar

### Instalação

```bash
nvm use 24.8.0
npm install
```

### Rodar o projeto de um padrão específico

```bash
cd patterns/strategy
npm start
```

### Rodar todos os testes do monorepo

```bash
npm test
```

---

## 7. 🧪 Testes

Cada padrão contém sua própria pasta `test/`.

### Rodar testes do monorepo inteiro

```bash
npm test
```

### Rodar apenas de um padrão

```bash
cd patterns/strategy
npm test
```

---

# 8. 🚀 Progresso dos Padrões (Checklist)

Progresso global dos 23 padrões GoF + processos internos por padrão.

---

## 🧱 8.1. Checklist Global dos 23 Padrões

### Criacionais

- [] Singleton\
- [] Factory Method\
- [] Abstract Factory\
- [] Builder\
- [] Prototype

### Estruturais

- [] Adapter\
- [] Bridge\
- [] Composite\
- [] Decorator\
- [] Facade\
- [] Flyweight\
- [] Proxy

### Comportamentais

- [] Strategy\
- [] Observer\
- [] Command\
- [] State\
- [] Template Method\
- [] Iterator\
- [] Chain of Responsibility\
- [] Mediator\
- [] Memento\
- [] Visitor\
- [] Interpreter

---

## 📂 8.2. Checklist de Desenvolvimento por Padrão

Use este checklist dentro de cada pasta:

### 🔧 Setup Inicial

- [ ] Criar pasta do padrão em `patterns/<nome>`
- [ ] Criar `package.json`
- [ ] Criar `tsconfig.json`
- [ ] Configurar scripts (`start`, `test`, `build`)
- [ ] Instalar dependências locais (`typescript`, `ts-node`, `vitest`)
- [ ] Criar estrutura:

```{=html}
<!-- -->
```

    src/
      pattern/
      domain/
      client/
    test/
    README.md

---

### 📘 Documentação (`README.md` do padrão)

- [ ] Escrever objetivo\
- [ ] Descrever problema / motivação\
- [ ] Explicar solução do padrão\
- [ ] Criar diagrama (ASCII, imagem ou UML)\
- [ ] Explicar estrutura de arquivos\
- [ ] Criar exemplo de uso\
- [ ] Escrever "Quando usar"\
- [ ] Escrever "Quando NÃO usar"\
- [ ] Comparar com outros padrões\
- [ ] Adicionar referências\
- [ ] Escrever reflexão pessoal

---

### 🧩 Implementação

- [ ] Criar interface principal do padrão\
- [ ] Criar implementações concretas\
- [ ] Criar classe Context (se aplicável)\
- [ ] Criar exemplos em `client/`
- [ ] Testar execução com `npm start`

---

### 🧪 Testes

- [ ] Criar pasta `test/`
- [ ] Testes unitários principais\
- [ ] Testar variações do padrão\
- [ ] Garantir comportamento correto\
- [ ] Cobrir casos alternativos

---

## 9. 🔗 Referências

- _Design Patterns -- GoF_\
- Refactoring Guru: https://refactoring.guru/design-patterns\
- _Dive Into Design Patterns_ --- Alexander Shvets\
- Documentação oficial do TypeScript\
- Padrões presentes em frameworks modernos (Angular, NestJS, React,
  Spring)

---

## ✨ Observação Final

Este repositório funciona como um **bootcamp pessoal de Design
Patterns**, crescendo conforme os padrões são documentados e
implementados.

A rotina recomendada:

**entender → implementar → documentar → comparar → refletir**
