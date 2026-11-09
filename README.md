# Rede Neural com TensorFlow.js

Este repositório contém um exemplo simples de classificação usando `@tensorflow/tfjs` em Node.js. O objetivo é demonstrar como treinar um modelo denso (MLP) para classificar perfis em três categorias (`premium`, `medium`, `basic`) e como gerar previsões.

<img width="1918" height="1017" alt="image" src="https://github.com/user-attachments/assets/d71431f0-5477-40a7-b3b2-8e918e024c1c" />


**Descrição**: Este projeto treina um modelo sequencial com uma camada oculta e uma camada de saída com `softmax`. Os dados de entrada são vetores normalizados que representam características de pessoas, e os rótulos são vetores one-hot.

**Funcionalidades**:
- **Treinamento**: Treina um modelo simples com `model.fit()`.
- **Predição**: Gera probabilidades para cada classe e apresenta o resultado formatado.
- **Exemplo mínimo**: Arquivo principal `index.js` com todo o fluxo.

**Pré-requisitos**:
- Node.js (recomenda-se versão LTS atual)
- `npm`

**Instalação**:

```bash
npm install
```

**Como rodar**:

```bash
node index.js
```

Isso irá treinar o modelo (com logs de loss por epoch) e imprimir as probabilidades ordenadas. Por exemplo:

- `premium: 79.94%`
- `medium: 12.91%`
- `basic: 7.16%`

**Estrutura principal**:
- **`index.js`**: Script principal que prepara dados, treina o modelo e executa previsões.

**Notas sobre o código**:
- O modelo usa `inputShape: [7]` e `units: 80` na camada oculta (ReLU), e `units: 3` com `softmax` na saída.
- As labels estão em ordem: `['premium', 'medium', 'basic']` — mantenha essa ordem ao interpretar as probabilidades.

**Contribuições**:
- Sinta-se à vontade para abrir issues ou pull requests com melhorias, exemplos de normalização, mais dados de treino ou integração com pipelines reais.



## Reprodutibilidade e limites

Use `npm ci` para instalar as versões do `package-lock.json` e `node index.js` para executar uma vez. `npm start` inicia o modo de observação. O script `npm test` ainda é um placeholder e não representa uma suíte de testes.

O treinamento usa apenas três exemplos sintéticos. Este projeto demonstra o fluxo de uma rede neural; as probabilidades variam entre execuções e não medem precisão em dados reais.
