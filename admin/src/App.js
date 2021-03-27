import logo from './logo.svg';
import './App.css';
import { Admin, Resource } from 'react-admin';
import { restClient } from 'ra-data-feathers';
import { List, Datagrid, TextField, DateField, BooleanField,Create,SimpleForm,TextInput } from 'react-admin';
import fetch from 'isomorphic-fetch';

const rest = require('@feathersjs/rest-client');
const feathers = require('@feathersjs/feathers');

const feathersClient = rest('http://localhost:3030')

// Configure an AJAX library (see below) with that client
const app = feathers();
app.configure(feathersClient.fetch(fetch));


function App() {
  return (
    <Admin className="App" dataProvider={restClient(app, {
      id: '_id', // If your database uses an id field other than 'id'. Optional.
    })}>
      <Resource name={'sector'} list={SectorsList} create={SectorsCreate}/>
    </Admin>
  );
}


function SectorsList(props){
  return <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="displayName" />
    </Datagrid>
  </List>;
}

export const SectorsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="displayName" />
      <TextInput source="intro" />
    </SimpleForm>
  </Create>
);
export default App;
