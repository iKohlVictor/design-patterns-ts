---
stepsCompleted: [1, 2, 3, 4, 7, 9, 10, 11]
inputDocuments:
  - docs/analysis/product-brief-design-patterns-ts-2025-12-10.md
documentCounts:
  briefs: 1
  research: 0
  brainstorming: 0
  projectDocs: 0
workflowType: "prd"
lastStep: 11
project_name: "design-patterns-ts"
user_name: "ian"
date: "2025-12-10"
---

# Product Requirements Document - design-patterns-ts

**Author:** ian
**Date:** 2025-12-10

---

## Executive Summary

**design-patterns-ts** é um monorepo educacional que implementa os 23 padrões de projeto do Gang of Four (GoF) em TypeScript, criado para capacitar desenvolvedores a tomar decisões arquiteturais mais conscientes e fundamentadas.

O projeto preenche a lacuna crítica entre conhecimento teórico e aplicação prática de design patterns. Enquanto recursos tradicionais focam apenas no "como implementar", este projeto responde às perguntas mais desafiadoras: **"quando usar?"** e **"por que escolher este padrão?"**.

### Problema Central

Times de desenvolvimento frequentemente possuem conhecimento superficial sobre design patterns - sabem que existem, mas enfrentam dificuldades para decidir quando e onde aplicá-los. Essa falta de discernimento prático resulta em:

- **Over-engineering**: Aplicação forçada de patterns em contextos inadequados
- **Sub-utilização**: Problemas que se beneficiariam de patterns resolvidos com soluções ad-hoc complexas
- **Decisões baseadas em "feeling"**: Escolhas sem critérios objetivos

### Solução Proposta

Cada pattern inclui:

- Implementação completa e executável em TypeScript
- Testes automatizados demonstrando validação
- Documentação estruturada com casos de uso reais
- Guidelines explícitos de "quando usar" e "quando NÃO usar"

### What Makes This Special

A combinação quádrupla única que diferencia este projeto:

1. **Guidelines de decisão** - Critérios claros para identificar cenários apropriados
2. **Implementação prática** - Código executável, não exemplos estáticos
3. **Testes automatizados** - Demonstração de como validar código com patterns
4. **Documentação estruturada** - Formato otimizado para consulta rápida durante desenvolvimento

## Project Classification

**Technical Type:** Developer Tool (Monorepo/Library)
**Domain:** General Software Development
**Complexity:** Low
**Project Context:** Greenfield - new project

Este é um projeto de ferramenta para desenvolvedores, focado em educação e referência técnica. Não possui requisitos regulatórios especiais, permitindo foco total na qualidade do conteúdo técnico e experiência do desenvolvedor.

---

## Success Criteria

### User Success

O projeto é considerado bem-sucedido para o usuário quando:

1. **Evita erros arquiteturais** - Usuário lê seção "quando NÃO usar" e evita aplicar pattern incorretamente
2. **Distingue entre patterns** - Compreende diferenças sutis (Strategy vs State, Factory vs Abstract Factory)
3. **Escolhe assertivamente** - Identifica qual pattern funciona melhor para cada problema específico
4. **Implementa com confiança** - Cria patterns baseados nos exemplos, com testes passando
5. **Valida corretamente** - Usa testes como referência para validar implementações próprias

**Momento "Aha!"**: Quando o desenvolvedor aplica um pattern no projeto real e o código fica mais limpo, testável e manutenível.

### Business Success

| Fase           | Prazo               | Meta Principal                           |
| -------------- | ------------------- | ---------------------------------------- |
| Estudo Pessoal | 3 meses             | 12 patterns implementados e documentados |
| Pré-lançamento | Antes de abrir repo | Mínimo 15 patterns completos             |
| Open Source    | Após 15 patterns    | Abertura do repositório público          |

**Métricas pós-lançamento (GitHub):**

- Contribuições da comunidade
- Forks do repositório
- Visualizações e stars

### Technical Success

| Critério            | Meta                                                      |
| ------------------- | --------------------------------------------------------- |
| Cobertura de testes | 90%+ em cada pattern                                      |
| Documentação        | Todas as seções do template preenchidas                   |
| Executabilidade     | `npm start` e `npm test` funcionando em todos os patterns |
| CI/CD               | GitHub Actions workflow configurado                       |
| Consistência        | Todos os patterns seguindo estrutura padrão do monorepo   |

### Measurable Outcomes

**Em 3 meses:**

- [ ] 12 patterns completos (Strategy → Flyweight)
- [ ] Estrutura do monorepo estável
- [ ] CLI de criação de patterns operacional
- [ ] 90%+ cobertura de testes em cada pattern

**Antes do lançamento público:**

- [ ] 15 patterns completos (+ Command, State, Template Method)
- [ ] README principal completo
- [ ] GitHub Actions configurado
- [ ] Revisão de qualidade em todos os patterns

## Product Scope

### MVP - Estudo Pessoal (3 meses)

**Patterns incluídos (12):**

1. Strategy ✓ (já iniciado)
2. Observer
3. Singleton
4. Factory Method
5. Abstract Factory
6. Builder
7. Prototype
8. Adapter
9. Facade
10. Decorator
11. Composite
12. Proxy

**Infraestrutura:**

- Monorepo com workspaces independentes
- CLI para criação de novos patterns
- Vitest como framework de testes
- TypeScript strict mode

### Launch Ready - Pré-lançamento (15 patterns)

**Patterns adicionais (3):** 13. Bridge 14. Flyweight 15. Command

**Qualidade:**

- 90%+ cobertura de testes em todos
- Documentação completa
- GitHub Actions CI/CD
- README principal explicativo

### Vision - Projeto Completo (23 patterns)

**Patterns restantes (8):** 16. State 17. Template Method 18. Chain of Responsibility 19. Mediator 20. Iterator 21. Memento 22. Visitor 23. Interpreter

**Comunidade:**

- Contribuições externas
- Issues e discussões ativas
- Reconhecimento no ecossistema TypeScript

---

## User Journeys

### Journey 1: Carlos Silva - Do "Feeling" à Confiança Arquitetural

Carlos é um desenvolvedor pleno de 28 anos que trabalha em uma squad de produto com 6 devs. Ele conhece design patterns "de ouvir falar" - já leu sobre Factory, Strategy, Observer - mas enfrenta insegurança constante sobre quando aplicá-los. Já cometeu over-engineering aplicando Singleton desnecessariamente e também perdeu oportunidades de simplificar código por medo de exagerar.

Durante um code review, um colega questiona: "Por que você não usou Strategy aqui?" Carlos não sabe explicar sua escolha. Frustrado, ele busca recursos online e encontra o **design-patterns-ts** indicado por seu tech lead.

Ao clonar o repositório, Carlos executa `npm start` no pattern Strategy e em menos de 10 minutos está vendo código real funcionando. Ele lê a seção "Quando Usar" e reconhece exatamente o cenário do seu código atual. Mais importante: a seção "Quando NÃO Usar" explica por que Singleton teria sido inadequado naquele projeto anterior.

Na próxima discussão de arquitetura, Carlos propõe usar Decorator para resolver um problema de extensibilidade. Quando questionado, ele explica os critérios de decisão com confiança, citando cenários apropriados. O líder técnico aprova sem discussão prolongada. Carlos percebe que evoluiu de executor para arquiteto de suas próprias soluções.

**Capabilities reveladas:**

- Exemplos executáveis com `npm start`
- Setup rápido (< 10 minutos)
- Seções claras de "Quando Usar" e "Quando NÃO Usar"
- Casos de uso conectados a problemas reais

---

### Journey 2: Ana Costa - Da Observadora à Participante Ativa

Ana é uma desenvolvedora júnior de 24 anos em seu primeiro emprego. Com 1.5 anos de experiência em TypeScript, ela domina os fundamentos mas design patterns são território novo. Nas reuniões técnicas, ouve colegas falarem sobre "usar Strategy aqui" ou "aplicar Factory Method" e se sente perdida, com receio de parecer menos técnica.

Determinada a crescer, Ana dedica algumas horas por semana para estudar. Ela descobre o **design-patterns-ts** e decide estudar sistematicamente, começando pelos patterns fundamentais.

Para cada pattern, Ana segue um ritual: lê a documentação completa, executa os exemplos localmente, analisa o código-fonte, roda os testes para entender como validar, e depois tenta modificar os exemplos para experimentar. Ela mantém notas pessoais conectando patterns com situações que observa no trabalho.

O momento de virada acontece em um code review quando um colega menciona "poderíamos usar Observer aqui". Ana não só entende a sugestão como consegue visualizar a implementação e contribui: "Sim, e precisamos cuidar para não criar memory leaks nos listeners - vi isso nos testes do repositório que estou estudando."

A partir desse dia, Ana deixa de ser observadora passiva para ser participante ativa nas discussões técnicas.

**Capabilities reveladas:**

- Progressão estruturada por categorias (Creational → Structural → Behavioral)
- Testes como ferramenta de aprendizado
- Documentação que explica o "por quê", não só o "como"
- Exemplos modificáveis para experimentação

---

### Journey 3: Ian (Autor) - Do Estudo à Referência Compartilhável

Ian é um desenvolvedor que observa gaps recorrentes de conhecimento sobre design patterns em seus times. Ele decide criar um recurso estruturado que combine teoria, prática e guidelines de decisão.

O processo começa como estudo pessoal: Ian implementa cada pattern seguindo um roadmap progressivo, documentando não apenas o código mas também suas reflexões sobre quando o pattern seria adequado ou inadequado.

Usando a CLI do monorepo, ele cria novos patterns com estrutura consistente. Para cada um, escreve implementação, testes com 90%+ de cobertura, e documentação completa incluindo a seção crítica de "Quando NÃO Usar" - algo que recursos tradicionais ignoram.

Após completar 15 patterns, Ian abre o repositório. O formato padronizado permite que qualquer desenvolvedor encontre rapidamente o que precisa. Em code reviews, ele compartilha links específicos: "Olha a seção de decisão do Strategy, explica exatamente esse cenário."

O projeto se torna referência interna no time, e eventualmente atrai contribuidores externos que adicionam casos de uso reais e melhorias na documentação.

**Capabilities reveladas:**

- CLI para criação de patterns com estrutura padronizada
- Template de documentação com seções obrigatórias
- GitHub Actions para garantir qualidade
- Estrutura que facilita contribuições futuras

---

### Journey Requirements Summary

As jornadas revelam as seguintes capabilities essenciais para o **design-patterns-ts**:

| Capability                         | Carlos | Ana | Ian |
| ---------------------------------- | ------ | --- | --- |
| Setup rápido (< 10 min)            | ✓      | ✓   |     |
| Exemplos executáveis (`npm start`) | ✓      | ✓   | ✓   |
| Testes automatizados (`npm test`)  | ✓      | ✓   | ✓   |
| Seção "Quando Usar"                | ✓      | ✓   | ✓   |
| Seção "Quando NÃO Usar"            | ✓      | ✓   | ✓   |
| Progressão estruturada             |        | ✓   | ✓   |
| Exemplos modificáveis              |        | ✓   |     |
| CLI de criação                     |        |     | ✓   |
| Template padronizado               |        |     | ✓   |
| GitHub Actions CI/CD               |        |     | ✓   |

---

## Developer Tool Specific Requirements

### Project-Type Overview

**design-patterns-ts** é um monorepo TypeScript educacional, distribuído exclusivamente via clone de repositório Git. Não será publicado como pacote npm, mantendo foco na experiência de estudo e consulta local.

### Technical Stack

| Componente      | Tecnologia                    |
| --------------- | ----------------------------- |
| Linguagem       | TypeScript 5.7+ (strict mode) |
| Runtime         | Node.js                       |
| Package Manager | npm (workspaces)              |
| Test Framework  | Vitest                        |
| IDEs Alvo       | VS Code, Cursor               |

### Installation & Setup

**Requisitos:**

- Node.js (versão LTS recomendada)
- npm

**Processo de Setup:**

```bash
git clone <repository-url>
cd design-patterns-ts
npm install
```

**Execução por Pattern:**

```bash
cd patterns/<pattern-name>
npm start    # Executa exemplo
npm test     # Roda testes
```

### Monorepo Structure

```
design-patterns-ts/
├── patterns/
│   └── <pattern-name>/
│       ├── package.json
│       ├── tsconfig.json
│       ├── README.md
│       ├── src/
│       │   ├── pattern/      # Implementação do pattern
│       │   ├── domain/       # Entidades de domínio
│       │   └── client/       # Exemplos executáveis
│       └── test/
│           └── pattern.spec.ts
├── scripts/
│   └── create-pattern.ts     # CLI de criação
├── docs/
│   └── ROADMAP.md
└── README.md
```

### Documentation Strategy

**Documentação Self-Contained:**

- Cada pattern possui README.md completo
- Estrutura padronizada com seções obrigatórias
- Código como documentação primária (exemplos executáveis)
- Testes como especificação de comportamento

**Template de README por Pattern:**

- 🎯 Objetivo
- 🤔 Problema / Motivação
- 💡 Solução do Padrão
- 🏗 Estrutura
- 🧩 Componentes
- 💻 Como Executar
- 🧪 Testes
- 📚 Quando Usar
- ⚠️ Quando NÃO Usar
- 🔗 Relação com Outros Padrões
- 📖 Referências
- 💭 Reflexão Pessoal

### CLI de Criação

**Comando:**

```bash
npm run create:pattern <pattern-name>
```

**Funcionalidade:**

- Cria estrutura de diretórios padronizada
- Gera arquivos boilerplate (package.json, tsconfig.json, README.md)
- Configura scripts npm (start, build, test)
- Mantém consistência entre todos os patterns

### IDE Experience

**Otimizado para VS Code / Cursor:**

- TypeScript strict mode para melhor intellisense
- Estrutura de projeto navegável
- Testes integrados via Vitest extension
- Formatação consistente

### Implementation Considerations

**Qualidade de Código:**

- TypeScript strict (no `any`)
- ESLint configurado
- Prettier para formatação
- 90%+ cobertura de testes

**Experiência do Desenvolvedor:**

- Setup em < 10 minutos
- Cada pattern independente (pode estudar isoladamente)
- Exemplos executáveis imediatamente
- Testes como documentação de comportamento esperado

---

## Functional Requirements

### Pattern Implementation

- **FR1:** Desenvolvedor pode clonar o repositório e executar setup com um único comando (`npm install`)
- **FR2:** Desenvolvedor pode executar exemplo de qualquer pattern via `npm start` no diretório do pattern
- **FR3:** Desenvolvedor pode executar testes de qualquer pattern via `npm test` no diretório do pattern
- **FR4:** Cada pattern possui implementação completa e funcional em TypeScript strict mode
- **FR5:** Cada pattern possui exemplo executável demonstrando uso prático no diretório `client/`
- **FR6:** Cada pattern possui testes automatizados no diretório `test/`

### Pattern Documentation

- **FR7:** Cada pattern possui README.md com seção "Objetivo" explicando o propósito do pattern
- **FR8:** Cada pattern possui README.md com seção "Problema/Motivação" descrevendo quando o pattern é útil
- **FR9:** Cada pattern possui README.md com seção "Solução do Padrão" explicando a abordagem
- **FR10:** Cada pattern possui README.md com seção "Quando Usar" com critérios claros de aplicação
- **FR11:** Cada pattern possui README.md com seção "Quando NÃO Usar" com anti-patterns e armadilhas
- **FR12:** Cada pattern possui README.md com seção "Relação com Outros Padrões" para navegação cruzada
- **FR13:** Cada pattern possui README.md com seção "Reflexão Pessoal" do autor sobre aprendizados

### CLI & Tooling

- **FR14:** Autor pode criar novo pattern via CLI (`npm run create:pattern <name>`)
- **FR15:** CLI gera estrutura de diretórios completa (src/pattern, src/domain, src/client, test)
- **FR16:** CLI gera arquivos boilerplate (package.json, tsconfig.json, README.md template)
- **FR17:** CLI configura scripts npm (start, build, test) automaticamente

### Monorepo Infrastructure

- **FR18:** Cada pattern é um workspace npm independente
- **FR19:** Desenvolvedor pode instalar dependências de todos os patterns com um único comando
- **FR20:** Desenvolvedor pode estudar qualquer pattern isoladamente sem dependências de outros patterns
- **FR21:** Projeto possui README.md principal com visão geral e navegação para todos os patterns

### Quality Assurance

- **FR22:** Cada pattern possui cobertura de testes de no mínimo 90%
- **FR23:** GitHub Actions executa testes automaticamente em pull requests
- **FR24:** GitHub Actions valida build de TypeScript em pull requests
- **FR25:** Projeto possui configuração de ESLint para consistência de código
- **FR26:** Projeto possui configuração de Prettier para formatação consistente

---

## Non-Functional Requirements

### Developer Experience (DX)

- **NFR1:** Setup inicial do projeto deve completar em menos de 5 minutos em conexão padrão
- **NFR2:** Comando `npm start` deve executar exemplo em menos de 3 segundos
- **NFR3:** Comando `npm test` deve completar suite de testes em menos de 10 segundos por pattern
- **NFR4:** Mensagens de erro devem ser claras e indicar caminho para solução
- **NFR5:** README de cada pattern deve ser compreensível sem necessidade de ler código primeiro

### Maintainability

- **NFR6:** Código deve seguir convenções TypeScript e boas práticas documentadas
- **NFR7:** Cada pattern deve ser modificável sem impactar outros patterns
- **NFR8:** Dependências devem ser mínimas e justificadas
- **NFR9:** Código deve ser auto-documentado com nomes claros e JSDoc quando necessário

### Consistency

- **NFR10:** Todos os patterns devem seguir exatamente a mesma estrutura de diretórios
- **NFR11:** Todos os READMEs devem seguir o mesmo template com todas as seções
- **NFR12:** Nomenclatura de arquivos e pastas deve ser consistente (kebab-case)
- **NFR13:** Estilo de código deve ser uniforme via ESLint + Prettier

### Quality Metrics

- **NFR14:** Cobertura de testes mínima de 90% em cada pattern
- **NFR15:** Zero erros de TypeScript em modo strict
- **NFR16:** Zero warnings de ESLint no código final
- **NFR17:** Build deve completar sem erros em todas as versões LTS do Node.js
