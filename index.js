const MongoClient = require('mongodb').MongoClient;
const username=process.argv[2];
const password=process.argv[3];
const url = `mongodb://${username}:${password}@mongoprimary:27020,mongoprimary2:27020,mongoprimary3:27020/nibbl?authSource=admin&autoReconnect=true&replicaSet=nibbldbrs0&readPreference=nearest&useUnifiedTopology=true&maxStalenessSeconds=100`;
MongoClient.connect(url, {
	useNewUrlParser: true, // these are redundant but w/e
	useUnifiedTopology: true,
}, (err, mongoClient) => {
	if (err) {
		console.error('connection error: ', err);
		process.exit(0);
	} else {
		var dbo = mongoClient.db('nibbl');
		var collection = dbo.collection('sessioninfo');
		collection.find({}).limit(1).setReadPreference('primary').toArray((err, results) => {
			if(err) {
				console.error('database error: ', err);
				process.exit(0);
			}
			console.log(results);
			db.close();
		});
	}
});
