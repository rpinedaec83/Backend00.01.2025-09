const seen = new Map();

const cryptoRandom = () => {
    return Math.random().toString(36).slice(2);
};

// Respuesta idempotente basada en el header Idempotency-Key.
exports.createPayment = async (req, res) => {
    const key = req.headers['idempotency-key'];
    if (!key){
        return res.status(400).json({error: 'Idempotency-Key requerido'})
    }
    if (seen.has(key)){
        const cached = seen.get(key);
        return res.status(cached.status).json(cached.body);
    }
    const result = {paymentId: cryptoRandom(), status: 'ok'};
    const payload = {status: 201, body: result};
    seen.set(key, payload);
    res.status(payload.status).json(payload.body);
};
