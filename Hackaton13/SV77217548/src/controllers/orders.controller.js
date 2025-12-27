// Data en memoria.
const orders = [];
let nextId = 1;

const parsePositiveInt = (value, fallback) => {
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed <= 0){
        return fallback
    }
    return Math.floor(parsed);
};

const escapeCsv = (value) => {
    const text = String(value ?? '');
    if (text.includes(',') || text.includes('"') || text.includes('\n')){
        return `"${text.replace(/"/g, '""')}"`
    }
    return text;
};

exports.listOrders = async (req, res) => {
    const page = parsePositiveInt(req.query.page, 1);
    const limit = parsePositiveInt(req.query.limit, 10);
    const status = req.query.status;
    const customerId = req.query.customerId;
    const sort = req.query.sort === 'asc' ? 'asc' : 'desc';

    let filtered = orders.slice();
    if (status){
        filtered = filtered.filter((order) => order.status === status);
    }
    if (customerId){
        filtered = filtered.filter((order) => order.customerId === customerId);
    }

    filtered.sort((left, right) => {
        return sort === 'asc'
            ? left.createdAt - right.createdAt
            : right.createdAt - left.createdAt;
    });

    const total = filtered.length;
    const start = (page - 1) * limit;
    const data = filtered.slice(start, start + limit);

    res.json({page, limit, total, data});
};

exports.createOrder = async (req, res) => {
    const {items, customerId} = req.body;
    const order = {
        id: String(nextId),
        items,
        customerId,
        status: 'created',
        createdAt: Date.now()
    };
    nextId += 1;
    orders.push(order);
    res.status(201).json(order);
};

exports.exportOrders = async (req, res) => {
    // CSV streaming.
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=\"orders.csv\"');

    res.write('id,customerId,status,items,createdAt\n');
    orders.forEach((order) => {
        const row = [
            order.id,
            order.customerId,
            order.status,
            JSON.stringify(order.items),
            order.createdAt
        ]
            .map(escapeCsv)
            .join(',');
        res.write(`${row}\n`);
    });

    res.end();
};
