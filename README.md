# Design Pattern

Implementação em TypeScript.

---

## 1. 🎯 Objetivo

A ideia desse projeto é aprofundar, entender e implementar todos os padrões de projetos, utilizando typescript, como forma de estudo.

---

## 2. 🤔 Problema / Motivação

(Descreva qual problema real o padrão resolve.)
(O que aconteceria se tentasse resolver sem o padrão?)

---

## 3. 💡 Solução do Padrão

(Explique a ideia central do padrão.)
(Como o padrão melhora o cenário descrito?)

---

## 4. 🏗 Estrutura

design-patterns-typescript/
├─ package.json # raiz com workspaces
├─ tsconfig.base.json # config base opcional
├─ README.md # visão geral do projeto
└─ patterns/
├─ strategy/
│ ├─ package.json
│ ├─ tsconfig.json
│ ├─ README.md
│ ├─ src/
│ │ ├─ domain/
│ │ │ └─ Order.ts
│ │ ├─ pattern/
│ │ │ ├─ ShippingStrategy.ts
│ │ │ ├─ NormalShipping.ts
│ │ │ └─ ExpressShipping.ts
│ │ └─ client/
│ │ └─ index.ts
│ └─ test/
│ └─ pattern.spec.ts
└─ (depois você adiciona: observer/, factory-method/, etc.)
