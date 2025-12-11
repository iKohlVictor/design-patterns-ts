# Strategy Pattern

## 🎯 Objetivo

O **Strategy Pattern** define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis. O padrão permite que o algoritmo varie independentemente dos clientes que o utilizam.

É um dos padrões comportamentais mais utilizados e fundamentais para escrever código flexível e aderente ao princípio Open/Closed (OCP) do SOLID.

---

## 🤔 Problema / Motivação

### Cenário Real

Imagine um sistema de e-commerce que precisa calcular custos de frete. Existem várias modalidades:

- **Express**: Entrega em 1-2 dias, mais caro
- **Standard**: Entrega em 3-5 dias, preço médio
- **Economy**: Entrega em 7-10 dias, mais barato
- **Retirada na Loja**: Grátis, cliente busca

### Sem o Padrão Strategy

```typescript
class ShippingCalculator {
  calculateCost(type: string, weight: number, distance: number): number {
    if (type === "express") {
      return 15 + weight * 3.5 + distance * 0.08;
    } else if (type === "standard") {
      return 8 + weight * 1.5 + distance * 0.03;
    } else if (type === "economy") {
      return 4 + weight * 0.8 + distance * 0.01;
    } else if (type === "pickup") {
      return 0;
    }
    throw new Error("Unknown shipping type");
  }
}
```

### Problemas desta abordagem

1. **Violação do OCP**: Adicionar nova modalidade requer modificar a classe
2. **Classe inchada**: Múltiplas responsabilidades em um só lugar
3. **Difícil de testar**: Precisa testar todos os branches
4. **Código frágil**: Alteração em uma modalidade pode quebrar outras
5. **Sem polimorfismo**: Não aproveita orientação a objetos

---

## 💡 Solução do Padrão

O Strategy Pattern resolve isso extraindo cada algoritmo para sua própria classe:

```
┌─────────────────────────────────────────────────────────────┐
│                        Client                                │
│  (usa o Context sem conhecer a Strategy concreta)           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    ShippingCalculator                        │
│                       (Context)                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ - strategy: ShippingStrategy                        │    │
│  │ + setStrategy(strategy)                             │    │
│  │ + calculateQuote(weight, distance)                  │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   «interface»                                │
│                 ShippingStrategy                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ + calculateCost(weight, distance): number           │    │
│  │ + estimateDeliveryDays(distance): number            │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
           ▲              ▲              ▲              ▲
           │              │              │              │
     ┌─────┴─────┐  ┌─────┴─────┐  ┌─────┴─────┐  ┌─────┴─────┐
     │  Express  │  │ Standard  │  │  Economy  │  │  Pickup   │
     │ Shipping  │  │ Shipping  │  │ Shipping  │  │           │
     └───────────┘  └───────────┘  └───────────┘  └───────────┘
```

### Benefícios

1. **Open/Closed**: Adicionar nova modalidade = criar nova classe
2. **Single Responsibility**: Cada strategy faz uma coisa
3. **Fácil de testar**: Cada strategy é testada isoladamente
4. **Intercambiável**: Troca de algoritmo em runtime
5. **Polimórfico**: Código cliente trabalha com abstrações

---

## 🏗 Estrutura

```
strategy/
├─ src/
│  ├─ pattern/
│  │  ├─ index.ts                    # Interface ShippingStrategy
│  │  ├─ shipping-calculator.ts      # Context
│  │  └─ strategies/
│  │     ├─ index.ts                 # Re-exports
│  │     ├─ express-shipping.ts      # Concrete Strategy
│  │     ├─ standard-shipping.ts     # Concrete Strategy
│  │     ├─ economy-shipping.ts      # Concrete Strategy
│  │     └─ store-pickup.ts          # Concrete Strategy
│  ├─ domain/
│  │  ├─ index.ts
│  │  ├─ address.ts                  # Domain entity
│  │  └─ order.ts                    # Domain entity
│  └─ client/
│     └─ index.ts                    # Usage example
└─ test/
   └─ pattern.spec.ts                # Comprehensive tests
```

---

## 🧩 Componentes

### Strategy (Interface)

Define o contrato que todas as estratégias devem seguir:

```typescript
export interface ShippingStrategy {
  readonly name: string;
  readonly description: string;
  calculateCost(weightKg: number, distanceKm: number): number;
  estimateDeliveryDays(distanceKm: number): number;
}
```

### Concrete Strategies

Implementações específicas de cada algoritmo:

- **ExpressShipping**: Mais rápido, mais caro
- **StandardShipping**: Equilíbrio custo/tempo
- **EconomyShipping**: Mais barato, mais lento
- **StorePickup**: Grátis, cliente retira

### Context (ShippingCalculator)

Mantém referência para uma Strategy e delega a execução:

```typescript
class ShippingCalculator {
  private strategy: ShippingStrategy;

  setStrategy(strategy: ShippingStrategy): void {
    this.strategy = strategy;
  }

  calculateQuote(weight: number, distance: number): ShippingQuote {
    return {
      cost: this.strategy.calculateCost(weight, distance),
      estimatedDays: this.strategy.estimateDeliveryDays(distance),
      // ...
    };
  }
}
```

---

## 💻 Como Executar

```bash
# Na raiz do projeto
cd patterns/strategy

# Instalar dependências
npm install

# Executar exemplo
npm start

# Rodar testes
npm test

# Testes com watch mode
npm run test:watch
```

### Saída esperada do exemplo:

```
🎨 Strategy Pattern - Shipping Calculator Example
============================================================

📦 Order Details
------------------------------------------------------------
Total Weight: 1.15 kg
Distance: 500 km
From: São Paulo, SP
To: Rio de Janeiro, RJ

🚚 Available Shipping Options
------------------------------------------------------------

1. Express Delivery (1-2 business days)
   Cost: $59.03
   Delivery: 2 business day(s)

2. Standard Delivery (3-5 business days)
   Cost: $24.73
   Delivery: 4 business day(s)

3. Economy Delivery (7-10 business days)
   Cost: $9.92
   Delivery: 8 business day(s)

4. Store Pickup (same day if ordered before 2pm)
   Cost: $0.00
   Delivery: 1 business day(s)
```

---

## 🧪 Testes

Os testes cobrem:

- [x] Contrato da interface (todas strategies implementam corretamente)
- [x] Cálculo de custos de cada strategy
- [x] Estimativa de dias de cada strategy
- [x] Troca de strategy em runtime
- [x] Comparação entre strategies
- [x] Validação de inputs (peso, distância)
- [x] Estrutura do quote retornado

### Executar com cobertura:

```bash
npm run test:coverage
```

---

## 📚 Quando Usar

✅ **Use Strategy quando:**

1. **Você tem múltiplas variantes de um algoritmo**
   - Diferentes formas de calcular frete, impostos, descontos
   - Múltiplos formatos de exportação (PDF, CSV, JSON)
   - Várias estratégias de cache ou compressão

2. **O comportamento precisa mudar em runtime**
   - Usuário seleciona opção de entrega
   - Sistema alterna entre modos (debug, production)
   - Feature flags que alteram comportamento

3. **Você quer evitar condicionais gigantes**
   - Substituir switch/case ou if/else extensos
   - Cada branch vira uma classe própria

4. **Diferentes clientes precisam de algoritmos diferentes**
   - Planos de assinatura com regras distintas
   - Regiões geográficas com cálculos específicos

5. **Você precisa isolar código de negócio complexo**
   - Algoritmos que mudam frequentemente
   - Lógica que precisa de testes independentes

---

## ⚠️ Quando NÃO Usar

❌ **Evite Strategy quando:**

1. **Você tem apenas 2-3 algoritmos simples que raramente mudam**
   - Um simples `if/else` pode ser suficiente
   - Over-engineering para casos triviais

2. **Os algoritmos compartilham muito código**
   - Considere Template Method em vez disso
   - Ou extraia código comum para classe base

3. **O cliente precisa conhecer as diferenças entre strategies**
   - Strategy funciona melhor quando cliente é agnóstico
   - Se cliente precisa tomar decisões baseadas na strategy, o encapsulamento quebra

4. **Performance é crítica e você não pode ter indireção**
   - Cada chamada passa pelo Context
   - Em loops muito apertados, pode ter overhead

5. **Você só precisa de configuração, não de comportamento**
   - Se a diferença é apenas valores (não lógica)
   - Use configuração ou enums em vez de classes

### Anti-patterns comuns

```typescript
// ❌ Strategy que não faz nada diferente
class Strategy1 implements Strategy {
  execute() { return this.config.value; }
}
class Strategy2 implements Strategy {
  execute() { return this.config.value; } // Mesma lógica!
}

// ❌ Context que expõe a strategy
class Context {
  getStrategy() { return this.strategy; } // Cliente não deveria precisar disso
}

// ❌ Strategy com estado mutável
class BadStrategy implements Strategy {
  private count = 0; // Strategies devem ser stateless idealmente
  execute() { this.count++; }
}
```

---

## 🔗 Relação com Outros Padrões

### Strategy vs State

| Aspecto | Strategy | State |
|---------|----------|-------|
| **Intenção** | Algoritmos intercambiáveis | Comportamento baseado em estado |
| **Quem muda** | Cliente define a strategy | Estado muda sozinho |
| **Conhecimento** | Strategies não se conhecem | States conhecem próximo state |
| **Quando usar** | Escolha explícita | Máquina de estados |

### Strategy vs Template Method

| Aspecto | Strategy | Template Method |
|---------|----------|-----------------|
| **Composição** | Usa composição (has-a) | Usa herança (is-a) |
| **Flexibilidade** | Troca em runtime | Definido em compile time |
| **Granularidade** | Algoritmo inteiro | Passos do algoritmo |

### Combinações comuns

- **Strategy + Factory**: Factory cria a strategy apropriada
- **Strategy + Decorator**: Decorators adicionam comportamento às strategies
- **Strategy + Context Object**: Passa contexto para a strategy

---

## 📖 Referências

- [Design Patterns - GoF](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612) - Capítulo sobre Strategy
- [Refactoring Guru - Strategy](https://refactoring.guru/design-patterns/strategy)
- [Head First Design Patterns](https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124) - Capítulo 1 (SimUDuck)
- [Replace Conditional with Polymorphism](https://refactoring.com/catalog/replaceConditionalWithPolymorphism.html) - Martin Fowler

---

## 💭 Reflexão Pessoal

O Strategy é frequentemente o primeiro padrão que desenvolvedores aprendem a aplicar naturalmente, mesmo sem saber o nome. Toda vez que você cria uma interface e múltiplas implementações para resolver variações de um problema, você está usando Strategy.

**Insights importantes:**

1. **Strategy é sobre "has-a", não "is-a"**: O contexto TEM uma strategy, não É uma strategy. Isso permite trocar comportamento sem herança.

2. **Stateless é melhor**: Strategies idealmente não guardam estado. Se precisam de dados, recebem como parâmetro. Isso permite reutilização e evita bugs sutis.

3. **Nomeação importa**: Nomes como `calculateShipping()` são genéricos demais. Prefira nomes que expressem a variação: `ExpressShipping`, `EconomyShipping`.

4. **Não exagere**: Se você tem 2 variantes e elas nunca mudam, um `if/else` é mais simples. Strategy brilha quando há 3+ variantes ou mudanças frequentes.

5. **Combine com Factory**: Em vez do cliente instanciar strategies diretamente, use uma factory. Isso centraliza a lógica de escolha e facilita testes.

```typescript
// ✅ Melhor
const strategy = ShippingStrategyFactory.create(userPreference);

// ❌ Pior - cliente conhece todas as implementações
const strategy = userPreference === "fast" 
  ? new ExpressShipping() 
  : new StandardShipping();
```
