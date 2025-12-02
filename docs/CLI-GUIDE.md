# 🛠️ CLI Guide - Pattern Generator

## 📖 Sobre

Este projeto inclui um CLI automatizado para criar a estrutura completa de cada padrão de projeto (Design Pattern) seguindo as convenções estabelecidas.

---

## 🚀 Como Usar

### Criar um Novo Padrão

```bash
npm run create:pattern <nome-do-padrao>
```

### Exemplos

```bash
# Criar padrão Strategy
npm run create:pattern strategy

# Criar padrão Observer
npm run create:pattern observer

# Criar padrão Factory Method
npm run create:pattern factory-method

# Criar padrão Abstract Factory
npm run create:pattern abstract-factory
```

---

## 📁 Estrutura Gerada

O CLI cria automaticamente:

```
patterns/<nome-do-padrao>/
├─ package.json           # Configuração do workspace
├─ tsconfig.json          # Config TypeScript herdada
├─ README.md              # Documentação completa do padrão
├─ src/
│  ├─ pattern/
│  │  ├─ index.ts                      # Interface principal
│  │  └─ concrete-<nome>.ts            # Implementação concreta
│  ├─ domain/
│  │  └─ example.ts                    # Entidade de domínio
│  └─ client/
│     └─ index.ts                      # Exemplo de uso
└─ test/
   └─ pattern.spec.ts                  # Testes com Vitest
```

---

## 📝 Arquivos Criados

### 1. `package.json`

- Scripts prontos: `start`, `build`, `test`, `test:watch`
- Dependências configuradas: TypeScript, Vitest, tsx
- Nome do workspace: `@patterns/<nome-do-padrao>`

### 2. `tsconfig.json`

- Herda configurações base do monorepo
- Configurado para compilar `src/` para `dist/`

### 3. `README.md`

Template completo com seções:

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

### 4. Código de Exemplo

- Interface do padrão
- Implementação concreta básica
- Entidade de domínio
- Cliente demonstrando uso
- Testes unitários funcionais

---

## 🔧 Após Criar o Padrão

### 1. Instalar Dependências

```bash
cd patterns/<nome-do-padrao>
npm install
```

Ou na raiz (recomendado):

```bash
npm install
```

### 2. Executar o Exemplo

```bash
cd patterns/<nome-do-padrao>
npm start
```

### 3. Rodar os Testes

```bash
# Teste específico do padrão
cd patterns/<nome-do-padrao>
npm test

# Ou todos os testes do monorepo
npm test
```

### 4. Compilar TypeScript

```bash
cd patterns/<nome-do-padrao>
npm run build
```

---

## ✏️ Personalizando o Padrão

Após criar a estrutura base:

1. **Edite `README.md`**

   - Preencha todas as seções
   - Adicione diagramas (ASCII art, imagens, ou links)
   - Documente casos de uso reais

2. **Implemente o Padrão**

   - Substitua a interface genérica pela específica do padrão
   - Crie implementações concretas reais
   - Adicione entidades de domínio relevantes

3. **Crie Exemplos Práticos**

   - No arquivo `client/index.ts`
   - Use casos reais e práticos
   - Demonstre diferentes variações

4. **Escreva Testes Completos**
   - Cubra comportamento básico
   - Teste variações
   - Adicione casos extremos (edge cases)

---

## 🎯 Convenções de Nomenclatura

O CLI converte automaticamente o nome fornecido:

| Entrada            | Pasta               | Classe                    | Interface          |
| ------------------ | ------------------- | ------------------------- | ------------------ |
| `strategy`         | `strategy/`         | `ConcreteStrategy`        | `IStrategy`        |
| `factory method`   | `factory-method/`   | `ConcreteFactoryMethod`   | `IFactoryMethod`   |
| `Abstract Factory` | `abstract-factory/` | `ConcreteAbstractFactory` | `IAbstractFactory` |

**Regras:**

- **Pastas e arquivos**: `kebab-case`
- **Classes e Interfaces**: `PascalCase`
- **Funções e variáveis**: `camelCase`
- **Constantes**: `UPPER_SNAKE_CASE`

---

## 🧪 Executar Testes do Monorepo

```bash
# Todos os testes
npm test

# Watch mode
npm run test:watch

# Com cobertura
npm run test:coverage

# Interface visual
npm run test:ui
```

---

## 🔍 Verificar Tipos

```bash
npm run type-check
```

---

## 🧹 Limpar Build Artifacts

```bash
# Limpar tudo (incluindo node_modules)
npm run clean

# Limpar apenas patterns
npm run clean:patterns
```

---

## 💡 Dicas

1. **Use o monorepo**: Instale dependências da raiz com `npm install` para aproveitar os workspaces

2. **Commits incrementais**: Commit após implementar cada padrão

3. **Documentação primeiro**: Preencha o README antes de implementar (ajuda a entender o padrão)

4. **TDD**: Escreva testes antes da implementação

5. **Refactoring**: Use o exemplo gerado apenas como template inicial

---

## 🤖 Usando com Cursor AI

O projeto possui regras configuradas em `.cursorrules`. Você pode pedir:

- "Crie o padrão observer"
- "Implemente factory method"
- "Adicione o padrão singleton"

O Cursor AI seguirá automaticamente a estrutura definida.

---

## 📚 Padrões GoF (23 padrões)

### Criacionais (5)

- [ ] Singleton
- [ ] Factory Method
- [ ] Abstract Factory
- [ ] Builder
- [ ] Prototype

### Estruturais (7)

- [ ] Adapter
- [ ] Bridge
- [ ] Composite
- [ ] Decorator
- [ ] Facade
- [ ] Flyweight
- [ ] Proxy

### Comportamentais (11)

- [x] Strategy ✅
- [ ] Observer
- [ ] Command
- [ ] State
- [ ] Template Method
- [ ] Iterator
- [ ] Chain of Responsibility
- [ ] Mediator
- [ ] Memento
- [ ] Visitor
- [ ] Interpreter

---

## 🐛 Troubleshooting

### Erro: "Pattern already exists"

O padrão já foi criado. Use outro nome ou delete a pasta existente.

### Erro: "Pattern name is required"

Forneça o nome do padrão como argumento.

### Dependências não encontradas

Execute `npm install` na raiz do projeto.

### Erro ao executar `npm start`

Certifique-se de estar na pasta do padrão correto e que as dependências foram instaladas.

---

## 🔗 Referências

- [Design Patterns - GoF](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612)
- [Refactoring Guru](https://refactoring.guru/design-patterns)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)

---

**Happy coding! 🎨**
