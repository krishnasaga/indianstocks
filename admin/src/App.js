import logo from './logo.svg';
import './App.css';
import { Admin, Resource } from 'react-admin';
import { restClient } from 'ra-data-feathers';
import { List, Datagrid, TextField, DateField, BooleanField,Create,SimpleForm,TextInput,ArrayInput,SimpleFormIterator,Edit } from 'react-admin';
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
      <Resource name={'sector'} list={SectorsList} create={SectorsCreate} edit={SectorsEdit}/>
    </Admin>
  );
}


function SectorsList(props){
  return <List {...props}>
    <Datagrid>
      <TextField source="_id" />
      <TextField source="name" />
      <TextField source="displayName" />
      <TextField source="intro" />
    </Datagrid>
  </List>;
}

export const SectorsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="displayName" />
      <TextInput source="intro" />
      <TextInput source="intro" />
      <ArrayInput source="insights">
        <SimpleFormIterator>
          <TextInput source="naem" />
          <TextInput source="number" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);


export const SectorsEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>      <TextInput source="_id" />

      <TextInput source="name" />
      <TextInput source="displayName" />
      <TextInput source="intro" />
      <TextInput source="intro" />
      <ArrayInput source="insights">
        <SimpleFormIterator>
          <TextInput source="naem" />
          <TextInput source="number" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default App;
