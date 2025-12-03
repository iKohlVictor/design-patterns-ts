# Strategy Pattern

## 🎯 Objetivo

O padrão Strategy tem como objetivo **encapsular algoritmos intercambiáveis** e permitir que o comportamento de um objeto seja alterado **em tempo de execução**, sem modificar seu código.

Ele ajuda a evitar estruturas rígidas cheias de `if/else` ou `switch`, separando cada regra em uma classe própria e mantendo o código mais:

- organizado
- flexível
- aberto para extensão (OCP)
- fácil de testar e evoluir

---

## 🤔 Problema / Motivação

Imagine um código que precisa calcular juros de diferentes formas: juros simples, juros compostos, juros anuais, etc.  
Embora todos sejam "cálculos de juros", cada um segue uma lógica diferente. Com o tempo, esse tipo de código normalmente evolui para grandes cadeias de `if/else` para decidir qual cálculo utilizar.

Outro exemplo seria o planejamento de rotas: carro, bicicleta, ônibus, metrô… cada meio de transporte exige uma lógica de cálculo diferente.  
Quando essas regras ficam dentro de uma única classe, o código se torna rígido, difícil de manter e violando princípios como o OCP.

O problema central é:  
**como variar o comportamento sem precisar modificar o código principal toda vez que surgir uma nova regra?**

---

## 💡 Solução do Padrão

O Strategy separa cada regra (ou algoritmo) em uma **classe independente**, todas seguindo uma mesma interface.  
Assim, ao invés de manter vários `if/else` dentro do código principal, você simplesmente **troca a estratégia** que está sendo utilizada.

O cliente (quem usa o contexto) escolhe qual estratégia aplicar — podendo inclusive alternar o comportamento em tempo de execução.

Isso deixa o código:

- mais organizado
- desacoplado
- aberto para extensão
- sem condicionais desnecessárias

---

## 🏗 Estrutura

```
strategy/
├─ src/
│  ├─ pattern/       # Interfaces e implementações do padrão
│  ├─ domain/        # Entidades de domínio
│  └─ client/        # Exemplos de uso
└─ test/             # Testes automatizados
```

---

## 🧩 Componentes

### Pattern

- **Interface Principal**: Define o contrato do padrão
- **Implementações Concretas**: Variações específicas

### Domain

- Entidades de negócio utilizadas nos exemplos

### Client

- Exemplos práticos de uso do padrão

---

## 💻 Como Executar

```bash
# Instalar dependências
npm install

# Executar exemplo
npm start

# Rodar testes
npm test
```

---

## 🧪 Testes

Os testes cobrem:

- [ ] Comportamento básico do padrão
- [ ] Variações e casos alternativos
- [ ] Casos extremos (edge cases)

---

## 📚 Quando Usar

- Quando precisar ligar com diferentes cenários com a mesma finalidade dentro de uma mesma class.
- Regras como cálculos de juros, rotas de transportes, criação de ambientes.

---

## ⚠️ Quando NÃO Usar

_(Liste cenários onde o padrão não é recomendado)_

---

## 🔗 Relação com Outros Padrões

_(Compare e contraste com padrões similares)_

---

## 📖 Referências

- Design Patterns - GoF
- [Refactoring Guru - Strategy](https://refactoring.guru/design-patterns/strategy)

---

## 💭 Reflexão Pessoal

_(Suas observações, aprendizados e insights sobre o padrão)_
