#!/usr/bin/env ts-node

import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

/**
 * Converts any string format to kebab-case
 * Handles: PascalCase, camelCase, snake_case, spaces, mixed formats
 */
function toKebabCase(input: string): string {
  return input
    // Insert hyphen before uppercase letters (for PascalCase/camelCase)
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    // Insert hyphen between letters and numbers
    .replace(/([a-zA-Z])(\d)/g, "$1-$2")
    .replace(/(\d)([a-zA-Z])/g, "$1-$2")
    // Replace underscores and spaces with hyphens
    .replace(/[_\s]+/g, "-")
    // Remove any characters that aren't letters, numbers, or hyphens
    .replace(/[^a-zA-Z0-9-]/g, "")
    // Convert to lowercase
    .toLowerCase()
    // Remove consecutive hyphens
    .replace(/-+/g, "-")
    // Remove leading/trailing hyphens
    .replace(/^-|-$/g, "");
}

/**
 * Converts kebab-case to PascalCase
 */
function toPascalCase(kebab: string): string {
  return kebab
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

/**
 * Validates if input is already valid kebab-case
 */
function isValidKebabCase(input: string): boolean {
  return /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(input);
}

/**
 * Checks for invalid characters in input
 */
function hasInvalidCharacters(input: string): boolean {
  return /[^a-zA-Z0-9_\s-]/.test(input);
}

// Main execution
const patternName = process.argv[2];

if (!patternName) {
  console.error("❌ Error: Pattern name is required!");
  console.log("\nUsage: npm run create:pattern <pattern-name>");
  console.log("\nExamples:");
  console.log("  npm run create:pattern strategy");
  console.log("  npm run create:pattern factory-method");
  console.log("  npm run create:pattern abstract-factory");
  console.log("\nAccepted formats (auto-converted to kebab-case):");
  console.log("  • kebab-case:  factory-method");
  console.log("  • PascalCase:  FactoryMethod");
  console.log("  • camelCase:   factoryMethod");
  console.log("  • snake_case:  factory_method");
  console.log("  • With spaces: Factory Method");
  process.exit(1);
}

// Check for invalid characters
if (hasInvalidCharacters(patternName)) {
  console.error("❌ Error: Pattern name contains invalid characters!");
  console.log("\n   Only letters, numbers, hyphens, underscores, and spaces are allowed.");
  const suggestion = toKebabCase(patternName);
  if (suggestion) {
    console.log(`\n💡 Suggestion: Try "${suggestion}" instead.`);
  }
  process.exit(1);
}

// Convert to kebab-case
const patternNameKebab = toKebabCase(patternName);

// Validate result
if (!patternNameKebab) {
  console.error("❌ Error: Could not convert pattern name to valid format!");
  console.log("\n   Pattern name must contain at least one letter.");
  process.exit(1);
}

// Show conversion if input wasn't already kebab-case
if (!isValidKebabCase(patternName)) {
  console.log(`🔄 Converting "${patternName}" → "${patternNameKebab}"\n`);
}

const patternNamePascal = toPascalCase(patternNameKebab);

const basePath = join(process.cwd(), "patterns", patternNameKebab);

if (existsSync(basePath)) {
  console.error(`❌ Error: Pattern "${patternNameKebab}" already exists!`);
  console.log(`\n   Directory: ./patterns/${patternNameKebab}/`);
  console.log("\n💡 Suggestions:");
  console.log(`   • Use a different name`);
  console.log(`   • Delete the existing pattern first if you want to recreate it`);
  process.exit(1);
}

console.log(`🏗️  Creating pattern: ${patternNameKebab}...\n`);

// Create directory structure
const dirs = [
  basePath,
  join(basePath, "src"),
  join(basePath, "src", "pattern"),
  join(basePath, "src", "domain"),
  join(basePath, "src", "client"),
  join(basePath, "test"),
];

dirs.forEach((dir) => {
  mkdirSync(dir, { recursive: true });
  console.log(`📁 Created: ${dir.replace(process.cwd(), ".")}`);
});

// package.json
const packageJson = {
  name: `@patterns/${patternNameKebab}`,
  version: "1.0.0",
  description: `Implementation of ${patternNamePascal} Design Pattern`,
  type: "module",
  main: "./dist/index.js",
  types: "./dist/index.d.ts",
  scripts: {
    start: "tsx src/client/index.ts",
    build: "tsc",
    test: "vitest run",
    "test:watch": "vitest",
  },
  devDependencies: {
    "@types/node": "^22.10.2",
    typescript: "^5.7.2",
    tsx: "^4.19.2",
    vitest: "^2.1.8",
  },
};

writeFileSync(
  join(basePath, "package.json"),
  JSON.stringify(packageJson, null, 2)
);
console.log(`📄 Created: ./patterns/${patternNameKebab}/package.json`);

// tsconfig.json
const tsconfig = {
  extends: "../../tsconfig.base.json",
  compilerOptions: {
    outDir: "./dist",
    rootDir: "./src",
  },
  include: ["src/**/*"],
  exclude: ["node_modules", "dist", "test"],
};

writeFileSync(
  join(basePath, "tsconfig.json"),
  JSON.stringify(tsconfig, null, 2)
);
console.log(`📄 Created: ./patterns/${patternNameKebab}/tsconfig.json`);

// README.md
const readme = `# ${patternNamePascal} Pattern

## 🎯 Objetivo

_(Descreva o objetivo do padrão)_

---

## 🤔 Problema / Motivação

_(Qual problema real o padrão resolve?)_

_(O que aconteceria se tentasse resolver sem o padrão?)_

---

## 💡 Solução do Padrão

_(Explique a ideia central do padrão)_

_(Como o padrão melhora o cenário descrito?)_

---

## 🏗 Estrutura

\`\`\`
${patternNameKebab}/
├─ src/
│  ├─ pattern/       # Interfaces e implementações do padrão
│  ├─ domain/        # Entidades de domínio
│  └─ client/        # Exemplos de uso
└─ test/             # Testes automatizados
\`\`\`

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

\`\`\`bash
# Instalar dependências
npm install

# Executar exemplo
npm start

# Rodar testes
npm test
\`\`\`

---

## 🧪 Testes

Os testes cobrem:
- [ ] Comportamento básico do padrão
- [ ] Variações e casos alternativos
- [ ] Casos extremos (edge cases)

---

## 📚 Quando Usar

_(Liste cenários onde o padrão é apropriado)_

---

## ⚠️ Quando NÃO Usar

_(Liste cenários onde o padrão não é recomendado)_

---

## 🔗 Relação com Outros Padrões

_(Compare e contraste com padrões similares)_

---

## 📖 Referências

- Design Patterns - GoF
- [Refactoring Guru - ${patternNamePascal}](https://refactoring.guru/design-patterns/${patternNameKebab})

---

## 💭 Reflexão Pessoal

_(Suas observações, aprendizados e insights sobre o padrão)_
`;

writeFileSync(join(basePath, "README.md"), readme);
console.log(`📄 Created: ./patterns/${patternNameKebab}/README.md`);

// src/pattern/index.ts (example interface)
const patternInterface = `/**
 * ${patternNamePascal} Pattern - Main Interface
 * 
 * Define the contract for ${patternNamePascal} implementations
 */
export interface I${patternNamePascal} {
  execute(): void;
}
`;

writeFileSync(join(basePath, "src", "pattern", "index.ts"), patternInterface);
console.log(`📄 Created: ./patterns/${patternNameKebab}/src/pattern/index.ts`);

// src/pattern/concrete-implementation.ts
const concreteImpl = `import { I${patternNamePascal} } from './index.js';

/**
 * Concrete implementation of ${patternNamePascal}
 */
export class Concrete${patternNamePascal} implements I${patternNamePascal} {
  execute(): void {
    console.log('Executing ${patternNamePascal} pattern...');
  }
}
`;

writeFileSync(
  join(basePath, "src", "pattern", `concrete-${patternNameKebab}.ts`),
  concreteImpl
);
console.log(
  `📄 Created: ./patterns/${patternNameKebab}/src/pattern/concrete-${patternNameKebab}.ts`
);

// src/domain/example.ts
const domainExample = `/**
 * Domain entity example
 */
export class Example {
  constructor(public readonly id: string, public readonly name: string) {}
}
`;

writeFileSync(join(basePath, "src", "domain", "example.ts"), domainExample);
console.log(`📄 Created: ./patterns/${patternNameKebab}/src/domain/example.ts`);

// src/client/index.ts
const clientExample = `import { Concrete${patternNamePascal} } from '../pattern/concrete-${patternNameKebab}.js';
import { Example } from '../domain/example.js';

/**
 * Client code demonstrating ${patternNamePascal} pattern usage
 */
function main() {
  console.log('\\n🎨 ${patternNamePascal} Pattern Example\\n');

  const example = new Example('1', 'Example Entity');
  console.log(\`Domain Entity: \${example.name}\`);

  const pattern = new Concrete${patternNamePascal}();
  pattern.execute();

  console.log('\\n✅ Pattern executed successfully!\\n');
}

main();
`;

writeFileSync(join(basePath, "src", "client", "index.ts"), clientExample);
console.log(`📄 Created: ./patterns/${patternNameKebab}/src/client/index.ts`);

// test/pattern.spec.ts
const testFile = `import { describe, it, expect } from 'vitest';
import { Concrete${patternNamePascal} } from '../src/pattern/concrete-${patternNameKebab}.js';

describe('${patternNamePascal} Pattern', () => {
  it('should execute the pattern correctly', () => {
    const pattern = new Concrete${patternNamePascal}();
    
    expect(() => pattern.execute()).not.toThrow();
  });

  it('should implement the I${patternNamePascal} interface', () => {
    const pattern = new Concrete${patternNamePascal}();
    
    expect(pattern).toHaveProperty('execute');
    expect(typeof pattern.execute).toBe('function');
  });
});
`;

writeFileSync(join(basePath, "test", "pattern.spec.ts"), testFile);
console.log(`📄 Created: ./patterns/${patternNameKebab}/test/pattern.spec.ts`);

console.log(`\n✅ Pattern "${patternNameKebab}" created successfully!\n`);
console.log("📋 Next steps:");
console.log(`   1. cd patterns/${patternNameKebab}`);
console.log("   2. npm install");
console.log("   3. npm start");
console.log("   4. npm test\n");
console.log(`📝 Edit the README.md to document your pattern implementation.\n`);
