const {sequelize} = require('./models');

async function syncDB(){
    const strategy = process.env.DB_SYNC || 'none';
    const options = {logging: false};
    if (strategy === 'alter') options.alter = true;
    if (strategy === 'force') options.force = true;

    console.log(`[sync] strategy=${strategy}`);
    await sequelize.sync(options);
    console.log('[sync] done');
}

module.exports = syncDB;

if (require.main === module){
    syncDB().catch((err) => {
        console.error(err);
        process.exit(1);
    });
}
