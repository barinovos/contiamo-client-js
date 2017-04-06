import assert from 'assert';
import Contiamo from '../src/index';

// Client with authenticated access
let contiamoClient = Contiamo.resources.client('TOKEN_HERE');

// Instantiate project
let project = contiamoClient.project.build('PROJECT_ID_HERE');
// console.log('Project fetch: ');
// project.fetch().then((p) => console.log(p));
//
// console.log('Project modify');
// project.modify({ name: 'Test' });
//
// // Get apps
// console.log('Apps list: ');
// let apps = project.app.list()
// apps.then((a) => console.log(a));

console.log('Dimension value retrieval: ');
let dimensionValues = project.app.build('APP_ID_HERE')
  .dimension.build('contract_journeys_matched-matched')
  .values({"metric":"APP_ID_HERE:contract_journeys_count","start_date":"2016-04","end_date":"2017-03","filter":"","sort":"asc"});

dimensionValues.then((v) => console.log(v));

// Get dashboards
// console.log('Dashboards list: ');
// let dashboards = project.dashboard.list();
// dashboards.then((d) => console.log(d));
//
// console.log('Dashbord retrieve');
// let dashboard = project.dashboard.retrieve(2397);
// dashboard.then((d) => console.log(d));
//
// console.log('Dashboard create');
// let newDashboard = project.dashboard.create({ name: 'My Dashboard' });
// newDashboard.then((d) => console.log(d));

// @TODO
// // Get widgets
// let widgets = dashboard.widget.list({ instantiate: true })
// console.log(widgets);
//
// // Execute SQL query
// let result = project.query.sql(666571902, 'select * from contract_contract limit 1;');
// console.log(result);
//
// // Execute published query
// let queryId = 'query:olap:48590558:34368:' + queryToken
// console.log(Contiamo.public.query(queryId));
//
// // Use data client
// let contractId = 'contract:48590558:666571902:experimental'
// let dataClient = Contiamo.data.client(contractId, contractToken);
// let data = [['Germany', 222], ['France', 211]];
// dataClient.purge();
// dataClient.discover(data);
// dataClient.upload(data);
