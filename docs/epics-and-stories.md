# Épicos e Histórias - design-patterns-ts

**Autor:** PM BMAD  
**Data:** 2025-12-10  
**Baseado em:** [PRD - design-patterns-ts](./prd.md)

---

## Visão Geral do Backlog

Este documento contém a estrutura completa de Épicos e User Stories para o projeto **design-patterns-ts**, derivada diretamente do PRD aprovado.

### Fases do Roadmap

| Fase                 | Prazo               | Patterns    | Status          |
| -------------------- | ------------------- | ----------- | --------------- |
| MVP - Estudo Pessoal | 3 meses             | 12 patterns | 🟡 Em progresso |
| Launch Ready         | Antes de abrir repo | 15 patterns | ⚪ Pendente     |
| Projeto Completo     | Contínuo            | 23 patterns | ⚪ Pendente     |

---

## Índice de Épicos

1. [EPIC-001: Infraestrutura do Monorepo](#epic-001-infraestrutura-do-monorepo)
2. [EPIC-002: CLI de Criação de Patterns](#epic-002-cli-de-criação-de-patterns)
3. [EPIC-003: Template de Documentação](#epic-003-template-de-documentação)
4. [EPIC-004: Padrões Criacionais](#epic-004-padrões-criacionais)
5. [EPIC-005: Padrões Estruturais](#epic-005-padrões-estruturais)
6. [EPIC-006: Padrões Comportamentais](#epic-006-padrões-comportamentais)
7. [EPIC-007: Qualidade e CI/CD](#epic-007-qualidade-e-cicd)
8. [EPIC-008: Experiência do Desenvolvedor](#epic-008-experiência-do-desenvolvedor)

---

## EPIC-001: Infraestrutura do Monorepo

**Descrição:** Estabelecer a estrutura base do monorepo com workspaces npm independentes, configurações TypeScript compartilhadas e scripts utilitários.

**Valor de Negócio:** Permite que cada pattern seja estudado isoladamente enquanto mantém consistência de configuração e tooling.

**Requisitos Relacionados:** FR18, FR19, FR20, NFR7, NFR10

### Histórias

---

#### US-001: Setup Inicial do Monorepo ✅

**Como** desenvolvedor autor,  
**Quero** configurar o monorepo com npm workspaces,  
**Para que** cada pattern seja um pacote independente com configuração compartilhada.

**Critérios de Aceitação:**

- [x] `package.json` root configurado com workspaces apontando para `patterns/*`
- [x] `tsconfig.base.json` com configurações TypeScript strict compartilhadas
- [x] `tsconfig.json` root que estende o base
- [x] `npm install` na raiz instala dependências de todos os patterns
- [x] Cada pattern pode ser executado independentemente via `cd patterns/<name> && npm start`

**Tamanho:** M  
**Prioridade:** P0 - Crítico  
**Sprint:** 1  
**Status:** ✅ Implementado

---

#### US-002: Configuração de Vitest Global ✅

**Como** desenvolvedor autor,  
**Quero** configurar Vitest como framework de testes no monorepo,  
**Para que** todos os patterns usem a mesma configuração de testes.

**Critérios de Aceitação:**

- [x] `vitest.config.ts` na raiz do projeto
- [x] Comando `npm test` na raiz executa testes de todos os patterns
- [x] Comando `npm test` em cada pattern executa apenas testes daquele pattern
- [x] Relatório de cobertura disponível via `npm run test:coverage`

**Tamanho:** S  
**Prioridade:** P0 - Crítico  
**Sprint:** 1  
**Status:** ✅ Implementado

---

#### US-003: Estrutura de Diretórios Padrão ✅

**Como** desenvolvedor autor,  
**Quero** definir uma estrutura de diretórios padrão para cada pattern,  
**Para que** a navegação e compreensão do código seja consistente.

**Critérios de Aceitação:**

- [x] Cada pattern segue estrutura: `src/pattern/`, `src/domain/`, `src/client/`, `test/`
- [x] `src/pattern/` contém interfaces e implementações concretas
- [x] `src/domain/` contém entidades de domínio (quando aplicável)
- [x] `src/client/` contém exemplo executável
- [x] `test/` contém specs do Vitest

**Tamanho:** S  
**Prioridade:** P0 - Crítico  
**Sprint:** 1  
**Status:** ✅ Implementado

---

## EPIC-002: CLI de Criação de Patterns

**Descrição:** Ferramenta de linha de comando para gerar estrutura de novos patterns automaticamente, garantindo consistência e reduzindo boilerplate.

**Valor de Negócio:** Acelera a criação de novos patterns e elimina erros de estrutura.

**Requisitos Relacionados:** FR14, FR15, FR16, FR17

### Histórias

---

#### US-004: Geração de Estrutura de Diretórios ✅

**Como** desenvolvedor autor,  
**Quero** executar `npm run create:pattern <name>` para criar um novo pattern,  
**Para que** a estrutura de diretórios seja criada automaticamente.

**Critérios de Aceitação:**

- [x] Comando aceita nome do pattern em kebab-case
- [x] Cria diretório `patterns/<pattern-name>/`
- [x] Cria subdiretórios: `src/pattern/`, `src/domain/`, `src/client/`, `test/`
- [x] Erro claro se pattern já existe
- [x] Erro claro se nome inválido (não kebab-case)

**Tamanho:** M  
**Prioridade:** P0 - Crítico  
**Sprint:** 1  
**Status:** ✅ Implementado

---

#### US-005: Geração de Arquivos Boilerplate ✅

**Como** desenvolvedor autor,  
**Quero** que a CLI gere arquivos boilerplate,  
**Para que** eu comece a implementar imediatamente sem configuração manual.

**Critérios de Aceitação:**

- [x] Gera `package.json` com nome `@patterns/<pattern-name>`, scripts e devDependencies
- [x] Gera `tsconfig.json` que estende `../../tsconfig.base.json`
- [x] Gera `README.md` com template completo e seções placeholder
- [x] Gera `src/pattern/index.ts` com interface base
- [x] Gera `src/client/index.ts` com estrutura de main()
- [x] Gera `test/pattern.spec.ts` com describe vazio

**Tamanho:** M  
**Prioridade:** P0 - Crítico  
**Sprint:** 1  
**Status:** ✅ Implementado

---

#### US-006: Validação e Mensagens da CLI ✅

**Como** desenvolvedor autor,  
**Quero** mensagens claras de sucesso e erro na CLI,  
**Para que** eu saiba exatamente o que foi criado ou qual problema ocorreu.

**Critérios de Aceitação:**

- [x] Sucesso: lista todos os arquivos criados
- [x] Sucesso: mostra próximos passos (`cd patterns/<name>`, `npm install`, etc.)
- [x] Erro: mensagem clara indicando o problema
- [x] Erro: sugestão de correção quando possível

**Tamanho:** S  
**Prioridade:** P1 - Importante  
**Sprint:** 2  
**Status:** ✅ Implementado

---

## EPIC-003: Template de Documentação

**Descrição:** Definir e implementar template padronizado de README para cada pattern, com seções obrigatórias focadas em decisão arquitetural.

**Valor de Negócio:** Diferencia o projeto de recursos tradicionais ao fornecer guidelines de "quando usar" e "quando NÃO usar".

**Requisitos Relacionados:** FR7-FR13, NFR5, NFR11

### Histórias

---

#### US-007: Template README com Seções Obrigatórias ✅

**Como** desenvolvedor estudante,  
**Quero** que cada README siga um template padronizado,  
**Para que** eu saiba onde encontrar cada tipo de informação.

**Critérios de Aceitação:**

- [x] Template inclui: 🎯 Objetivo
- [x] Template inclui: 🤔 Problema / Motivação
- [x] Template inclui: 💡 Solução do Padrão
- [x] Template inclui: 🏗 Estrutura
- [x] Template inclui: 🧩 Componentes
- [x] Template inclui: 💻 Como Executar
- [x] Template inclui: 🧪 Testes
- [x] Template inclui: 📚 Quando Usar
- [x] Template inclui: ⚠️ Quando NÃO Usar
- [x] Template inclui: 🔗 Relação com Outros Padrões
- [x] Template inclui: 📖 Referências
- [x] Template inclui: 💭 Reflexão Pessoal

**Tamanho:** M  
**Prioridade:** P0 - Crítico  
**Sprint:** 1  
**Status:** ✅ Implementado

---

#### US-008: Seção "Quando Usar" com Critérios Claros

**Como** desenvolvedor estudante (Carlos),  
**Quero** critérios claros de quando aplicar cada pattern,  
**Para que** eu tome decisões arquiteturais fundamentadas.

**Critérios de Aceitação:**

- [ ] Lista checklist de condições que indicam uso do pattern
- [ ] Exemplos de cenários reais do dia-a-dia de desenvolvimento
- [ ] Linguagem clara e objetiva (não acadêmica)
- [ ] Mínimo de 3 cenários documentados

**Tamanho:** S  
**Prioridade:** P0 - Crítico  
**Sprint:** Por pattern

---

#### US-009: Seção "Quando NÃO Usar" com Anti-patterns

**Como** desenvolvedor estudante (Carlos),  
**Quero** saber quando NÃO usar cada pattern,  
**Para que** eu evite over-engineering e aplicação incorreta.

**Critérios de Aceitação:**

- [ ] Lista sinais de que o pattern seria inadequado
- [ ] Descreve armadilhas comuns de má aplicação
- [ ] Indica alternativas mais simples quando aplicável
- [ ] Mínimo de 2 anti-patterns documentados

**Tamanho:** S  
**Prioridade:** P0 - Crítico  
**Sprint:** Por pattern

---

## EPIC-004: Padrões Criacionais

**Descrição:** Implementação dos 5 padrões criacionais do GoF: Singleton, Factory Method, Abstract Factory, Builder, Prototype.

**Valor de Negócio:** Ensina técnicas de criação de objetos flexíveis e desacopladas.

**Requisitos Relacionados:** FR4, FR5, FR6

### Histórias

---

#### US-010: Singleton Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Singleton em TypeScript,  
**Para que** eu entenda quando garantir instância única é apropriado.

**Critérios de Aceitação:**

- [ ] Implementação thread-safe com lazy initialization
- [ ] Exemplo: Logger ou ConfigManager
- [ ] Documentação de anti-patterns (God Object, Hidden Dependencies)
- [ ] Testes validando instância única
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P1 - Importante  
**Sprint:** 2

---

#### US-011: Factory Method Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Factory Method,  
**Para que** eu delegue criação de objetos para subclasses.

**Critérios de Aceitação:**

- [ ] Interface Product e ConcreteProducts
- [ ] Creator abstrato com factory method
- [ ] Exemplo: Criação de documentos ou transportes
- [ ] Comparação com Simple Factory
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P1 - Importante  
**Sprint:** 2

---

#### US-012: Abstract Factory Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Abstract Factory,  
**Para que** eu crie famílias de objetos relacionados.

**Critérios de Aceitação:**

- [ ] Interface AbstractFactory com múltiplos create methods
- [ ] Famílias concretas implementando a interface
- [ ] Exemplo: UI cross-platform ou temas
- [ ] Diferenciação clara de Factory Method
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P1 - Importante  
**Sprint:** 3

---

#### US-013: Builder Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Builder,  
**Para que** eu construa objetos complexos passo a passo.

**Critérios de Aceitação:**

- [ ] Interface Builder com métodos de construção
- [ ] Director opcional para orquestrar construção
- [ ] Exemplo: Construção de queries SQL ou meal orders
- [ ] Fluent interface demonstrada
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P1 - Importante  
**Sprint:** 3

---

#### US-014: Prototype Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Prototype,  
**Para que** eu clone objetos sem depender de suas classes concretas.

**Critérios de Aceitação:**

- [ ] Interface Cloneable com método clone()
- [ ] Deep clone vs shallow clone demonstrado
- [ ] Exemplo: Clonagem de shapes ou configurações
- [ ] Registry de protótipos opcional
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P1 - Importante  
**Sprint:** 3

---

## EPIC-005: Padrões Estruturais

**Descrição:** Implementação dos 7 padrões estruturais do GoF: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.

**Valor de Negócio:** Ensina composição de classes e objetos para formar estruturas maiores.

**Requisitos Relacionados:** FR4, FR5, FR6

### Histórias

---

#### US-015: Adapter Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Adapter,  
**Para que** eu integre interfaces incompatíveis.

**Critérios de Aceitação:**

- [ ] Object Adapter (composição) implementado
- [ ] Class Adapter (herança) mencionado como alternativa
- [ ] Exemplo: Integração de API legada
- [ ] Comparação com Facade
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P1 - Importante  
**Sprint:** 4

---

#### US-016: Facade Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Facade,  
**Para que** eu simplifique interfaces complexas.

**Critérios de Aceitação:**

- [ ] Facade encapsulando subsistema complexo
- [ ] Subsistema com múltiplas classes
- [ ] Exemplo: Video conversion ou home theater
- [ ] Anti-pattern: God Facade documentado
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P1 - Importante  
**Sprint:** 4

---

#### US-017: Decorator Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Decorator,  
**Para que** eu adicione responsabilidades dinamicamente.

**Critérios de Aceitação:**

- [ ] Component interface e ConcreteComponent
- [ ] BaseDecorator e ConcreteDecorators
- [ ] Exemplo: Streams de dados ou notificações
- [ ] Composição de múltiplos decorators demonstrada
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P1 - Importante  
**Sprint:** 4

---

#### US-018: Composite Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Composite,  
**Para que** eu trate objetos individuais e composições uniformemente.

**Critérios de Aceitação:**

- [ ] Component interface comum
- [ ] Leaf e Composite implementando interface
- [ ] Exemplo: File system ou menu hierárquico
- [ ] Operações recursivas demonstradas
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P1 - Importante  
**Sprint:** 5

---

#### US-019: Proxy Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Proxy,  
**Para que** eu controle acesso a objetos.

**Critérios de Aceitação:**

- [ ] Proxy implementando mesma interface do Subject
- [ ] Virtual Proxy (lazy loading) demonstrado
- [ ] Exemplo: Lazy loading de imagens ou cache
- [ ] Protection Proxy mencionado como variação
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P1 - Importante  
**Sprint:** 5

---

#### US-020: Bridge Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Bridge,  
**Para que** eu separe abstração de implementação.

**Critérios de Aceitação:**

- [ ] Abstraction com referência a Implementor
- [ ] RefinedAbstraction e ConcreteImplementors
- [ ] Exemplo: Shapes com renderizadores ou devices com remotes
- [ ] Diferenciação clara de Adapter
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P2 - Desejável  
**Sprint:** 6

---

#### US-021: Flyweight Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Flyweight,  
**Para que** eu compartilhe estado entre múltiplos objetos.

**Critérios de Aceitação:**

- [ ] Flyweight com estado intrínseco
- [ ] FlyweightFactory gerenciando pool
- [ ] Estado extrínseco passado via parâmetros
- [ ] Exemplo: Caracteres em editor de texto ou particles
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P2 - Desejável  
**Sprint:** 6

---

## EPIC-006: Padrões Comportamentais

**Descrição:** Implementação dos 11 padrões comportamentais do GoF: Strategy, Observer, Command, State, Template Method, Iterator, Chain of Responsibility, Mediator, Memento, Visitor, Interpreter.

**Valor de Negócio:** Ensina comunicação efetiva entre objetos e distribuição de responsabilidades.

**Requisitos Relacionados:** FR4, FR5, FR6

### Histórias

---

#### US-022: Strategy Pattern ✅

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Strategy,  
**Para que** eu defina família de algoritmos intercambiáveis.

**Critérios de Aceitação:**

- [x] Interface Strategy com método execute
- [x] ConcreteStrategies implementando variações (4 strategies: Express, Standard, Economy, Pickup)
- [x] Context delegando execução para strategy (ShippingCalculator)
- [x] Exemplo: Cálculo de shipping com Order e Address
- [x] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P0 - Crítico  
**Sprint:** 1  
**Status:** ✅ Implementado

---

#### US-023: Observer Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Observer,  
**Para que** eu notifique múltiplos objetos sobre mudanças de estado.

**Critérios de Aceitação:**

- [ ] Subject com attach/detach/notify
- [ ] Observer interface com método update
- [ ] Exemplo: Event system ou newsletter
- [ ] Memory leak warning em "Quando NÃO Usar"
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P1 - Importante  
**Sprint:** 2

---

#### US-024: Command Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Command,  
**Para que** eu encapsule requisições como objetos.

**Critérios de Aceitação:**

- [ ] Command interface com execute()
- [ ] ConcreteCommands com receiver
- [ ] Invoker armazenando e executando commands
- [ ] Undo/Redo demonstrado
- [ ] Exemplo: Text editor ou orders
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P2 - Desejável  
**Sprint:** 7

---

#### US-025: State Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de State,  
**Para que** eu altere comportamento baseado em estado interno.

**Critérios de Aceitação:**

- [ ] State interface com métodos de comportamento
- [ ] ConcreteStates implementando cada estado
- [ ] Context delegando para state atual
- [ ] Transições de estado demonstradas
- [ ] Exemplo: Vending machine ou player
- [ ] Diferenciação clara de Strategy
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P2 - Desejável  
**Sprint:** 7

---

#### US-026: Template Method Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Template Method,  
**Para que** eu defina esqueleto de algoritmo com passos customizáveis.

**Critérios de Aceitação:**

- [ ] Abstract class com template method
- [ ] Hook methods para customização
- [ ] ConcreteClasses implementando hooks
- [ ] Exemplo: Data mining ou game AI
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P2 - Desejável  
**Sprint:** 7

---

#### US-027: Chain of Responsibility Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Chain of Responsibility,  
**Para que** eu passe requisições por cadeia de handlers.

**Critérios de Aceitação:**

- [ ] Handler interface com setNext e handle
- [ ] BaseHandler implementando encadeamento
- [ ] ConcreteHandlers com lógica específica
- [ ] Exemplo: Middleware ou suporte técnico
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P3 - Futuro  
**Sprint:** 8

---

#### US-028: Mediator Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Mediator,  
**Para que** eu reduza dependências diretas entre objetos.

**Critérios de Aceitação:**

- [ ] Mediator interface com notify
- [ ] ConcreteMediator coordenando colleagues
- [ ] Components comunicando via mediator
- [ ] Exemplo: Chat room ou form validation
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P3 - Futuro  
**Sprint:** 8

---

#### US-029: Iterator Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Iterator,  
**Para que** eu percorra coleções sem expor representação interna.

**Critérios de Aceitação:**

- [ ] Iterator interface com next/hasNext
- [ ] IterableCollection interface
- [ ] ConcreteIterator e ConcreteCollection
- [ ] Exemplo: Custom collection traversal
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P3 - Futuro  
**Sprint:** 8

---

#### US-030: Memento Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Memento,  
**Para que** eu capture e restaure estado de objetos.

**Critérios de Aceitação:**

- [ ] Originator criando mementos
- [ ] Memento encapsulando estado
- [ ] Caretaker armazenando histórico
- [ ] Exemplo: Editor com undo ou game saves
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P3 - Futuro  
**Sprint:** 9

---

#### US-031: Visitor Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Visitor,  
**Para que** eu adicione operações sem modificar classes.

**Critérios de Aceitação:**

- [ ] Visitor interface com visit methods
- [ ] Element interface com accept
- [ ] Double dispatch demonstrado
- [ ] Exemplo: AST traversal ou export formats
- [ ] README completo com todas as seções

**Tamanho:** M  
**Prioridade:** P3 - Futuro  
**Sprint:** 9

---

#### US-032: Interpreter Pattern

**Como** desenvolvedor estudante,  
**Quero** estudar a implementação de Interpreter,  
**Para que** eu interprete linguagens simples.

**Critérios de Aceitação:**

- [ ] AbstractExpression interface
- [ ] TerminalExpression e NonterminalExpression
- [ ] Context passando dados
- [ ] Exemplo: Math expressions ou SQL parser
- [ ] Anti-patterns: complexidade e performance
- [ ] README completo com todas as seções

**Tamanho:** L  
**Prioridade:** P3 - Futuro  
**Sprint:** 9

---

## EPIC-007: Qualidade e CI/CD

**Descrição:** Configurar ferramentas de qualidade de código e pipeline de integração contínua.

**Valor de Negócio:** Garante consistência de código e automatiza validação em contribuições.

**Requisitos Relacionados:** FR22-FR26, NFR14-NFR17

### Histórias

---

#### US-033: Configuração de ESLint

**Como** desenvolvedor autor,  
**Quero** ESLint configurado com regras TypeScript,  
**Para que** o código siga padrões consistentes.

**Critérios de Aceitação:**

- [ ] ESLint instalado com @typescript-eslint
- [ ] Regras de TypeScript strict habilitadas
- [ ] Comando `npm run lint` funcionando
- [ ] Zero warnings no código existente

**Tamanho:** S  
**Prioridade:** P1 - Importante  
**Sprint:** 2

---

#### US-034: Configuração de Prettier

**Como** desenvolvedor autor,  
**Quero** Prettier configurado para formatação,  
**Para que** o código tenha formatação uniforme.

**Critérios de Aceitação:**

- [ ] Prettier instalado e configurado
- [ ] Integração com ESLint (sem conflitos)
- [ ] Comando `npm run format` funcionando
- [ ] `.prettierrc` com regras do projeto

**Tamanho:** S  
**Prioridade:** P1 - Importante  
**Sprint:** 2

---

#### US-035: GitHub Actions CI Pipeline

**Como** desenvolvedor autor,  
**Quero** GitHub Actions validando PRs,  
**Para que** problemas sejam detectados antes do merge.

**Critérios de Aceitação:**

- [ ] Workflow executando em push e PR
- [ ] Steps: install, lint, type-check, test
- [ ] Build validado em Node LTS
- [ ] Badge de status no README

**Tamanho:** M  
**Prioridade:** P2 - Desejável  
**Sprint:** 5

---

#### US-036: Relatório de Cobertura de Testes

**Como** desenvolvedor autor,  
**Quero** relatório de cobertura automatizado,  
**Para que** eu monitore a qualidade dos testes.

**Critérios de Aceitação:**

- [ ] Vitest gerando relatório de cobertura
- [ ] Threshold de 90% configurado
- [ ] Relatório visível em CI
- [ ] Falha se cobertura abaixo do threshold

**Tamanho:** S  
**Prioridade:** P2 - Desejável  
**Sprint:** 5

---

## EPIC-008: Experiência do Desenvolvedor

**Descrição:** Garantir excelente experiência para desenvolvedores que usam o repositório.

**Valor de Negócio:** Facilita adoção e estudo, aumentando impacto educacional.

**Requisitos Relacionados:** FR21, NFR1-NFR5

### Histórias

---

#### US-037: README Principal com Navegação

**Como** desenvolvedor estudante,  
**Quero** README principal com índice de patterns,  
**Para que** eu navegue rapidamente para o pattern desejado.

**Critérios de Aceitação:**

- [ ] Introdução explicando propósito do projeto
- [ ] Tabela de patterns com status e links
- [ ] Categorização por tipo (Creational, Structural, Behavioral)
- [ ] Quick start para setup
- [ ] Badges de CI e cobertura

**Tamanho:** M  
**Prioridade:** P1 - Importante  
**Sprint:** 6

---

#### US-038: Mensagens de Erro Claras

**Como** desenvolvedor estudante,  
**Quero** mensagens de erro descritivas,  
**Para que** eu saiba como corrigir problemas.

**Critérios de Aceitação:**

- [ ] TypeScript strict captura erros de tipo
- [ ] Scripts npm com mensagens de erro claras
- [ ] CLI de criação com validação e sugestões
- [ ] README troubleshooting para problemas comuns

**Tamanho:** S  
**Prioridade:** P2 - Desejável  
**Sprint:** 6

---

## Matriz de Priorização

### P0 - Crítico (MVP Blocker)

| ID     | Título                                  | Sprint | Status |
| ------ | --------------------------------------- | ------ | ------ |
| US-001 | Setup Inicial do Monorepo               | 1      | ✅     |
| US-002 | Configuração de Vitest Global           | 1      | ✅     |
| US-003 | Estrutura de Diretórios Padrão          | 1      | ✅     |
| US-004 | Geração de Estrutura de Diretórios      | 1      | ✅     |
| US-005 | Geração de Arquivos Boilerplate         | 1      | ✅     |
| US-007 | Template README com Seções Obrigatórias | 1      | ✅     |
| US-022 | Strategy Pattern                        | 1      | ✅     |

### P1 - Importante (Core Value)

| ID     | Título                         | Sprint      | Status |
| ------ | ------------------------------ | ----------- | ------ |
| US-006 | Validação e Mensagens da CLI   | 2           | ✅     |
| US-008 | Seção "Quando Usar"            | Por pattern | ⚪     |
| US-009 | Seção "Quando NÃO Usar"        | Por pattern | ⚪     |
| US-010 | Singleton Pattern              | 2           | ⚪     |
| US-011 | Factory Method Pattern         | 2           | ⚪     |
| US-023 | Observer Pattern               | 2           | ⚪     |
| US-012 | Abstract Factory Pattern       | 3           | ⚪     |
| US-013 | Builder Pattern                | 3           | ⚪     |
| US-014 | Prototype Pattern              | 3           | ⚪     |
| US-015 | Adapter Pattern                | 4           | ⚪     |
| US-016 | Facade Pattern                 | 4           | ⚪     |
| US-017 | Decorator Pattern              | 4           | ⚪     |
| US-033 | Configuração de ESLint         | 2           | ⚪     |
| US-034 | Configuração de Prettier       | 2           | ⚪     |
| US-037 | README Principal com Navegação | 6           | ⚪     |

### P2 - Desejável (Enhanced Value)

| ID     | Título                           | Sprint |
| ------ | -------------------------------- | ------ |
| US-018 | Composite Pattern                | 5      |
| US-019 | Proxy Pattern                    | 5      |
| US-020 | Bridge Pattern                   | 6      |
| US-021 | Flyweight Pattern                | 6      |
| US-024 | Command Pattern                  | 7      |
| US-025 | State Pattern                    | 7      |
| US-026 | Template Method Pattern          | 7      |
| US-035 | GitHub Actions CI Pipeline       | 5      |
| US-036 | Relatório de Cobertura de Testes | 5      |
| US-038 | Mensagens de Erro Claras         | 6      |

### P3 - Futuro (Complete Vision)

| ID     | Título                  | Sprint |
| ------ | ----------------------- | ------ |
| US-027 | Chain of Responsibility | 8      |
| US-028 | Mediator Pattern        | 8      |
| US-029 | Iterator Pattern        | 8      |
| US-030 | Memento Pattern         | 9      |
| US-031 | Visitor Pattern         | 9      |
| US-032 | Interpreter Pattern     | 9      |

---

## Roadmap Visual

```
Sprint 1 ─────────────────────────────────────────────
│ [EPIC-001] Infraestrutura base ✅
│ [EPIC-002] CLI básica ✅
│ [EPIC-003] Template definido ✅
│ [US-022] Strategy ✅
│

Sprint 2 ─────────────────────────────────────────────
│ [US-010] Singleton
│ [US-011] Factory Method
│ [US-023] Observer
│ [EPIC-007] ESLint + Prettier
│

Sprint 3 ─────────────────────────────────────────────
│ [US-012] Abstract Factory
│ [US-013] Builder
│ [US-014] Prototype
│

Sprint 4 ─────────────────────────────────────────────
│ [US-015] Adapter
│ [US-016] Facade
│ [US-017] Decorator
│

Sprint 5 ─────────────────────────────────────────────
│ [US-018] Composite
│ [US-019] Proxy
│ [US-035] GitHub Actions
│

Sprint 6 ─────────────────────────────────────────────
│ [US-020] Bridge
│ [US-021] Flyweight
│ [US-037] README Principal
│
└── MVP COMPLETO (12 patterns) ──────────────────────

Sprint 7+ ────────────────────────────────────────────
│ Patterns comportamentais restantes
│ Launch Ready (15 patterns)
│ Complete Vision (23 patterns)
```

---

## Definição de Pronto (Definition of Done)

Uma história é considerada **PRONTA** quando:

### Para Patterns

- [ ] Código TypeScript implementado em `src/pattern/`
- [ ] Exemplo executável em `src/client/index.ts`
- [ ] Testes em `test/pattern.spec.ts` com 90%+ cobertura
- [ ] README.md com TODAS as seções do template preenchidas
- [ ] `npm start` executa sem erros
- [ ] `npm test` passa sem erros
- [ ] Zero erros de TypeScript (strict mode)
- [ ] Code review aprovado (quando aplicável)

### Para Infraestrutura

- [ ] Funcionalidade implementada e testada
- [ ] Documentação atualizada
- [ ] Sem regressões em features existentes

---

## Changelog

| Data       | Versão | Descrição                                               |
| ---------- | ------ | ------------------------------------------------------- |
| 2025-12-10 | 1.0.0  | Criação inicial dos épicos e histórias                  |
| 2025-12-10 | 1.1.0  | Mapeamento de status baseado no estado atual do projeto |

---

_Documento gerado pelo PM BMAD baseado no PRD aprovado._
