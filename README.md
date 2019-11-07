# mongotest
sample node app for a mongo issue

replica set with readPreference=nearest and cursor with setReadPreference('primary') doesn't seem to work.

Running this script against a replica set will return error code: 13435, codeName: 'NotMasterNoSlaveOk'.
  
This is flagged as a retryable error on the Mongo server, and the node driver does have it categorized as such, but my suspicion is the node driver's topology isn't properly allowing the use of the primary mongoDB with the 'nearest' read preference.

The mongo shell client does properly make it's queries, and I beleve it is getting the same error back, but handling it and running a retry on the primary server.
