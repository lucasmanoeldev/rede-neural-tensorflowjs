**Rede Neural com tensorflowjs**

Este repositório contém um exemplo simples de classificação usando `@tensorflow/tfjs` em Node.js. O objetivo é demonstrar como treinar um modelo denso (MLP) para classificar perfis em três categorias (`premium`, `medium`, `basic`) e como gerar previsões.

![Preview](assets/preview.png)

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

**Importante sobre a imagem**:
- A imagem exibida acima (`assets/preview.png`) é apenas uma pré-visualização do resultado/terminal. Para que ela apareça no README quando hospedado no GitHub, adicione o arquivo de imagem no caminho `assets/preview.png` no repositório antes de commitar.

Sugestão de nome e pasta:

- `assets/preview.png`

Se preferir um nome diferente, atualize o caminho da imagem neste arquivo.

**Notas sobre o código**:
- O modelo usa `inputShape: [7]` e `units: 80` na camada oculta (ReLU), e `units: 3` com `softmax` na saída.
- As labels estão em ordem: `['premium', 'medium', 'basic']` — mantenha essa ordem ao interpretar as probabilidades.

**Contribuições**:
- Sinta-se à vontade para abrir issues ou pull requests com melhorias, exemplos de normalização, mais dados de treino ou integração com pipelines reais.

**Como commitar e enviar**:

```bash
git add README.md assets/preview.png
git commit -m "Adiciona README e imagem de preview"
git push origin main
```

**Licença**: Coloque aqui a licença que desejar (ex: MIT) ou remova esta seção se não aplicável.

---

Se quiser, posso também adicionar o arquivo de imagem ao repositório (se você me enviar o arquivo) ou ajustar o texto em inglês/português formal/conciso — diga como prefere.
