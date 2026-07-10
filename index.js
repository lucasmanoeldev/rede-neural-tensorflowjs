import tf from '@tensorflow/tfjs';

async function trainModel(inputXs, outputYs) {
    const model = tf.sequential();

    model.add(tf.layers.dense({ inputShape: [7], units: 80, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 3, activation: 'softmax' }));

    model.compile({
        optimizer: 'adam',
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
    });

    await model.fit(inputXs, outputYs, {
        verbose: 0,
        epochs: 100,
        shuffle: true,
        callbacks: {
            onEpochEnd: (epoch, logs) => {
                console.log(`Epoch ${epoch}: loss = ${logs.loss}`);
            }
        }
    });

    return model;
};

async function predict(model, pessoa){
    const tfinput = tf.tensor2d(pessoa);
    const pred = model.predict(tfinput);
    const predArray = await pred.array();
    return predArray[0].map((value, index) => ({ value, index}));
}
const tensorPessoasNormalizado = [
    [0.33, 1, 0, 0, 1, 0, 0], // Erick
    [0, 0, 1, 0, 0, 1, 0],    // Ana
    [1, 0, 0, 1, 0, 0, 1]     // Carlos
];

const labelsNomes = ['premium', 'medium', 'basic']; // Ordem dos labels
const tensorLabels = [
    [1, 0, 0], // premium - Erick
    [0, 1, 0], // medium - Ana
    [0, 0, 1]  // basic - Carlos
];

const inputXs = tf.tensor2d(tensorPessoasNormalizado);
const outputYs = tf.tensor2d(tensorLabels);

const model = await trainModel(inputXs, outputYs);


const pessoa = { nome: 'Erick', idade: 28, cor:'verde', localizaçao:'Coritiba' };

const pessoaNormalizada = [
    [
        0.2,
        0,
        0,
        1,
        0,
        0,
        1
    ]
];

const prediction = await predict(model, pessoaNormalizada);
const results = prediction
    .sort((a,b) => (b.value - a.value))
    .map(p => `${labelsNomes[p.index]}: ${(p.value * 100).toFixed(2)}%`)
    .join('\n');

console.log(results);