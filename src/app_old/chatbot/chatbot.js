// import { NeuralNetwork } from 'brain.js';
import { getResponse, preparePrompt } from "./processing.js";

// import { model, options } from './chatbot-model.json';

let net;

export const getRandomMessageId = () => crypto.randomUUID();

const loadModel = async () => {
    try {
        if(!net) {
            net = new NeuralNetwork().fromJSON(model);
        }

        return { net };
    } catch(e) {
        console.error(e);

        const error = { status: 'failed', message: 'Could not load model', };

        return { error };
    }
};

export const generateResponse = async ({ prompt }) => {
    const { net, error } = await loadModel();

    if(error) {
        return error;
    }

    const output = net.run(preparePrompt(prompt, options));

    const response = getResponse(output, options);

    return { 
        status: 'success', 
        message: {
            id: getRandomMessageId(),
            sender: 'bot',
            response,
        } 
    };
};