# Design Pattern

Implementação em TypeScript.

---

## 1. 🎯 Objetivo

A ideia desse projeto é aprofundar, entender e implementar todos os padrões de projetos, utilizando typescript, como forma de estudo.

---

## 2. 🤔 Problema / Motivação

A principal motivação é estudar e entender todos os padrões de projetos existentes.

---

## 3. 💡 Solução do Padrão

A ideia central desse projeto é aprofundar nos conhecimentos de padrões de projetos.

---

## 4. 🏗 Estrutura

```
design-patterns-typescript/
├─ package.json              # raiz com workspaces
├─ tsconfig.base.json        # config base opcional
├─ README.md                 # visão geral do projeto
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
   │  │  │  └─ ExpressShipping.ts
   │  │  └─ client/
   │  │     └─ index.ts
   │  └─ test/
   │     └─ pattern.spec.ts
   └─ (depois você adiciona: observer/, factory-method/, etc.)
```

---

## 5. 🧩 Implementação (TypeScript)

A ideia da estrutura é centralizar todos os padrões de dentro de um monorepo onde posso criar uma pasta para cada padrão, considerar como sendo um projeto único. Mas também consigo rodar todos de uma única vez.

---

## 6. 💻 Exemplo de Uso

```ts
    nvm use 24.8.0
    npm install
    npm start
```

---

## 7. 🧪 Testes

```ts
    npm test
```

---

## 8. 🔗 Referências
